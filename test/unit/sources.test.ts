import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { listSourceFiles, readSources, sourceFile } from '../../src/collect/sources.js';
import { tree } from '../helpers/tree.js';

describe('listSourceFiles', () => {
  it('lists app code and skips dependencies, builds, tests, other platforms and configs', async () => {
    const root = tree({
      'App.tsx': '',
      'src/screens/Home.tsx': '',
      'src/screens/Home.web.tsx': '',
      'src/screens/Home.test.tsx': '',
      'src/types.d.ts': '',
      'metro.config.js': '',
      'node_modules/x/index.js': '',
      'ios/App/AppDelegate.swift': '',
      'android/app/Main.js': '',
      '__tests__/App.test.tsx': '',
      'README.md': '',
    });
    const files = await listSourceFiles(root, new Set(['js']));
    expect(files.map((file) => file.slice(root.length + 1))).toEqual([
      'App.tsx',
      'src/screens/Home.tsx',
    ]);
  });

  it('reads Swift and Objective-C under ios/ itself but not Pods or test targets', async () => {
    const root = tree({
      'ios/App/AppDelegate.swift': '',
      'ios/App/Bridge.m': '',
      'ios/App/Bridge.h': '',
      'ios/Pods/Lib/Lib.swift': '',
      'ios/AppTests/AppTests.swift': '',
    });
    const files = await listSourceFiles(join(root, 'ios'), new Set(['swift', 'objc']));
    expect(files.map((file) => file.slice(root.length + 1))).toEqual([
      'ios/App/AppDelegate.swift',
      'ios/App/Bridge.h',
      'ios/App/Bridge.m',
    ]);
  });
});

describe('readSources', () => {
  it('reads each file once, sorted, with its language', async () => {
    const root = tree({ 'lib/main.dart': 'void main() {}', 'lib/a/b.dart': '' });
    const dart = new Set(['dart'] as const);
    const files = await readSources([
      { folder: join(root, 'lib'), languages: dart },
      { folder: join(root, 'lib', 'a'), languages: dart },
    ]);
    expect(files.map((file) => [file.path.slice(root.length + 1), file.language])).toEqual([
      ['lib/a/b.dart', 'dart'],
      ['lib/main.dart', 'dart'],
    ]);
  });

  it('gives line numbers by offset', () => {
    const file = sourceFile('/a.swift', 'one\ntwo\nthree');
    expect(file.lineAt(0)).toBe(1);
    expect(file.lineAt(file.text.indexOf('three'))).toBe(3);
  });
});
