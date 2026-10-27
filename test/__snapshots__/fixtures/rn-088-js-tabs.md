## glassready: Greenline (React Native)

**The Liquid Glass opt-out is ignored when built with the iOS 27 SDK; 1 custom style to review first**

- Impact: high (60 of 100)
- project settings last updated by Xcode 12.1 · deployment target iOS 15.1
- Target `HelloWorld`: opts out of Liquid Glass (`ios/HelloWorld/Info.plist`)
- `react-native` 0.88.1 (declared)
- `react-native-screens` 4.30.0 (declared)
- `@react-navigation/native-stack` 7.21.0 (declared)
- `@react-navigation/bottom-tabs` 7.21.0 (declared)

| Rule | Severity | Where | Finding |
| --- | --- | --- | --- |
| GLS001 | error | `ios/HelloWorld/Info.plist:57` | HelloWorld: UIDesignRequiresCompatibility is YES in the Info.plist. |
| GLS101 | warning | `App.tsx:54` | headerStyle.backgroundColor paints the header. |
| GLS008 | info | `App.tsx:37` | A tab bar height written as a number. |
| GLS102 | info | `App.tsx:29` | createBottomTabNavigator draws the tab bar in JavaScript. |

<details><summary>What each finding means and how to fix it</summary>

### GLS001: Liquid Glass opt-out that the iOS 27 SDK ignores

`ios/HelloWorld/Info.plist:57`: HelloWorld: UIDesignRequiresCompatibility is YES in the Info.plist.

**Fix: Remove the opt-out and review the screens with Liquid Glass** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/opt-out.md))

1. Delete the UIDesignRequiresCompatibility key from the Info.plist.
2. Build with Xcode 27 and run the app on an iOS 27 simulator; the other findings in this report are the places to look at first.
3. Keep the brand colour on tint \(buttons, selected tab\) rather than on bar backgrounds, so the system can draw the bars.

Sources: [Apple: UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility), [Apple: Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)

### GLS101: Native stack header with its own background

`App.tsx:54`: headerStyle.backgroundColor paints the header.

**Fix: Leave the header background to the system on iOS** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/react-native-expo.md))

1. Set headerStyle.backgroundColor, headerBackground and headerBlurEffect only for Android \(Platform.select\) or for iOS before 26.
2. Keep the brand colour on headerTintColor.

Sources: [React Navigation: Native Stack Navigator \(headerStyle, headerBlurEffect, scrollEdgeEffects\)](https://reactnavigation.org/docs/native-stack-navigator/), [Apple: Adopting Liquid Glass \(Visual refresh\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)

### GLS008: Fixed bar height or safe-area arithmetic

`App.tsx:37`: A tab bar height written as a number.

**Fix: Use the bar's measured height** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/react-native-expo.md))

1. Remove the fixed height and read the height the navigator measures \(useBottomTabBarHeight, useHeaderHeight\) or the safe-area insets.

Sources: [Apple: Adopting Liquid Glass \(Controls, Windows and modals\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass), [Apple: UIView.safeAreaLayoutGuide](https://developer.apple.com/documentation/uikit/uiview/safearealayoutguide)

### GLS102: Tab bar drawn in JavaScript

`App.tsx:29`: createBottomTabNavigator draws the tab bar in JavaScript.

**Fix: Move to the native bottom tabs, or keep the JavaScript bar on purpose** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/react-native-expo.md))

1. For the system tab bar, use createNativeBottomTabNavigator from @⁠react-navigation/bottom-tabs/unstable \(React Native 0.79 or later, react-native-screens 4.30.0 or later\).
2. If the custom bar is part of the brand, keep it and check it next to the Liquid Glass headers on an iOS 27 simulator.

Sources: [React Navigation: Bottom Tabs Navigator](https://reactnavigation.org/docs/bottom-tab-navigator/), [React Navigation: Native Bottom Tabs Navigator](https://reactnavigation.org/docs/native-bottom-tab-navigator/), [Expo: JavaScript tabs](https://docs.expo.dev/router/advanced/tabs/), [Expo: Native tabs](https://docs.expo.dev/router/advanced/native-tabs/)

</details>

1 error, 1 warning, 2 info. Guide: [React Native](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/react-native-expo.md). Will it launch with the iOS 27 SDK? [sdkbump](https://github.com/muhittincamdali/sdkbump).

<sub>[glassready](https://github.com/muhittincamdali/glassready) 0.1.2, rules liquid-glass@2026.10.27 (iOS 27 SDK \(checked with Xcode 27.1, 27A9275, on the iOS 27.0 and iOS 26.4 simulators\)). Reads the project's files; it does not build or run the app.</sub>
