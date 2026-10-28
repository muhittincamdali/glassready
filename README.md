<!-- brand:start -->

<p align="center"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg" alt="glassready: Shows what Liquid Glass changes in iOS, Flutter and React Native apps built with the iOS 27 SDK, and the fix for each."></picture></p>

<!-- lang-selector:start -->
<p align="center"><a href="README.md">English</a> · <a href="README.tr.md">Türkçe</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a></p>
<!-- lang-selector:end -->

<p align="center">
<a href="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml"><img src="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml/badge.svg" alt="CI status"></a>
<a href="https://github.com/muhittincamdali/glassready/releases"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg" alt="Latest version: v0.1.3"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/package.json"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg" alt="Language version: Node.js 22.12+"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/LICENSE"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg" alt="License: MIT"></picture></a>
</p>

<p align="center">
<a href="#quick-start"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-en-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-en-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-en-light.svg" alt="Get started"></picture></a>
<a href="https://muhittincamdali.github.io/glassready/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-en-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-en-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-en-light.svg" alt="Documentation"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/docs/guides"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-en-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-en-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-en-light.svg" alt="Guides"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/examples"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-en-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-en-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-en-light.svg" alt="Examples"></picture></a>
</p>

<!-- brand:end -->

If you postponed Liquid Glass with `UIDesignRequiresCompatibility`, the iOS 27 SDK ignores that
key: an app built with Xcode 27 shows Liquid Glass on iOS 27 whatever its Info.plist says.
glassready reads a native iOS, Flutter or React Native/Expo project and lists what that will
change: the opt-out, and every place where the app paints over, hides or measures the bars and
sheets Liquid Glass draws, with the fix for each. It reads your project's files; it does not
build, run or change anything.

<picture><source media="(prefers-color-scheme: dark)" srcset="docs/media/demo-uikit-optout-dark.svg"><source media="(prefers-color-scheme: light)" srcset="docs/media/demo-uikit-optout-light.svg"><img src="docs/media/demo-uikit-optout-light.svg" alt="glassready run on a UIKit app: the Liquid Glass opt-out is ignored when built with the iOS 27 SDK; GLS001 the opt-out in Info.plist, GLS002 two opaque bar appearances, GLS003 isTranslucent and barTintColor, GLS006 a blur panel, GLS008 a fixed tab bar offset, each with its fix"></picture>

<sub>Recorded from the real CLI on the <a href="fixtures/native-uikit-optout">native-uikit-optout
fixture</a>, a UIKit app written for the tests (<code>npm run demo</code>).</sub>

## Highlights

- **Finds the opt-out wherever it is.** In an Info.plist, as the
  `INFOPLIST_KEY_UIDesignRequiresCompatibility` build setting (which Xcode 27.1 does not even copy
  into the generated Info.plist), or in an Expo config.
- **Shows what covers Liquid Glass.** Opaque bar appearances, `barTintColor`, SwiftUI toolbar
  backgrounds, custom tab bars, blur layers, sheet backgrounds, fixed bar heights and capitalised
  section headers in native code; header colours, JavaScript tab bars and ignored tab bar props in
  React Native and Expo; Flutter-drawn Cupertino bars and UIKit platform views in Flutter.
- **The fix for your kind of code.** UIKit, SwiftUI, React Native, Expo or Flutter, with a guide
  for each, and a list of the Liquid Glass APIs the app already uses.
- **Every rule has a source.** The rules are data ([rules/liquid-glass.json](rules/liquid-glass.json))
  citing Apple's, React Navigation's, Expo's and Flutter's own pages; the tests fail if one does
  not.
- **Checked in the simulator.** Built with Xcode 27.1, the same app with and without the key shows
  the same screen on iOS 27.0 and two different designs on iOS 26.4. The recordings and
  screenshots are in the repository.
- **Made for CI.** Terminal, plain text, Markdown and JSON reports, and an exit code: 0 clean, 1
  findings, 2 usage error.

## Quick start

**1. Install glassready.** With [Homebrew](https://brew.sh/), which also installs Node.js:

```sh
brew install muhittincamdali/tap/glassready
```

Or with npm from the registry, which needs [Node.js](https://nodejs.org/) 22.12 or later
(`node --version` prints it):

```sh
npm i -g @mcamdali/glassready
```

To run it without installing, use `npx @mcamdali/glassready`. Each [GitHub release](https://github.com/muhittincamdali/glassready/releases/tag/v0.1.3) also
carries the same package as a tarball with a `SHA256SUMS` file, for pinning or verifying a release.

**2. Open a terminal in your app's folder**, the one with the `.xcodeproj`, `pubspec.yaml` or
`package.json`:

```sh
cd path/to/YourApp
```

**3. Run glassready:**

```sh
glassready
```

**4. Read the line under your project's name.** "The Liquid Glass opt-out is ignored" means the
app changes on iOS 27 even though it opts out: start with the **ERROR**, then the **WARNING**
findings, which are the places your code paints over the new bars. **INFO** findings are worth a
look on an iOS 27 simulator. Each finding names its fix from the "How to fix" list.

## What changes when you build with the iOS 27 SDK

From Apple's
[UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility)
page:

> The system ignores this key when you build for iOS 27 or later, iPadOS 27 or later, Mac Catalyst
> 27 or later, macOS 27 or later, or tvOS 27 or later.

We built the same UIKit app with Xcode 27.1 twice, with and without the key, and compared the
screenshots on an iPhone 17 simulator ([how](docs/guides/opt-out.md#what-we-saw-in-the-simulator)):

| Simulator | Same screen with and without the key?                                                         |
| --------- | --------------------------------------------------------------------------------------------- |
| iOS 27.0  | yes: 0 pixels differ above the home indicator; the key is ignored                             |
| iOS 26.4  | no: 361,909 of 3,089,772 pixels differ; with the key the app keeps the design of earlier SDKs |

<p align="center"><img src="docs/media/simulator/opt-out-ios26-ios27.png" width="720" alt="The native-uikit-optout fixture on an iPhone 17 simulator, built with Xcode 27.1. From left: iOS 26.4 with the key (full-width tab bar, large title), iOS 26.4 without it (floating Liquid Glass tab bar), iOS 27.0 with the key and iOS 27.0 without it (both with the floating Liquid Glass tab bar)"></p>

So while the key is in the Info.plist, one build shows two designs: the old one on iOS 26 and
Liquid Glass on iOS 27. Apple's
[Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)
lists what to review next; the rules below follow it.

App Store Connect sets which SDK an upload must use on Apple's
[Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) page. On 27
October 2026 that was Xcode 26 with the iOS 26 SDK (since 28 April 2026). When it moves to the iOS
27 SDK, the first row applies to every upload.

## What glassready checks

| Rule   | Severity | Finding                                                                                                       | Code               |
| ------ | -------- | ------------------------------------------------------------------------------------------------------------- | ------------------ |
| GLS001 | error    | `UIDesignRequiresCompatibility` is YES in Info.plist, as a build setting or in an Expo config                 | all                |
| GLS002 | warning  | A bar appearance with `configureWithOpaqueBackground()` or its own background colour, image, effect or shadow | UIKit              |
| GLS003 | warning  | `barTintColor`, `isTranslucent = false`, bar background or shadow images                                      | UIKit              |
| GLS004 | warning  | `toolbarBackground` / `toolbarBackgroundVisibility` other than `.automatic`                                   | SwiftUI            |
| GLS005 | warning  | A `UITabBar` or `UIToolbar` subclass, or the system tab bar hidden for a custom one                           | UIKit, SwiftUI     |
| GLS006 | info     | A `UIBlurEffect` view in a file that does not use `UIGlassEffect`                                             | UIKit              |
| GLS007 | warning  | `presentationBackground` or a popover's `backgroundColor`                                                     | SwiftUI, UIKit     |
| GLS008 | info     | A number added to the safe-area insets, a bar's frame height read for layout, a 49 or 83 point tab bar        | all but Flutter    |
| GLS009 | info     | A section header written in capitals                                                                          | SwiftUI            |
| GLS101 | warning  | A native stack header with `headerStyle.backgroundColor`, `headerBackground` or `headerBlurEffect`            | React Native, Expo |
| GLS102 | info     | A tab bar drawn in JavaScript: `createBottomTabNavigator`, Expo Router `Tabs`, a custom `tabBar`              | React Native, Expo |
| GLS103 | info     | Native tab bar props iOS 26 and later ignore (`backgroundColor`, `blurEffect`, …)                             | React Native, Expo |
| GLS104 | warning  | Native bottom tabs with `react-native-screens` older than 4.30.0                                              | React Native       |
| GLS201 | info     | A Cupertino bar Flutter draws itself                                                                          | Flutter            |
| GLS202 | info     | A `UiKitView` with UIKit controls next to Flutter widgets                                                     | Flutter            |

Rule data `liquid-glass@2026.10.27`, checked against Xcode 27.1 (27A9275). The report also lists
the Liquid Glass APIs the app already uses (`UIGlassEffect`, `glassEffect`, glass button styles,
`safeAreaBar`, `NativeTabs` and others) and an impact score: 50 for the opt-out, 6 per warning, 2
per info finding, at most 100. The score sorts projects; it does not grade the design.

## Installation

The commands under Quick start install the `glassready` command from the npm registry. To add it to
a project:

```sh
npm install --save-dev @mcamdali/glassready
```

`npx glassready` then runs that copy. The package installs under the name `@mcamdali/glassready`,
the name the JavaScript API below imports. To pin or verify a release, every
[GitHub release](https://github.com/muhittincamdali/glassready/releases) also carries the package as `glassready-<version>.tgz` with a `SHA256SUMS`
file; `npm install --save-dev` accepts that tarball URL in place of the package name.

## Usage

```text
glassready [path] [options]
```

| Option                  | What it does                                                               |
| ----------------------- | -------------------------------------------------------------------------- |
| `path`                  | Project folder or `.xcodeproj`; default is the current folder              |
| `-f, --format <format>` | `tty` (default), `text`, `markdown` or `json`                              |
| `--json`                | Same as `--format json`                                                    |
| `-o, --output <file>`   | Write the report to a file instead of the terminal                         |
| `--fail-on <severity>`  | `warning` (default), `error`, `info` or `none`: when the exit code is 1    |
| `--no-color`            | Plain text even in a terminal (`NO_COLOR` and `FORCE_COLOR` are respected) |

Exit codes: `0` nothing at or above `--fail-on`, `1` findings at or above it, `2` bad arguments, no
iOS project found, or an unexpected error. An opt-out glassready could not check, because an
Info.plist or Xcode project was not read, also gives `1` unless `--fail-on none`.

glassready finds the iOS app on its own: an `.xcodeproj` at the root or one folder down for native
apps, `ios/` for Flutter, React Native and Expo apps (`example/ios/` for a Flutter plugin). It reads
every iOS app target's Info.plist (XML or binary) and build settings, the Swift and Objective-C
files of the app, the JavaScript and TypeScript of a React Native or Expo app and the Dart files in
`lib/`, skipping dependencies, build output and tests. An Expo app without `ios/` is checked from
its config.

### Keep a Markdown report with the code

```sh
glassready --format markdown --output glassready.md
```

### Use the JSON report in scripts

```sh
glassready --json > glassready.json
```

Each finding has `rule`, `severity`, `title`, `message`, `file`, `line`, `target`, the `fix` with
its steps and guide, and `sources`. The layout is `schemaVersion` 0 and may change before 1.0.
[examples/shell/opt-out-targets.sh](examples/shell/opt-out-targets.sh) filters it with `jq`.

### Run it in CI

[examples/github-actions/glassready.yml](examples/github-actions/glassready.yml) adds the report to
the job summary of every pull request that touches the app and fails the job on warnings.
`--fail-on error` fails only on the ignored opt-out.

### From JavaScript

```js
import { render, scan } from '@mcamdali/glassready';

const report = await scan('path/to/app');
console.log(report.verdict.text, report.impact.level);
console.log(render(report, 'markdown'));
```

A runnable version is [examples/api/impact.mjs](examples/api/impact.mjs).

## Demo

The terminal recordings come from the CLI on the [fixtures](fixtures/README.md), projects made with
each toolchain:

| Project                                                         | Recording                                                                                                                                   |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| UIKit app with the opt-out and opaque bars                      | top of this page                                                                                                                            |
| React Native 0.88.1 app with a native stack and JavaScript tabs | [light](docs/media/demo-react-native-light.svg) · [dark](docs/media/demo-react-native-dark.svg)                                             |
| Flutter 3.47.5 app with Cupertino bars and a `UiKitView`        | [light](docs/media/demo-flutter-light.svg) · [dark](docs/media/demo-flutter-dark.svg)                                                       |
| SwiftUI app with toolbar backgrounds and a custom bottom bar    | [light](docs/media/demo-swiftui-light.svg) · [dark](docs/media/demo-swiftui-dark.svg)                                                       |
| `scripts/simulator-compare.sh` on iOS 27.0 and iOS 26.4         | [27.0](docs/media/demo-simulator-native-uikit-optout-27.0-light.svg) · [26.4](docs/media/demo-simulator-native-uikit-optout-26.4-light.svg) |

Four fixtures on an iPhone 17 simulator with iOS 27.0, built with Xcode 27.1: the UIKit app with
its opaque navy bar (no large title shown), the same app after the fixes, the SwiftUI app with its
green toolbar background, and the Flutter app with the flat tab bar Flutter draws:

<p align="center"><img src="docs/media/simulator/fixtures-ios27.png" width="720" alt="Four fixtures on an iPhone 17 simulator with iOS 27.0, built with Xcode 27.1: native-uikit-optout, native-uikit-glass, native-swiftui and flutter-cupertino"></p>

Measured on 27 October 2026 on a Mac (Apple silicon, M5 Max) with Node.js 26.11: three sets of 100
runs of `node dist/cli/main.js --json` over the seven fixtures, Node.js start-up included. The
medians of the three sets were 0.12, 0.12 and 0.11 seconds; the slowest run took 0.17 seconds.

## Status

| Feature                                                                                       | Status        |
| --------------------------------------------------------------------------------------------- | ------------- |
| Native, Flutter (app and plugin example), React Native and Expo project detection             | works         |
| GLS001 in Info.plist, build settings and Expo config (app.json; app.config.js/ts as text)     | works         |
| GLS002 to GLS009 on Swift and Objective-C; GLS101 to GLS104 on JavaScript and TypeScript      | works         |
| GLS201 and GLS202 on Dart                                                                     | works         |
| Terminal, text, Markdown and JSON reports; impact score; adopted APIs; `--fail-on` exit codes | works         |
| Dependencies (Pods, `node_modules`, Flutter plugins) and `.xcconfig` build settings           | planned (0.2) |
| SARIF output and a GitHub Action                                                              | planned (0.3) |
| Swift syntax trees instead of patterns; screenshots from the CLI in the simulator             | planned (0.5) |
| Stable rule schema and JSON layout                                                            | planned (1.0) |

## Limits

- **Patterns, not a compiler.** The rules are regular expressions over source text whose comments
  and strings are blanked. Code that is generated, hidden behind macros, built at run time or
  written in an unusual shape can be missed or matched by mistake.
- **Only the app's own sources.** The rules run on the app's own code: the sources of Pods, Swift
  packages outside the app folder, `node_modules` and Flutter plugins are not read. From
  `node_modules`, glassready reads only `<name>/package.json` of the React Native and Expo
  packages it looks at (`react-native`, `expo`, `react-native-screens` and eight more), for the
  installed version; one that links outside a `node_modules/<name>` folder is not read.
- **Build settings from project.pbxproj only.** `.xcconfig` files are not read. When a target's
  Info.plist cannot be read, its opt-out state is "not known" and the report says why. The same
  holds when an Xcode project cannot be read; the verdict is then "Opt-out not known", never ready.
- **Expo config as text.** `app.config.js` and `app.config.ts` are not run, so an opt-out set
  through a variable or a config plugin is not seen.
- **Files only.** glassready does not build the app or look at its screens. The simulator
  recordings in this repository come from the scripts in `scripts/`, run on a Mac.
- **Bounded input.** A project can come from a pull request, so glassready reads at most 32 MB
  per project file and, of the sources, 4 MB per file, 20,000 files and 128 MB in total; what it
  leaves out is listed in the report's notes. A binary plist may produce at most 100,000 values,
  and a plist or a JSON file (package.json, package-lock.json, app.json) may nest 64 levels; a
  deeper JSON file is not parsed. On a Mac (Apple silicon) with Node 26, a project whose
  package.json, package-lock.json and four `node_modules` package.json files are 31 MB of nested
  arrays each is checked in 0.2 s with at most 190 MB of memory.

## Documentation

API reference and guides: [muhittincamdali.github.io/glassready](https://muhittincamdali.github.io/glassready/).

## Guides

- [Why the Liquid Glass opt-out stops working](docs/guides/opt-out.md)
- [Native UIKit and SwiftUI apps](docs/guides/native-ios.md)
- [React Native and Expo apps](docs/guides/react-native-expo.md)
- [Flutter apps](docs/guides/flutter.md)

## Sources

Read on 27 October 2026:

- Apple: [UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility),
  [Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass),
  [Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/), and the API
  pages each rule links in [rules/liquid-glass.json](rules/liquid-glass.json).
- React Navigation: [Native Stack](https://reactnavigation.org/docs/native-stack-navigator/),
  [Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator/),
  [Native Bottom Tabs](https://reactnavigation.org/docs/native-bottom-tab-navigator/).
- Expo: [JavaScript tabs](https://docs.expo.dev/router/advanced/tabs/),
  [Native tabs](https://docs.expo.dev/router/advanced/native-tabs/),
  [app config `ios.infoPlist`](https://docs.expo.dev/versions/latest/config/app/).
- Flutter: [issue 170310](https://github.com/flutter/flutter/issues/170310),
  [cupertino_ui changelog](https://pub.dev/packages/cupertino_ui/changelog),
  [platform views on iOS](https://docs.flutter.dev/platform-integration/ios/platform-views).

## Requirements

Node.js 22.12 or later on macOS, Linux or Windows. Reading a project needs nothing else: no Xcode,
Flutter or React Native toolchain. The simulator scripts need a Mac with Xcode, XcodeGen and
ImageMagick.

## Architecture

```text
detectProject      native | flutter | react-native | expo, the iOS folder, package versions
  ─► collectApp    app targets, Info.plist files, build settings, blanked sources
  ─► checkApp      GLS001 opt-out · GLS002–009 native · GLS101–104 React Native · GLS201–202 Flutter
                   rules/liquid-glass.json: what each rule says, fixes, sources (validated with zod)
  ─► scan          findings, verdict, impact score, adopted APIs
  ─► render        tty | text | markdown | json
```

- The rule data is separate from the code and versioned (`liquid-glass@2026.10.27`); the tests
  fail when a rule has no source or names a guide that does not exist.
- The CLI (`src/cli/`) only parses arguments, picks colours and widths, and sets the exit code.

## Related

[sdkbump](https://github.com/muhittincamdali/sdkbump) answers the other iOS 27 SDK question: will
the app launch? It checks the UIScene life cycle, which apps built with the iOS 27 SDK must adopt.
glassready answers how the app will look. Run both before the first Xcode 27 build.

## FAQ

**My app runs on iOS 27 today and still looks the same. Is it affected?** Apple's documentation
ties the change to the SDK the app is built with, so a build made with Xcode 26 should keep its
design; we could not check that here, because only Xcode 27.1 was installed. Your next build with
Xcode 27 ignores the key.

**Is a GLS002 or GLS004 warning always a bug?** No. A brand colour on a bar can be a decision. The
warning says that the code paints over the bar Liquid Glass draws; look at the screen on an iOS 27
simulator and decide.

**Does glassready change my project?** No. It reads it and writes only the report you ask for.

## Contributing

Contributions are welcome: read [CONTRIBUTING.md](CONTRIBUTING.md) and the
[code of conduct](https://github.com/muhittincamdali/.github/blob/main/CODE_OF_CONDUCT.md) before
opening a pull request, and report security issues as described in [SECURITY.md](SECURITY.md).

## License

Released under the MIT license. See [LICENSE](LICENSE).
