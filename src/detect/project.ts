// Recognises what kind of project a folder holds (native iOS, Flutter, React Native or Expo),
// where its iOS app project is, and the package versions and configuration the rules look at.
import { readdir, stat } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';
import { NOT_READ, readProjectFile, readProjectText } from '../core/files.js';
import { lowestAllowed } from '../core/versions.js';

export type Ecosystem = 'native' | 'flutter' | 'react-native' | 'expo';

export interface PackageVersion {
  name: string;
  /** Exact version when installed or locked, otherwise the lowest the declared range allows. */
  version: string | null;
  /** Where `version` came from. */
  source: 'installed' | 'lockfile' | 'declared';
  /** The range in package.json. */
  declared: string;
}

export interface FlutterInfo {
  /** From .fvmrc or .fvm/fvm_config.json; null when the project does not pin one. */
  version: string | null;
  plugin: boolean;
}

export interface ExpoConfig {
  /** Path relative to the project: app.json, or app.config.js/ts (read as text, not evaluated). */
  file: string;
  /** The file as written. */
  text: string;
  /** The `expo` object of app.json; null for app.config.js/ts. */
  json: Record<string, unknown> | null;
}

export interface Project {
  root: string;
  name: string;
  ecosystem: Ecosystem;
  /** The folder with the iOS app's Xcode project; null for an Expo app without ios/. */
  iosDir: string | null;
  /** Absolute paths of the .xcodeproj folders of the app. */
  xcodeProjects: string[];
  /** npm packages that decide the fix (react-native, expo, workarounds), when present. */
  packages: ReadonlyMap<string, PackageVersion>;
  flutter: FlutterInfo | null;
  expoConfig: ExpoConfig | null;
  /** The Xcode version in .xcode-version (the file xcodes and CI setups read), when there is one. */
  xcodeVersionFile: string | null;
  /** Report notes about project files that are there but could not be used, e.g. package.json. */
  notes: string[];
}

export class ProjectError extends Error {
  override name = 'ProjectError';
}

/** npm packages whose version or presence changes the findings or the advice. */
export const WATCHED_PACKAGES = [
  'react-native',
  'expo',
  'expo-router',
  'react-native-screens',
  '@react-navigation/native-stack',
  '@react-navigation/bottom-tabs',
  'react-native-bottom-tabs',
  'expo-glass-effect',
  '@callstack/liquid-glass',
  'expo-blur',
  '@react-native-community/blur',
] as const;

const SKIPPED_FOLDERS = new Set([
  'Pods',
  'node_modules',
  'build',
  'DerivedData',
  '.build',
  'Carthage',
  '.git',
  '.symlinks',
]);

/** Parses `path` read with readProjectText; undefined when it is not read or is not JSON. */
async function readJson(path: string, root: string | null): Promise<unknown> {
  const text = await readProjectText(path, root);
  if (text === null) return undefined;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return undefined;
  }
}

/** What a note about an unusable package.json adds: what the report could not check. */
export const MANIFEST_NOT_CHECKED =
  'React Native and Expo apps are recognised by it, so the app was checked as native iOS: the React Native rules (GLS101 to GLS104) and the JavaScript sources were not checked.';

/**
 * The package.json of `root`, and why it cannot be used when it is there but is not read, is not
 * JSON or is not an object (null when it is missing or fine). A broken package.json must not turn
 * a React Native app into a native one without a word in the report.
 */
async function readManifest(
  root: string,
): Promise<{ manifest: Record<string, unknown>; problem: string | null }> {
  const file = await readProjectFile(join(root, 'package.json'), root);
  if (!file.found) {
    return { manifest: {}, problem: file.reason === 'missing' ? null : NOT_READ[file.reason] };
  }
  let value: unknown;
  try {
    value = JSON.parse(file.bytes.toString('utf8'));
  } catch {
    // The parser's message quotes the file; the note says only what is wrong with it.
    return { manifest: {}, problem: 'is not valid JSON.' };
  }
  const manifest = record(value);
  return { manifest, problem: manifest === value ? null : 'does not hold a JSON object.' };
}

const record = (value: unknown): Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};

async function xcodeProjectsIn(folder: string): Promise<string[]> {
  try {
    const entries = await readdir(folder, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isDirectory() && entry.name.endsWith('.xcodeproj'))
      .map((entry) => join(folder, entry.name))
      .sort();
  } catch {
    return [];
  }
}

/** Native apps keep the .xcodeproj at the root or one folder down (App/App.xcodeproj). */
async function nativeXcodeProjects(root: string): Promise<string[]> {
  const top = await xcodeProjectsIn(root);
  if (top.length > 0) return top;
  const entries = await readdir(root, { withFileTypes: true }).catch(() => []);
  const nested = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory() && !SKIPPED_FOLDERS.has(entry.name))
      .map((entry) => xcodeProjectsIn(join(root, entry.name))),
  );
  return nested.flat().sort();
}

async function packageVersions(
  root: string,
  manifest: Record<string, unknown>,
): Promise<Map<string, PackageVersion>> {
  const declared = {
    ...record(manifest.devDependencies),
    ...record(manifest.dependencies),
  };
  const lock = record(record(await readJson(join(root, 'package-lock.json'), root)).packages);
  const result = new Map<string, PackageVersion>();
  for (const name of WATCHED_PACKAGES) {
    const range = declared[name];
    if (typeof range !== 'string') continue;
    // pnpm and workspaces link installed packages from outside the app folder.
    const installed = record(
      await readJson(join(root, 'node_modules', name, 'package.json'), null),
    );
    const locked = record(lock[`node_modules/${name}`]);
    if (typeof installed.version === 'string') {
      result.set(name, {
        name,
        version: installed.version,
        source: 'installed',
        declared: range,
      });
    } else if (typeof locked.version === 'string') {
      result.set(name, {
        name,
        version: locked.version,
        source: 'lockfile',
        declared: range,
      });
    } else {
      result.set(name, {
        name,
        version: lowestAllowed(range),
        source: 'declared',
        declared: range,
      });
    }
  }
  return result;
}

async function expoConfig(root: string): Promise<ExpoConfig | null> {
  for (const file of ['app.config.ts', 'app.config.js', 'app.config.mjs', 'app.config.cjs']) {
    const text = await readProjectText(join(root, file), root);
    if (text !== null) return { file, text, json: null };
  }
  const text = await readProjectText(join(root, 'app.json'), root);
  if (text === null) return null;
  let config: Record<string, unknown> = {};
  try {
    config = record(JSON.parse(text) as unknown);
  } catch {
    return { file: 'app.json', text, json: null };
  }
  return { file: 'app.json', text, json: 'expo' in config ? record(config.expo) : config };
}

/**
 * Whether the top-level `flutter:` section of a pubspec has a `plugin:` key: a Flutter plugin,
 * whose app is example/. Read line by line; a multi-line pattern that let whitespace span lines
 * retried at every blank line, which made a pubspec of blank lines quadratic.
 */
export function isFlutterPlugin(pubspec: string): boolean {
  let inFlutter = false;
  for (const line of pubspec.split('\n')) {
    if (/^flutter:\s*$/.test(line)) {
      inFlutter = true;
      continue;
    }
    if (!inFlutter || line.trim() === '') continue;
    if (!/^\s/.test(line)) inFlutter = false;
    else if (/^\s+plugin:/.test(line)) return true;
  }
  return false;
}

async function flutterInfo(root: string, pubspec: string): Promise<FlutterInfo> {
  const fvmrc = record(await readJson(join(root, '.fvmrc'), root));
  const fvmConfig = record(await readJson(join(root, '.fvm', 'fvm_config.json'), root));
  const pinned = fvmrc.flutter ?? fvmConfig.flutterSdkVersion;
  return {
    version: typeof pinned === 'string' ? pinned : null,
    plugin: isFlutterPlugin(pubspec),
  };
}

/**
 * Detects the project at `path`: a project folder, or an .xcodeproj folder for a native app.
 * Throws ProjectError when there is nothing iOS to check.
 */
export async function detectProject(path: string): Promise<Project> {
  const target = resolve(path);
  const info = await stat(target).catch(() => null);
  if (!info) throw new ProjectError(`${path} does not exist.`);
  if (info.isDirectory() && target.endsWith('.xcodeproj')) {
    return nativeProject(dirname(target), [target], await xcodeVersionFile(dirname(target)));
  }
  if (!info.isDirectory()) throw new ProjectError(`${path} is not a folder.`);

  const pubspec = await readProjectText(join(target, 'pubspec.yaml'), target);
  if (pubspec !== null && /^[ \t]+sdk:[ \t]*flutter\b|^flutter:/m.test(pubspec)) {
    const flutter = await flutterInfo(target, pubspec);
    const iosDir = join(target, flutter.plugin ? join('example', 'ios') : 'ios');
    const xcodeProjects = await xcodeProjectsIn(iosDir);
    if (xcodeProjects.length === 0) {
      throw new ProjectError(`${path} is a Flutter project without an iOS app (no ${iosDir}).`);
    }
    const name = /^name:\s*([\w-]+)/m.exec(pubspec)?.[1] ?? basename(target);
    return {
      root: target,
      name,
      ecosystem: 'flutter',
      iosDir,
      xcodeProjects,
      packages: new Map(),
      flutter,
      expoConfig: null,
      xcodeVersionFile: await xcodeVersionFile(target),
      notes: [],
    };
  }

  const { manifest, problem } = await readManifest(target);
  const packages = await packageVersions(target, manifest);
  if (packages.has('expo') || packages.has('react-native')) {
    const ecosystem = packages.has('expo') ? 'expo' : 'react-native';
    const iosDir = join(target, 'ios');
    const xcodeProjects = await xcodeProjectsIn(iosDir);
    if (xcodeProjects.length === 0 && ecosystem === 'react-native') {
      throw new ProjectError(`${path} is a React Native project without ios/.`);
    }
    return {
      root: target,
      name: typeof manifest.name === 'string' ? manifest.name : basename(target),
      ecosystem,
      iosDir: xcodeProjects.length > 0 ? iosDir : null,
      xcodeProjects,
      packages,
      flutter: null,
      expoConfig: ecosystem === 'expo' ? await expoConfig(target) : null,
      xcodeVersionFile: await xcodeVersionFile(target),
      notes: [],
    };
  }

  const xcodeProjects = await nativeXcodeProjects(target);
  if (xcodeProjects.length === 0) {
    throw new ProjectError(
      `No iOS project found in ${path}: expected an .xcodeproj, a Flutter pubspec.yaml or a React Native or Expo package.json.${problem ? ` package.json ${problem}` : ''}`,
    );
  }
  const notes = problem ? [`package.json ${problem} ${MANIFEST_NOT_CHECKED}`] : [];
  return nativeProject(target, xcodeProjects, await xcodeVersionFile(target), notes);
}

/** The first line of .xcode-version, e.g. "26.4" or "27.1". */
async function xcodeVersionFile(root: string): Promise<string | null> {
  const text = await readProjectText(join(root, '.xcode-version'), root);
  const version = text?.trim().split('\n')[0]?.trim();
  return version && /^\d+(\.\d+){0,2}$/.test(version) ? version : null;
}

function nativeProject(
  root: string,
  xcodeProjects: string[],
  xcodeVersion: string | null,
  notes: string[] = [],
): Project {
  const first = xcodeProjects[0] ?? root;
  return {
    root,
    name: basename(first).replace(/\.xcodeproj$/, ''),
    ecosystem: 'native',
    iosDir: dirname(first),
    xcodeProjects,
    packages: new Map(),
    flutter: null,
    expoConfig: null,
    xcodeVersionFile: xcodeVersion,
    notes,
  };
}
