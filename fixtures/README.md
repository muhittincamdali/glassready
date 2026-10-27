# Fixtures

Seven projects, one per situation glassready has to tell apart. The tests run glassready on each
one and compare the findings with the expected list in
[test/integration/fixtures.test.ts](../test/integration/fixtures.test.ts) and the full reports
with [test/\_\_snapshots\_\_/fixtures](../test/__snapshots__/fixtures).

| Folder                                     | Made with                                                                                                                                                                                                                                                                                   | Expected                                                               |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [native-uikit-optout](native-uikit-optout) | A UIKit app written for these tests ([project.yml](native-uikit-optout/project.yml), XcodeGen 2.45.3): `UIDesignRequiresCompatibility` in Info.plist, opaque navigation and tab bar appearances, `barTintColor`, `isTranslucent = false`, a blur panel placed 49 points above the safe area | GLS001, 2 × GLS002, 2 × GLS003, GLS006, GLS008                         |
| [native-uikit-glass](native-uikit-glass)   | The same app after the fixes: no opt-out, brand colour on `tintColor`, the panel on `UIGlassEffect` (blur kept as the fallback) and constrained to the safe area                                                                                                                            | no findings; uses UIGlassEffect                                        |
| [native-swiftui](native-swiftui)           | A SwiftUI app (XcodeGen) with `INFOPLIST_KEY_UIDesignRequiresCompatibility = YES`, `toolbarBackground`, a sheet with `presentationBackground`, a hidden tab bar under a custom bottom bar and section headers in capitals                                                                   | GLS001 (build setting), 2 × GLS004, GLS005, GLS007, GLS008, 2 × GLS009 |
| [flutter-cupertino](flutter-cupertino)     | `flutter create --platforms ios` with Flutter 3.47.5, then `lib/main.dart` written with Cupertino bars and a `UiKitView`, the AppDelegate registering that native map view, and the opt-out added to Info.plist                                                                             | GLS001, 4 × GLS201, GLS202                                             |
| [rn-088-js-tabs](rn-088-js-tabs)           | `ios/`, `package.json`, `index.js`, `app.json`, `metro.config.js` and `babel.config.js` of `@react-native-community/template` 0.88.1 from npm; React Navigation 7 added to package.json, `App.tsx` with a native stack (header colour) around JavaScript bottom tabs, the opt-out added to Info.plist                             | GLS001, GLS101, GLS008, GLS102                                         |
| [expo-58-optout](expo-58-optout)           | `src/`, `app.json`, `package.json` and `tsconfig.json` of `expo-template-default` 58.0.29 from npm; the root layout turned into a Stack with a header colour and blur, the tabs moved to Expo Router's JavaScript `Tabs`, the opt-out in `ios.infoPlist` of app.json                        | GLS001 (Expo config), 2 × GLS101, GLS102                               |
| [expo-58-default](expo-58-default)         | The same template as published, only the package name and version set as `create-expo-app` does: its `NativeTabs` set `backgroundColor`, which iOS 26 and later ignore                                                                                                                      | GLS103; uses NativeTabs                                                |

All projects were made on 27 October 2026 on a Mac (Apple silicon) with Xcode 27.1 (27A9275).
Only the files glassready reads and the manifests that explain them are kept: no `node_modules`,
`Pods`, Android folders, build output, test targets or IDE files. Dependencies in the React Native
and Expo package.json files are declared, not installed, so the reports show the lowest version
each range allows.

## What the simulator shows

`scripts/simulator-check.sh` builds a fixture with the installed Xcode, launches it on an iPhone 17
simulator and takes a screenshot; `scripts/simulator-compare.sh` does it twice, with and without
`UIDesignRequiresCompatibility`, and compares the two screenshots with ImageMagick. With Xcode 27.1 (iOS 27.1 SDK):

- **native-uikit-optout on iOS 27.0**: the screenshots with and without the key show the same
  screen: no pixel above the home indicator differs by more than 2% (the Liquid Glass material
  itself varies by up to 2 of 255 between launches). The tab bar is the floating Liquid Glass bar
  in both. The key is ignored.
- **native-uikit-optout on iOS 26.4**: the screenshots differ. With the key, the app keeps the
  full-width tab bar and large title of earlier SDKs; without it, it shows Liquid Glass. The same
  build therefore looks different on iOS 26 and iOS 27 devices while the key is in the Info.plist.
- **native-swiftui**: the built Info.plist has no `UIDesignRequiresCompatibility`: Xcode 27.1 does
  not write `INFOPLIST_KEY_UIDesignRequiresCompatibility` into the Info.plist it generates.
- **flutter-cupertino on iOS 27.0**: the `CupertinoTabBar` stays the flat bar Flutter draws.

The recorded output is in [docs/media/simulator](../docs/media/simulator).
