// The npm side of a React Native or Expo project: package.json, the versions of the packages the
// rules look at, and the Expo config.
import { join } from 'node:path';
import { NOT_READ, readProjectFile, readProjectText } from '../core/files.js';
import { JsonDepthError, parseJson } from '../core/json.js';
import { lowestAllowed } from '../core/versions.js';

export interface PackageVersion {
  name: string;
  /** Exact version when installed or locked, otherwise the lowest the declared range allows. */
  version: string | null;
  /** Where `version` came from. */
  source: 'installed' | 'lockfile' | 'declared';
  /** The range in package.json. */
  declared: string;
}

export interface ExpoConfig {
  /** Path relative to the project: app.json, or app.config.js/ts (read as text, not evaluated). */
  file: string;
  /** The file as written. */
  text: string;
  /** The `expo` object of app.json; null for app.config.js/ts. */
  json: Record<string, unknown> | null;
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

export const record = (value: unknown): Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};

/**
 * Parses `path` read with readProjectText; undefined when it is not read, is not JSON or nests too
 * deep (see parseJson).
 */
export async function readJson(path: string, root: string | null): Promise<unknown> {
  const text = await readProjectText(path, root);
  if (text === null) return undefined;
  try {
    return parseJson(text);
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
export async function readManifest(
  root: string,
): Promise<{ manifest: Record<string, unknown>; problem: string | null }> {
  const file = await readProjectFile(join(root, 'package.json'), root);
  if (!file.found) {
    return { manifest: {}, problem: file.reason === 'missing' ? null : NOT_READ[file.reason] };
  }
  let value: unknown;
  try {
    value = parseJson(file.bytes.toString('utf8'));
  } catch (error) {
    if (error instanceof JsonDepthError)
      return { manifest: {}, problem: `${error.message}; it was not read.` };
    // The parser's message quotes the file; the note says only what is wrong with it.
    return { manifest: {}, problem: 'is not valid JSON.' };
  }
  const manifest = record(value);
  return { manifest, problem: manifest === value ? null : 'does not hold a JSON object.' };
}

export async function packageVersions(
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

export async function expoConfig(root: string): Promise<ExpoConfig | null> {
  for (const file of ['app.config.ts', 'app.config.js', 'app.config.mjs', 'app.config.cjs']) {
    const text = await readProjectText(join(root, file), root);
    if (text !== null) return { file, text, json: null };
  }
  const text = await readProjectText(join(root, 'app.json'), root);
  if (text === null) return null;
  let config: Record<string, unknown> = {};
  try {
    config = record(parseJson(text));
  } catch {
    return { file: 'app.json', text, json: null };
  }
  return { file: 'app.json', text, json: 'expo' in config ? record(config.expo) : config };
}
