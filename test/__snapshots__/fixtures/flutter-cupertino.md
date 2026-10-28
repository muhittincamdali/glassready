## glassready: ferry (Flutter)

**The Liquid Glass opt-out is ignored when built with the iOS 27 SDK**

- Impact: high (60 of 100)
- project settings last updated by Xcode 15.1 · deployment target iOS 15.0
- Target `Runner`: opts out of Liquid Glass (`ios/Runner/Info.plist`)

| Rule | Severity | Where | Finding |
| --- | --- | --- | --- |
| GLS001 | error | `ios/Runner/Info.plist:52` | Runner: UIDesignRequiresCompatibility is YES in the Info.plist. |
| GLS201 | info | `lib/main.dart:34` | CupertinoTabScaffold is drawn by Flutter, not by UIKit. |
| GLS201 | info | `lib/main.dart:35` | CupertinoTabBar is drawn by Flutter, not by UIKit. |
| GLS201 | info | `lib/main.dart:56` | CupertinoSliverNavigationBar is drawn by Flutter, not by UIKit. |
| GLS201 | info | `lib/main.dart:80` | CupertinoNavigationBar is drawn by Flutter, not by UIKit. |
| GLS202 | info | `lib/main.dart:85` | A UiKitView embeds a native iOS view. |

<details><summary>What each finding means and how to fix it</summary>

### GLS001: Liquid Glass opt-out that the iOS 27 SDK ignores

`ios/Runner/Info.plist:52`: Runner: UIDesignRequiresCompatibility is YES in the Info.plist.

**Fix: Remove the opt-out and review the screens with Liquid Glass** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/opt-out.md))

1. Delete the UIDesignRequiresCompatibility key from the Info.plist.
2. Build with Xcode 27 and run the app on an iOS 27 simulator; the other findings in this report are the places to look at first.
3. Keep the brand colour on tint \(buttons, selected tab\) rather than on bar backgrounds, so the system can draw the bars.

Sources: [Apple: UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility), [Apple: Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)

### GLS201: Cupertino bar drawn by Flutter

`lib/main.dart:34`: CupertinoTabScaffold is drawn by Flutter, not by UIKit.

**Fix: Decide whether the Cupertino bars should follow the system** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/flutter.md))

1. Run the app on an iOS 27 simulator next to a system app and decide whether the Flutter-drawn bars may look different.
2. To follow the system, restyle the bars yourself \(translucent background, floating tab bar\) or follow flutter/flutter\#⁠170310 for framework support.

Sources: [Flutter issue 170310: Support for iOS 26 Liquid Glass design in Cupertino widgets](https://github.com/flutter/flutter/issues/170310), [pub.dev: cupertino\_ui changelog](https://pub.dev/packages/cupertino_ui/changelog)

### GLS201: Cupertino bar drawn by Flutter

`lib/main.dart:35`: CupertinoTabBar is drawn by Flutter, not by UIKit.

**Fix: Decide whether the Cupertino bars should follow the system** (steps above)

Sources: [Flutter issue 170310: Support for iOS 26 Liquid Glass design in Cupertino widgets](https://github.com/flutter/flutter/issues/170310), [pub.dev: cupertino\_ui changelog](https://pub.dev/packages/cupertino_ui/changelog)

### GLS201: Cupertino bar drawn by Flutter

`lib/main.dart:56`: CupertinoSliverNavigationBar is drawn by Flutter, not by UIKit.

**Fix: Decide whether the Cupertino bars should follow the system** (steps above)

Sources: [Flutter issue 170310: Support for iOS 26 Liquid Glass design in Cupertino widgets](https://github.com/flutter/flutter/issues/170310), [pub.dev: cupertino\_ui changelog](https://pub.dev/packages/cupertino_ui/changelog)

### GLS201: Cupertino bar drawn by Flutter

`lib/main.dart:80`: CupertinoNavigationBar is drawn by Flutter, not by UIKit.

**Fix: Decide whether the Cupertino bars should follow the system** (steps above)

Sources: [Flutter issue 170310: Support for iOS 26 Liquid Glass design in Cupertino widgets](https://github.com/flutter/flutter/issues/170310), [pub.dev: cupertino\_ui changelog](https://pub.dev/packages/cupertino_ui/changelog)

### GLS202: UIKit view inside Flutter

`lib/main.dart:85`: A UiKitView embeds a native iOS view.

**Fix: Check the native view next to the Flutter UI** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/flutter.md))

1. Open the screen with the platform view on an iOS 27 simulator and compare its controls with the Flutter widgets around it.

Sources: [Flutter: Hosting native iOS views with platform views](https://docs.flutter.dev/platform-integration/ios/platform-views), [Apple: Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)

</details>

1 error, 0 warnings, 5 info. Guide: [Flutter](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/flutter.md). Will it launch with the iOS 27 SDK? [sdkbump](https://github.com/muhittincamdali/sdkbump).

<sub>[glassready](https://github.com/muhittincamdali/glassready) 0.1.3, rules liquid-glass@2026.10.27 (iOS 27 SDK \(checked with Xcode 27.1, 27A9275, on the iOS 27.0 and iOS 26.4 simulators\)). Reads the project's files; it does not build or run the app.</sub>
