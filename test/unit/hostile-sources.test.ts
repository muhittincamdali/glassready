// Source files from a pull request can be written to make a pattern slow. Each case here took
// seconds to minutes at this size before the patterns were made linear (see the audit numbers in
// the comments); the limit leaves room for a slow CI runner.
import { describe, expect, it } from 'vitest';
import { blankCommentsAndStrings, sourceFile } from '../../src/collect/sources.js';
import { isFlutterPlugin, type Project } from '../../src/detect/project.js';
import { checkNativeFile } from '../../src/rules/native.js';
import { checkReactNative } from '../../src/rules/react-native.js';

const SIZE = 1_000_000;
const LIMIT_MS = 2_000;

const repeat = (unit: string) => unit.repeat(Math.ceil(SIZE / unit.length));

function timed(run: () => unknown): number {
  const started = performance.now();
  run();
  return performance.now() - started;
}

const RN_PROJECT: Project = {
  root: '/app',
  name: 'app',
  ecosystem: 'react-native',
  iosDir: '/app/ios',
  xcodeProjects: [],
  packages: new Map(),
  flutter: null,
  expoConfig: null,
  xcodeVersionFile: null,
  notes: [],
};

// The imports that switch on every React Native rule.
const RN_IMPORTS = `import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeTabs } from 'expo-router/native-tabs';
createNativeBottomTabNavigator;
`;

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

describe('React Native rules on hostile JavaScript', () => {
  it.each([
    // About 27 s at 1 MB.
    ['unclosed headerStyle objects', repeat('headerStyle: {')],
    ['unclosed tabBarStyle objects', repeat('tabBarStyle: {')],
    // About 200 s at 1 MB.
    ['unclosed import lists', repeat('import a, { b ')],
    ['NativeTabs tags without an end', repeat('<NativeTabs =>')],
  ])('%s', (_, text) => {
    const file = sourceFile('/app/App.tsx', RN_IMPORTS + text);
    expect(timed(() => checkReactNative(RN_PROJECT, [file]))).toBeLessThan(LIMIT_MS);
  });
});

describe('isFlutterPlugin', () => {
  it.each([
    ['a plugin', 'name: x\nflutter:\n  plugin:\n    platforms:\n', true],
    ['a plugin after blank lines', 'flutter:\n\n  assets:\n\n  plugin:\n', true],
    ['an app', 'name: x\nflutter:\n  uses-material-design: true\n', false],
    ['plugin: outside the flutter section', 'flutter:\n  assets:\nother:\n  plugin:\n', false],
    ['a nested flutter key', 'dependencies:\n  flutter:\n    plugin:\n', false],
  ])('%s', (_, pubspec, expected) => {
    expect(isFlutterPlugin(pubspec)).toBe(expected);
  });

  it('reads a pubspec of blank lines in linear time', () => {
    expect(timed(() => isFlutterPlugin(`flutter:\n${repeat(' \n')}`))).toBeLessThan(LIMIT_MS);
  });
});

describe('blankCommentsAndStrings', () => {
  it('blanks Swift raw strings with many hashes', () => {
    expect(blankCommentsAndStrings('let a = ##"x"## + b', 'swift')).toBe('let a = ##" "## + b');
  });

  it('reads a file of raw string openings in linear time', () => {
    expect(timed(() => blankCommentsAndStrings(repeat('#"'), 'swift'))).toBeLessThan(LIMIT_MS);
  });
});
