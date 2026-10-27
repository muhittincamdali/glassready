// Source files from a pull request can be written to make a pattern slow. Each case here took
// seconds to minutes at this size before the patterns were made linear (see the audit numbers in
// the comments); the limit leaves room for a slow CI runner.
import { describe, expect, it } from 'vitest';
import { sourceFile } from '../../src/collect/sources.js';
import { checkNativeFile } from '../../src/rules/native.js';

const SIZE = 1_000_000;
const LIMIT_MS = 2_000;

const repeat = (unit: string) => unit.repeat(Math.ceil(SIZE / unit.length));

function timed(run: () => unknown): number {
  const started = performance.now();
  run();
  return performance.now() - started;
}

describe('native rules on hostile Swift', () => {
  it.each([
    // 313 KB took 3.0 s.
    ['unclosed toolbarBackground calls', repeat('.toolbarBackground(')],
    // 313 KB took 3.2 s.
    ['unclosed toolbar(.hidden, for:) calls', repeat('.toolbar(.hidden, for: ')],
    [
      'toolbar(.hidden, for:) with tab bars and no parenthesis',
      repeat('.toolbar(.hidden, for: .tabBar'),
    ],
    ['Objective-C setBackgroundImage: without a bracket', repeat('setBackgroundImage:')],
    // 653 KB took 2.1 s: one pattern per variable.
    [
      'thousands of appearance variables',
      Array.from(
        { length: SIZE / 32 },
        (_, index) => `let v${index} = UITabBarAppearance()\n`,
      ).join(''),
    ],
  ])('%s', (_, text) => {
    expect(timed(() => checkNativeFile(sourceFile('/app/App/View.swift', text)))).toBeLessThan(
      LIMIT_MS,
    );
  });

  it('still finds the settings of every appearance variable in one pass', () => {
    const declarations = Array.from(
      { length: 300 },
      (_, index) => `let v${index} = UITabBarAppearance()\nv${index}.backgroundColor = .red\n`,
    ).join('');
    const hits = checkNativeFile(sourceFile('/app/App/View.swift', declarations));
    expect(hits.filter((hit) => hit.rule === 'GLS002')).toHaveLength(300);
  });

  it('flags toolbar(.hidden, for:) only for the tab bar', () => {
    const rules = (code: string) =>
      checkNativeFile(sourceFile('/app/App/View.swift', `import SwiftUI\n${code}`)).map(
        (hit) => hit.rule,
      );
    expect(rules('x.toolbar(.hidden, for: .navigationBar, .tabBar)')).toEqual(['GLS005']);
    expect(rules('x.toolbar(.hidden, for: .navigationBar)')).toEqual([]);
  });
});
