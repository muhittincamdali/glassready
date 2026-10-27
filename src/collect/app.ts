// Everything the rules look at for one project: its iOS app targets with their Info.plist and
// build settings, and the app's own source files.
import { join } from 'node:path';
import { NOT_READ, readProjectFile, readProjectText } from '../core/files.js';
import { compareVersions } from '../core/versions.js';
import type { Project } from '../detect/project.js';
import {
  generatesInfoPlist,
  infoPlistFiles,
  iosAppTargets,
  readXcodeProject,
  setting,
  type XcodeProject,
  type XcodeTarget,
} from './pbxproj.js';
import { isDict, type PlistDict, parsePlist } from './plist.js';
import { type Language, readSources, type SourceFile, type SourceRoot } from './sources.js';

export interface InfoPlistFile {
  path: string;
  dict: PlistDict;
  keyLines: ReadonlyMap<string, number>;
}

/** A build setting found in project.pbxproj, with the line it is on. */
export interface BuildSettingValue {
  value: string;
  file: string;
  line: number | null;
}

export interface AppTarget {
  name: string;
  /** The .xcodeproj the target belongs to. */
  xcodeProject: string;
  infoPlists: InfoPlistFile[];
  /** Xcode generates (part of) the Info.plist: GENERATE_INFOPLIST_FILE = YES. */
  generatesInfoPlist: boolean;
  /** Whether an Info.plist was named but could not be read, so the opt-out is not known. */
  unreadInfoPlist: boolean;
  /** INFOPLIST_KEY_UIDesignRequiresCompatibility, when a configuration sets it. */
  optOutSetting: BuildSettingValue | null;
  deploymentTarget: string | null;
}

export interface AppModel {
  project: Project;
  targets: AppTarget[];
  sources: SourceFile[];
  /** The newest LastUpgradeCheck of the project's .xcodeproj files. */
  lastUpgradeCheck: string | null;
  /** Problems reading the project that the report should mention. */
  notes: string[];
}

export const OPT_OUT_KEY = 'UIDesignRequiresCompatibility';
export const OPT_OUT_SETTING = `INFOPLIST_KEY_${OPT_OUT_KEY}`;

/**
 * Reads the Info.plist a target names. INFOPLIST_FILE comes from the checked project, so a path
 * that leads outside the project folder is not read, and neither is anything but a regular file.
 */
async function readInfoPlist(
  path: string,
  projectRoot: string,
  notes: string[],
): Promise<InfoPlistFile | null> {
  const file = await readProjectFile(path, projectRoot);
  if (!file.found) {
    notes.push(`${path} is named in INFOPLIST_FILE but ${NOT_READ[file.reason]}`);
    return null;
  }
  try {
    const { value, keyLines } = parsePlist(file.bytes);
    if (!isDict(value)) throw new Error('the top level is not a dictionary');
    return { path, dict: value, keyLines };
  } catch (error) {
    notes.push(`${path} could not be read as a property list: ${(error as Error).message}`);
    return null;
  }
}

function lineOf(text: string | null, needle: string): number | null {
  if (text === null) return null;
  const index = text.indexOf(needle);
  return index === -1 ? null : text.slice(0, index).split('\n').length;
}

function lowestDeploymentTarget(target: XcodeTarget): string | null {
  const versions = Object.values(target.configurations)
    .map((settings) => setting(settings, 'IPHONEOS_DEPLOYMENT_TARGET'))
    .filter((value): value is string => value !== undefined && /^\d+(\.\d+)*$/.test(value));
  return versions.sort(compareVersions)[0] ?? null;
}

async function readTarget(
  xcode: XcodeProject,
  target: XcodeTarget,
  projectRoot: string,
  pbxprojText: string | null,
  notes: string[],
): Promise<AppTarget> {
  const { files, unresolved } = infoPlistFiles(xcode, target);
  for (const raw of unresolved) {
    notes.push(
      `${target.name}: INFOPLIST_FILE ${raw} uses a build setting glassready does not expand.`,
    );
  }
  const infoPlists: InfoPlistFile[] = [];
  for (const file of files) {
    const plist = await readInfoPlist(file, projectRoot, notes);
    if (plist) infoPlists.push(plist);
  }
  const generates = generatesInfoPlist(target);
  if (files.length + unresolved.length === 0 && !generates) {
    notes.push(
      `${target.name}: the Xcode project sets neither INFOPLIST_FILE nor GENERATE_INFOPLIST_FILE = YES; they may be set in an .xcconfig file, which glassready does not read.`,
    );
  }
  const values = Object.values(target.configurations)
    .map((settings) => setting(settings, OPT_OUT_SETTING))
    .filter((value): value is string => value !== undefined);
  const value = values.find((item) => item === 'YES') ?? values[0];
  const pbxproj = join(xcode.path, 'project.pbxproj');
  return {
    name: target.name,
    xcodeProject: xcode.path,
    infoPlists,
    generatesInfoPlist: generates,
    unreadInfoPlist: infoPlists.length < files.length + unresolved.length,
    optOutSetting:
      value === undefined
        ? null
        : { value, file: pbxproj, line: lineOf(pbxprojText, `${OPT_OUT_SETTING} = ${value}`) },
    deploymentTarget: lowestDeploymentTarget(target),
  };
}

const NATIVE: ReadonlySet<Language> = new Set(['swift', 'objc']);
const JAVASCRIPT: ReadonlySet<Language> = new Set(['js']);
const DART: ReadonlySet<Language> = new Set(['dart']);

/** Where each kind of project keeps the code the rules read. */
function sourceRoots(project: Project): SourceRoot[] {
  const roots: SourceRoot[] = [];
  if (project.iosDir) roots.push({ folder: project.iosDir, languages: NATIVE });
  if (project.ecosystem === 'flutter') {
    roots.push({ folder: join(project.root, 'lib'), languages: DART });
  }
  if (project.ecosystem === 'react-native' || project.ecosystem === 'expo') {
    roots.push({ folder: project.root, languages: JAVASCRIPT });
  }
  return roots;
}

/** Reads the app targets and sources of a detected project. */
export async function collectApp(project: Project): Promise<AppModel> {
  const notes: string[] = [];
  const targets: AppTarget[] = [];
  const upgrades: string[] = [];
  for (const path of project.xcodeProjects) {
    let xcode: XcodeProject;
    try {
      xcode = await readXcodeProject(path, project.root);
    } catch (error) {
      notes.push(`${path}: ${(error as Error).message}`);
      continue;
    }
    if (xcode.lastUpgradeCheck) upgrades.push(xcode.lastUpgradeCheck);
    const text = await readProjectText(join(path, 'project.pbxproj'), project.root);
    for (const target of iosAppTargets(xcode)) {
      targets.push(await readTarget(xcode, target, project.root, text, notes));
    }
  }
  if (project.iosDir && project.xcodeProjects.length > 0 && targets.length === 0) {
    notes.push('No iOS app target was found in the Xcode project.');
  }
  return {
    project,
    targets,
    sources: await readSources(sourceRoots(project)),
    lastUpgradeCheck: upgrades.sort((left, right) => Number(left) - Number(right)).at(-1) ?? null,
    notes,
  };
}
