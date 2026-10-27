import { describe, expect, it } from 'vitest';
import type { Report, VerdictCode } from '../../src/model.js';
import { glassready } from '../helpers/cli.js';

interface Expected {
  verdict: VerdictCode;
  /** rule, file:line (or file), fix id. */
  findings: string[];
  exitCode: number;
  adopted?: string[];
}

const EXPECTED: Record<string, Expected> = {
  'native-uikit-optout': {
    verdict: 'opt-out-ignored',
    exitCode: 1,
    findings: [
      'GLS001 Harbor/Info.plist:42 GLS001/info-plist',
      'GLS002 Harbor/AppDelegate.swift:28 GLS002/uikit',
      'GLS002 Harbor/AppDelegate.swift:38 GLS002/uikit',
      'GLS003 Harbor/AppDelegate.swift:42 GLS003/uikit',
      'GLS003 Harbor/AppDelegate.swift:44 GLS003/uikit',
      'GLS006 Harbor/PortMapViewController.swift:5 GLS006/uikit',
      'GLS008 Harbor/PortMapViewController.swift:26 GLS008/uikit',
    ],
  },
  'native-uikit-glass': { verdict: 'ready', exitCode: 0, findings: [], adopted: ['UIGlassEffect'] },
  'native-swiftui': {
    verdict: 'opt-out-ignored',
    exitCode: 1,
    findings: [
      'GLS001 Trailhead.xcodeproj/project.pbxproj:121 GLS001/build-setting',
      'GLS004 Trailhead/TrailsView.swift:39 GLS004/swiftui',
      'GLS004 Trailhead/TrailsView.swift:40 GLS004/swiftui',
      'GLS005 Trailhead/TrailMapView.swift:17 GLS005/swiftui',
      'GLS007 Trailhead/TrailsView.swift:45 GLS007/swiftui',
      'GLS008 Trailhead/TrailMapView.swift:14 GLS008/swiftui',
      'GLS009 Trailhead/TrailsView.swift:27 GLS009/swiftui',
      'GLS009 Trailhead/TrailsView.swift:32 GLS009/swiftui',
    ],
  },
  'flutter-cupertino': {
    verdict: 'opt-out-ignored',
    exitCode: 1,
    findings: [
      'GLS001 ios/Runner/Info.plist:52 GLS001/info-plist',
      'GLS201 lib/main.dart:34 GLS201/flutter',
      'GLS201 lib/main.dart:35 GLS201/flutter',
      'GLS201 lib/main.dart:56 GLS201/flutter',
      'GLS201 lib/main.dart:80 GLS201/flutter',
      'GLS202 lib/main.dart:85 GLS202/flutter',
    ],
  },
  'rn-088-js-tabs': {
    verdict: 'opt-out-ignored',
    exitCode: 1,
    findings: [
      'GLS001 ios/HelloWorld/Info.plist:57 GLS001/info-plist',
      'GLS101 App.tsx:54 GLS101/react-native',
      'GLS008 App.tsx:37 GLS008/react-native',
      'GLS102 App.tsx:29 GLS102/react-native',
    ],
  },
  'expo-58-optout': {
    verdict: 'opt-out-ignored',
    exitCode: 1,
    findings: [
      'GLS001 app.json:13 GLS001/expo-config',
      'GLS101 src/app/_layout.tsx:16 GLS101/react-native',
      'GLS101 src/app/_layout.tsx:18 GLS101/react-native',
      'GLS102 src/app/(tabs)/_layout.tsx:5 GLS102/expo',
    ],
  },
  'expo-58-default': {
    verdict: 'review',
    exitCode: 0,
    findings: ['GLS103 src/components/app-tabs.tsx:12 GLS103/react-native'],
    adopted: ['Expo Router NativeTabs'],
  },
};

const summarize = (report: Report) =>
  report.findings.map((item) =>
    [item.rule, `${item.file}${item.line ? `:${item.line}` : ''}`, item.fix?.id].join(' '),
  );

describe.each(Object.entries(EXPECTED))('fixtures/%s', (name, expected) => {
  const path = `fixtures/${name}`;

  it('has the expected findings, verdict and exit code', async () => {
    const { code, stdout } = await glassready([path, '--json']);
    const report = JSON.parse(stdout) as Report;
    expect(summarize(report)).toEqual(expected.findings);
    expect(report.verdict.code).toBe(expected.verdict);
    expect(code).toBe(expected.exitCode);
    expect(report.adopted.map((item) => item.label)).toEqual(expected.adopted ?? []);
  });

  it.each(['text', 'markdown', 'json'] as const)(
    'matches the recorded %s report',
    async (format) => {
      const extension = { text: 'txt', markdown: 'md', json: 'json' }[format];
      const { stdout } = await glassready([path, '--format', format]);
      await expect(stdout).toMatchFileSnapshot(`../__snapshots__/fixtures/${name}.${extension}`);
    },
  );
});

it('covers native UIKit and SwiftUI, Flutter, React Native and Expo, with and without findings', () => {
  const names = Object.keys(EXPECTED);
  for (const prefix of ['native-uikit', 'native-swiftui', 'flutter', 'rn-', 'expo-']) {
    expect(
      names.some((name) => name.startsWith(prefix)),
      prefix,
    ).toBe(true);
  }
  expect(Object.values(EXPECTED).filter((item) => item.verdict === 'ready')).toHaveLength(1);
});
