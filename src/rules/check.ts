// Runs every rule on a collected project and lists the Liquid Glass APIs it already uses.
import type { AppModel } from '../collect/app.js';
import type { SourceFile } from '../collect/sources.js';
import { RULE_DATA } from './data.js';
import { checkFlutter } from './flutter.js';
import type { Hit } from './hit.js';
import { checkNativeFile } from './native.js';
import { checkOptOut } from './optout.js';
import { checkReactNative } from './react-native.js';

export function checkApp(app: AppModel): Hit[] {
  const { project, sources } = app;
  const hits = [...checkOptOut(app), ...sources.flatMap(checkNativeFile)];
  if (project.ecosystem === 'react-native' || project.ecosystem === 'expo') {
    hits.push(...checkReactNative(project, sources));
  }
  if (project.ecosystem === 'flutter') hits.push(...checkFlutter(sources));
  return hits;
}

const ADOPTION = RULE_DATA.adoption.map((item) => ({
  label: item.label,
  pattern: new RegExp(item.pattern),
}));

/** Liquid Glass APIs found in the code, each with the first file (by path) that uses it. */
export function adoptedApis(sources: SourceFile[]): { label: string; file: string }[] {
  const found: { label: string; file: string }[] = [];
  for (const { label, pattern } of ADOPTION) {
    const file = sources.find((source) => pattern.test(source.code));
    if (file) found.push({ label, file: file.path });
  }
  return found;
}
