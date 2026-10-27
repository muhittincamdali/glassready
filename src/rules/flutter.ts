// GLS201 and GLS202: Flutter draws its own widgets, so Liquid Glass reaches a Flutter app only
// through the system's UI and through UIKit views embedded with UiKitView.
import type { SourceFile } from '../collect/sources.js';
import { type Hit, hitAt, matches } from './hit.js';

const CUPERTINO_BARS =
  /\b(CupertinoNavigationBar|CupertinoSliverNavigationBar|CupertinoTabBar|CupertinoTabScaffold)\s*\(/g;

export function checkFlutter(files: SourceFile[]): Hit[] {
  const hits: Hit[] = [];
  for (const file of files) {
    if (file.language !== 'dart') continue;
    for (const match of matches(file, CUPERTINO_BARS)) {
      hits.push(
        hitAt(
          file,
          match.index,
          'GLS201',
          'flutter',
          `${match[1]} is drawn by Flutter, not by UIKit.`,
        ),
      );
    }
    for (const match of matches(file, /\bUiKitView\s*\(/g)) {
      hits.push(
        hitAt(file, match.index, 'GLS202', 'flutter', 'A UiKitView embeds a native iOS view.'),
      );
    }
  }
  return hits;
}
