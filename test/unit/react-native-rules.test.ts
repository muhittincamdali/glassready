import { describe, expect, it } from 'vitest';
import { sourceFile } from '../../src/collect/sources.js';
import type { PackageVersion, Project } from '../../src/detect/project.js';
import type { Hit } from '../../src/rules/hit.js';
import { checkReactNative, importsOf } from '../../src/rules/react-native.js';

function project(
  ecosystem: 'react-native' | 'expo' = 'react-native',
  packages: Record<string, string> = {},
): Project {
  const versions = new Map<string, PackageVersion>(
    Object.entries(packages).map(([name, version]) => [
      name,
      { name, version, source: 'declared', declared: `^${version}` },
    ]),
  );
  return {
    root: '/app',
    name: 'app',
    ecosystem,
    iosDir: '/app/ios',
    xcodeProjects: [],
    packages: versions,
    flutter: null,
    expoConfig: null,
    xcodeVersionFile: null,
    notes: [],
  };
}

const check = (code: string, owner = project(), path = '/app/App.tsx') =>
  checkReactNative(owner, [sourceFile(path, code)]);
const brief = (hits: Hit[]) => hits.map((hit) => `${hit.rule}:${hit.line} ${hit.message}`);

describe('importsOf', () => {
  it('reads default, named, aliased and type imports with their module', () => {
    const file = sourceFile(
      '/app/a.ts',
      `import React, { useState } from 'react';
import { type Foo, Stack as S, Tabs } from "expo-router";
import * as Screens from 'react-native-screens';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';`,
    );
    expect(importsOf(file).map(({ names, module }) => [names, module])).toEqual([
      [['default', 'useState'], 'react'],
      [['Foo', 'Stack', 'Tabs'], 'expo-router'],
      [[], 'react-native-screens'],
    ]);
  });
});

describe('GLS101 native stack header background', () => {
  it('finds header backgrounds in a file that uses a native stack', () => {
    const hits = check(`import { createNativeStackNavigator } from '@react-navigation/native-stack';
const options = {
  headerStyle: { backgroundColor: '#0B3D2E' },
  headerBackground: () => null,
  headerBlurEffect: 'systemMaterial',
};`);
    expect(brief(hits)).toEqual([
      'GLS101:3 headerStyle.backgroundColor paints the header.',
      'GLS101:4 headerBackground draws a custom header background.',
      'GLS101:5 headerBlurEffect adds a blur to the header.',
    ]);
  });

  it("covers Expo Router's Stack", () => {
    const hits = check(`import { Stack } from 'expo-router';
<Stack screenOptions={{ headerStyle: { backgroundColor: 'red' } }} />`);
    expect(hits.map((hit) => hit.rule)).toEqual(['GLS101']);
  });

  it('ignores the JavaScript stack and header styles without a background colour', () => {
    expect(
      check(`import { createStackNavigator } from '@react-navigation/stack';
const a = { headerStyle: { backgroundColor: 'red' } };`),
    ).toEqual([]);
    expect(
      check(`import { createNativeStackNavigator } from '@react-navigation/native-stack';
const a = { headerStyle: { height: 10 }, headerTintColor: 'white' };`),
    ).toEqual([]);
  });
});

describe('GLS102 tab bar drawn in JavaScript', () => {
  it('finds createBottomTabNavigator calls with the React Native fix', () => {
    const hits = check(`import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();`);
    expect(hits.map((hit) => `${hit.rule}:${hit.line} ${hit.variant}`)).toEqual([
      'GLS102:2 react-native',
    ]);
  });

  it("finds Expo Router's Tabs with the Expo fix, once per file", () => {
    const hits = check(
      `import { Tabs } from 'expo-router';
export default () => <Tabs><Tabs.Screen name="a" /></Tabs>;`,
      project('expo'),
    );
    expect(hits.map((hit) => `${hit.rule}:${hit.line} ${hit.variant}`)).toEqual(['GLS102:2 expo']);
  });

  it('finds a custom tabBar component and ignores the native bottom tabs', () => {
    expect(brief(check('<Tab.Navigator tabBar={(props) => <MyBar {...props} />} />'))).toEqual([
      'GLS102:1 A custom tabBar component replaces the tab bar.',
    ]);
    expect(
      check(`import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
const Tab = createNativeBottomTabNavigator();
const o = { tabBarStyle: { height: 2 } };`),
    ).toEqual([]);
  });
});

describe('GLS103 native tab bar style iOS 26 ignores', () => {
  it('finds NativeTabs background props, also across lines', () => {
    const hits = check(`import { NativeTabs } from 'expo-router/native-tabs';
<NativeTabs
  backgroundColor={colors.background}
  onPress={() => go()}
  blurEffect="systemMaterial"
  tintColor="blue">
</NativeTabs>`);
    expect(brief(hits)).toEqual([
      'GLS103:3 NativeTabs backgroundColor only applies on iOS 18 and earlier.',
      'GLS103:5 NativeTabs blurEffect only applies on iOS 18 and earlier.',
    ]);
  });

  it('finds tabBarStyle.backgroundColor and tabBarBlurEffect of native bottom tabs', () => {
    const hits =
      check(`import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
const Tab = createNativeBottomTabNavigator();
const o = { tabBarStyle: { backgroundColor: 'white' }, tabBarBlurEffect: 'none' };`);
    expect(hits.map((hit) => hit.rule)).toEqual(['GLS103', 'GLS103']);
  });

  it('accepts the unstable import path of SDK 54 to 57', () => {
    const hits = check(`import { NativeTabs } from 'expo-router/unstable-native-tabs';
<NativeTabs shadowColor="black" />`);
    expect(hits.map((hit) => hit.rule)).toEqual(['GLS103']);
  });
});

describe('GLS104 react-native-screens for native bottom tabs', () => {
  const code = `import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
const Tab = createNativeBottomTabNavigator();`;

  it('reports a version below 4.30.0 at package.json', () => {
    const hits = check(code, project('react-native', { 'react-native-screens': '4.29.1' }));
    expect(brief(hits)).toEqual([
      'GLS104:null react-native-screens 4.29.1 (declared); native bottom tabs need 4.30.0 or later.',
    ]);
    expect(hits[0]?.file).toBe('/app/package.json');
  });

  it('is quiet for 4.30.0 and later, an unknown version, or no native tabs', () => {
    expect(check(code, project('react-native', { 'react-native-screens': '4.30.0' }))).toEqual([]);
    expect(check(code, project())).toEqual([]);
    expect(
      check('const a = 1;', project('react-native', { 'react-native-screens': '4.0.0' })),
    ).toEqual([]);
  });
});

it('reads a fixed tab bar height in JavaScript as GLS008 and nothing else of that rule', () => {
  const hits = check(
    `const style = { tabBarStyle: { height: 83 }, paddingBottom: insets.bottom + 49 };`,
  );
  expect(brief(hits)).toEqual(['GLS008:1 A tab bar height written as a number.']);
  expect(hits[0]?.variant).toBe('react-native');
});

it('only reads JavaScript and TypeScript files', () => {
  expect(check('headerStyle: { backgroundColor: 1 }', project(), '/app/ios/App.swift')).toEqual([]);
});
