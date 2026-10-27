# Changelog

All notable changes to glassready are listed here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html). The rule data in `rules/` has its own
`dataVersion` (the date of its last change), shown in every report.

## [Unreleased]

### Fixed

- An XML Info.plist with a bad `<integer>` or an unknown element no longer copies the element's
  whole text into the report note; the note repeats at most 40 characters of it.

## [0.1.0] - 2026-10-28

First release.

### Added

- The `glassready` command (npm package `@mcamdali/glassready`) for native iOS, Flutter (app and
  plugin example), React Native and Expo projects, with terminal, plain text, Markdown and JSON
  reports and exit codes 0 (nothing at or above `--fail-on`), 1 (findings) and 2 (usage error).
- Rule data `liquid-glass@2026.10.27` with sources for every rule:
  - GLS001: `UIDesignRequiresCompatibility` in Info.plist, as
    `INFOPLIST_KEY_UIDesignRequiresCompatibility` or in an Expo config; ignored by the iOS 27 SDK.
  - GLS002 to GLS009: opaque bar appearances, `barTintColor` and translucency, SwiftUI toolbar
    backgrounds, custom tab bars, blur layers, sheet and popover backgrounds, fixed bar geometry and
    section headers in capitals.
  - GLS101 to GLS104: native stack header backgrounds, JavaScript tab bars, native tab bar props
    iOS 26 ignores, and `react-native-screens` older than 4.30.0 for native bottom tabs.
  - GLS201 and GLS202: Cupertino bars drawn by Flutter and `UiKitView` platform views.
- An impact score (50 for the opt-out, 6 per warning, 2 per info finding, at most 100) and the
  Liquid Glass APIs the app already uses.
- Seven fixtures (native UIKit with and without the opt-out, SwiftUI, Flutter 3.47.5, React Native
  0.88.1, Expo SDK 58 with and without the opt-out) with recorded reports.
- Simulator scripts and their recordings with Xcode 27.1: with and without the key, the same app
  shows the same screen on iOS 27.0 and two different designs on iOS 26.4. Recorded for the UIKit
  and React Native fixtures; in the React Native app only the native stack header changes, the
  JavaScript tab bar stays the same pixels.
- Guides for the opt-out, native iOS, React Native and Expo, and Flutter; an API reference site;
  examples for JavaScript, `jq` and GitHub Actions.

### Security

The project being checked may come from a pull request. Before this first release, an audit found
inputs that hung the scan or ran it out of memory; they are fixed and each has a regression test.

- Limits on what a scan reads: 32 MB per project file; 4 MB per source file, 20,000 source files
  and 128 MB of source in total. Files over a limit are listed in the report's notes.
- Binary plists may produce at most 100,000 values (a 1.7 KB file with shared references asked for
  1.6 billion), and plists may nest at most 64 levels.
- The XML plist reader and the rule patterns run in linear time on files that never close a tag,
  a comment, a parenthesis or a brace (a 1 MB file took from 27 seconds to over 3 minutes).
- Plist and project.pbxproj keys named `__proto__` stay keys instead of changing a dictionary's
  prototype.
- Reports replace the bidirectional embedding, override and isolate controls (U+202A to U+202E,
  U+2066 to U+2069) as they already did C0 and C1 control characters.

[Unreleased]: https://github.com/muhittincamdali/glassready/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/muhittincamdali/glassready/releases/tag/v0.1.0
