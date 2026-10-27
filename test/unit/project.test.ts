import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { detectProject, ProjectError } from '../../src/detect/project.js';
import { minimalPbxproj, tree } from '../helpers/tree.js';

const PBXPROJ = minimalPbxproj();

describe('detectProject', () => {
  it('finds a native app with its .xcodeproj at the root or one folder down', async () => {
    const top = tree({ 'App.xcodeproj/project.pbxproj': PBXPROJ });
    expect(await detectProject(top)).toMatchObject({ ecosystem: 'native', name: 'App' });
    const nested = tree({ 'Shop/Shop.xcodeproj/project.pbxproj': PBXPROJ });
    const project = await detectProject(nested);
    expect(project.iosDir).toBe(join(nested, 'Shop'));
    expect(await detectProject(join(nested, 'Shop', 'Shop.xcodeproj'))).toMatchObject({
      root: join(nested, 'Shop'),
    });
  });

  it('reads .xcode-version and ignores a file that is not a version', async () => {
    const root = tree({ 'App.xcodeproj/project.pbxproj': PBXPROJ, '.xcode-version': '26.4\n' });
    expect((await detectProject(root)).xcodeVersionFile).toBe('26.4');
    const other = tree({ 'App.xcodeproj/project.pbxproj': PBXPROJ, '.xcode-version': 'latest' });
    expect((await detectProject(other)).xcodeVersionFile).toBeNull();
  });

  it('recognises a Flutter app and a plugin with its example app', async () => {
    const app = tree({
      'pubspec.yaml': 'name: ferry\ndependencies:\n  flutter:\n    sdk: flutter\n',
      'ios/Runner.xcodeproj/project.pbxproj': PBXPROJ,
      '.fvmrc': '{"flutter": "3.47.5"}',
    });
    expect(await detectProject(app)).toMatchObject({
      ecosystem: 'flutter',
      name: 'ferry',
      flutter: { version: '3.47.5', plugin: false },
    });
    const plugin = tree({
      'pubspec.yaml': 'name: maps\nflutter:\n  plugin:\n    platforms: {}\n',
      'example/ios/Runner.xcodeproj/project.pbxproj': PBXPROJ,
    });
    expect((await detectProject(plugin)).iosDir).toBe(join(plugin, 'example', 'ios'));
  });

  it('recognises React Native and Expo apps and the versions of the watched packages', async () => {
    const root = tree({
      'package.json': JSON.stringify({
        name: 'greenline',
        dependencies: { 'react-native': '0.88.1', 'react-native-screens': '^4.29.0', lodash: '1' },
      }),
      'package-lock.json': JSON.stringify({
        packages: { 'node_modules/react-native-screens': { version: '4.29.3' } },
      }),
      'ios/Greenline.xcodeproj/project.pbxproj': PBXPROJ,
    });
    const project = await detectProject(root);
    expect(project.ecosystem).toBe('react-native');
    expect(
      [...project.packages.values()].map((item) => [item.name, item.version, item.source]),
    ).toEqual([
      ['react-native', '0.88.1', 'declared'],
      ['react-native-screens', '4.29.3', 'lockfile'],
    ]);

    const expo = tree({
      'package.json': JSON.stringify({ dependencies: { expo: '~58.0.20' } }),
      'app.json': JSON.stringify({ expo: { name: 'atlas' } }),
    });
    expect(await detectProject(expo)).toMatchObject({
      ecosystem: 'expo',
      iosDir: null,
      expoConfig: { file: 'app.json', json: { name: 'atlas' } },
    });
  });

  it('prefers app.config.ts over app.json and keeps an unparsable app.json as text', async () => {
    const config = tree({
      'package.json': JSON.stringify({ dependencies: { expo: '58.0.0' } }),
      'app.json': '{}',
      'app.config.ts': 'export default {};',
    });
    expect((await detectProject(config)).expoConfig).toMatchObject({
      file: 'app.config.ts',
      json: null,
    });
    const broken = tree({ 'package.json': '{"dependencies":{"expo":"58"}}', 'app.json': '{ nope' });
    expect((await detectProject(broken)).expoConfig).toMatchObject({
      file: 'app.json',
      json: null,
    });
  });

  it('explains what is missing', async () => {
    await expect(detectProject(tree({ 'README.md': '' }))).rejects.toThrow(/No iOS project found/);
    await expect(detectProject(join(tree({}), 'missing'))).rejects.toBeInstanceOf(ProjectError);
    await expect(
      detectProject(tree({ 'pubspec.yaml': 'name: a\nflutter:\n  uses-material-design: true\n' })),
    ).rejects.toThrow(/Flutter project without an iOS app/);
    await expect(
      detectProject(tree({ 'package.json': '{"dependencies":{"react-native":"0.88.1"}}' })),
    ).rejects.toThrow(/React Native project without ios/);
    const file = tree({ 'a.txt': 'x' });
    await expect(detectProject(join(file, 'a.txt'))).rejects.toThrow(/is not a folder/);
  });
});
