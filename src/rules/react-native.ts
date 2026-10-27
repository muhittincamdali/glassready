// GLS101 to GLS104: React Native and Expo navigation code. The header of a native stack and a
// native tab bar are UIKit bars, so Liquid Glass applies to them; a JavaScript tab bar is not.
import { join } from 'node:path';
import type { SourceFile } from '../collect/sources.js';
import { compareVersions } from '../core/versions.js';
import type { Project } from '../detect/project.js';
import type { FixVariant } from './data.js';
import { type Hit, hitAt, matches, stringAt } from './hit.js';
import { fixedGeometry } from './native.js';

export interface Import {
  /** The names imported, with `default` for a default import. */
  names: string[];
  module: string;
  offset: number;
}

/** The ES module imports of a file (import … from '…'), read from its blanked code. */
export function importsOf(file: SourceFile): Import[] {
  const pattern =
    /\bimport\s+(?:type\s+)?(?:(\w+)\s*,?\s*)?(?:\{([^}]*)\})?\s*(?:\*\s*as\s+\w+\s*)?from\s*(["'])/g;
  return [...matches(file, pattern)].map((match) => {
    const named = (match[2] ?? '')
      .split(',')
      .map(
        (part) =>
          part
            .trim()
            .replace(/^type\s+/, '')
            .split(/\s+as\s+/)[0]
            ?.trim() ?? '',
      )
      .filter(Boolean);
    return {
      names: [...(match[1] ? ['default'] : []), ...named],
      module: stringAt(file, match.index + match[0].length - 1),
      offset: match.index,
    };
  });
}

const imports = (file: SourceFile, module: RegExp, name?: string) =>
  importsOf(file).some(
    (item) => module.test(item.module) && (name === undefined || item.names.includes(name)),
  );

const NATIVE_STACK = /^(?:@react-navigation\/native-stack|react-native-screens\/native-stack)$/;
const NATIVE_TABS = /^expo-router\/(?:unstable-)?native-tabs$/;

/** GLS101: header backgrounds in a file that uses a native stack. */
function nativeStackHeader(file: SourceFile, variant: FixVariant): Hit[] {
  const native = imports(file, NATIVE_STACK) || imports(file, /^expo-router$/, 'Stack');
  if (!native) return [];
  const patterns: [RegExp, string][] = [
    [
      /\bheaderStyle\s*:\s*\{[^}]*\bbackgroundColor\s*:/g,
      'headerStyle.backgroundColor paints the header.',
    ],
    [/\bheaderBackground\s*:/g, 'headerBackground draws a custom header background.'],
    [/\bheaderBlurEffect\s*:/g, 'headerBlurEffect adds a blur to the header.'],
  ];
  return patterns.flatMap(([pattern, message]) =>
    [...matches(file, pattern)].map((match) =>
      hitAt(file, match.index, 'GLS101', variant, message),
    ),
  );
}

/** GLS102: createBottomTabNavigator, Expo Router's Tabs, and custom tabBar components. */
function javascriptTabs(file: SourceFile, variant: FixVariant): Hit[] {
  const hits: Hit[] = [];
  const reactNavigation = importsOf(file).some(
    (item) =>
      item.module === '@react-navigation/bottom-tabs' &&
      item.names.includes('createBottomTabNavigator'),
  );
  if (reactNavigation) {
    for (const match of matches(file, /\bcreateBottomTabNavigator\s*\(/g)) {
      hits.push(
        hitAt(
          file,
          match.index,
          'GLS102',
          variant,
          'createBottomTabNavigator draws the tab bar in JavaScript.',
        ),
      );
    }
  }
  if (imports(file, /^expo-router$/, 'Tabs')) {
    const first = /<Tabs\b/.exec(file.code);
    if (first) {
      hits.push(
        hitAt(
          file,
          first.index,
          'GLS102',
          variant,
          "Expo Router's Tabs draws the tab bar in JavaScript.",
        ),
      );
    }
  }
  for (const match of matches(file, /\btabBar\s*(?:=\s*\{|:\s*(?:\(|\w))/g)) {
    hits.push(
      hitAt(
        file,
        match.index,
        'GLS102',
        variant,
        'A custom tabBar component replaces the tab bar.',
      ),
    );
  }
  return hits;
}

const IGNORED_NATIVE_TAB_PROPS =
  /\b(backgroundColor|blurEffect|shadowColor|disableTransparentOnScrollEdge)\s*=/g;

/** GLS103: background props of NativeTabs and tabBarStyle of native bottom tabs. */
function ignoredNativeTabStyle(file: SourceFile, variant: FixVariant): Hit[] {
  const hits: Hit[] = [];
  if (imports(file, NATIVE_TABS, 'NativeTabs')) {
    for (const tag of matches(file, /<NativeTabs\b((?:=>|[^>])*)>/g)) {
      for (const prop of (tag[1] ?? '').matchAll(IGNORED_NATIVE_TAB_PROPS)) {
        const offset = tag.index + '<NativeTabs'.length + (prop.index ?? 0);
        hits.push(
          hitAt(
            file,
            offset,
            'GLS103',
            variant,
            `NativeTabs ${prop[1]} only applies on iOS 18 and earlier.`,
          ),
        );
      }
    }
  }
  if (/\bcreateNativeBottomTabNavigator\b/.test(file.code)) {
    const patterns: [RegExp, string][] = [
      [
        /\btabBarStyle\s*:\s*\{[^}]*\bbackgroundColor\s*:/g,
        'tabBarStyle.backgroundColor only applies on iOS 18 and earlier.',
      ],
      [/\btabBarBlurEffect\s*:/g, 'tabBarBlurEffect only applies on iOS 18 and earlier.'],
    ];
    for (const [pattern, message] of patterns) {
      for (const match of matches(file, pattern)) {
        hits.push(hitAt(file, match.index, 'GLS103', variant, message));
      }
    }
  }
  return hits;
}

const SCREENS_FOR_NATIVE_TABS = '4.30.0';

/** GLS104: native bottom tabs with react-native-screens older than 4.30.0. */
function screensVersion(project: Project, files: SourceFile[]): Hit[] {
  const screens = project.packages.get('react-native-screens');
  if (!screens?.version) return [];
  if (compareVersions(screens.version, SCREENS_FOR_NATIVE_TABS) >= 0) return [];
  const user = files.find((file) => /\bcreateNativeBottomTabNavigator\b/.test(file.code));
  if (!user) return [];
  return [
    {
      rule: 'GLS104',
      file: join(project.root, 'package.json'),
      line: null,
      message: `react-native-screens ${screens.version} (${screens.source}); native bottom tabs need ${SCREENS_FOR_NATIVE_TABS} or later.`,
      variant: 'react-native',
    },
  ];
}

/** Every React Native and Expo rule on the project's JavaScript and TypeScript files. */
export function checkReactNative(project: Project, files: SourceFile[]): Hit[] {
  const javascript = files.filter((file) => file.language === 'js');
  const variant: FixVariant = project.ecosystem === 'expo' ? 'expo' : 'react-native';
  const hits = javascript.flatMap((file) => [
    ...nativeStackHeader(file, 'react-native'),
    ...javascriptTabs(file, variant),
    ...ignoredNativeTabStyle(file, 'react-native'),
    ...fixedGeometry(file, 'react-native').filter((hit) => hit.message.includes('tab bar height')),
  ]);
  return [...hits, ...screensVersion(project, javascript)];
}
