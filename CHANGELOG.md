# Changelog

All notable changes to glassready are listed here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html). The rule data in `rules/` has its own
`dataVersion` (the date of its last change), shown in every report.

## [Unreleased]

## [0.1.0] - 2026-10-27

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
  shows the same screen on iOS 27.0 and two different designs on iOS 26.4.
- Guides for the opt-out, native iOS, React Native and Expo, and Flutter; an API reference site;
  examples for JavaScript, `jq` and GitHub Actions.

[Unreleased]: https://github.com/muhittincamdali/glassready/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/muhittincamdali/glassready/releases/tag/v0.1.0
