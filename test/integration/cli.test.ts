import { mkdirSync, readFileSync, symlinkSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { EXIT, failsOn, PACKAGE_NAME, RELEASE_TARBALL_URL } from '../../src/cli/run.js';
import type { Report } from '../../src/model.js';
import { VERSION } from '../../src/version.js';
import { glassready } from '../helpers/cli.js';
import { scratchDir } from '../helpers/scratch.js';
import { infoPlist, minimalPbxproj, tree } from '../helpers/tree.js';

const OPT_OUT = 'fixtures/native-uikit-optout';

describe('exit codes', () => {
  it('is 1 for findings at or above --fail-on (default warning) and 0 below it', async () => {
    expect((await glassready([OPT_OUT])).code).toBe(EXIT.findings);
    expect((await glassready(['fixtures/expo-58-default'])).code).toBe(EXIT.ok);
    expect((await glassready(['fixtures/expo-58-default', '--fail-on', 'info'])).code).toBe(
      EXIT.findings,
    );
    expect((await glassready([OPT_OUT, '--fail-on', 'none'])).code).toBe(EXIT.ok);
    expect((await glassready(['fixtures/native-uikit-glass', '--fail-on', 'info'])).code).toBe(
      EXIT.ok,
    );
  });

  it('fails on error only when asked, so warnings can pass CI', async () => {
    const report = JSON.parse(
      (await glassready(['fixtures/expo-58-optout', '--json'])).stdout,
    ) as Report;
    expect(failsOn(report, 'error')).toBe(true);
    const withoutOptOut = {
      ...report,
      findings: report.findings.filter((item) => item.rule !== 'GLS001'),
    };
    expect(failsOn(withoutOptOut, 'error')).toBe(false);
    expect(failsOn(withoutOptOut, 'warning')).toBe(true);
  });

  describe('when a file that could set the opt-out is not read', () => {
    const PBXPROJ = minimalPbxproj('Harbor');
    const outside = tree({
      'Info.plist': infoPlist('<key>UIDesignRequiresCompatibility</key><true/>'),
      'ios/Evil.xcodeproj/project.pbxproj': PBXPROJ,
    });
    // An Info.plist left with a merge conflict marker.
    const conflict = tree({
      'Harbor.xcodeproj/project.pbxproj': PBXPROJ,
      'Harbor/Info.plist': infoPlist('<<<<<<< HEAD\n<key>A</key><string>b</string>'),
      'Harbor/Glass.swift': 'let effect = UIGlassEffect()\n',
    });
    // An Info.plist linked to a file outside the project.
    const linkedPlist = tree({ 'App.xcodeproj/project.pbxproj': PBXPROJ });
    mkdirSync(join(linkedPlist, 'Harbor'));
    symlinkSync(join(outside, 'Info.plist'), join(linkedPlist, 'Harbor', 'Info.plist'));
    // A React Native app whose ios/ folder is linked to a folder outside the project.
    const linkedIos = tree({ 'package.json': '{"dependencies":{"react-native":"0.88.0"}}' });
    symlinkSync(join(outside, 'ios'), join(linkedIos, 'ios'));

    it.each([
      ['an Info.plist with a conflict marker', conflict],
      ['an Info.plist linked outside the project', linkedPlist],
      ['an ios/ folder linked outside the project', linkedIos],
    ])('says the opt-out is not known and fails for %s', async (_, root) => {
      const result = await glassready([root, '--json']);
      const report = JSON.parse(result.stdout) as Report;
      expect(report.verdict.code).toBe('not-known');
      expect(report.verdict.text).toMatch(/^Opt-out not known: /);
      expect(report.findings).toEqual([]);
      expect(result.code).toBe(EXIT.findings);
      expect((await glassready([root, '--fail-on', 'error'])).code).toBe(EXIT.findings);
      expect((await glassready([root, '--fail-on', 'none'])).code).toBe(EXIT.ok);
      const text = (await glassready([root, '--format', 'text'])).stdout;
      expect(text).not.toContain('Ready for Liquid Glass');
    });
  });

  it('is 2 for a bad option, a missing folder or a folder without an iOS app', async () => {
    const bad = await glassready([OPT_OUT, '--format', 'xml']);
    expect(bad.code).toBe(EXIT.error);
    expect(bad.stderr).toContain("argument 'xml' is invalid");
    const missing = await glassready(['does/not/exist']);
    expect(missing.code).toBe(EXIT.error);
    expect(missing.stderr).toMatch(/^glassready: \/.*does\/not\/exist does not exist\.\n$/);
    const empty = await glassready([tree({ 'README.md': '' })]);
    expect(empty.code).toBe(EXIT.error);
    expect(empty.stderr).toMatch(/^glassready: No iOS project found in /);
    expect(empty.stderr).not.toContain('bug');
  });
});

describe('output', () => {
  it('uses the current folder by default and names it as given', async () => {
    const result = await glassready(['--json'], { cwd: join(process.cwd(), OPT_OUT) });
    expect((JSON.parse(result.stdout) as Report).project.path).toBe('.');
  });

  it('--json is the JSON format', async () => {
    const short = await glassready([OPT_OUT, '--json']);
    const long = await glassready([OPT_OUT, '--format', 'json']);
    expect(short.stdout).toBe(long.stdout);
    expect(JSON.parse(short.stdout)).toMatchObject({
      schemaVersion: 0,
      tool: { name: 'glassready' },
    });
  });

  it('writes the report to a file with --output and says so on stderr', async () => {
    const folder = scratchDir('output');
    const file = join(folder, 'report.md');
    const result = await glassready([OPT_OUT, '--format', 'markdown', '--output', file]);
    expect(result.stdout).toBe('');
    expect(result.stderr).toContain(`Wrote ${file}: The Liquid Glass opt-out is ignored`);
    expect(readFileSync(file, 'utf8')).toContain('## glassready: Harbor (native iOS)');
  });

  it('colours a terminal unless NO_COLOR is set, and FORCE_COLOR colours a pipe', async () => {
    expect((await glassready([OPT_OUT], { tty: true })).stdout).toContain('\u001b[');
    expect(
      (await glassready([OPT_OUT], { tty: true, env: { NO_COLOR: '1' } })).stdout,
    ).not.toContain('\u001b[');
    expect((await glassready([OPT_OUT, '--no-color'], { tty: true })).stdout).not.toContain(
      '\u001b[',
    );
    expect((await glassready([OPT_OUT], { env: { FORCE_COLOR: '1' } })).stdout).toContain(
      '\u001b[',
    );
    expect((await glassready([OPT_OUT, '--format', 'text'], { tty: true })).stdout).not.toContain(
      '\u001b[',
    );
  });

  it('prints the version and a help text with the exit codes and the package name', async () => {
    expect((await glassready(['--version'])).stdout).toBe(`${VERSION}\n`);
    const help = await glassready(['--help']);
    expect(help.code).toBe(EXIT.ok);
    expect(help.stdout).toContain('Exit codes:');
    expect(help.stdout).toContain(`npx ${PACKAGE_NAME}`);
    expect(help.stdout).toContain(RELEASE_TARBALL_URL);
    expect(help.stdout).toContain('--fail-on <severity>');
  });
});
