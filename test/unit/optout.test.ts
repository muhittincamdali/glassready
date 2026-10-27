import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { collectApp } from '../../src/collect/app.js';
import { detectProject } from '../../src/detect/project.js';
import { checkOptOut, expoConfigHit, isYes, targetOptOut } from '../../src/rules/optout.js';
import { infoPlist, minimalPbxproj, tree } from '../helpers/tree.js';

const KEY_YES = '\t<key>UIDesignRequiresCompatibility</key>\n\t<true/>';

async function nativeApp(files: Record<string, string>) {
  const root = tree({ 'App.xcodeproj/project.pbxproj': minimalPbxproj(), ...files });
  return collectApp(await detectProject(root));
}

describe('isYes', () => {
  it('accepts <true/> and the strings UIKit reads as YES', () => {
    for (const value of [true, 'YES', 'yes', 'true', ' 1 ']) expect(isYes(value)).toBe(true);
    for (const value of [false, 'NO', '0', 1, undefined]) expect(isYes(value)).toBe(false);
  });
});

describe('Info.plist and build settings', () => {
  it('reports the key in the Info.plist at its line, for its target', async () => {
    const app = await nativeApp({ 'App/Info.plist': infoPlist(KEY_YES) });
    const [hit] = checkOptOut(app);
    expect(hit).toMatchObject({
      rule: 'GLS001',
      line: 7,
      variant: 'info-plist',
      target: 'App',
      message: 'App: UIDesignRequiresCompatibility is YES in the Info.plist.',
    });
    expect(app.targets[0] && targetOptOut(app.targets[0])).toBe('yes');
  });

  it('says nothing when the key is NO or missing', async () => {
    const no = await nativeApp({
      'App/Info.plist': infoPlist('\t<key>UIDesignRequiresCompatibility</key>\n\t<false/>'),
    });
    expect(checkOptOut(no)).toEqual([]);
    expect(no.targets[0] && targetOptOut(no.targets[0])).toBe('no');
    expect(checkOptOut(await nativeApp({ 'App/Info.plist': infoPlist() }))).toEqual([]);
  });

  it('marks the opt-out unknown when the named Info.plist cannot be read', async () => {
    const app = await nativeApp({});
    expect(app.targets[0] && targetOptOut(app.targets[0])).toBe('unknown');
    expect(app.notes).toEqual(['App/Info.plist is named in INFOPLIST_FILE but does not exist.']);
  });

  it('names unreadable project files relative to the project folder', async () => {
    const broken = await nativeApp({ 'App/Info.plist': 'not a plist' });
    expect(broken.notes).toHaveLength(1);
    expect(broken.notes[0]).toMatch(/^App\/Info\.plist could not be read as a property list: /);

    const root = tree({ 'App.xcodeproj/README': '' });
    const missing = await collectApp(await detectProject(root));
    expect(missing.notes[0]).toBe('App.xcodeproj: project.pbxproj does not exist.');
    expect([...broken.notes, ...missing.notes].join('\n')).not.toContain(root);
  });

  it('reports INFOPLIST_KEY_UIDesignRequiresCompatibility in project.pbxproj', async () => {
    const pbxproj = minimalPbxproj().replace(
      'INFOPLIST_FILE = "App/Info.plist";',
      'GENERATE_INFOPLIST_FILE = YES; INFOPLIST_KEY_UIDesignRequiresCompatibility = YES;',
    );
    const root = tree({ 'App.xcodeproj/project.pbxproj': pbxproj });
    const app = await collectApp(await detectProject(root));
    const [hit] = checkOptOut(app);
    expect(hit).toMatchObject({ variant: 'build-setting', line: 10 });
    expect(hit?.file).toBe(join(root, 'App.xcodeproj', 'project.pbxproj'));
  });
});

describe('Expo config', () => {
  it('reads ios.infoPlist from app.json, with or without the expo wrapper', () => {
    const text =
      '{\n  "expo": {\n    "ios": { "infoPlist": { "UIDesignRequiresCompatibility": true } }\n  }\n}';
    const hit = expoConfigHit('/app', {
      file: 'app.json',
      text,
      json: { ios: { infoPlist: { UIDesignRequiresCompatibility: true } } },
    });
    expect(hit).toMatchObject({ file: '/app/app.json', line: 3, variant: 'expo-config' });
    expect(
      expoConfigHit('/app', { file: 'app.json', text: '{}', json: { ios: { infoPlist: {} } } }),
    ).toBeNull();
  });

  it('reads app.config.js and app.config.ts as text', () => {
    const text = `export default {\n  ios: {\n    infoPlist: { UIDesignRequiresCompatibility: true },\n  },\n};`;
    expect(expoConfigHit('/app', { file: 'app.config.ts', text, json: null })?.line).toBe(3);
    expect(
      expoConfigHit('/app', {
        file: 'app.config.js',
        text: "module.exports = { ios: { infoPlist: { 'UIDesignRequiresCompatibility': 'YES' } } };",
        json: null,
      }),
    ).not.toBeNull();
    expect(
      expoConfigHit('/app', {
        file: 'app.config.js',
        text: 'module.exports = { ios: { infoPlist: { UIDesignRequiresCompatibility: false } } };',
        json: null,
      }),
    ).toBeNull();
  });

  it('finds it in an Expo project without ios/', async () => {
    const root = tree({
      'package.json': JSON.stringify({ dependencies: { expo: '~58.0.20' } }),
      'app.json': JSON.stringify({
        expo: { ios: { infoPlist: { UIDesignRequiresCompatibility: true } } },
      }),
    });
    const hits = checkOptOut(await collectApp(await detectProject(root)));
    expect(hits.map((hit) => hit.variant)).toEqual(['expo-config']);
  });
});
