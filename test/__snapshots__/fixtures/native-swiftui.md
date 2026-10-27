## glassready: Trailhead (native iOS)

**The Liquid Glass opt-out is ignored when built with the iOS 27 SDK; 4 custom styles to review first**

- Impact: high (80 of 100)
- project settings last updated by Xcode 14.3 · deployment target iOS 18.0
- Target `Trailhead`: opts out of Liquid Glass

| Rule | Severity | Where | Finding |
| --- | --- | --- | --- |
| GLS001 | error | `Trailhead.xcodeproj/project.pbxproj:121` | Trailhead: the build setting INFOPLIST\_KEY\_UIDesignRequiresCompatibility is YES. |
| GLS004 | warning | `Trailhead/TrailsView.swift:39` | toolbarBackground\(Color.green\) sets the navigation bar background. |
| GLS004 | warning | `Trailhead/TrailsView.swift:40` | toolbarBackgroundVisibility\(.visible\) keeps the navigation bar background visible. |
| GLS005 | warning | `Trailhead/TrailMapView.swift:17` | The system tab bar is hidden with toolbar\(.hidden, for: .tabBar\). |
| GLS007 | warning | `Trailhead/TrailsView.swift:45` | presentationBackground replaces the sheet background. |
| GLS008 | info | `Trailhead/TrailMapView.swift:14` | A tab bar height written as a number. |
| GLS009 | info | `Trailhead/TrailsView.swift:27` | Section header "NEARBY" is written in capitals. |
| GLS009 | info | `Trailhead/TrailsView.swift:32` | Section header "SAVED" is written in capitals. |

<details><summary>What each finding means and how to fix it</summary>

### GLS001: Liquid Glass opt-out that the iOS 27 SDK ignores

`Trailhead.xcodeproj/project.pbxproj:121`: Trailhead: the build setting INFOPLIST\_KEY\_UIDesignRequiresCompatibility is YES.

**Fix: Remove the build setting and review the screens with Liquid Glass** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/opt-out.md))

1. Delete INFOPLIST\_KEY\_UIDesignRequiresCompatibility from the target's build settings. Xcode 27.1 does not copy it into the Info.plist it generates, so it has no effect there in any case.
2. Build with Xcode 27 and run the app on an iOS 27 simulator; the other findings in this report are the places to look at first.

Sources: [Apple: UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility), [Apple: Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)

### GLS004: SwiftUI bar background set by the app

`Trailhead/TrailsView.swift:39`: toolbarBackground\(Color.green\) sets the navigation bar background.

**Fix: Remove the bar background modifiers** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/native-ios.md))

1. Remove toolbarBackground\(\_:for:\) and toolbarBackgroundVisibility\(\_:for:\), or apply them only before iOS 26.
2. Keep the brand colour on tint\(\_:\) and on the content, not on the bar.

Sources: [Apple: Adopting Liquid Glass \(Visual refresh\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass), [Apple: toolbarBackground\(\_:for:\)](https://developer.apple.com/documentation/swiftui/view/toolbarbackground(_:for:)), [Apple: toolbarBackgroundVisibility\(\_:for:\)](https://developer.apple.com/documentation/swiftui/view/toolbarbackgroundvisibility(_:for:))

### GLS004: SwiftUI bar background set by the app

`Trailhead/TrailsView.swift:40`: toolbarBackgroundVisibility\(.visible\) keeps the navigation bar background visible.

**Fix: Remove the bar background modifiers** (steps above)

Sources: [Apple: Adopting Liquid Glass \(Visual refresh\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass), [Apple: toolbarBackground\(\_:for:\)](https://developer.apple.com/documentation/swiftui/view/toolbarbackground(_:for:)), [Apple: toolbarBackgroundVisibility\(\_:for:\)](https://developer.apple.com/documentation/swiftui/view/toolbarbackgroundvisibility(_:for:))

### GLS005: Custom tab bar or bottom bar

`Trailhead/TrailMapView.swift:17`: The system tab bar is hidden with toolbar\(.hidden, for: .tabBar\).

**Fix: Use the system tab bar, or attach the custom bar with safeAreaBar** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/native-ios.md))

1. Where the custom bar only restyles tabs, use TabView with Tab and tabBarMinimizeBehavior\(\_:\) instead.
2. If the bar stays custom, attach it with safeAreaBar\(edge:alignment:spacing:content:\) so content under it gets the scroll edge effect, and consider glassEffect\(\_:in:\) for its background.

Sources: [Apple: Adopting Liquid Glass \(Controls, Navigation\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass), [Apple: UIScrollEdgeElementContainerInteraction](https://developer.apple.com/documentation/uikit/uiscrolledgeelementcontainerinteraction), [Apple: safeAreaBar\(edge:alignment:spacing:content:\)](https://developer.apple.com/documentation/swiftui/view/safeareabar(edge:alignment:spacing:content:))

### GLS007: Custom sheet or popover background

`Trailhead/TrailsView.swift:45`: presentationBackground replaces the sheet background.

**Fix: Remove presentationBackground for iOS 26 and later** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/native-ios.md))

1. Remove presentationBackground\(\_:\), or apply it only before iOS 26.
2. Look at the half-height detent: the sheet is inset and the content behind it shows around the edges.

Sources: [Apple: Adopting Liquid Glass \(Windows and modals\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass), [Apple: presentationBackground\(\_:\)](https://developer.apple.com/documentation/swiftui/view/presentationbackground(_:)), [Apple: UIPopoverPresentationController.backgroundColor](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontroller/backgroundcolor)

### GLS008: Fixed bar height or safe-area arithmetic

`Trailhead/TrailMapView.swift:14`: A tab bar height written as a number.

**Fix: Let the safe area carry the bar's height** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/native-ios.md))

1. Remove the fixed height; place bottom content with safeAreaInset\(edge:\) or safeAreaBar\(edge:alignment:spacing:content:\).

Sources: [Apple: Adopting Liquid Glass \(Controls, Windows and modals\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass), [Apple: UIView.safeAreaLayoutGuide](https://developer.apple.com/documentation/uikit/uiview/safearealayoutguide)

### GLS009: Section header written in capitals

`Trailhead/TrailsView.swift:27`: Section header "NEARBY" is written in capitals.

**Fix: Write the header in title case** ([guide](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/native-ios.md))

1. Write the header as "Account" instead of "ACCOUNT"; the system styles it.

Sources: [Apple: Adopting Liquid Glass \(Organization and layout\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass), [Apple: Section init\(content:header:\)](https://developer.apple.com/documentation/swiftui/section/init(content:header:))

### GLS009: Section header written in capitals

`Trailhead/TrailsView.swift:32`: Section header "SAVED" is written in capitals.

**Fix: Write the header in title case** (steps above)

Sources: [Apple: Adopting Liquid Glass \(Organization and layout\)](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass), [Apple: Section init\(content:header:\)](https://developer.apple.com/documentation/swiftui/section/init(content:header:))

</details>

1 error, 4 warnings, 3 info. Guide: [native iOS](https://github.com/muhittincamdali/glassready/blob/main/docs/guides/native-ios.md). Will it launch with the iOS 27 SDK? [sdkbump](https://github.com/muhittincamdali/sdkbump).

<sub>[glassready](https://github.com/muhittincamdali/glassready) 0.1.0, rules liquid-glass@2026.10.27 (iOS 27 SDK \(checked with Xcode 27.1, 27A9275, on the iOS 27.0 and iOS 26.4 simulators\)). Reads the project's files; it does not build or run the app.</sub>
