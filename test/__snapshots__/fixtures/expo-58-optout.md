## glassready: atlas (Expo)

**The Liquid Glass opt-out is ignored when built with the iOS 27 SDK; 2 custom styles to review first**

- Impact: high (64 of 100)
- `react-native` 0.88.0 (declared)
- `expo` 58.0.20 (declared)
- `expo-router` 58.0.27 (declared)
- `react-native-screens` 4.30.0 (declared)
- `expo-glass-effect` 58.0.5 (declared)

| Rule | Severity | Where | Finding |
| --- | --- | --- | --- |
| GLS001 | error | `app.json:13` | ios.infoPlist sets UIDesignRequiresCompatibility to true in app.json. |
| GLS101 | warning | `src/app/_layout.tsx:16` | headerStyle.backgroundColor paints the header. |
| GLS101 | warning | `src/app/_layout.tsx:18` | headerBlurEffect adds a blur to the header. |
| GLS102 | info | `src/app/(tabs)/_layout.tsx:5` | Expo Router's Tabs draws the tab bar in JavaScript. |

<details><summary>What each finding means and how to fix it</summary>

### GLS001: Liquid Glass opt-out that the iOS 27 SDK ignores

`app.json:13`: ios.infoPlist sets UIDesignRequiresCompatibility to true in app.json.

**Fix: Remove the opt-out from the Expo config and rebuild the native project** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/react-native-expo.md))

1. Delete UIDesignRequiresCompatibility from ios.infoPlist in the Expo config.
2. Run npx expo prebuild --clean -p ios \(or let EAS Build do it\) so the generated Info.plist no longer has it.
3. Run the app on an iOS 27 simulator; the other findings in this report are the places to look at first.

Sources: [Apple: UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility), [Apple: Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)

### GLS101: Native stack header with its own background

`src/app/_layout.tsx:16`: headerStyle.backgroundColor paints the header.

**Fix: Leave the header background to the system on iOS** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/react-native-expo.md))

1. Set headerStyle.backgroundColor, headerBackground and headerBlurEffect only for Android \(Platform.select\) or for iOS before 26.
2. Keep the brand colour on headerTintColor.

Sources: [React Navigation: Native Stack Navigator \(headerStyle, headerBlurEffect, scrollEdgeEffects\)](https://reactnavigation.org/docs/native-stack-navigator/), [Apple: Adopting Liquid Glass \(Visual refresh\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)

### GLS101: Native stack header with its own background

`src/app/_layout.tsx:18`: headerBlurEffect adds a blur to the header.

**Fix: Leave the header background to the system on iOS** (steps above)

Sources: [React Navigation: Native Stack Navigator \(headerStyle, headerBlurEffect, scrollEdgeEffects\)](https://reactnavigation.org/docs/native-stack-navigator/), [Apple: Adopting Liquid Glass \(Visual refresh\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)

### GLS102: Tab bar drawn in JavaScript

`src/app/(tabs)/_layout.tsx:5`: Expo Router's Tabs draws the tab bar in JavaScript.

**Fix: Move to Expo Router's native tabs, or keep the JavaScript bar on purpose** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/react-native-expo.md))

1. For the system tab bar, use NativeTabs from expo-router/native-tabs \(SDK 58 and later; expo-router/unstable-native-tabs in SDK 54 to 57\).
2. If the custom bar is part of the brand, keep it and check it next to the Liquid Glass headers on an iOS 27 simulator.

Sources: [React Navigation: Bottom Tabs Navigator](https://reactnavigation.org/docs/bottom-tab-navigator/), [React Navigation: Native Bottom Tabs Navigator](https://reactnavigation.org/docs/native-bottom-tab-navigator/), [Expo: JavaScript tabs](https://docs.expo.dev/router/advanced/tabs/), [Expo: Native tabs](https://docs.expo.dev/router/advanced/native-tabs/)

</details>

1 error, 2 warnings, 1 info. Guide: [Expo](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/react-native-expo.md). Will it launch with the iOS 27 SDK? [sdkbump](https://github.com/muhittincamdali/sdkbump).

<sub>[glassready](https://github.com/muhittincamdali/glassready) 0.1.1, rules liquid-glass@2026.10.27 (iOS 27 SDK \(checked with Xcode 27.1, 27A9275, on the iOS 27.0 and iOS 26.4 simulators\)). Reads the project's files; it does not build or run the app.</sub>
