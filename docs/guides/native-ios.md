# Native UIKit and SwiftUI apps

Built with the iOS 27 SDK, a UIKit or SwiftUI app gets Liquid Glass in its navigation bars, tab
bars, toolbars, sheets and popovers, whether or not it sets `UIDesignRequiresCompatibility`
([why](opt-out.md)). Standard components need no code to adopt it. What needs work is code that
paints over them. Apple's [Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)
puts it this way:

> Any custom backgrounds and appearances you use in these elements might overlay or interfere with
> Liquid Glass or other effects that the system provides, such as the scroll edge effect.

```sh
glassready path/to/YourApp
```

## What glassready finds, and the fix for each

### GLS002 and GLS003: bar backgrounds set in UIKit

The most common pattern from the iOS 15 era is an opaque, coloured bar:

```swift
let appearance = UINavigationBarAppearance()
appearance.configureWithOpaqueBackground()   // GLS002
appearance.backgroundColor = .brandNavy      // GLS002 (same finding)
UINavigationBar.appearance().standardAppearance = appearance
UITabBar.appearance().isTranslucent = false  // GLS003
UIToolbar.appearance().barTintColor = .brandNavy  // GLS003
```

Keep the brand colour where Liquid Glass expects it, on tint:

```swift
UINavigationBar.appearance().tintColor = .brandNavy
UITabBar.appearance().tintColor = .brandNavy
```

If you support iOS 18 and earlier and want to keep the old look there, apply the appearance only
before iOS 26:

```swift
if #unavailable(iOS 26.0) {
    applyBrandAppearance()
}
```

In the iOS 27.0 simulator the [native-uikit-optout](../../fixtures/README.md) fixture,
which keeps an opaque navy navigation bar, shows no large title; the
[native-uikit-glass](../../fixtures/README.md) fixture, the same app with the fixes
above, shows it (first two screenshots below).

<p align="center"><img src="../media/simulator/fixtures-ios27.png" width="720" alt="Four apps on an iPhone 17 simulator with iOS 27.0, built with Xcode 27.1: the UIKit app with an opaque navy navigation bar and no large title; the same app after the fixes, with the large title and the floating Liquid Glass tab bar; the SwiftUI app with a green toolbar background; the Flutter app with its flat Cupertino tab bar"></p>

### GLS004: SwiftUI bar backgrounds

```swift
List { … }
    .toolbarBackground(Color.green, for: .navigationBar)          // GLS004
    .toolbarBackgroundVisibility(.visible, for: .navigationBar)   // GLS004
```

Remove both modifiers (or apply them before iOS 26 only) and use `.tint(_:)` for the brand colour.
`.automatic` is not reported.

### GLS005: custom tab bars and bottom bars

A `UITabBar` or `UIToolbar` subclass, `tabBar.isHidden = true` or
`.toolbar(.hidden, for: .tabBar)` usually means the app draws its own bar. That bar does not become
Liquid Glass and gets no scroll edge effect. Prefer the system tab bar (`UITab`, `Tab`, and
`tabBarMinimizeBehavior` cover many reasons for custom bars). If the bar stays custom, register it
for the scroll edge effect with
[`UIScrollEdgeElementContainerInteraction`](https://developer.apple.com/documentation/uikit/uiscrolledgeelementcontainerinteraction)
or attach it with
[`safeAreaBar(edge:alignment:spacing:content:)`](<https://developer.apple.com/documentation/swiftui/view/safeareabar(edge:alignment:spacing:content:)>).

### GLS006: blur layers

A `UIVisualEffectView` with a `UIBlurEffect` in a file that does not use `UIGlassEffect`. Behind a
popover or a sheet, remove it; behind a floating control, use `UIGlassEffect` on iOS 26 and keep the
blur as the fallback:

```swift
private lazy var panel: UIVisualEffectView = {
    if #available(iOS 26.0, *) {
        return UIVisualEffectView(effect: UIGlassEffect())
    }
    return UIVisualEffectView(effect: UIBlurEffect(style: .systemThickMaterial))
}()
```

A file that already uses `UIGlassEffect` is not reported, so the fallback above passes.

### GLS007: sheet and popover backgrounds

`presentationBackground(_:)` and `popoverPresentationController?.backgroundColor` replace the
background the system draws. Half sheets are now inset with content showing around them; check
them at the medium detent.

### GLS008: fixed bar geometry

`view.safeAreaInsets.bottom + 49`, a tab bar's `frame.height` read for layout, or a 49 or 83 point
height. Liquid Glass tab bars float and can minimize on scroll, so lay out against
`safeAreaLayoutGuide` instead.

### GLS009: section headers in capitals

Lists and forms now use title-style capitalization for section headers. A header written as
`"ACCOUNT"` stays in capitals while the others do not; write `"Account"`.

## What glassready does not see

- Code generated at build time, hidden behind macros, or in a dependency (Pods, Swift packages
  outside the app folder).
- Colours chosen at run time, for example from a remote theme.
- How the screen actually looks. Run the app on an iOS 27 simulator after the fixes.
