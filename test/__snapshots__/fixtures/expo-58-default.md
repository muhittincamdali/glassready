## glassready: hello-world (Expo)

**Shows Liquid Glass; 1 place to review**

- Impact: low (2 of 100)
- `react-native` 0.88.0 (declared)
- `expo` 58.0.20 (declared)
- `expo-router` 58.0.27 (declared)
- `react-native-screens` 4.30.0 (declared)
- `expo-glass-effect` 58.0.5 (declared)
- Already uses: Expo Router NativeTabs

| Rule | Severity | Where | Finding |
| --- | --- | --- | --- |
| GLS103 | info | `src/components/app-tabs.tsx:12` | NativeTabs backgroundColor only applies on iOS 18 and earlier. |

<details><summary>What each finding means and how to fix it</summary>

### GLS103: Native tab bar style iOS 26 and later ignore

`src/components/app-tabs.tsx:12`: NativeTabs backgroundColor only applies on iOS 18 and earlier.

**Fix: Expect the system background on iOS 26 and later** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/react-native-expo.md))

1. Keep the prop for Android and older iOS if you need it, but do not rely on it for contrast on iOS 26 and later.
2. Use dynamic colours \(PlatformColor or DynamicColorIOS\) for icons and labels, which sit on light or dark content.

Sources: [Expo: Native tabs](https://docs.expo.dev/router/advanced/native-tabs/), [React Navigation: Native Bottom Tabs Navigator \(tabBarStyle, tabBarBlurEffect\)](https://reactnavigation.org/docs/native-bottom-tab-navigator/)

</details>

0 errors, 0 warnings, 1 info. Guide: [Expo](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/react-native-expo.md). Will it launch with the iOS 27 SDK? [sdkbump](https://github.com/muhittincamdali/sdkbump).

<sub>[glassready](https://github.com/muhittincamdali/glassready) 0.1.2, rules liquid-glass@2026.10.27 (iOS 27 SDK \(checked with Xcode 27.1, 27A9275, on the iOS 27.0 and iOS 26.4 simulators\)). Reads the project's files; it does not build or run the app.</sub>
