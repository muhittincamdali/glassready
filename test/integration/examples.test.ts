import { execFileSync, spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { scratchDir } from '../helpers/scratch.js';

const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const hasJq = spawnSync('jq', ['--version']).status === 0;

describe('examples/api/impact.mjs', () => {
  it('imports the built package by name and prints the fixtures by impact', () => {
    const output = execFileSync(process.execPath, ['examples/api/impact.mjs'], {
      cwd: ROOT,
      encoding: 'utf8',
    });
    const lines = output.trim().split('\n');
    expect(lines.map((line) => line.split(/\s+/).slice(0, 3).join(' '))).toEqual([
      'high 80 Trailhead',
      'high 78 Harbor',
      'high 60 ferry',
      'high 60 Greenline',
      'low 2 hello-world',
      'none 0 Harbor',
    ]);
    expect(lines.at(-1)).toContain('Ready for Liquid Glass');
  });
});

describe.skipIf(!hasJq)('examples/shell/opt-out-targets.sh', () => {
  const run = (fixture: string) =>
    execFileSync('sh', ['examples/shell/opt-out-targets.sh', fixture], {
      cwd: ROOT,
      encoding: 'utf8',
    });

  it('lists the opt-out in an Info.plist, a build setting and an Expo config', () => {
    expect(run('fixtures/native-uikit-optout')).toBe(
      'Harbor/Info.plist:42 Harbor: UIDesignRequiresCompatibility is YES in the Info.plist.\n',
    );
    expect(run('fixtures/native-swiftui')).toBe(
      'Trailhead.xcodeproj/project.pbxproj:121 Trailhead: the build setting INFOPLIST_KEY_UIDesignRequiresCompatibility is YES.\n',
    );
    expect(run('fixtures/expo-58-optout')).toBe(
      'app.json:13 ios.infoPlist sets UIDesignRequiresCompatibility to true in app.json.\n',
    );
  });

  it('prints nothing for a project without the opt-out', () => {
    expect(run('fixtures/native-uikit-glass')).toBe('');
  });
});

describe('examples/github-actions/glassready.yml', () => {
  // The shell of the "Check what Liquid Glass changes" step, with the release tarball replaced by
  // the local build and the checked folder passed as $CHECK. GitHub runs it with `bash -e`.
  const workflow = readFileSync(join(ROOT, 'examples/github-actions/glassready.yml'), 'utf8');
  const block = workflow.split('- name: Check what Liquid Glass changes')[1]?.split('\n\n')[0];
  const script = (block ?? '')
    .split('\n')
    .slice(2)
    .map((line) => line.replace(/^ {10}/, ''))
    .join('\n')
    .replace(/npx --yes \S+/, `node ${JSON.stringify(join(ROOT, 'dist/cli/main.js'))} "$CHECK"`);

  const runStep = (check: string) => {
    const cwd = scratchDir('action');
    const summary = join(cwd, 'summary.md');
    const result = spawnSync('bash', ['-e', '-c', script], {
      cwd,
      encoding: 'utf8',
      env: { ...process.env, CHECK: check, GITHUB_STEP_SUMMARY: summary },
    });
    return { status: result.status, summary: readFileSync(summary, 'utf8') };
  };

  it('limits how long the job may run', () => {
    expect(workflow).toMatch(/^ {4}timeout-minutes: 10$/m);
  });

  it('replaces only the tarball command', () => {
    expect(script).toContain('|| status=$?');
    expect(script).toContain('exit "$status"');
  });

  it('adds the report to the summary and fails the job on warnings', () => {
    const { status, summary } = runStep(join(ROOT, 'fixtures/native-uikit-optout'));
    expect(status).toBe(1);
    expect(summary).toMatch(/^## glassready: Harbor \(native iOS\)/);
  });

  it('passes a project with information findings only', () => {
    const { status, summary } = runStep(join(ROOT, 'fixtures/expo-58-default'));
    expect(status).toBe(0);
    expect(summary).toContain('GLS103');
  });

  it('keeps exit code 2 when glassready writes no report', () => {
    const { status, summary } = runStep(scratchDir('empty'));
    expect(status).toBe(2);
    expect(summary).toBe('glassready exited with 2 and wrote no report; see the step log.\n');
  });
});
