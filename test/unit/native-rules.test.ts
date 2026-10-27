import { describe, expect, it } from 'vitest';
import { sourceFile } from '../../src/collect/sources.js';
import type { Hit } from '../../src/rules/hit.js';
import { checkNativeFile } from '../../src/rules/native.js';

const swift = (code: string) => checkNativeFile(sourceFile('/app/App/View.swift', code));
const objc = (code: string) => checkNativeFile(sourceFile('/app/App/View.m', code));
const brief = (hits: Hit[]) => hits.map((hit) => `${hit.rule}:${hit.line} ${hit.message}`);
const rules = (hits: Hit[]) => hits.map((hit) => hit.rule);

describe('GLS002 bar appearance with its own background', () => {
  it('groups the settings of one appearance object into one hit at its first use', () => {
    const hits = swift(`import UIKit
let navigation = UINavigationBarAppearance()
navigation.configureWithOpaqueBackground()
navigation.backgroundColor = .red
navigation.shadowColor = .clear
navigation.titleTextAttributes = [:]
`);
    expect(brief(hits)).toEqual([
      'GLS002:3 UINavigationBarAppearance navigation: configureWithOpaqueBackground(), backgroundColor, shadowColor.',
    ]);
    expect(hits[0]?.variant).toBe('uikit');
  });

  it('reads typed declarations and Objective-C objects', () => {
    expect(
      rules(
        swift('var tabs: UITabBarAppearance = UITabBarAppearance()\ntabs.backgroundImage = image'),
      ),
    ).toEqual(['GLS002']);
    const hits = objc(`UIToolbarAppearance *bar = [[UIToolbarAppearance alloc] init];
[bar configureWithOpaqueBackground];
bar.backgroundEffect = nil;`);
    expect(brief(hits)).toEqual([
      'GLS002:2 UIToolbarAppearance bar: configureWithOpaqueBackground(), backgroundEffect.',
    ]);
  });

  it('reports settings on a bar appearance property and loose opaque configurations', () => {
    expect(brief(swift('bar.standardAppearance.backgroundColor = .white\n'))).toEqual([
      'GLS002:1 backgroundColor on a bar appearance.',
    ]);
    expect(
      brief(swift('func style(_ a: UIBarAppearance) { a.configureWithOpaqueBackground() }')),
    ).toEqual(['GLS002:1 configureWithOpaqueBackground() on a bar appearance.']);
  });

  it('leaves default and transparent configurations, comparisons and comments alone', () => {
    expect(
      swift(`let a = UINavigationBarAppearance()
a.configureWithDefaultBackground()
a.configureWithTransparentBackground()
if a.backgroundColor == nil {}
// a.backgroundColor = .red
let s = "a.configureWithOpaqueBackground()"`),
    ).toEqual([]);
  });
});

describe('GLS003 legacy bar colour and translucency', () => {
  it('finds barTintColor, isTranslucent = false, bar background images and shadow images', () => {
    const hits = swift(`UINavigationBar.appearance().barTintColor = .navy
navigationController?.navigationBar.isTranslucent = false
UINavigationBar.appearance().setBackgroundImage(UIImage(), for: .default, barMetrics: .default)
UITabBar.appearance().shadowImage = UIImage()
`);
    expect(rules(hits)).toEqual(['GLS003', 'GLS003', 'GLS003', 'GLS003']);
    expect(hits.map((hit) => hit.line)).toEqual([1, 2, 3, 4]);
  });

  it('finds the Objective-C forms', () => {
    expect(
      rules(
        objc(`[[UINavigationBar appearance] setBarTintColor:UIColor.redColor];
self.navigationController.navigationBar.translucent = NO;
[bar setBackgroundImage:img forBarPosition:UIBarPositionAny barMetrics:UIBarMetricsDefault];`),
      ),
    ).toEqual(['GLS003', 'GLS003', 'GLS003']);
  });

  it('does not take a button background image or isTranslucent = true', () => {
    expect(
      swift(`button.setBackgroundImage(image, for: .normal)
navigationBar.isTranslucent = true`),
    ).toEqual([]);
  });
});

describe('GLS004 SwiftUI bar background', () => {
  it('describes colour, visible and hidden backgrounds and skips automatic', () => {
    const hits = swift(`import SwiftUI
List {}
  .toolbarBackground(Color.green, for: .navigationBar)
  .toolbarBackground(.visible, for: .tabBar)
  .toolbarBackgroundVisibility(.hidden, for: .navigationBar, .bottomBar)
  .toolbarBackground(.automatic, for: .navigationBar)
`);
    expect(brief(hits)).toEqual([
      'GLS004:3 toolbarBackground(Color.green) sets the navigation bar background.',
      'GLS004:4 toolbarBackground(.visible) keeps the tab bar background visible.',
      'GLS004:5 toolbarBackgroundVisibility(.hidden) hides the navigation bar and bottom bar background.',
    ]);
  });

  it('is a Swift-only rule', () => {
    expect(objc('[view toolbarBackground];')).toEqual([]);
  });
});

describe('GLS005 custom tab bar', () => {
  it('finds UITabBar and UIToolbar subclasses but not UITabBarController ones', () => {
    expect(
      brief(swift('final class BrandTabBar: UITabBar {}\nclass Tabs: UITabBarController {}')),
    ).toEqual(['GLS005:1 BrandTabBar subclasses UITabBar.']);
    expect(brief(objc('@interface BrandBar : UIToolbar\n@end'))).toEqual([
      'GLS005:1 BrandBar subclasses UIToolbar.',
    ]);
  });

  it('finds a hidden system tab bar in UIKit and SwiftUI', () => {
    const hits = swift(`import SwiftUI
tabBarController?.tabBar.isHidden = true
MapView().toolbar(.hidden, for: .tabBar)
MapView().toolbarVisibility(.hidden, for: .navigationBar, .tabBar)
MapView().toolbar(.hidden, for: .navigationBar)`);
    expect(hits.map((hit) => `${hit.line} ${hit.variant}`)).toEqual([
      '2 swiftui',
      '3 swiftui',
      '4 swiftui',
    ]);
  });
});

describe('GLS006 blur layer', () => {
  it('finds UIBlurEffect in a file without UIGlassEffect', () => {
    expect(
      brief(swift('let v = UIVisualEffectView(effect: UIBlurEffect(style: .systemMaterial))')),
    ).toEqual(['GLS006:1 A UIBlurEffect view.']);
    expect(rules(objc('[UIBlurEffect effectWithStyle:UIBlurEffectStyleRegular];'))).toEqual([
      'GLS006',
    ]);
  });

  it('accepts a blur kept as the fallback of UIGlassEffect', () => {
    expect(
      swift(`if #available(iOS 26.0, *) { return UIVisualEffectView(effect: UIGlassEffect()) }
return UIVisualEffectView(effect: UIBlurEffect(style: .regular))`),
    ).toEqual([]);
  });
});

describe('GLS007 sheet and popover backgrounds', () => {
  it('finds presentationBackground and a popover background colour', () => {
    const hits = swift(`import SwiftUI
Text("x").presentationBackground(.thinMaterial)
controller.popoverPresentationController?.backgroundColor = .white`);
    expect(hits.map((hit) => `${hit.rule}:${hit.line} ${hit.variant}`)).toEqual([
      'GLS007:2 swiftui',
      'GLS007:3 uikit',
    ]);
  });
});

describe('GLS008 fixed bar geometry', () => {
  it('finds safe-area arithmetic, bar frame heights and tab bar heights', () => {
    const hits = swift(`let y = view.safeAreaInsets.bottom + 49
let z = 20 + window.safeAreaInsets.top
let h = tabBarController?.tabBar.frame.height ?? 0
let bar = UIView(); bar.heightAnchor.constraint(equalToConstant: 83)
Rectangle().frame(height: 83)`);
    expect(hits.map((hit) => hit.line)).toEqual([1, 2, 3, 4, 5]);
    expect(new Set(rules(hits))).toEqual(new Set(['GLS008']));
  });

  it('leaves other numbers alone', () => {
    expect(
      swift('let a = view.safeAreaInsets.bottom\nbutton.frame(height: 44)\nlet b = 490'),
    ).toEqual([]);
  });
});

describe('GLS009 section headers in capitals', () => {
  it('finds headers written in capitals only', () => {
    const hits = swift(`import SwiftUI
Section("NEARBY") {}
Section(header: Text("SAVED TRAILS")) {}
Section("Nearby") {}
Section("A") {}
Section("ID \\(x)") {}
Section(header: Text(title)) {}`);
    expect(brief(hits)).toEqual([
      'GLS009:2 Section header "NEARBY" is written in capitals.',
      'GLS009:3 Section header "SAVED TRAILS" is written in capitals.',
    ]);
  });
});

it('runs only on Swift and Objective-C files', () => {
  expect(checkNativeFile(sourceFile('/app/src/App.tsx', 'x.barTintColor = 1'))).toEqual([]);
});
