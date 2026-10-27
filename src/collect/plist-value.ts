// The values a property list holds and the error the plist readers throw.

export type PlistValue =
  string | number | bigint | boolean | Date | Uint8Array | PlistValue[] | PlistDict;

export interface PlistDict {
  [key: string]: PlistValue;
}

export interface ParsedPlist {
  value: PlistValue;
  /** 1-based line of each top-level `<key>` in an XML plist; empty for binary plists. */
  keyLines: ReadonlyMap<string, number>;
}

export class PlistError extends Error {
  override name = 'PlistError';
}

/** How deep arrays and dictionaries may nest; Info.plist files nest a handful of levels. */
export const MAX_PLIST_DEPTH = 64;

/** The first bytes of a binary property list. */
export const BINARY_MAGIC = 'bplist00';

/**
 * A dictionary without a prototype. Keys come from the checked project, and on a plain object a
 * key named __proto__ would replace the dictionary's prototype instead of becoming a key.
 */
export function emptyDict(): PlistDict {
  return Object.create(null) as PlistDict;
}

export function isDict(value: PlistValue | undefined): value is PlistDict {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    !(value instanceof Date) &&
    !(value instanceof Uint8Array)
  );
}
