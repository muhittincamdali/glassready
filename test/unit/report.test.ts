import { describe, expect, it } from 'vitest';
import type { Finding, Report } from '../../src/model.js';
import { render } from '../../src/report/index.js';
import { clean, wrap, xcodeFromUpgradeCheck } from '../../src/report/text.js';
import { ruleById } from '../../src/rules/data.js';
import { impactOf, verdictOf } from '../../src/scan.js';

function finding(rule: Finding['rule'], overrides: Partial<Finding> = {}): Finding {
  const data = ruleById(rule);
  return {
    rule,
    severity: data.severity,
    title: data.title,
    message: 'Something.',
    file: 'App/View.swift',
    line: 3,
    target: null,
    fix: {
      id: `${rule}/uikit`,
      title: 'Do this',
      steps: ['First.', 'Second.'],
      guide: 'https://example.invalid/guide',
    },
    sources: data.sources,
    ...overrides,
  };
}

function report(findings: Finding[], overrides: Partial<Report> = {}): Report {
  return {
    schemaVersion: 0,
    tool: { name: 'glassready', version: '0.1.0' },
    rules: { ruleSet: 'liquid-glass', dataVersion: '2026.10.27', sdk: 'iOS 27 SDK' },
    project: {
      path: 'app',
      name: 'Harbor',
      ecosystem: 'native',
      versions: [],
      targets: [
        {
          name: 'Harbor',
          infoPlists: ['Harbor/Info.plist'],
          optOut: 'yes',
          deploymentTarget: '17.0',
        },
      ],
      xcode: { versionFile: '26.4', lastUpgradeCheck: '2610' },
    },
    verdict: verdictOf(findings, 'native'),
    impact: impactOf(findings),
    findings,
    adopted: [],
    notes: [],
    summary: {
      errors: findings.filter((item) => item.severity === 'error').length,
      warnings: findings.filter((item) => item.severity === 'warning').length,
      info: findings.filter((item) => item.severity === 'info').length,
    },
    ...overrides,
  };
}

describe('impactOf', () => {
  it('weighs the opt-out, warnings and info findings and caps at 100', () => {
    expect(impactOf([])).toEqual({ score: 0, level: 'none' });
    expect(impactOf([finding('GLS008')])).toEqual({ score: 2, level: 'low' });
    expect(
      impactOf([finding('GLS002'), finding('GLS003'), finding('GLS004'), finding('GLS006')]),
    ).toEqual({
      score: 20,
      level: 'medium',
    });
    expect(impactOf([finding('GLS001')])).toEqual({ score: 50, level: 'high' });
    expect(
      impactOf([finding('GLS001'), ...Array.from({ length: 20 }, () => finding('GLS002'))]).score,
    ).toBe(100);
  });
});

describe('verdictOf', () => {
  it('puts the ignored opt-out first, then covering styles, then places to review', () => {
    expect(verdictOf([finding('GLS001'), finding('GLS002')], 'native')).toEqual({
      code: 'opt-out-ignored',
      text: 'The Liquid Glass opt-out is ignored when built with the iOS 27 SDK; 1 custom style to review first',
    });
    expect(verdictOf([finding('GLS002'), finding('GLS003')], 'native').text).toBe(
      'Shows Liquid Glass, with 2 custom styles covering or replacing it',
    );
    expect(verdictOf([finding('GLS008')], 'native').code).toBe('review');
    expect(verdictOf([finding('GLS201'), finding('GLS201')], 'flutter').text).toBe(
      'Flutter draws its own bars; 2 places to review',
    );
    expect(verdictOf([], 'expo').code).toBe('ready');
  });
});

describe('render', () => {
  const sample = report([
    finding('GLS001', { file: 'Harbor/Info.plist', line: 42 }),
    finding('GLS002'),
    finding('GLS002', { line: 9 }),
  ]);

  it('prints one lettered fix per distinct fix in the terminal report', () => {
    const text = render(sample, 'text');
    expect(text).toContain('ERROR    GLS001 Liquid Glass opt-out that the iOS 27 SDK ignores');
    expect(text).toContain('Harbor/Info.plist:42');
    expect(text).toContain('Impact: high (62 of 100)');
    expect(text).toContain(
      '.xcode-version 26.4 · project settings last updated by Xcode 26.1 · deployment target iOS 17.0',
    );
    expect(text.match(/^\[B\] +Do this$/gm)).toHaveLength(1);
    expect(text.match(/Fix: \[B\] Do this/g)).toHaveLength(2);
    expect(text).toContain('1 error, 2 warnings, 0 info');
    expect(text).toContain('npx @mcamdali/sdkbump');
    expect(text).not.toContain('\u001b[');
  });

  it('colours the tty report only when asked', () => {
    expect(render(sample, 'tty', { color: true })).toContain('\u001b[31m');
    expect(render(sample, 'tty', { color: false })).toBe(render(sample, 'text'));
  });

  it('lists adopted APIs and points to the rule list when there is nothing to report', () => {
    const ready = report([], { adopted: [{ label: 'UIGlassEffect', file: 'A.swift' }] });
    const text = render(ready, 'text');
    expect(text).toContain('Ready for Liquid Glass');
    expect(text).toContain('Already uses: UIGlassEffect');
    expect(text).toContain('#what-glassready-checks');
    expect(render(ready, 'markdown')).toContain('Already uses: UIGlassEffect');
  });

  it('writes the report object as JSON', () => {
    expect(JSON.parse(render(sample, 'json'))).toEqual(sample);
  });

  it('prints each fix once in Markdown and links the sources', () => {
    const markdown = render(sample, 'markdown');
    expect(markdown).toContain('## glassready: Harbor (native iOS)');
    expect(markdown).toContain('| GLS001 | error | `Harbor/Info.plist:42` | Something. |');
    expect(markdown.match(/\*\*Fix: Do this\*\* \(\[guide\]/g)).toHaveLength(2);
    expect(markdown).toContain('**Fix: Do this** (steps above)');
    expect(markdown).toContain(
      '[Apple: UIDesignRequiresCompatibility](https://developer.apple.com/',
    );
  });

  it('keeps project text from becoming markup, links or terminal escapes', () => {
    const hostile = report([
      finding('GLS002', {
        message: '[x](https://evil.example) <img> | @team #1',
        file: 'a`b|c.swift',
      }),
    ]);
    hostile.project.name = 'App\u001b]0;pwned\u0007';
    const markdown = render(hostile, 'markdown');
    expect(markdown).not.toContain('](https://evil');
    expect(markdown).not.toContain('<img>');
    expect(markdown).toContain('\\[x\\]');
    expect(markdown).not.toContain('\u001b');
    expect(render(hostile, 'text')).not.toContain('\u001b]');
    expect(render(hostile, 'json')).not.toContain('\\u001b');
  });
});

describe('text helpers', () => {
  it('reads LastUpgradeCheck values', () => {
    expect(xcodeFromUpgradeCheck('2610')).toBe('26.1');
    expect(xcodeFromUpgradeCheck('1500')).toBe('15.0');
    expect(xcodeFromUpgradeCheck('2712')).toBe('27.1.2');
    expect(xcodeFromUpgradeCheck('x')).toBeNull();
  });

  it('wraps on words and replaces control characters', () => {
    expect(wrap('one two three four', 9)).toEqual(['one two', 'three', 'four']);
    expect(clean('a\u0007b\tc\nd\u009b')).toBe('a�b\tc\nd�');
  });
});
