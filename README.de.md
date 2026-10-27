<!-- i18n-source: README.md@fa2325a0ed6c60d15fd52b0af4b056d302f9673a status=reviewed -->
<!-- brand:start -->

<p align="center"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg" alt="glassready: Shows what Liquid Glass changes in iOS, Flutter and React Native apps built with the iOS 27 SDK, and the fix for each."></picture></p>

<!-- lang-selector:start -->
<p align="center"><a href="README.md">English</a> · <a href="README.tr.md">Türkçe</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a></p>
<!-- lang-selector:end -->

<p align="center">
<a href="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml"><img src="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml/badge.svg" alt="CI-Status"></a>
<a href="https://github.com/muhittincamdali/glassready/releases"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg" alt="Aktuelle Version: v0.1.0"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/package.json"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg" alt="Sprachversion: Node.js 22.12+"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/LICENSE"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg" alt="Lizenz: MIT"></picture></a>
</p>

<p align="center">
<a href="#schnellstart"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-de-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-de-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-de-light.svg" alt="Loslegen"></picture></a>
<a href="https://muhittincamdali.github.io/glassready/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-de-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-de-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-de-light.svg" alt="Dokumentation"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/docs/guides"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-de-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-de-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-de-light.svg" alt="Anleitungen"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/examples"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-de-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-de-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-de-light.svg" alt="Beispiele"></picture></a>
</p>

> Dies ist eine Übersetzung der englischen README. Bei Abweichungen gilt die englische Fassung.

<!-- brand:end -->

Wenn du Liquid Glass mit `UIDesignRequiresCompatibility` aufgeschoben hast, ignoriert das iOS-27-SDK
diesen Schlüssel: Eine mit Xcode 27 gebaute App zeigt unter iOS 27 Liquid Glass, egal was in ihrer
Info.plist steht. glassready liest ein natives iOS-, Flutter- oder React-Native/Expo-Projekt und listet
auf, was sich dadurch ändert: das Opt-out und jede Stelle, an der die App die Leisten und Sheets
überdeckt, versteckt oder ausmisst, die Liquid Glass zeichnet, jeweils mit der passenden Lösung. Es liest
nur die Dateien deines Projekts; es baut, startet und ändert nichts.

<picture><source media="(prefers-color-scheme: dark)" srcset="docs/media/demo-uikit-optout-dark.svg"><source media="(prefers-color-scheme: light)" srcset="docs/media/demo-uikit-optout-light.svg"><img src="docs/media/demo-uikit-optout-light.svg" alt="glassready auf einer UIKit-App: Das Liquid-Glass-Opt-out wird beim Bauen mit dem iOS-27-SDK ignoriert; GLS001 das Opt-out in der Info.plist, GLS002 zwei undurchsichtige Leisten-Appearances, GLS003 isTranslucent und barTintColor, GLS006 ein Unschärfe-Panel, GLS008 ein fester Tab-Bar-Versatz, jeweils mit Lösung"></picture>

<sub>Aufgenommen mit dem echten CLI am <a href="fixtures/native-uikit-optout">Fixture
native-uikit-optout</a>, einer für die Tests geschriebenen UIKit-App (<code>npm run demo</code>).</sub>

## Highlights

- **Findet das Opt-out, wo auch immer es steht.** In einer Info.plist, als Build-Einstellung
  `INFOPLIST_KEY_UIDesignRequiresCompatibility` (die Xcode 27.1 nicht einmal in die generierte
  Info.plist kopiert) oder in einer Expo-Konfiguration.
- **Zeigt, was Liquid Glass verdeckt.** Im nativen Code: undurchsichtige Leisten-Appearances,
  `barTintColor`, SwiftUI-Toolbar-Hintergründe, eigene Tab-Bars, Unschärfe-Ebenen, Sheet-Hintergründe,
  feste Leistenhöhen und in Großbuchstaben geschriebene Abschnittsüberschriften. In React Native und
  Expo: Header-Farben, in JavaScript gezeichnete Tab-Bars und ignorierte Tab-Bar-Props. In Flutter: von
  Flutter gezeichnete Cupertino-Leisten und UIKit-Platform-Views.
- **Die Lösung für deine Art von Code.** UIKit, SwiftUI, React Native, Expo oder Flutter, mit je einer
  Anleitung und einer Liste der Liquid-Glass-APIs, die die App bereits verwendet.
- **Jede Regel hat eine Quelle.** Die Regeln sind Daten ([rules/liquid-glass.json](rules/liquid-glass.json))
  und verweisen auf die Seiten von Apple, React Navigation, Expo und Flutter; die Tests schlagen fehl,
  wenn eine Regel keine Quelle hat.
- **Im Simulator geprüft.** Mit Xcode 27.1 gebaut, zeigt dieselbe App mit und ohne den Schlüssel unter
  iOS 27.0 denselben Bildschirm und unter iOS 26.4 zwei verschiedene Designs. Die Aufnahmen und
  Screenshots liegen im Repository.
- **Für CI gemacht.** Berichte im Terminal, als Klartext, Markdown und JSON sowie ein Exit-Code: 0 sauber,
  1 Befunde, 2 Aufruffehler.

## Schnellstart

Du brauchst [Node.js](https://nodejs.org/) 22.12 oder neuer (`node --version` zeigt die Version an; auf
einem Mac installiert `brew install node` es). Mehr nicht.

**1. Öffne ein Terminal im Ordner deiner App**, in dem die `.xcodeproj`, `pubspec.yaml` oder
`package.json` liegt:

```sh
cd path/to/YourApp
```

**2. Starte glassready:**

```sh
npx @mcamdali/glassready
```

Das npm-Paket heißt `@mcamdali/glassready`; der Befehl, den es installiert, heißt `glassready`.

**3. Lies die Zeile unter dem Namen deines Projekts.** „The Liquid Glass opt-out is ignored“ (das
Liquid-Glass-Opt-out wird ignoriert) bedeutet, dass sich die App unter iOS 27 ändert, obwohl sie das
Opt-out gesetzt hat: Fang mit dem **ERROR** an, dann die **WARNING**-Befunde, also die Stellen, an denen
dein Code die neuen Leisten überdeckt. Die **INFO**-Befunde solltest du dir in einem iOS-27-Simulator
ansehen. Jeder Befund nennt seine Lösung mit dem Namen aus der Liste „How to fix“.

## Was sich ändert, wenn du mit dem iOS-27-SDK baust

Von Apples Seite
[UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility):

> The system ignores this key when you build for iOS 27 or later, iPadOS 27 or later, Mac Catalyst
> 27 or later, macOS 27 or later, or tvOS 27 or later.

Wir haben dieselbe UIKit-App zweimal mit Xcode 27.1 gebaut, mit und ohne den Schlüssel, und die
Screenshots auf einem iPhone-17-Simulator verglichen ([so geht's](docs/guides/opt-out.md#what-we-saw-in-the-simulator)):

| Simulator | Derselbe Bildschirm mit und ohne den Schlüssel?                                               |
| --------- | --------------------------------------------------------------------------------------------- |
| iOS 27.0  | ja: 0 Pixel unterscheiden sich oberhalb des Home-Indikators; der Schlüssel wird ignoriert     |
| iOS 26.4  | nein: 361.909 von 3.089.772 Pixeln unterscheiden sich; mit dem Schlüssel behält die App das Design früherer SDKs |

<p align="center"><img src="docs/media/simulator/opt-out-ios26-ios27.png" width="720" alt="Das Fixture native-uikit-optout auf einem iPhone-17-Simulator, gebaut mit Xcode 27.1. Von links: iOS 26.4 mit dem Schlüssel (Tab-Bar in voller Breite, großer Titel), iOS 26.4 ohne ihn (schwebende Liquid-Glass-Tab-Bar), iOS 27.0 mit dem Schlüssel und iOS 27.0 ohne ihn (beide mit der schwebenden Liquid-Glass-Tab-Bar)"></p>

Solange der Schlüssel in der Info.plist steht, zeigt ein und derselbe Build also zwei Designs: das alte
unter iOS 26 und Liquid Glass unter iOS 27. Apples
[Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)
listet auf, was du als Nächstes prüfen solltest; die Regeln unten folgen dieser Seite.

Welches SDK ein Upload verwenden muss, legt App Store Connect auf Apples Seite
[Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) fest. Am 27. Oktober
2026 war das Xcode 26 mit dem iOS-26-SDK (seit dem 28. April 2026). Sobald es auf das iOS-27-SDK
wechselt, gilt die erste Zeile für jeden Upload.

## Was glassready prüft

| Regel  | Schweregrad | Befund                                                                                                     | Code               |
| ------ | ----------- | ---------------------------------------------------------------------------------------------------------- | ------------------ |
| GLS001 | error       | `UIDesignRequiresCompatibility` ist in der Info.plist, als Build-Einstellung oder in einer Expo-Konfiguration auf YES gesetzt | alle    |
| GLS002 | warning     | Eine Leisten-Appearance mit `configureWithOpaqueBackground()` oder mit eigener Hintergrundfarbe, eigenem Bild, Effekt oder Schatten | UIKit |
| GLS003 | warning     | `barTintColor`, `isTranslucent = false`, Hintergrund- oder Schattenbilder von Leisten                       | UIKit              |
| GLS004 | warning     | `toolbarBackground` / `toolbarBackgroundVisibility` mit einem anderen Wert als `.automatic`                | SwiftUI            |
| GLS005 | warning     | Eine Unterklasse von `UITabBar` oder `UIToolbar` oder die für eine eigene ausgeblendete System-Tab-Bar     | UIKit, SwiftUI     |
| GLS006 | info        | Eine `UIBlurEffect`-View in einer Datei, die `UIGlassEffect` nicht verwendet                               | UIKit              |
| GLS007 | warning     | `presentationBackground` oder die `backgroundColor` eines Popovers                                         | SwiftUI, UIKit     |
| GLS008 | info        | Eine Zahl, die auf die Safe-Area-Insets addiert wird, eine fürs Layout gelesene Frame-Höhe einer Leiste, eine Tab-Bar mit 49 oder 83 Punkten | alle außer Flutter |
| GLS009 | info        | Eine in Großbuchstaben geschriebene Abschnittsüberschrift                                                  | SwiftUI            |
| GLS101 | warning     | Ein nativer Stack-Header mit `headerStyle.backgroundColor`, `headerBackground` oder `headerBlurEffect`     | React Native, Expo |
| GLS102 | info        | Eine in JavaScript gezeichnete Tab-Bar: `createBottomTabNavigator`, Expo-Router-`Tabs`, eine eigene `tabBar` | React Native, Expo |
| GLS103 | info        | Props der nativen Tab-Bar, die iOS 26 und neuer ignorieren (`backgroundColor`, `blurEffect`, …)            | React Native, Expo |
| GLS104 | warning     | Native Bottom-Tabs mit `react-native-screens` älter als 4.30.0                                             | React Native       |
| GLS201 | info        | Eine Cupertino-Leiste, die Flutter selbst zeichnet                                                         | Flutter            |
| GLS202 | info        | Eine `UiKitView` mit UIKit-Steuerelementen neben Flutter-Widgets                                           | Flutter            |

Regeldaten `liquid-glass@2026.10.27`, geprüft gegen Xcode 27.1 (27A9275). Der Bericht listet außerdem
die Liquid-Glass-APIs auf, die die App bereits verwendet (`UIGlassEffect`, `glassEffect`, Glass-Button-
Styles, `safeAreaBar`, `NativeTabs` und weitere), und einen Auswirkungswert: 50 für das Opt-out, 6 pro
warning, 2 pro info-Befund, höchstens 100. Der Wert sortiert Projekte; er bewertet nicht das Design.

## Installation

Starte es ohne Installation (siehe oben) oder installiere den Befehl `glassready` über npm:

```sh
npm i -g @mcamdali/glassready
glassready
```

In einem Projekt legt `npm install --save-dev @mcamdali/glassready` eine Version fest, und `npx glassready`
führt dann diese Kopie aus. Jedes [GitHub-Release](https://github.com/muhittincamdali/glassready/releases)
enthält dasselbe Paket als `glassready-<version>.tgz` mit einer Datei `SHA256SUMS`. Mit Homebrew:
`brew install muhittincamdali/tap/glassready`.

## Verwendung

```text
glassready [path] [options]
```

| Option                  | Was sie bewirkt                                                            |
| ----------------------- | -------------------------------------------------------------------------- |
| `path`                  | Projektordner oder `.xcodeproj`; Standard ist der aktuelle Ordner          |
| `-f, --format <format>` | `tty` (Standard), `text`, `markdown` oder `json`                           |
| `--json`                | Dasselbe wie `--format json`                                               |
| `-o, --output <file>`   | Schreibt den Bericht in eine Datei statt ins Terminal                      |
| `--fail-on <severity>`  | `warning` (Standard), `error`, `info` oder `none`: ab wann der Exit-Code 1 ist |
| `--no-color`            | Klartext auch in einem Terminal (`NO_COLOR` und `FORCE_COLOR` werden beachtet) |

Exit-Codes: `0` nichts auf oder über der Stufe von `--fail-on`, `1` Befunde auf oder über dieser Stufe,
`2` falsche Argumente, kein iOS-Projekt gefunden oder ein unerwarteter Fehler.

glassready findet die iOS-App von selbst: bei nativen Apps ein `.xcodeproj` im Stammordner oder einen
Ordner darunter, bei Flutter-, React-Native- und Expo-Apps `ios/` (`example/ios/` bei einem
Flutter-Plugin). Es liest die Info.plist (XML oder binär) und die Build-Einstellungen jedes iOS-App-Targets,
die Swift- und Objective-C-Dateien der App, das JavaScript und TypeScript einer React-Native- oder
Expo-App sowie die Dart-Dateien in `lib/` und überspringt Abhängigkeiten, Build-Ausgaben und Tests. Eine
Expo-App ohne `ios/` wird anhand ihrer Konfiguration geprüft.

### Einen Markdown-Bericht beim Code aufbewahren

```sh
npx @mcamdali/glassready --format markdown --output glassready.md
```

### Den JSON-Bericht in Skripten verwenden

```sh
npx @mcamdali/glassready --json > glassready.json
```

Jeder Befund hat `rule`, `severity`, `title`, `message`, `file`, `line`, `target`, den `fix` mit seinen
Schritten und seiner Anleitung sowie `sources`. Das Format ist `schemaVersion` 0 und kann sich vor 1.0
ändern. [examples/shell/opt-out-targets.sh](examples/shell/opt-out-targets.sh) filtert ihn mit `jq`.

### In CI ausführen

[examples/github-actions/glassready.yml](examples/github-actions/glassready.yml) fügt den Bericht der
Job-Zusammenfassung jedes Pull Requests hinzu, der die App berührt, und lässt den Job bei warnings
fehlschlagen. `--fail-on error` schlägt nur beim ignorierten Opt-out fehl.

### Aus JavaScript

```js
import { render, scan } from '@mcamdali/glassready';

const report = await scan('path/to/app');
console.log(report.verdict.text, report.impact.level);
console.log(render(report, 'markdown'));
```

Eine lauffähige Version ist [examples/api/impact.mjs](examples/api/impact.mjs).

## Demo

Die Terminal-Aufnahmen stammen vom CLI auf den [Fixtures](fixtures/README.md), Projekten, die mit der
jeweiligen Toolchain erstellt wurden:

| Projekt                                                                  | Aufnahme                                                                                                                                    |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| UIKit-App mit dem Opt-out und undurchsichtigen Leisten                   | oben auf dieser Seite                                                                                                                       |
| React-Native-0.88.1-App mit einem nativen Stack und JavaScript-Tabs      | [hell](docs/media/demo-react-native-light.svg) · [dunkel](docs/media/demo-react-native-dark.svg)                                            |
| Flutter-3.47.5-App mit Cupertino-Leisten und einer `UiKitView`           | [hell](docs/media/demo-flutter-light.svg) · [dunkel](docs/media/demo-flutter-dark.svg)                                                      |
| SwiftUI-App mit Toolbar-Hintergründen und einer eigenen unteren Leiste   | [hell](docs/media/demo-swiftui-light.svg) · [dunkel](docs/media/demo-swiftui-dark.svg)                                                      |
| `scripts/simulator-compare.sh` unter iOS 27.0 und iOS 26.4               | [27.0](docs/media/demo-simulator-native-uikit-optout-27.0-light.svg) · [26.4](docs/media/demo-simulator-native-uikit-optout-26.4-light.svg) |

Vier Fixtures auf einem iPhone-17-Simulator mit iOS 27.0, gebaut mit Xcode 27.1: die UIKit-App mit ihrer
undurchsichtigen marineblauen Leiste (kein großer Titel zu sehen), dieselbe App nach den Korrekturen, die
SwiftUI-App mit ihrem grünen Toolbar-Hintergrund und die Flutter-App mit der flachen Tab-Bar, die Flutter
zeichnet:

<p align="center"><img src="docs/media/simulator/fixtures-ios27.png" width="720" alt="Vier Fixtures auf einem iPhone-17-Simulator mit iOS 27.0, gebaut mit Xcode 27.1: native-uikit-optout, native-uikit-glass, native-swiftui und flutter-cupertino"></p>

Gemessen am 27. Oktober 2026 auf einem Mac (Apple silicon, M5 Max) mit Node.js 26.11: drei Durchgänge
mit je 100 Läufen von `node dist/cli/main.js --json` über die sieben Fixtures, einschließlich des
Node.js-Starts. Die Mediane der drei Durchgänge betrugen 0,12, 0,12 und 0,11 Sekunden; der langsamste
Lauf dauerte 0,17 Sekunden.

## Status

| Funktion                                                                                      | Status          |
| --------------------------------------------------------------------------------------------- | --------------- |
| Erkennung nativer, Flutter- (App und Plugin-Beispiel), React-Native- und Expo-Projekte        | funktioniert    |
| GLS001 in Info.plist, Build-Einstellungen und Expo-Konfiguration (app.json; app.config.js/ts als Text) | funktioniert |
| GLS002 bis GLS009 für Swift und Objective-C; GLS101 bis GLS104 für JavaScript und TypeScript  | funktioniert    |
| GLS201 und GLS202 für Dart                                                                    | funktioniert    |
| Berichte im Terminal, als Text, Markdown und JSON; Auswirkungswert; verwendete APIs; Exit-Codes von `--fail-on` | funktioniert |
| Abhängigkeiten (Pods, `node_modules`, Flutter-Plugins) und `.xcconfig`-Build-Einstellungen    | geplant (0.2)   |
| SARIF-Ausgabe und eine GitHub Action                                                          | geplant (0.3)   |
| Swift-Syntaxbäume statt Mustern; Screenshots vom CLI im Simulator                             | geplant (0.5)   |
| Stabiles Regelschema und stabiles JSON-Format                                                 | geplant (1.0)   |

## Grenzen

- **Muster, kein Compiler.** Die Regeln sind reguläre Ausdrücke über den Quelltext, in dem Kommentare
  und Strings geleert sind. Code, der generiert, hinter Makros versteckt, zur Laufzeit aufgebaut oder in
  ungewöhnlicher Form geschrieben ist, kann übersehen oder fälschlich erkannt werden.
- **Nur der eigene Quelltext der App.** Pods, Swift-Pakete außerhalb des App-Ordners, `node_modules` und
  Flutter-Plugins werden nicht gelesen.
- **Build-Einstellungen nur aus project.pbxproj.** `.xcconfig`-Dateien werden nicht gelesen. Wenn die
  Info.plist eines Targets nicht gelesen werden kann, lautet sein Opt-out-Zustand „unbekannt“, und der
  Bericht nennt den Grund.
- **Expo-Konfiguration als Text.** `app.config.js` und `app.config.ts` werden nicht ausgeführt, ein über
  eine Variable oder ein Config-Plugin gesetztes Opt-out wird daher nicht erkannt.
- **Nur Dateien.** glassready baut die App nicht und sieht sich ihre Bildschirme nicht an. Die
  Simulator-Aufnahmen in diesem Repository stammen von den Skripten in `scripts/`, die auf einem Mac
  laufen.

## Dokumentation

API-Referenz und Anleitungen: [muhittincamdali.github.io/glassready](https://muhittincamdali.github.io/glassready/).

## Anleitungen

- [Warum das Liquid-Glass-Opt-out nicht mehr funktioniert](docs/guides/opt-out.md)
- [Native UIKit- und SwiftUI-Apps](docs/guides/native-ios.md)
- [React-Native- und Expo-Apps](docs/guides/react-native-expo.md)
- [Flutter-Apps](docs/guides/flutter.md)

## Quellen

Gelesen am 27. Oktober 2026:

- Apple: [UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility),
  [Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass),
  [Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) und die API-Seiten,
  die jede Regel in [rules/liquid-glass.json](rules/liquid-glass.json) verlinkt.
- React Navigation: [Native Stack](https://reactnavigation.org/docs/native-stack-navigator/),
  [Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator/),
  [Native Bottom Tabs](https://reactnavigation.org/docs/native-bottom-tab-navigator/).
- Expo: [JavaScript tabs](https://docs.expo.dev/router/advanced/tabs/),
  [Native tabs](https://docs.expo.dev/router/advanced/native-tabs/),
  [app config `ios.infoPlist`](https://docs.expo.dev/versions/latest/config/app/).
- Flutter: [issue 170310](https://github.com/flutter/flutter/issues/170310),
  [cupertino_ui changelog](https://pub.dev/packages/cupertino_ui/changelog),
  [platform views on iOS](https://docs.flutter.dev/platform-integration/ios/platform-views).

## Voraussetzungen

Node.js 22.12 oder neuer unter macOS, Linux oder Windows. Um ein Projekt zu lesen, brauchst du nichts
weiter: kein Xcode, keine Flutter- oder React-Native-Toolchain. Die Simulator-Skripte brauchen einen Mac
mit Xcode, XcodeGen und ImageMagick.

## Architektur

```text
detectProject      native | flutter | react-native | expo, the iOS folder, package versions
  ─► collectApp    app targets, Info.plist files, build settings, blanked sources
  ─► checkApp      GLS001 opt-out · GLS002–009 native · GLS101–104 React Native · GLS201–202 Flutter
                   rules/liquid-glass.json: what each rule says, fixes, sources (validated with zod)
  ─► scan          findings, verdict, impact score, adopted APIs
  ─► render        tty | text | markdown | json
```

- Die Regeldaten sind vom Code getrennt und versioniert (`liquid-glass@2026.10.27`); die Tests schlagen
  fehl, wenn eine Regel keine Quelle hat oder eine Anleitung nennt, die es nicht gibt.
- Das CLI (`src/cli/`) wertet nur Argumente aus, wählt Farben und Breiten und setzt den Exit-Code.

## Verwandt

[sdkbump](https://github.com/muhittincamdali/sdkbump) beantwortet die andere Frage zum iOS-27-SDK: Startet
die App noch? Es prüft den UIScene-Lebenszyklus, den Apps, die mit dem iOS-27-SDK gebaut werden, übernehmen
müssen. glassready beantwortet, wie die App aussehen wird. Führe vor dem ersten Xcode-27-Build beide aus.

## FAQ

**Meine App läuft heute unter iOS 27 und sieht immer noch gleich aus. Ist sie betroffen?** Apples
Dokumentation knüpft die Änderung an das SDK, mit dem die App gebaut wird, ein mit Xcode 26 erstellter
Build sollte sein Design also behalten; das konnten wir hier nicht prüfen, weil nur Xcode 27.1 installiert
war. Dein nächster Build mit Xcode 27 ignoriert den Schlüssel.

**Ist eine GLS002- oder GLS004-Warnung immer ein Fehler?** Nein. Eine Markenfarbe auf einer Leiste kann
eine bewusste Entscheidung sein. Die Warnung sagt, dass der Code die Leiste überdeckt, die Liquid Glass
zeichnet; sieh dir den Bildschirm in einem iOS-27-Simulator an und entscheide.

**Ändert glassready mein Projekt?** Nein. Es liest es und schreibt nur den Bericht, den du anforderst.

## Mitwirken

Beiträge sind willkommen. Lies vor einem Pull Request den [Leitfaden für Beiträge](CONTRIBUTING.md) und den [Verhaltenskodex](https://github.com/muhittincamdali/.github/blob/main/CODE_OF_CONDUCT.md). Sicherheitsprobleme meldest du vertraulich, wie in der [Sicherheitsrichtlinie](SECURITY.md) beschrieben.

## Lizenz

Veröffentlicht unter der MIT-Lizenz. Siehe [LICENSE](LICENSE).
