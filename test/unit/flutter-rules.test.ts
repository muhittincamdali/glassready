import { expect, it } from 'vitest';
import { sourceFile } from '../../src/collect/sources.js';
import { checkFlutter } from '../../src/rules/flutter.js';

it('finds every Cupertino bar Flutter draws and every UiKitView', () => {
  const hits = checkFlutter([
    sourceFile(
      '/app/lib/main.dart',
      `CupertinoTabScaffold(
  tabBar: CupertinoTabBar(items: const []),
  tabBuilder: (_, __) => const CupertinoPageScaffold(
    navigationBar: CupertinoNavigationBar(middle: Text('CupertinoTabBar(')),
    child: UiKitView(viewType: 'map'),
  ),
);
const s = CupertinoSliverNavigationBar(largeTitle: Text('x'));
// CupertinoNavigationBar(
final back = CupertinoNavigationBarBackButton();`,
    ),
  ]);
  expect(hits.map((hit) => `${hit.rule}:${hit.line} ${hit.message}`)).toEqual([
    'GLS201:1 CupertinoTabScaffold is drawn by Flutter, not by UIKit.',
    'GLS201:2 CupertinoTabBar is drawn by Flutter, not by UIKit.',
    'GLS201:4 CupertinoNavigationBar is drawn by Flutter, not by UIKit.',
    'GLS201:8 CupertinoSliverNavigationBar is drawn by Flutter, not by UIKit.',
    'GLS202:5 A UiKitView embeds a native iOS view.',
  ]);
  expect(new Set(hits.map((hit) => hit.variant))).toEqual(new Set(['flutter']));
});

it('reads only Dart files', () => {
  expect(checkFlutter([sourceFile('/app/ios/A.swift', 'CupertinoTabBar(')])).toEqual([]);
});
