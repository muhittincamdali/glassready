<!-- i18n-source: README.md@34a80696b1bc00199e38cbe6a09694740b5c1812 status=reviewed -->
<!-- brand:start -->

<p align="center"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg" alt="glassready: Shows what Liquid Glass changes in iOS, Flutter and React Native apps built with the iOS 27 SDK, and the fix for each."></picture></p>

<!-- lang-selector:start -->
<p align="center"><a href="README.md">English</a> · <a href="README.tr.md">Türkçe</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a></p>
<!-- lang-selector:end -->

<p align="center">
<a href="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml"><img src="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml/badge.svg" alt="État de la CI"></a>
<a href="https://github.com/muhittincamdali/glassready/releases"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg" alt="Dernière version: v0.1.0"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/package.json"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg" alt="Version du langage: Node.js 22.12+"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/LICENSE"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg" alt="Licence: MIT"></picture></a>
</p>

<p align="center">
<a href="#démarrage-rapide"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-fr-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-fr-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-fr-light.svg" alt="Commencer"></picture></a>
<a href="https://muhittincamdali.github.io/glassready/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-fr-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-fr-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-fr-light.svg" alt="Documentation"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/docs/guides"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-fr-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-fr-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-fr-light.svg" alt="Guides"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/examples"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-fr-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-fr-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-fr-light.svg" alt="Exemples"></picture></a>
</p>

> Ceci est une traduction du README anglais. En cas de différence, la version anglaise fait foi.

<!-- brand:end -->

Si vous avez reporté Liquid Glass avec `UIDesignRequiresCompatibility`, le SDK d’iOS 27 ignore cette clé :
une app compilée avec Xcode 27 affiche Liquid Glass sous iOS 27, quel que soit le contenu de son
Info.plist. glassready lit un projet iOS natif, Flutter ou React Native/Expo et énumère ce que cela va
changer : l’opt-out, et chaque endroit où l’app recouvre, masque ou mesure les barres et les sheets que
dessine Liquid Glass, avec la correction pour chacun. Il lit les fichiers de votre projet ; il ne compile
rien, n’exécute rien et ne modifie rien.

<picture><source media="(prefers-color-scheme: dark)" srcset="docs/media/demo-uikit-optout-dark.svg"><source media="(prefers-color-scheme: light)" srcset="docs/media/demo-uikit-optout-light.svg"><img src="docs/media/demo-uikit-optout-light.svg" alt="glassready exécuté sur une app UIKit : l’opt-out de Liquid Glass est ignoré avec le SDK d’iOS 27 ; GLS001 l’opt-out dans Info.plist, GLS002 deux apparences de barre opaques, GLS003 isTranslucent et barTintColor, GLS006 un panneau de flou, GLS008 un décalage fixe de la tab bar, chacun avec sa correction"></picture>

<sub>Enregistré avec le vrai CLI sur le <a href="fixtures/native-uikit-optout">fixture
native-uikit-optout</a>, une app UIKit écrite pour les tests (<code>npm run demo</code>).</sub>

## Points forts

- **Trouve l’opt-out où qu’il soit.** Dans un Info.plist, comme réglage de build
  `INFOPLIST_KEY_UIDesignRequiresCompatibility` (que Xcode 27.1 ne copie même pas dans l’Info.plist
  généré), ou dans une configuration Expo.
- **Montre ce qui recouvre Liquid Glass.** Dans le code natif : apparences de barre opaques,
  `barTintColor`, arrière-plans de toolbar SwiftUI, tab bars personnalisées, couches de flou, arrière-plans
  de sheet, hauteurs de barre fixes et titres de section en majuscules. Dans React Native et Expo :
  couleurs d’en-tête, tab bars dessinées en JavaScript et props de tab bar ignorées. Dans Flutter : barres
  Cupertino dessinées par Flutter et platform views UIKit.
- **La correction adaptée à votre type de code.** UIKit, SwiftUI, React Native, Expo ou Flutter, avec un
  guide pour chacun et la liste des API Liquid Glass que l’app utilise déjà.
- **Chaque règle a une source.** Les règles sont des données ([rules/liquid-glass.json](rules/liquid-glass.json))
  qui citent les pages d’Apple, de React Navigation, d’Expo et de Flutter ; les tests échouent si une
  règle n’en a pas.
- **Vérifié dans le simulateur.** Compilée avec Xcode 27.1, la même app avec et sans la clé affiche le même
  écran sous iOS 27.0 et deux designs différents sous iOS 26.4. Les enregistrements et les captures
  d’écran sont dans le dépôt.
- **Pensé pour la CI.** Rapports pour le terminal, en texte brut, en Markdown et en JSON, et un code de
  sortie : 0 aucun résultat, 1 des résultats, 2 erreur d’usage.

## Démarrage rapide

Il vous faut [Node.js](https://nodejs.org/) 22.12 ou plus récent (`node --version` affiche la version ;
sur un Mac, `brew install node` l’installe). Rien d’autre.

**1. Ouvrez un terminal dans le dossier de votre app**, celui qui contient le `.xcodeproj`, `pubspec.yaml`
ou `package.json` :

```sh
cd path/to/YourApp
```

**2. Lancez glassready :**

```sh
npx @mcamdali/glassready
```

Le paquet npm s’appelle `@mcamdali/glassready` ; la commande qu’il installe est `glassready`.

**3. Lisez la ligne sous le nom de votre projet.** « The Liquid Glass opt-out is ignored » (l’opt-out de
Liquid Glass est ignoré) signifie que l’app change sous iOS 27 même si elle fait l’opt-out : commencez
par l’**ERROR**, puis les résultats **WARNING**, qui sont les endroits où votre code recouvre les
nouvelles barres. Les résultats **INFO** méritent un coup d’œil dans un simulateur iOS 27. Chaque
résultat nomme sa correction, tirée de la liste « How to fix ».

## Ce qui change quand vous compilez avec le SDK d’iOS 27

Extrait de la page d’Apple
[UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility) :

> The system ignores this key when you build for iOS 27 or later, iPadOS 27 or later, Mac Catalyst
> 27 or later, macOS 27 or later, or tvOS 27 or later.

Nous avons compilé deux fois la même app UIKit avec Xcode 27.1, avec et sans la clé, et comparé les
captures d’écran sur un simulateur d’iPhone 17 ([comment](docs/guides/opt-out.md#what-we-saw-in-the-simulator)) :

| Simulateur | Même écran avec et sans la clé ?                                                             |
| ---------- | -------------------------------------------------------------------------------------------- |
| iOS 27.0   | oui : 0 pixel de différence au-dessus de l’indicateur d’accueil ; la clé est ignorée         |
| iOS 26.4   | non : 361 909 pixels sur 3 089 772 diffèrent ; avec la clé, l’app conserve le design des SDK précédents |

<p align="center"><img src="docs/media/simulator/opt-out-ios26-ios27.png" width="720" alt="Le fixture native-uikit-optout sur un simulateur d’iPhone 17, compilé avec Xcode 27.1. De gauche à droite : iOS 26.4 avec la clé (tab bar pleine largeur, grand titre), iOS 26.4 sans la clé (tab bar Liquid Glass flottante), iOS 27.0 avec la clé et iOS 27.0 sans la clé (toutes deux avec la tab bar Liquid Glass flottante)"></p>

Tant que la clé reste dans l’Info.plist, une même compilation affiche donc deux designs : l’ancien sous
iOS 26 et Liquid Glass sous iOS 27. La page d’Apple
[Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)
énumère ce qu’il faut examiner ensuite ; les règles ci-dessous la suivent.

Le SDK qu’un envoi doit utiliser est fixé par App Store Connect sur la page d’Apple
[Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/). Le 27 octobre 2026,
c’était Xcode 26 avec le SDK d’iOS 26 (depuis le 28 avril 2026). Quand cela passera au SDK d’iOS 27, la
première ligne s’appliquera à chaque envoi.

## Ce que glassready vérifie

| Règle  | Gravité | Résultat                                                                                                      | Code               |
| ------ | ------- | ------------------------------------------------------------------------------------------------------------- | ------------------ |
| GLS001 | error   | `UIDesignRequiresCompatibility` vaut YES dans l’Info.plist, comme réglage de build ou dans une configuration Expo | tous           |
| GLS002 | warning | Une apparence de barre avec `configureWithOpaqueBackground()` ou avec sa propre couleur de fond, image, effet ou ombre | UIKit      |
| GLS003 | warning | `barTintColor`, `isTranslucent = false`, images de fond ou d’ombre de la barre                                | UIKit              |
| GLS004 | warning | `toolbarBackground` / `toolbarBackgroundVisibility` autre que `.automatic`                                    | SwiftUI            |
| GLS005 | warning | Une sous-classe de `UITabBar` ou `UIToolbar`, ou la tab bar système masquée au profit d’une personnalisée     | UIKit, SwiftUI     |
| GLS006 | info    | Une vue `UIBlurEffect` dans un fichier qui n’utilise pas `UIGlassEffect`                                      | UIKit              |
| GLS007 | warning | `presentationBackground` ou le `backgroundColor` d’un popover                                                 | SwiftUI, UIKit     |
| GLS008 | info    | Un nombre ajouté aux insets de la zone sûre, la hauteur de frame d’une barre lue pour la mise en page, une tab bar de 49 ou 83 points | tous sauf Flutter |
| GLS009 | info    | Un titre de section écrit en majuscules                                                                       | SwiftUI            |
| GLS101 | warning | Un en-tête de native stack avec `headerStyle.backgroundColor`, `headerBackground` ou `headerBlurEffect`       | React Native, Expo |
| GLS102 | info    | Une tab bar dessinée en JavaScript : `createBottomTabNavigator`, `Tabs` d’Expo Router, une `tabBar` personnalisée | React Native, Expo |
| GLS103 | info    | Des props de tab bar native que iOS 26 et les versions suivantes ignorent (`backgroundColor`, `blurEffect`, …) | React Native, Expo |
| GLS104 | warning | Des bottom tabs natifs avec `react-native-screens` antérieur à 4.30.0                                         | React Native       |
| GLS201 | info    | Une barre Cupertino que Flutter dessine lui-même                                                              | Flutter            |
| GLS202 | info    | Un `UiKitView` avec des contrôles UIKit à côté de widgets Flutter                                             | Flutter            |

Données de règles `liquid-glass@2026.10.27`, vérifiées avec Xcode 27.1 (27A9275). Le rapport énumère aussi
les API Liquid Glass que l’app utilise déjà (`UIGlassEffect`, `glassEffect`, styles de bouton glass,
`safeAreaBar`, `NativeTabs` et d’autres) et un score d’impact : 50 pour l’opt-out, 6 par warning, 2 par
résultat info, 100 au maximum. Le score sert à classer les projets ; il ne note pas le design.

## Installation

Lancez-le sans l’installer (voir ci-dessus) ou installez la commande `glassready` depuis npm :

```sh
npm i -g @mcamdali/glassready
glassready
```

Dans un projet, `npm install --save-dev @mcamdali/glassready` fixe une version, et `npx glassready`
exécute ensuite cette copie. Chaque [GitHub release](https://github.com/muhittincamdali/glassready/releases)
contient le même paquet sous le nom `glassready-<version>.tgz`, avec un fichier `SHA256SUMS`, et npm peut aussi
l’installer depuis là :

```sh
npm i -g https://github.com/muhittincamdali/glassready/releases/download/v0.1.0/glassready-0.1.0.tgz
```

Avec Homebrew : `brew install muhittincamdali/tap/glassready`.

## Utilisation

```text
glassready [path] [options]
```

| Option                  | Effet                                                                      |
| ----------------------- | -------------------------------------------------------------------------- |
| `path`                  | Dossier du projet ou `.xcodeproj` ; par défaut, le dossier courant         |
| `-f, --format <format>` | `tty` (par défaut), `text`, `markdown` ou `json`                           |
| `--json`                | Identique à `--format json`                                                |
| `-o, --output <file>`   | Écrit le rapport dans un fichier au lieu du terminal                       |
| `--fail-on <severity>`  | `warning` (par défaut), `error`, `info` ou `none` : quand le code de sortie vaut 1 |
| `--no-color`            | Texte brut même dans un terminal (`NO_COLOR` et `FORCE_COLOR` sont respectés) |

Codes de sortie : `0` rien au niveau de `--fail-on` ou au-dessus, `1` des résultats à ce niveau ou
au-dessus, `2` arguments incorrects, aucun projet iOS trouvé ou erreur inattendue.

glassready trouve seul l’app iOS : un `.xcodeproj` à la racine ou un dossier plus bas pour les apps
natives, `ios/` pour les apps Flutter, React Native et Expo (`example/ios/` pour un plugin Flutter). Il lit
l’Info.plist (XML ou binaire) et les réglages de build de chaque target d’app iOS, les fichiers Swift et
Objective-C de l’app, le JavaScript et le TypeScript d’une app React Native ou Expo et les fichiers Dart
de `lib/`, en ignorant les dépendances, les sorties de build et les tests. Une app Expo sans `ios/` est
vérifiée à partir de sa configuration.

### Conserver un rapport Markdown avec le code

```sh
npx @mcamdali/glassready --format markdown --output glassready.md
```

### Utiliser le rapport JSON dans des scripts

```sh
npx @mcamdali/glassready --json > glassready.json
```

Chaque résultat a `rule`, `severity`, `title`, `message`, `file`, `line`, `target`, le `fix` avec ses
étapes et son guide, et `sources`. La structure est `schemaVersion` 0 et peut changer avant la 1.0.
[examples/shell/opt-out-targets.sh](examples/shell/opt-out-targets.sh) la filtre avec `jq`.

### L’exécuter en CI

[examples/github-actions/glassready.yml](examples/github-actions/glassready.yml) ajoute le rapport au
résumé du job de chaque pull request qui touche l’app et fait échouer le job en cas de warnings.
`--fail-on error` n’échoue que pour l’opt-out ignoré.

### Depuis JavaScript

```js
import { render, scan } from '@mcamdali/glassready';

const report = await scan('path/to/app');
console.log(report.verdict.text, report.impact.level);
console.log(render(report, 'markdown'));
```

Une version exécutable se trouve dans [examples/api/impact.mjs](examples/api/impact.mjs).

## Démo

Les enregistrements du terminal proviennent du CLI sur les [fixtures](fixtures/README.md), des projets
créés avec chaque toolchain :

| Projet                                                                   | Enregistrement                                                                                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| App UIKit avec l’opt-out et des barres opaques                           | en haut de cette page                                                                                                                       |
| App React Native 0.88.1 avec un native stack et des tabs en JavaScript   | [clair](docs/media/demo-react-native-light.svg) · [sombre](docs/media/demo-react-native-dark.svg)                                           |
| App Flutter 3.47.5 avec des barres Cupertino et un `UiKitView`           | [clair](docs/media/demo-flutter-light.svg) · [sombre](docs/media/demo-flutter-dark.svg)                                                     |
| App SwiftUI avec des arrière-plans de toolbar et une barre du bas personnalisée | [clair](docs/media/demo-swiftui-light.svg) · [sombre](docs/media/demo-swiftui-dark.svg)                                              |
| `scripts/simulator-compare.sh` sous iOS 27.0 et iOS 26.4                 | [27.0](docs/media/demo-simulator-native-uikit-optout-27.0-light.svg) · [26.4](docs/media/demo-simulator-native-uikit-optout-26.4-light.svg) |

Quatre fixtures sur un simulateur d’iPhone 17 sous iOS 27.0, compilés avec Xcode 27.1 : l’app UIKit avec sa
barre bleu marine opaque (sans grand titre), la même app après les corrections, l’app SwiftUI avec son
arrière-plan de toolbar vert et l’app Flutter avec la tab bar plate que dessine Flutter :

<p align="center"><img src="docs/media/simulator/fixtures-ios27.png" width="720" alt="Quatre fixtures sur un simulateur d’iPhone 17 sous iOS 27.0, compilés avec Xcode 27.1 : native-uikit-optout, native-uikit-glass, native-swiftui et flutter-cupertino"></p>

Mesuré le 27 octobre 2026 sur un Mac (Apple silicon, M5 Max) avec Node.js 26.11 : trois séries de 100
exécutions de `node dist/cli/main.js --json` sur les sept fixtures, démarrage de Node.js compris. Les
médianes des trois séries étaient de 0,12, 0,12 et 0,11 seconde ; l’exécution la plus lente a pris 0,17
seconde.

## Statut

| Fonctionnalité                                                                                | Statut          |
| --------------------------------------------------------------------------------------------- | --------------- |
| Détection des projets natifs, Flutter (app et exemple de plugin), React Native et Expo        | fonctionne      |
| GLS001 dans Info.plist, les réglages de build et la configuration Expo (app.json ; app.config.js/ts comme texte) | fonctionne |
| GLS002 à GLS009 sur Swift et Objective-C ; GLS101 à GLS104 sur JavaScript et TypeScript       | fonctionne      |
| GLS201 et GLS202 sur Dart                                                                     | fonctionne      |
| Rapports terminal, texte, Markdown et JSON ; score d’impact ; API adoptées ; codes de sortie de `--fail-on` | fonctionne |
| Dépendances (Pods, `node_modules`, plugins Flutter) et réglages de build `.xcconfig`          | prévu (0.2)     |
| Sortie SARIF et une GitHub Action                                                             | prévu (0.3)     |
| Arbres syntaxiques Swift au lieu de motifs ; captures d’écran depuis le CLI dans le simulateur | prévu (0.5)    |
| Schéma de règles et structure JSON stables                                                    | prévu (1.0)     |

## Limites

- **Des motifs, pas un compilateur.** Les règles sont des expressions régulières appliquées au texte du
  code source, dont les commentaires et les chaînes sont vidés. Le code généré, caché derrière des macros,
  construit à l’exécution ou écrit sous une forme inhabituelle peut passer inaperçu ou correspondre par
  erreur.
- **Uniquement le code source de l’app.** Les Pods, les paquets Swift hors du dossier de l’app,
  `node_modules` et les plugins Flutter ne sont pas lus.
- **Réglages de build lus uniquement dans project.pbxproj.** Les fichiers `.xcconfig` ne sont pas lus.
  Quand l’Info.plist d’une target est illisible, son état d’opt-out est « inconnu » et le rapport en
  donne la raison.
- **Configuration Expo lue comme du texte.** `app.config.js` et `app.config.ts` ne sont pas exécutés ; un
  opt-out défini par une variable ou un config plugin n’est donc pas vu.
- **Uniquement des fichiers.** glassready ne compile pas l’app et ne regarde pas ses écrans. Les
  enregistrements du simulateur de ce dépôt proviennent des scripts de `scripts/`, exécutés sur un Mac.

## Documentation

Référence de l’API et guides : [muhittincamdali.github.io/glassready](https://muhittincamdali.github.io/glassready/).

## Guides

- [Pourquoi l’opt-out de Liquid Glass cesse de fonctionner](docs/guides/opt-out.md)
- [Apps natives UIKit et SwiftUI](docs/guides/native-ios.md)
- [Apps React Native et Expo](docs/guides/react-native-expo.md)
- [Apps Flutter](docs/guides/flutter.md)

## Sources

Consultées le 27 octobre 2026 :

- Apple : [UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility),
  [Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass),
  [Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) et les pages d’API que
  chaque règle référence dans [rules/liquid-glass.json](rules/liquid-glass.json).
- React Navigation : [Native Stack](https://reactnavigation.org/docs/native-stack-navigator/),
  [Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator/),
  [Native Bottom Tabs](https://reactnavigation.org/docs/native-bottom-tab-navigator/).
- Expo : [JavaScript tabs](https://docs.expo.dev/router/advanced/tabs/),
  [Native tabs](https://docs.expo.dev/router/advanced/native-tabs/),
  [app config `ios.infoPlist`](https://docs.expo.dev/versions/latest/config/app/).
- Flutter : [issue 170310](https://github.com/flutter/flutter/issues/170310),
  [cupertino_ui changelog](https://pub.dev/packages/cupertino_ui/changelog),
  [platform views on iOS](https://docs.flutter.dev/platform-integration/ios/platform-views).

## Prérequis

Node.js 22.12 ou plus récent sous macOS, Linux ou Windows. Lire un projet ne demande rien d’autre : ni
Xcode, ni toolchain Flutter ou React Native. Les scripts du simulateur demandent un Mac avec Xcode,
XcodeGen et ImageMagick.

## Architecture

```text
detectProject      native | flutter | react-native | expo, the iOS folder, package versions
  ─► collectApp    app targets, Info.plist files, build settings, blanked sources
  ─► checkApp      GLS001 opt-out · GLS002–009 native · GLS101–104 React Native · GLS201–202 Flutter
                   rules/liquid-glass.json: what each rule says, fixes, sources (validated with zod)
  ─► scan          findings, verdict, impact score, adopted APIs
  ─► render        tty | text | markdown | json
```

- Les données de règles sont séparées du code et versionnées (`liquid-glass@2026.10.27`) ; les tests
  échouent quand une règle n’a pas de source ou nomme un guide qui n’existe pas.
- Le CLI (`src/cli/`) se contente d’analyser les arguments, de choisir les couleurs et les largeurs et de
  fixer le code de sortie.

## Voir aussi

[sdkbump](https://github.com/muhittincamdali/sdkbump) répond à l’autre question que pose le SDK d’iOS 27 :
l’app va-t-elle démarrer ? Il vérifie le cycle de vie UIScene, que les apps compilées avec le SDK d’iOS 27
doivent adopter. glassready répond à la question de l’aspect de l’app. Lancez les deux avant la première
compilation avec Xcode 27.

## FAQ

**Mon app fonctionne aujourd’hui sous iOS 27 et a toujours le même aspect. Est-elle concernée ?** La
documentation d’Apple lie le changement au SDK avec lequel l’app est compilée ; une compilation faite avec
Xcode 26 devrait donc conserver son design. Nous n’avons pas pu le vérifier ici, car seul Xcode 27.1 était
installé. Votre prochaine compilation avec Xcode 27 ignorera la clé.

**Un avertissement GLS002 ou GLS004 est-il toujours un bug ?** Non. Une couleur de marque sur une barre
peut être un choix. L’avertissement indique que le code recouvre la barre que dessine Liquid Glass ;
regardez l’écran dans un simulateur iOS 27 et décidez.

**glassready modifie-t-il mon projet ?** Non. Il le lit et n’écrit que le rapport que vous demandez.

## Contribuer

Les contributions sont les bienvenues. Lisez le [guide de contribution](CONTRIBUTING.md) et le [code de conduite](https://github.com/muhittincamdali/.github/blob/main/CODE_OF_CONDUCT.md) avant d’ouvrir une pull request. Signalez les problèmes de sécurité en privé, comme indiqué dans la [politique de sécurité](SECURITY.md).

## Licence

Publié sous licence MIT. Voir [LICENSE](LICENSE).
