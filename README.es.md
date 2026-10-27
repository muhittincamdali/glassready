<!-- i18n-source: README.md@1e1b8af4785303e515b90d8dd6f44c11b8fe6551 status=reviewed -->
<!-- brand:start -->

<p align="center"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg" alt="glassready: Shows what Liquid Glass changes in iOS, Flutter and React Native apps built with the iOS 27 SDK, and the fix for each."></picture></p>

<!-- lang-selector:start -->
<p align="center"><a href="README.md">English</a> · <a href="README.tr.md">Türkçe</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a></p>
<!-- lang-selector:end -->

<p align="center">
<a href="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml"><img src="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml/badge.svg" alt="Estado de CI"></a>
<a href="https://github.com/muhittincamdali/glassready/releases"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg" alt="Última versión: v0.1.1"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/package.json"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg" alt="Versión del lenguaje: Node.js 22.12+"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/LICENSE"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg" alt="Licencia: MIT"></picture></a>
</p>

<p align="center">
<a href="#inicio-rápido"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-es-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-es-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-es-light.svg" alt="Empezar"></picture></a>
<a href="https://muhittincamdali.github.io/glassready/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-es-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-es-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-es-light.svg" alt="Documentación"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/docs/guides"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-es-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-es-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-es-light.svg" alt="Guías"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/examples"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-es-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-es-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-es-light.svg" alt="Ejemplos"></picture></a>
</p>

> Esta es una traducción del README en inglés. Si hay diferencias, la versión en inglés es la vigente.

<!-- brand:end -->

Si aplazaste Liquid Glass con `UIDesignRequiresCompatibility`, el SDK de iOS 27 ignora esa clave:
una app compilada con Xcode 27 muestra Liquid Glass en iOS 27 diga lo que diga su Info.plist.
glassready lee un proyecto nativo de iOS, de Flutter o de React Native/Expo y enumera lo que eso va a
cambiar: el opt-out y cada lugar donde la app pinta encima, oculta o mide las barras y los sheets que
dibuja Liquid Glass, con la solución para cada caso. Lee los archivos de tu proyecto; no compila,
no ejecuta ni cambia nada.

<picture><source media="(prefers-color-scheme: dark)" srcset="docs/media/demo-uikit-optout-dark.svg"><source media="(prefers-color-scheme: light)" srcset="docs/media/demo-uikit-optout-light.svg"><img src="docs/media/demo-uikit-optout-light.svg" alt="glassready ejecutado en una app UIKit: el opt-out de Liquid Glass se ignora al compilar con el SDK de iOS 27; GLS001 el opt-out en Info.plist, GLS002 dos apariencias de barra opacas, GLS003 isTranslucent y barTintColor, GLS006 un panel de desenfoque, GLS008 un desplazamiento fijo de la tab bar, cada uno con su solución"></picture>

<sub>Grabado con el CLI real sobre el <a href="fixtures/native-uikit-optout">fixture
native-uikit-optout</a>, una app UIKit escrita para las pruebas (<code>npm run demo</code>).</sub>

## Lo más destacado

- **Encuentra el opt-out dondequiera que esté.** En un Info.plist, como el ajuste de compilación
  `INFOPLIST_KEY_UIDesignRequiresCompatibility` (que Xcode 27.1 ni siquiera copia al Info.plist
  generado) o en una configuración de Expo.
- **Muestra lo que tapa Liquid Glass.** Apariencias de barra opacas, `barTintColor`, fondos de toolbar
  de SwiftUI, tab bars personalizadas, capas de desenfoque, fondos de sheet, alturas de barra fijas y
  encabezados de sección en mayúsculas en código nativo; colores de encabezado, tab bars dibujadas en
  JavaScript y props de tab bar ignoradas en React Native y Expo; barras Cupertino dibujadas por
  Flutter y platform views de UIKit en Flutter.
- **La solución para tu tipo de código.** UIKit, SwiftUI, React Native, Expo o Flutter, con una guía
  para cada uno y una lista de las API de Liquid Glass que la app ya usa.
- **Cada regla tiene una fuente.** Las reglas son datos ([rules/liquid-glass.json](rules/liquid-glass.json))
  que citan las páginas de Apple, React Navigation, Expo y Flutter; las pruebas fallan si alguna no
  la tiene.
- **Comprobado en el simulador.** Compilada con Xcode 27.1, la misma app con y sin la clave muestra la
  misma pantalla en iOS 27.0 y dos diseños distintos en iOS 26.4. Las grabaciones y las capturas están
  en el repositorio.
- **Pensado para CI.** Informes en terminal, texto sin formato, Markdown y JSON, y un código de salida:
  0 sin hallazgos, 1 con hallazgos, 2 error de uso.

## Inicio rápido

**1. Instala glassready.** Con [Homebrew](https://brew.sh/), que también instala Node.js:

```sh
brew install muhittincamdali/tap/glassready
```

O con npm desde la
[release de GitHub](https://github.com/muhittincamdali/glassready/releases/tag/v0.1.1), que necesita
[Node.js](https://nodejs.org/) 22.12 o posterior (`node --version` muestra la versión):

```sh
npm i -g https://github.com/muhittincamdali/glassready/releases/download/v0.1.1/glassready-0.1.1.tgz
```

El paquete aún no está en el registro de npm; está previsto publicarlo allí como
`@mcamdali/glassready`. Ambos comandos instalan el mismo tarball de la release.

**2. Abre una terminal en la carpeta de tu app**, la que contiene el `.xcodeproj`, `pubspec.yaml` o
`package.json`:

```sh
cd path/to/YourApp
```

**3. Ejecuta glassready:**

```sh
glassready
```

**4. Lee la línea que aparece bajo el nombre de tu proyecto.** "The Liquid Glass opt-out is ignored"
(el opt-out de Liquid Glass se ignora) significa que la app cambia en iOS 27 aunque haga opt-out:
empieza por el **ERROR** y sigue con los hallazgos **WARNING**, que son los lugares donde tu código
pinta encima de las barras nuevas. Conviene mirar los hallazgos **INFO** en un simulador de iOS 27.
Cada hallazgo indica su solución por nombre, tomado de la lista "How to fix".

## Qué cambia al compilar con el SDK de iOS 27

De la página de Apple
[UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility):

> The system ignores this key when you build for iOS 27 or later, iPadOS 27 or later, Mac Catalyst
> 27 or later, macOS 27 or later, or tvOS 27 or later.

Compilamos dos veces con Xcode 27.1 la misma app UIKit, con y sin la clave, y comparamos las capturas en
un simulador de iPhone 17 ([cómo](docs/guides/opt-out.md#what-we-saw-in-the-simulator)):

| Simulador | ¿Misma pantalla con y sin la clave?                                                           |
| --------- | --------------------------------------------------------------------------------------------- |
| iOS 27.0  | sí: 0 píxeles distintos por encima del indicador de inicio; la clave se ignora                |
| iOS 26.4  | no: 361.909 de 3.089.772 píxeles son distintos; con la clave, la app conserva el diseño de los SDK anteriores |

<p align="center"><img src="docs/media/simulator/opt-out-ios26-ios27.png" width="720" alt="El fixture native-uikit-optout en un simulador de iPhone 17, compilado con Xcode 27.1. De izquierda a derecha: iOS 26.4 con la clave (tab bar de ancho completo, título grande), iOS 26.4 sin la clave (tab bar flotante de Liquid Glass), iOS 27.0 con la clave e iOS 27.0 sin la clave (ambas con la tab bar flotante de Liquid Glass)"></p>

Así que, mientras la clave esté en el Info.plist, una misma compilación muestra dos diseños: el antiguo
en iOS 26 y Liquid Glass en iOS 27. La guía
[Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)
de Apple enumera lo que conviene revisar a continuación; las reglas de más abajo la siguen.

El SDK que debe usar una subida lo fija App Store Connect en la página
[Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) de Apple. El 27 de
octubre de 2026 era Xcode 26 con el SDK de iOS 26 (desde el 28 de abril de 2026). Cuando pase al SDK de
iOS 27, la primera fila se aplicará a todas las subidas.

## Qué comprueba glassready

| Regla  | Gravedad | Hallazgo                                                                                                      | Código             |
| ------ | -------- | ------------------------------------------------------------------------------------------------------------- | ------------------ |
| GLS001 | error    | `UIDesignRequiresCompatibility` es YES en el Info.plist, como ajuste de compilación o en una configuración de Expo | todos         |
| GLS002 | warning  | Una apariencia de barra con `configureWithOpaqueBackground()` o con su propio color de fondo, imagen, efecto o sombra | UIKit       |
| GLS003 | warning  | `barTintColor`, `isTranslucent = false`, imágenes de fondo o de sombra de la barra                            | UIKit              |
| GLS004 | warning  | `toolbarBackground` / `toolbarBackgroundVisibility` distinto de `.automatic`                                  | SwiftUI            |
| GLS005 | warning  | Una subclase de `UITabBar` o `UIToolbar`, o la tab bar del sistema oculta para usar una personalizada         | UIKit, SwiftUI     |
| GLS006 | info     | Una vista `UIBlurEffect` en un archivo que no usa `UIGlassEffect`                                             | UIKit              |
| GLS007 | warning  | `presentationBackground` o el `backgroundColor` de un popover                                                 | SwiftUI, UIKit     |
| GLS008 | info     | Un número sumado a los insets del área segura, la altura del frame de una barra leída para el diseño, una tab bar de 49 u 83 puntos | todos menos Flutter |
| GLS009 | info     | Un encabezado de sección escrito en mayúsculas                                                                | SwiftUI            |
| GLS101 | warning  | Un encabezado de native stack con `headerStyle.backgroundColor`, `headerBackground` o `headerBlurEffect`      | React Native, Expo |
| GLS102 | info     | Una tab bar dibujada en JavaScript: `createBottomTabNavigator`, `Tabs` de Expo Router, un `tabBar` personalizado | React Native, Expo |
| GLS103 | info     | Props de la tab bar nativa que iOS 26 y posteriores ignoran (`backgroundColor`, `blurEffect`, …)              | React Native, Expo |
| GLS104 | warning  | Bottom tabs nativas con `react-native-screens` anterior a 4.30.0                                              | React Native       |
| GLS201 | info     | Una barra Cupertino que dibuja el propio Flutter                                                              | Flutter            |
| GLS202 | info     | Un `UiKitView` con controles de UIKit junto a widgets de Flutter                                              | Flutter            |

Datos de reglas `liquid-glass@2026.10.27`, comprobados con Xcode 27.1 (27A9275). El informe también
enumera las API de Liquid Glass que la app ya usa (`UIGlassEffect`, `glassEffect`, estilos de botón
glass, `safeAreaBar`, `NativeTabs` y otras) y una puntuación de impacto: 50 por el opt-out, 6 por cada
warning, 2 por cada hallazgo info, con un máximo de 100. La puntuación sirve para ordenar proyectos; no
califica el diseño.

## Instalación

Los comandos de Inicio rápido instalan el comando `glassready` desde la release de GitHub. Cada
[release de GitHub](https://github.com/muhittincamdali/glassready/releases) incluye el paquete como
`glassready-<version>.tgz` con un archivo `SHA256SUMS`. Para fijar una release en un proyecto:

```sh
npm install --save-dev https://github.com/muhittincamdali/glassready/releases/download/v0.1.1/glassready-0.1.1.tgz
```

Después, `npx glassready` ejecuta esa copia. El paquete se instala con el nombre
`@mcamdali/glassready`, el mismo que importa la API de JavaScript de más abajo. Está previsto
publicarlo en el registro de npm; hasta entonces, `npx @mcamdali/glassready` no encuentra el
paquete.

## Uso

```text
glassready [path] [options]
```

| Opción                  | Qué hace                                                                   |
| ----------------------- | -------------------------------------------------------------------------- |
| `path`                  | Carpeta del proyecto o `.xcodeproj`; por defecto, la carpeta actual        |
| `-f, --format <format>` | `tty` (por defecto), `text`, `markdown` o `json`                           |
| `--json`                | Igual que `--format json`                                                  |
| `-o, --output <file>`   | Escribe el informe en un archivo en lugar de en la terminal                |
| `--fail-on <severity>`  | `warning` (por defecto), `error`, `info` o `none`: cuándo el código de salida es 1 |
| `--no-color`            | Texto sin formato incluso en una terminal (se respetan `NO_COLOR` y `FORCE_COLOR`) |

Códigos de salida: `0` nada en `--fail-on` o por encima, `1` hallazgos en ese nivel o por encima,
`2` argumentos incorrectos, no se encontró ningún proyecto de iOS o un error inesperado. Un opt-out
que glassready no pudo comprobar, porque no se leyó un Info.plist o un proyecto de Xcode, también da
`1`, salvo con `--fail-on none`.

glassready encuentra por sí solo la app de iOS: un `.xcodeproj` en la raíz o una carpeta más abajo en las
apps nativas, `ios/` en las apps de Flutter, React Native y Expo (`example/ios/` en un plugin de Flutter).
Lee el Info.plist (XML o binario) y los ajustes de compilación de cada target de app de iOS, los archivos
Swift y Objective-C de la app, el JavaScript y el TypeScript de una app de React Native o Expo y los
archivos Dart de `lib/`, y omite las dependencias, la salida de compilación y las pruebas. Una app de
Expo sin `ios/` se comprueba a partir de su configuración.

### Guarda un informe en Markdown junto con el código

```sh
glassready --format markdown --output glassready.md
```

### Usa el informe JSON en scripts

```sh
glassready --json > glassready.json
```

Cada hallazgo tiene `rule`, `severity`, `title`, `message`, `file`, `line`, `target`, el `fix` con sus
pasos y su guía, y `sources`. La estructura es `schemaVersion` 0 y puede cambiar antes de la 1.0.
[examples/shell/opt-out-targets.sh](examples/shell/opt-out-targets.sh) la filtra con `jq`.

### Ejecútalo en CI

[examples/github-actions/glassready.yml](examples/github-actions/glassready.yml) añade el informe al
resumen del job de cada pull request que toca la app y hace fallar el job si hay warnings.
`--fail-on error` falla solo con el opt-out ignorado.

### Desde JavaScript

```js
import { render, scan } from '@mcamdali/glassready';

const report = await scan('path/to/app');
console.log(report.verdict.text, report.impact.level);
console.log(render(report, 'markdown'));
```

Una versión ejecutable es [examples/api/impact.mjs](examples/api/impact.mjs).

## Demo

Las grabaciones de terminal proceden del CLI sobre los [fixtures](fixtures/README.md), proyectos creados
con cada toolchain:

| Proyecto                                                                 | Grabación                                                                                                                                   |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| App UIKit con el opt-out y barras opacas                                 | parte superior de esta página                                                                                                               |
| App React Native 0.88.1 con un native stack y tabs en JavaScript         | [claro](docs/media/demo-react-native-light.svg) · [oscuro](docs/media/demo-react-native-dark.svg)                                           |
| App Flutter 3.47.5 con barras Cupertino y un `UiKitView`                 | [claro](docs/media/demo-flutter-light.svg) · [oscuro](docs/media/demo-flutter-dark.svg)                                                     |
| App SwiftUI con fondos de toolbar y una barra inferior personalizada     | [claro](docs/media/demo-swiftui-light.svg) · [oscuro](docs/media/demo-swiftui-dark.svg)                                                     |
| `scripts/simulator-compare.sh` en iOS 27.0 y iOS 26.4                    | [27.0](docs/media/demo-simulator-native-uikit-optout-27.0-light.svg) · [26.4](docs/media/demo-simulator-native-uikit-optout-26.4-light.svg) |

Cuatro fixtures en un simulador de iPhone 17 con iOS 27.0, compilados con Xcode 27.1: la app UIKit con su
barra azul marino opaca (sin título grande), la misma app tras las correcciones, la app SwiftUI con su
fondo de toolbar verde y la app Flutter con la tab bar plana que dibuja Flutter:

<p align="center"><img src="docs/media/simulator/fixtures-ios27.png" width="720" alt="Cuatro fixtures en un simulador de iPhone 17 con iOS 27.0, compilados con Xcode 27.1: native-uikit-optout, native-uikit-glass, native-swiftui y flutter-cupertino"></p>

Medido el 27 de octubre de 2026 en un Mac (Apple silicon, M5 Max) con Node.js 26.11: tres series de 100
ejecuciones de `node dist/cli/main.js --json` sobre los siete fixtures, con el arranque de Node.js
incluido. Las medianas de las tres series fueron 0,12, 0,12 y 0,11 segundos; la ejecución más lenta
tardó 0,17 segundos.

## Estado

| Función                                                                                       | Estado          |
| --------------------------------------------------------------------------------------------- | --------------- |
| Detección de proyectos nativos, de Flutter (app y ejemplo de plugin), React Native y Expo     | funciona        |
| GLS001 en Info.plist, ajustes de compilación y configuración de Expo (app.json; app.config.js/ts como texto) | funciona |
| GLS002 a GLS009 en Swift y Objective-C; GLS101 a GLS104 en JavaScript y TypeScript            | funciona        |
| GLS201 y GLS202 en Dart                                                                       | funciona        |
| Informes en terminal, texto, Markdown y JSON; puntuación de impacto; API adoptadas; códigos de salida de `--fail-on` | funciona |
| Dependencias (Pods, `node_modules`, plugins de Flutter) y ajustes de compilación de `.xcconfig` | previsto (0.2) |
| Salida SARIF y una GitHub Action                                                              | previsto (0.3)  |
| Árboles de sintaxis de Swift en lugar de patrones; capturas de pantalla desde el CLI en el simulador | previsto (0.5) |
| Esquema de reglas y estructura JSON estables                                                  | previsto (1.0)  |

## Límites

- **Patrones, no un compilador.** Las reglas son expresiones regulares sobre el texto del código fuente,
  con los comentarios y las cadenas en blanco. El código generado, oculto tras macros, construido en
  tiempo de ejecución o escrito de forma inusual puede pasarse por alto o coincidir por error.
- **Solo el código fuente propio de la app.** Las reglas se aplican al código de la propia app: no
  se lee el código fuente de los Pods, de los paquetes de Swift fuera de la carpeta de la app, de
  `node_modules` ni de los plugins de Flutter. De `node_modules`, glassready solo lee
  `<name>/package.json` de los paquetes de React Native y Expo que examina (`react-native`,
  `expo`, `react-native-screens` y ocho más), para conocer la versión instalada; si ese archivo
  enlaza fuera de una carpeta `node_modules/<name>`, no se lee.
- **Ajustes de compilación solo desde project.pbxproj.** No se leen los archivos `.xcconfig`. Cuando
  no se puede leer el Info.plist de un target, su estado de opt-out es "desconocido" y el informe
  explica por qué. Lo mismo ocurre cuando no se puede leer un proyecto de Xcode; el veredicto es
  entonces "Opt-out not known", nunca listo.
- **Configuración de Expo como texto.** `app.config.js` y `app.config.ts` no se ejecutan, así que no se
  ve un opt-out definido mediante una variable o un config plugin.
- **Solo archivos.** glassready no compila la app ni mira sus pantallas. Las grabaciones del simulador de
  este repositorio proceden de los scripts de `scripts/`, ejecutados en un Mac.
- **Entrada acotada.** Un proyecto puede venir de un pull request, así que glassready lee como
  máximo 32 MB por archivo del proyecto y, de las fuentes, 4 MB por archivo, 20.000 archivos y
  128 MB en total; lo que queda fuera aparece en las notas del informe. Un plist binario puede
  producir como máximo 100.000 valores, y un plist o un archivo JSON (package.json,
  package-lock.json, app.json) puede anidarse 64 niveles; un JSON más profundo no se analiza. En un
  Mac (Apple silicon) con Node 26, un proyecto cuyo package.json, package-lock.json y cuatro
  package.json de `node_modules` son 31 MB de arrays anidados cada uno se revisa en 0,2 s con
  como máximo 190 MB de memoria.

## Documentación

Referencia de la API y guías: [muhittincamdali.github.io/glassready](https://muhittincamdali.github.io/glassready/).

## Guías

- [Por qué deja de funcionar el opt-out de Liquid Glass](docs/guides/opt-out.md)
- [Apps nativas UIKit y SwiftUI](docs/guides/native-ios.md)
- [Apps de React Native y Expo](docs/guides/react-native-expo.md)
- [Apps de Flutter](docs/guides/flutter.md)

## Fuentes

Consultadas el 27 de octubre de 2026:

- Apple: [UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility),
  [Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass),
  [Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) y las páginas de API
  que cada regla enlaza en [rules/liquid-glass.json](rules/liquid-glass.json).
- React Navigation: [Native Stack](https://reactnavigation.org/docs/native-stack-navigator/),
  [Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator/),
  [Native Bottom Tabs](https://reactnavigation.org/docs/native-bottom-tab-navigator/).
- Expo: [JavaScript tabs](https://docs.expo.dev/router/advanced/tabs/),
  [Native tabs](https://docs.expo.dev/router/advanced/native-tabs/),
  [app config `ios.infoPlist`](https://docs.expo.dev/versions/latest/config/app/).
- Flutter: [issue 170310](https://github.com/flutter/flutter/issues/170310),
  [cupertino_ui changelog](https://pub.dev/packages/cupertino_ui/changelog),
  [platform views on iOS](https://docs.flutter.dev/platform-integration/ios/platform-views).

## Requisitos

Node.js 22.12 o posterior en macOS, Linux o Windows. Leer un proyecto no necesita nada más: ni Xcode ni
una toolchain de Flutter o de React Native. Los scripts del simulador necesitan un Mac con Xcode,
XcodeGen e ImageMagick.

## Arquitectura

```text
detectProject      native | flutter | react-native | expo, the iOS folder, package versions
  ─► collectApp    app targets, Info.plist files, build settings, blanked sources
  ─► checkApp      GLS001 opt-out · GLS002–009 native · GLS101–104 React Native · GLS201–202 Flutter
                   rules/liquid-glass.json: what each rule says, fixes, sources (validated with zod)
  ─► scan          findings, verdict, impact score, adopted APIs
  ─► render        tty | text | markdown | json
```

- Los datos de las reglas están separados del código y llevan versión (`liquid-glass@2026.10.27`); las
  pruebas fallan cuando una regla no tiene fuente o nombra una guía que no existe.
- El CLI (`src/cli/`) solo interpreta los argumentos, elige colores y anchos y fija el código de salida.

## Relacionado

[sdkbump](https://github.com/muhittincamdali/sdkbump) responde a la otra pregunta sobre el SDK de iOS 27:
¿se iniciará la app? Comprueba el ciclo de vida de UIScene, que las apps compiladas con el SDK de iOS 27
deben adoptar. glassready responde a cómo se verá la app. Ejecuta ambos antes de la primera compilación
con Xcode 27.

## Preguntas frecuentes

**Mi app se ejecuta hoy en iOS 27 y sigue viéndose igual. ¿Le afecta?** La documentación de Apple vincula
el cambio al SDK con el que se compila la app, así que una compilación hecha con Xcode 26 debería
conservar su diseño; no pudimos comprobarlo aquí, porque solo estaba instalado Xcode 27.1. Tu próxima
compilación con Xcode 27 ignorará la clave.

**¿Un warning GLS002 o GLS004 es siempre un error?** No. Un color de marca en una barra puede ser una
decisión. El warning indica que el código pinta encima de la barra que dibuja Liquid Glass; mira la
pantalla en un simulador de iOS 27 y decide.

**¿glassready cambia mi proyecto?** No. Lo lee y solo escribe el informe que le pides.

## Contribuir

Las contribuciones son bienvenidas. Lee la [guía de contribución](CONTRIBUTING.md) y el [código de conducta](https://github.com/muhittincamdali/.github/blob/main/CODE_OF_CONDUCT.md) antes de abrir una pull request. Informa de los problemas de seguridad de forma privada, como se describe en la [política de seguridad](SECURITY.md).

## Licencia

Publicado bajo la licencia MIT. Consulta [LICENSE](LICENSE).
