## glassready: Harbor (native iOS)

**The Liquid Glass opt-out is ignored when built with the iOS 27 SDK; 4 custom styles to review first**

- Impact: high (78 of 100)
- project settings last updated by Xcode 14.3 · deployment target iOS 17.0
- Target `Harbor`: opts out of Liquid Glass (`Harbor/Info.plist`)

| Rule | Severity | Where | Finding |
| --- | --- | --- | --- |
| GLS001 | error | `Harbor/Info.plist:42` | Harbor: UIDesignRequiresCompatibility is YES in the Info.plist. |
| GLS002 | warning | `Harbor/AppDelegate.swift:28` | UINavigationBarAppearance navigation: configureWithOpaqueBackground\(\), backgroundColor, shadowColor. |
| GLS002 | warning | `Harbor/AppDelegate.swift:38` | UITabBarAppearance tabs: configureWithOpaqueBackground\(\), backgroundColor. |
| GLS003 | warning | `Harbor/AppDelegate.swift:42` | isTranslucent = false makes the bar opaque. |
| GLS003 | warning | `Harbor/AppDelegate.swift:44` | barTintColor paints the bar background. |
| GLS006 | info | `Harbor/PortMapViewController.swift:5` | A UIBlurEffect view. |
| GLS008 | info | `Harbor/PortMapViewController.swift:26` | A number added to the safe-area insets. |

<details><summary>What each finding means and how to fix it</summary>

### GLS001: Liquid Glass opt-out that the iOS 27 SDK ignores

`Harbor/Info.plist:42`: Harbor: UIDesignRequiresCompatibility is YES in the Info.plist.

**Fix: Remove the opt-out and review the screens with Liquid Glass** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/opt-out.md))

1. Delete the UIDesignRequiresCompatibility key from the Info.plist.
2. Build with Xcode 27 and run the app on an iOS 27 simulator; the other findings in this report are the places to look at first.
3. Keep the brand colour on tint \(buttons, selected tab\) rather than on bar backgrounds, so the system can draw the bars.

Sources: [Apple: UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility), [Apple: Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)

### GLS002: Bar appearance with its own background

`Harbor/AppDelegate.swift:28`: UINavigationBarAppearance navigation: configureWithOpaqueBackground\(\), backgroundColor, shadowColor.

**Fix: Let the system draw the bar background** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/native-ios.md))

1. Remove configureWithOpaqueBackground\(\) and the backgroundColor, backgroundImage, backgroundEffect and shadow settings of the appearance, or apply them only before iOS 26 with if \#available\(iOS 26.0, \*\).
2. Move the brand colour to tintColor and the title text attributes.
3. Check the bar over scrolling content: the scroll edge effect replaces the hairline and the opaque background.

Sources: [Apple: Adopting Liquid Glass \(Visual refresh\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass), [Apple: configureWithOpaqueBackground\(\)](https://developer.apple.com/documentation/uikit/uibarappearance/configurewithopaquebackground()), [Apple: UIBarAppearance.backgroundEffect](https://developer.apple.com/documentation/uikit/uibarappearance/backgroundeffect)

### GLS002: Bar appearance with its own background

`Harbor/AppDelegate.swift:38`: UITabBarAppearance tabs: configureWithOpaqueBackground\(\), backgroundColor.

**Fix: Let the system draw the bar background** (steps above)

Sources: [Apple: Adopting Liquid Glass \(Visual refresh\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass), [Apple: configureWithOpaqueBackground\(\)](https://developer.apple.com/documentation/uikit/uibarappearance/configurewithopaquebackground()), [Apple: UIBarAppearance.backgroundEffect](https://developer.apple.com/documentation/uikit/uibarappearance/backgroundeffect)

### GLS003: Bar colour or translucency set the old way

`Harbor/AppDelegate.swift:42`: isTranslucent = false makes the bar opaque.

**Fix: Remove the bar colour and let the bar stay translucent** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/native-ios.md))

1. Remove barTintColor, isTranslucent = false and the bar background and shadow images, or apply them only before iOS 26 with if \#available\(iOS 26.0, \*\).
2. Use tintColor for the brand colour of the bar's buttons.

Sources: [Apple: Adopting Liquid Glass \(Visual refresh\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass), [Apple: UINavigationBar.barTintColor](https://developer.apple.com/documentation/uikit/uinavigationbar/bartintcolor), [Apple: UINavigationBar.isTranslucent](https://developer.apple.com/documentation/uikit/uinavigationbar/istranslucent)

### GLS003: Bar colour or translucency set the old way

`Harbor/AppDelegate.swift:44`: barTintColor paints the bar background.

**Fix: Remove the bar colour and let the bar stay translucent** (steps above)

Sources: [Apple: Adopting Liquid Glass \(Visual refresh\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass), [Apple: UINavigationBar.barTintColor](https://developer.apple.com/documentation/uikit/uinavigationbar/bartintcolor), [Apple: UINavigationBar.isTranslucent](https://developer.apple.com/documentation/uikit/uinavigationbar/istranslucent)

### GLS006: Blur layer without a Liquid Glass counterpart

`Harbor/PortMapViewController.swift:5`: A UIBlurEffect view.

**Fix: Decide what the blur is for** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/native-ios.md))

1. Behind a popover or sheet's content: remove it and let the presentation draw its background.
2. Behind a floating control or panel: use UIGlassEffect on iOS 26 and later \(if \#available\(iOS 26.0, \*\)\) and keep the blur as the fallback.
3. Over content \(a photo, a map\): keep it.

Sources: [Apple: Adopting Liquid Glass \(Windows and modals\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass), [Apple: UIGlassEffect](https://developer.apple.com/documentation/uikit/uiglasseffect)

### GLS008: Fixed bar height or safe-area arithmetic

`Harbor/PortMapViewController.swift:26`: A number added to the safe-area insets.

**Fix: Lay out against the safe area instead of a number** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/native-ios.md))

1. Constrain to safeAreaLayoutGuide \(or the keyboard and bar layout guides\) instead of adding a bar height to the insets.
2. Do not read the tab bar's frame for layout; check the screen with the tab bar minimized as well.

Sources: [Apple: Adopting Liquid Glass \(Controls, Windows and modals\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass), [Apple: UIView.safeAreaLayoutGuide](https://developer.apple.com/documentation/uikit/uiview/safearealayoutguide)

</details>

1 error, 4 warnings, 2 info. Guide: [native iOS](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/native-ios.md). Will it launch with the iOS 27 SDK? [sdkbump](https://github.com/muhittincamdali/sdkbump).

<sub>[glassready](https://github.com/muhittincamdali/glassready) 0.1.2, rules liquid-glass@2026.10.27 (iOS 27 SDK \(checked with Xcode 27.1, 27A9275, on the iOS 27.0 and iOS 26.4 simulators\)). Reads the project's files; it does not build or run the app.</sub>
