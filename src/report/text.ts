// Text helpers shared by the terminal and Markdown reports.
import type { Ecosystem } from '../detect/project.js';
import type { Report } from '../model.js';

export const REPOSITORY_URL = 'https://github.com/muhittincamdali/glassready';

/** The sister tool that answers "will it launch?" for the same SDK. */
export const SDKBUMP = {
  url: 'https://github.com/muhittincamdali/sdkbump',
  command: 'npx @mcamdali/sdkbump',
} as const;

/** The guide for each kind of project, linked at the end of every report. */
export const GUIDES: Record<Ecosystem, string> = {
  native: `${REPOSITORY_URL}/blob/main/docs/guides/native-ios.md`,
  flutter: `${REPOSITORY_URL}/blob/main/docs/guides/flutter.md`,
  'react-native': `${REPOSITORY_URL}/blob/main/docs/guides/react-native-expo.md`,
  expo: `${REPOSITORY_URL}/blob/main/docs/guides/react-native-expo.md`,
};

export const ECOSYSTEM_LABELS: Record<Ecosystem, string> = {
  native: 'native iOS',
  flutter: 'Flutter',
  'react-native': 'React Native',
  expo: 'Expo',
};

/** "2610" (LastUpgradeCheck) as "26.1"; "1500" as "15.0". */
export function xcodeFromUpgradeCheck(value: string): string | null {
  const match = /^(\d{2})(\d)(\d)$/.exec(value);
  if (!match) return null;
  const [, major, minor, patch] = match;
  return `${Number(major)}.${minor}${patch === '0' ? '' : `.${patch}`}`;
}

/** One line about the toolchain the project names, or null when it names none. */
export function toolchainLine(report: Report): string | null {
  const parts: string[] = [];
  const { versionFile, lastUpgradeCheck } = report.project.xcode;
  if (versionFile) parts.push(`.xcode-version ${versionFile}`);
  const upgraded = lastUpgradeCheck ? xcodeFromUpgradeCheck(lastUpgradeCheck) : null;
  if (upgraded) parts.push(`project settings last updated by Xcode ${upgraded}`);
  const targets = report.project.targets
    .map((target) => target.deploymentTarget)
    .filter((value): value is string => value !== null);
  if (targets.length > 0) parts.push(`deployment target iOS ${[...new Set(targets)].join(', ')}`);
  return parts.length > 0 ? parts.join(' · ') : null;
}

export const OPT_OUT_LABELS = {
  yes: 'opts out of Liquid Glass',
  no: 'no opt-out',
  unknown: 'opt-out not known',
} as const;

/**
 * Replaces control characters (C0 except tab and newline, DEL, C1) and the bidirectional
 * embedding, override and isolate controls (U+202A to U+202E, U+2066 to U+2069) with U+FFFD.
 * File names, versions and plist values come from the checked project; printed raw, an escape
 * sequence in one of them could rewrite the terminal, and a bidi control could make a file name
 * or a whole report line read in a different order than it is.
 */
export function clean(text: string): string {
  // biome-ignore lint/suspicious/noControlCharactersInRegex: matching control characters is the point.
  return text.replace(/[\u0000-\u0008\u000B-\u001F\u007F-\u009F‪-‮⁦-⁩]/g, '�');
}

/** A copy of a report (or any part of one) with every string passed through clean(). */
export function withoutControlCharacters<T>(value: T): T {
  if (typeof value === 'string') return clean(value) as T;
  if (Array.isArray(value)) return value.map(withoutControlCharacters) as T;
  if (value === null || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, withoutControlCharacters(item)]),
  ) as T;
}

/** Splits text into lines of at most `width` columns (a longer word gets a line of its own). */
export function wrap(text: string, width: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(/\s+/).filter(Boolean)) {
    if (line && line.length + 1 + word.length > width) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export const plural = (count: number, word: string) => `${count} ${word}${count === 1 ? '' : 's'}`;

/** The counts at the end of a report: "1 error, 5 warnings, 3 info". */
export function countsLine(report: Report): string {
  const { errors, warnings, info } = report.summary;
  return [plural(errors, 'error'), plural(warnings, 'warning'), `${info} info`].join(', ');
}
