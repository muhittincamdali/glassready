// What a check returns before the report turns it into a finding: the rule, where, and what was
// seen there. The rule's title, severity, sources and fix text come from the rule data.
import type { SourceFile } from '../collect/sources.js';
import type { FixVariant, RuleId } from './data.js';

export interface Hit {
  rule: RuleId;
  /** Absolute path of the file. */
  file: string;
  line: number | null;
  message: string;
  /** Which of the rule's fixes applies. */
  variant: FixVariant;
  target?: string;
}

/** All matches of `pattern` (which must have the g flag) in the blanked code of a file. */
export function* matches(file: SourceFile, pattern: RegExp): Generator<RegExpExecArray> {
  pattern.lastIndex = 0;
  for (let match = pattern.exec(file.code); match; match = pattern.exec(file.code)) {
    yield match;
    if (match[0].length === 0) pattern.lastIndex++;
  }
}

/** A hit at the line of `offset` in `file`. */
export function hitAt(
  file: SourceFile,
  offset: number,
  rule: RuleId,
  variant: FixVariant,
  message: string,
): Hit {
  return { rule, file: file.path, line: file.lineAt(offset), message, variant };
}

/** The text of the string literal whose opening quote is at `quote` (read from the original). */
export function stringAt(file: SourceFile, quote: number): string {
  const open = file.text[quote];
  if (open !== '"' && open !== "'" && open !== '`') return '';
  const close = file.text.indexOf(open, quote + 1);
  return close === -1 ? '' : file.text.slice(quote + 1, close);
}

/** SwiftUI or UIKit, by what the Swift file imports; Objective-C is always UIKit. */
export function appleVariant(file: SourceFile): 'swiftui' | 'uikit' {
  return file.language === 'swift' && /^\s*import\s+SwiftUI\b/m.test(file.code)
    ? 'swiftui'
    : 'uikit';
}
