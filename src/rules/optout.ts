// GLS001: the UIDesignRequiresCompatibility opt-out, in an Info.plist, in the build settings that
// write a generated Info.plist, or in an Expo config.
import { join } from 'node:path';
import { type AppModel, type AppTarget, OPT_OUT_KEY, OPT_OUT_SETTING } from '../collect/app.js';
import type { PlistValue } from '../collect/plist.js';
import type { ExpoConfig } from '../detect/project.js';
import type { OptOut } from '../model.js';
import type { Hit } from './hit.js';

/** A plist value that UIKit reads as YES: <true/>, or a string such as YES or true. */
export function isYes(value: PlistValue | undefined): boolean {
  if (value === true) return true;
  return typeof value === 'string' && /^(yes|true|1)$/i.test(value.trim());
}

const record = (value: unknown): Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};

/** Whether the target asks for the earlier design, and how sure glassready is of that. */
export function targetOptOut(target: AppTarget): OptOut {
  const inPlist = target.infoPlists.some((plist) => isYes(plist.dict[OPT_OUT_KEY]));
  if (inPlist || target.optOutSetting?.value === 'YES') return 'yes';
  return target.unreadInfoPlist ? 'unknown' : 'no';
}

function targetHits(target: AppTarget): Hit[] {
  const hits: Hit[] = [];
  for (const plist of target.infoPlists) {
    if (!isYes(plist.dict[OPT_OUT_KEY])) continue;
    hits.push({
      rule: 'GLS001',
      file: plist.path,
      line: plist.keyLines.get(OPT_OUT_KEY) ?? null,
      message: `${target.name}: ${OPT_OUT_KEY} is YES in the Info.plist.`,
      variant: 'info-plist',
      target: target.name,
    });
  }
  const setting = target.optOutSetting;
  if (setting?.value === 'YES') {
    hits.push({
      rule: 'GLS001',
      file: setting.file,
      line: setting.line,
      message: `${target.name}: the build setting ${OPT_OUT_SETTING} is YES.`,
      variant: 'build-setting',
      target: target.name,
    });
  }
  return hits;
}

/** The line of the first `needle` in `text`, 1-based. */
function lineOf(text: string, needle: RegExp): number | null {
  const match = needle.exec(text);
  return match ? text.slice(0, match.index).split('\n').length : null;
}

const KEY_IN_CONFIG = new RegExp(`["']?${OPT_OUT_KEY}["']?\\s*:\\s*(?:true|["']YES["'])`);

/**
 * The opt-out in an Expo config: ios.infoPlist in app.json, or the key set to true anywhere in
 * app.config.js/ts (which is read as text, not run).
 */
export function expoConfigHit(root: string, config: ExpoConfig): Hit | null {
  let found = false;
  if (config.json) {
    found = isYes(record(record(config.json.ios).infoPlist)[OPT_OUT_KEY] as PlistValue);
  } else {
    found = KEY_IN_CONFIG.test(config.text);
  }
  if (!found) return null;
  return {
    rule: 'GLS001',
    file: join(root, config.file),
    line: lineOf(config.text, new RegExp(OPT_OUT_KEY)),
    message: `ios.infoPlist sets ${OPT_OUT_KEY} to true in ${config.file}.`,
    variant: 'expo-config',
  };
}

export function checkOptOut(app: AppModel): Hit[] {
  const hits = app.targets.flatMap(targetHits);
  const config = app.project.expoConfig;
  const expo = config ? expoConfigHit(app.project.root, config) : null;
  if (expo) hits.push(expo);
  return hits;
}
