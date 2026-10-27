<!-- i18n-source: README.md@fa2325a0ed6c60d15fd52b0af4b056d302f9673a status=reviewed -->
<!-- brand:start -->

<p align="center"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg" alt="glassready: Shows what Liquid Glass changes in iOS, Flutter and React Native apps built with the iOS 27 SDK, and the fix for each."></picture></p>

<!-- lang-selector:start -->
<p align="center"><a href="README.md">English</a> · <a href="README.tr.md">Türkçe</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a></p>
<!-- lang-selector:end -->

<p align="center">
<a href="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml"><img src="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml/badge.svg" alt="Статус CI"></a>
<a href="https://github.com/muhittincamdali/glassready/releases"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg" alt="Последняя версия: v0.1.0"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/package.json"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg" alt="Версия языка: Node.js 22.12+"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/LICENSE"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg" alt="Лицензия: MIT"></picture></a>
</p>

<p align="center">
<a href="#быстрый-старт"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-ru-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-ru-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-ru-light.svg" alt="Начать"></picture></a>
<a href="https://muhittincamdali.github.io/glassready/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-ru-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-ru-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-ru-light.svg" alt="Документация"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/docs/guides"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-ru-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-ru-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-ru-light.svg" alt="Руководства"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/examples"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-ru-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-ru-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-ru-light.svg" alt="Примеры"></picture></a>
</p>

> Это перевод README на английском языке. Если они расходятся, актуальна английская версия.

<!-- brand:end -->

Если вы отложили Liquid Glass с помощью `UIDesignRequiresCompatibility`, SDK iOS 27 игнорирует этот ключ:
приложение, собранное в Xcode 27, показывает Liquid Glass в iOS 27 независимо от содержимого его
Info.plist. glassready читает нативный проект iOS, Flutter или React Native/Expo и перечисляет, что это
изменит: opt-out и каждое место, где приложение перекрашивает, скрывает или измеряет панели и sheet,
которые рисует Liquid Glass, — с исправлением для каждого случая. Он только читает файлы вашего проекта:
ничего не собирает, не запускает и не меняет.

<picture><source media="(prefers-color-scheme: dark)" srcset="docs/media/demo-uikit-optout-dark.svg"><source media="(prefers-color-scheme: light)" srcset="docs/media/demo-uikit-optout-light.svg"><img src="docs/media/demo-uikit-optout-light.svg" alt="glassready, запущенный на UIKit-приложении: opt-out Liquid Glass игнорируется при сборке с SDK iOS 27; GLS001 — opt-out в Info.plist, GLS002 — два непрозрачных оформления панелей, GLS003 — isTranslucent и barTintColor, GLS006 — панель размытия, GLS008 — фиксированное смещение tab bar, у каждого находки есть исправление"></picture>

<sub>Записано настоящим CLI на <a href="fixtures/native-uikit-optout">фикстуре
native-uikit-optout</a> — UIKit-приложении, написанном для тестов (<code>npm run demo</code>).</sub>

## Основные возможности

- **Находит opt-out, где бы он ни был.** В Info.plist, в настройке сборки
  `INFOPLIST_KEY_UIDesignRequiresCompatibility` (которую Xcode 27.1 даже не копирует в сгенерированный
  Info.plist) или в конфигурации Expo.
- **Показывает, что перекрывает Liquid Glass.** В нативном коде: непрозрачные оформления панелей,
  `barTintColor`, фоны toolbar в SwiftUI, собственные tab bar, слои размытия, фоны sheet, фиксированная
  высота панелей и заголовки разделов, набранные заглавными буквами. В React Native и Expo: цвета
  заголовков, tab bar, нарисованные на JavaScript, и игнорируемые props tab bar. Во Flutter: панели
  Cupertino, которые рисует сам Flutter, и platform view из UIKit.
- **Исправление для вашего вида кода.** UIKit, SwiftUI, React Native, Expo или Flutter — для каждого есть
  руководство, а также список API Liquid Glass, которые приложение уже использует.
- **У каждого правила есть источник.** Правила — это данные ([rules/liquid-glass.json](rules/liquid-glass.json)),
  они ссылаются на страницы Apple, React Navigation, Expo и Flutter; тесты падают, если у правила нет
  источника.
- **Проверено в симуляторе.** Собранное в Xcode 27.1 одно и то же приложение с ключом и без него
  показывает одинаковый экран в iOS 27.0 и два разных оформления в iOS 26.4. Записи и скриншоты лежат
  в репозитории.
- **Сделано для CI.** Отчёты для терминала, в виде простого текста, Markdown и JSON и код завершения:
  0 — чисто, 1 — есть находки, 2 — ошибка использования.

## Быстрый старт

Нужен [Node.js](https://nodejs.org/) 22.12 или новее (версию показывает `node --version`; на Mac его
устанавливает `brew install node`). Больше ничего не требуется.

**1. Откройте терминал в папке вашего приложения** — той, где лежит `.xcodeproj`, `pubspec.yaml` или
`package.json`:

```sh
cd path/to/YourApp
```

**2. Запустите glassready:**

```sh
npx @mcamdali/glassready
```

Пакет npm называется `@mcamdali/glassready`; устанавливаемая им команда — `glassready`.

**3. Прочитайте строку под названием вашего проекта.** «The Liquid Glass opt-out is ignored» (opt-out
Liquid Glass игнорируется) означает, что приложение изменится в iOS 27, даже если оно сделало opt-out:
начните с **ERROR**, затем перейдите к находкам **WARNING** — это места, где ваш код перекрашивает новые
панели. Находки **INFO** стоит посмотреть в симуляторе iOS 27. Каждая находка называет своё исправление
из списка «How to fix».

## Что меняется при сборке с SDK iOS 27

Со страницы Apple
[UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility):

> The system ignores this key when you build for iOS 27 or later, iPadOS 27 or later, Mac Catalyst
> 27 or later, macOS 27 or later, or tvOS 27 or later.

Мы дважды собрали одно и то же UIKit-приложение в Xcode 27.1 — с ключом и без него — и сравнили скриншоты
в симуляторе iPhone 17 ([как это делалось](docs/guides/opt-out.md#what-we-saw-in-the-simulator)):

| Симулятор | Одинаковый ли экран с ключом и без него?                                                      |
| --------- | --------------------------------------------------------------------------------------------- |
| iOS 27.0  | да: выше индикатора «Домой» отличаются 0 пикселей; ключ игнорируется                          |
| iOS 26.4  | нет: отличаются 361 909 из 3 089 772 пикселей; с ключом приложение сохраняет оформление прежних SDK |

<p align="center"><img src="docs/media/simulator/opt-out-ios26-ios27.png" width="720" alt="Фикстура native-uikit-optout в симуляторе iPhone 17, собранная в Xcode 27.1. Слева направо: iOS 26.4 с ключом (tab bar во всю ширину, большой заголовок), iOS 26.4 без ключа (парящий tab bar Liquid Glass), iOS 27.0 с ключом и iOS 27.0 без ключа (оба с парящим tab bar Liquid Glass)"></p>

Поэтому, пока ключ остаётся в Info.plist, одна и та же сборка показывает два оформления: прежнее в iOS 26
и Liquid Glass в iOS 27. Страница Apple
[Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)
перечисляет, что проверить дальше; правила ниже следуют ей.

Какой SDK нужно использовать при загрузке, App Store Connect определяет на странице Apple
[Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/). На 27 октября 2026 г.
это был Xcode 26 с SDK iOS 26 (с 28 апреля 2026 г.). Когда требование перейдёт на SDK iOS 27, первая
строка будет относиться к каждой загрузке.

## Что проверяет glassready

| Правило | Серьёзность | Находка                                                                                                    | Код                |
| ------- | ----------- | ---------------------------------------------------------------------------------------------------------- | ------------------ |
| GLS001  | error       | `UIDesignRequiresCompatibility` равен YES в Info.plist, в настройке сборки или в конфигурации Expo         | все                |
| GLS002  | warning     | Оформление панели с `configureWithOpaqueBackground()` или с собственным цветом фона, изображением, эффектом или тенью | UIKit      |
| GLS003  | warning     | `barTintColor`, `isTranslucent = false`, фоновые изображения или изображения тени панели                   | UIKit              |
| GLS004  | warning     | `toolbarBackground` / `toolbarBackgroundVisibility` со значением, отличным от `.automatic`                 | SwiftUI            |
| GLS005  | warning     | Подкласс `UITabBar` или `UIToolbar` либо системный tab bar, скрытый ради собственного                      | UIKit, SwiftUI     |
| GLS006  | info        | Представление `UIBlurEffect` в файле, который не использует `UIGlassEffect`                                | UIKit              |
| GLS007  | warning     | `presentationBackground` или `backgroundColor` у popover                                                   | SwiftUI, UIKit     |
| GLS008  | info        | Число, добавленное к insets безопасной области, высота frame панели, считанная для вёрстки, tab bar высотой 49 или 83 пункта | все, кроме Flutter |
| GLS009  | info        | Заголовок раздела, набранный заглавными буквами                                                            | SwiftUI            |
| GLS101  | warning     | Заголовок native stack с `headerStyle.backgroundColor`, `headerBackground` или `headerBlurEffect`          | React Native, Expo |
| GLS102  | info        | Tab bar, нарисованный на JavaScript: `createBottomTabNavigator`, `Tabs` из Expo Router, собственный `tabBar` | React Native, Expo |
| GLS103  | info        | Props нативного tab bar, которые iOS 26 и новее игнорируют (`backgroundColor`, `blurEffect`, …)            | React Native, Expo |
| GLS104  | warning     | Нативные bottom tabs с `react-native-screens` старше 4.30.0                                                | React Native       |
| GLS201  | info        | Панель Cupertino, которую Flutter рисует сам                                                               | Flutter            |
| GLS202  | info        | `UiKitView` с элементами UIKit рядом с виджетами Flutter                                                   | Flutter            |

Данные правил `liquid-glass@2026.10.27`, проверены по Xcode 27.1 (27A9275). В отчёте также перечислены
API Liquid Glass, которые приложение уже использует (`UIGlassEffect`, `glassEffect`, стили кнопок glass,
`safeAreaBar`, `NativeTabs` и другие), и оценка влияния: 50 за opt-out, 6 за каждый warning, 2 за каждую
находку info, не более 100. Оценка нужна, чтобы сортировать проекты; она не оценивает дизайн.

## Установка

Запустите без установки (см. выше) или установите команду `glassready` из npm:

```sh
npm i -g @mcamdali/glassready
glassready
```

В проекте `npm install --save-dev @mcamdali/glassready` фиксирует версию, и тогда `npx glassready`
запускает именно эту копию. Каждый [GitHub release](https://github.com/muhittincamdali/glassready/releases)
содержит тот же пакет под именем `glassready-<version>.tgz` вместе с файлом `SHA256SUMS`. Через Homebrew:
`brew install muhittincamdali/tap/glassready`.

## Использование

```text
glassready [path] [options]
```

| Параметр                | Что делает                                                                 |
| ----------------------- | -------------------------------------------------------------------------- |
| `path`                  | Папка проекта или `.xcodeproj`; по умолчанию текущая папка                 |
| `-f, --format <format>` | `tty` (по умолчанию), `text`, `markdown` или `json`                        |
| `--json`                | То же, что `--format json`                                                 |
| `-o, --output <file>`   | Записывает отчёт в файл вместо терминала                                   |
| `--fail-on <severity>`  | `warning` (по умолчанию), `error`, `info` или `none`: когда код завершения равен 1 |
| `--no-color`            | Простой текст даже в терминале (учитываются `NO_COLOR` и `FORCE_COLOR`)    |

Коды завершения: `0` — ничего на уровне `--fail-on` и выше, `1` — есть находки на этом уровне и выше,
`2` — неверные аргументы, проект iOS не найден или непредвиденная ошибка.

glassready сам находит приложение iOS: `.xcodeproj` в корне или на одну папку глубже для нативных
приложений, `ios/` для приложений Flutter, React Native и Expo (`example/ios/` для плагина Flutter). Он
читает Info.plist (XML или двоичный) и настройки сборки каждого iOS-таргета приложения, файлы Swift и
Objective-C приложения, JavaScript и TypeScript приложения React Native или Expo и файлы Dart в `lib/`,
пропуская зависимости, результаты сборки и тесты. Приложение Expo без `ios/` проверяется по своей
конфигурации.

### Хранить отчёт в Markdown вместе с кодом

```sh
npx @mcamdali/glassready --format markdown --output glassready.md
```

### Использовать отчёт JSON в скриптах

```sh
npx @mcamdali/glassready --json > glassready.json
```

У каждой находки есть `rule`, `severity`, `title`, `message`, `file`, `line`, `target`, `fix` с шагами и
руководством и `sources`. Формат — `schemaVersion` 0, до 1.0 он может измениться.
[examples/shell/opt-out-targets.sh](examples/shell/opt-out-targets.sh) фильтрует его с помощью `jq`.

### Запуск в CI

[examples/github-actions/glassready.yml](examples/github-actions/glassready.yml) добавляет отчёт в
сводку job для каждого pull request, затрагивающего приложение, и завершает job ошибкой при warning.
`--fail-on error` завершается ошибкой только при проигнорированном opt-out.

### Из JavaScript

```js
import { render, scan } from '@mcamdali/glassready';

const report = await scan('path/to/app');
console.log(report.verdict.text, report.impact.level);
console.log(render(report, 'markdown'));
```

Запускаемая версия — [examples/api/impact.mjs](examples/api/impact.mjs).

## Демо

Записи терминала сделаны запуском CLI на [фикстурах](fixtures/README.md) — проектах, созданных каждым из
инструментов:

| Проект                                                                   | Запись                                                                                                                                      |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Приложение UIKit с opt-out и непрозрачными панелями                      | в начале этой страницы                                                                                                                      |
| Приложение React Native 0.88.1 с native stack и вкладками на JavaScript  | [светлая](docs/media/demo-react-native-light.svg) · [тёмная](docs/media/demo-react-native-dark.svg)                                         |
| Приложение Flutter 3.47.5 с панелями Cupertino и `UiKitView`             | [светлая](docs/media/demo-flutter-light.svg) · [тёмная](docs/media/demo-flutter-dark.svg)                                                   |
| Приложение SwiftUI с фонами toolbar и собственной нижней панелью         | [светлая](docs/media/demo-swiftui-light.svg) · [тёмная](docs/media/demo-swiftui-dark.svg)                                                   |
| `scripts/simulator-compare.sh` в iOS 27.0 и iOS 26.4                     | [27.0](docs/media/demo-simulator-native-uikit-optout-27.0-light.svg) · [26.4](docs/media/demo-simulator-native-uikit-optout-26.4-light.svg) |

Четыре фикстуры в симуляторе iPhone 17 с iOS 27.0, собранные в Xcode 27.1: UIKit-приложение с
непрозрачной тёмно-синей панелью (большой заголовок не показан), то же приложение после исправлений,
SwiftUI-приложение с зелёным фоном toolbar и Flutter-приложение с плоским tab bar, который рисует Flutter:

<p align="center"><img src="docs/media/simulator/fixtures-ios27.png" width="720" alt="Четыре фикстуры в симуляторе iPhone 17 с iOS 27.0, собранные в Xcode 27.1: native-uikit-optout, native-uikit-glass, native-swiftui и flutter-cupertino"></p>

Измерено 27 октября 2026 г. на Mac (Apple silicon, M5 Max) с Node.js 26.11: три серии по 100 запусков
`node dist/cli/main.js --json` на семи фикстурах, включая запуск Node.js. Медианы трёх серий составили
0,12, 0,12 и 0,11 секунды; самый медленный запуск занял 0,17 секунды.

## Статус

| Возможность                                                                                   | Статус             |
| --------------------------------------------------------------------------------------------- | ------------------ |
| Определение нативных проектов, Flutter (приложение и пример плагина), React Native и Expo     | работает           |
| GLS001 в Info.plist, настройках сборки и конфигурации Expo (app.json; app.config.js/ts как текст) | работает       |
| GLS002–GLS009 для Swift и Objective-C; GLS101–GLS104 для JavaScript и TypeScript              | работает           |
| GLS201 и GLS202 для Dart                                                                      | работает           |
| Отчёты в терминале, текстом, Markdown и JSON; оценка влияния; используемые API; коды завершения `--fail-on` | работает |
| Зависимости (Pods, `node_modules`, плагины Flutter) и настройки сборки из `.xcconfig`         | запланировано (0.2) |
| Вывод SARIF и GitHub Action                                                                   | запланировано (0.3) |
| Синтаксические деревья Swift вместо шаблонов; скриншоты из CLI в симуляторе                   | запланировано (0.5) |
| Стабильная схема правил и формат JSON                                                         | запланировано (1.0) |

## Ограничения

- **Шаблоны, а не компилятор.** Правила — это регулярные выражения над исходным текстом, в котором
  комментарии и строки заменены пустым местом. Сгенерированный код, код за макросами, собираемый во время
  выполнения или написанный необычным образом, может быть пропущен или распознан по ошибке.
- **Только собственный исходный код приложения.** Pods, пакеты Swift вне папки приложения,
  `node_modules` и плагины Flutter не читаются.
- **Настройки сборки только из project.pbxproj.** Файлы `.xcconfig` не читаются. Если Info.plist таргета
  прочитать нельзя, состояние его opt-out — «неизвестно», и отчёт объясняет почему.
- **Конфигурация Expo как текст.** `app.config.js` и `app.config.ts` не выполняются, поэтому opt-out,
  заданный через переменную или config plugin, не виден.
- **Только файлы.** glassready не собирает приложение и не смотрит на его экраны. Записи симулятора в
  этом репозитории получены скриптами из `scripts/`, запущенными на Mac.

## Документация

Справочник API и руководства: [muhittincamdali.github.io/glassready](https://muhittincamdali.github.io/glassready/).

## Руководства

- [Почему opt-out Liquid Glass перестаёт работать](docs/guides/opt-out.md)
- [Нативные приложения UIKit и SwiftUI](docs/guides/native-ios.md)
- [Приложения React Native и Expo](docs/guides/react-native-expo.md)
- [Приложения Flutter](docs/guides/flutter.md)

## Источники

Прочитаны 27 октября 2026 г.:

- Apple: [UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility),
  [Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass),
  [Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) и страницы API, на
  которые ссылается каждое правило в [rules/liquid-glass.json](rules/liquid-glass.json).
- React Navigation: [Native Stack](https://reactnavigation.org/docs/native-stack-navigator/),
  [Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator/),
  [Native Bottom Tabs](https://reactnavigation.org/docs/native-bottom-tab-navigator/).
- Expo: [JavaScript tabs](https://docs.expo.dev/router/advanced/tabs/),
  [Native tabs](https://docs.expo.dev/router/advanced/native-tabs/),
  [app config `ios.infoPlist`](https://docs.expo.dev/versions/latest/config/app/).
- Flutter: [issue 170310](https://github.com/flutter/flutter/issues/170310),
  [cupertino_ui changelog](https://pub.dev/packages/cupertino_ui/changelog),
  [platform views on iOS](https://docs.flutter.dev/platform-integration/ios/platform-views).

## Требования

Node.js 22.12 или новее на macOS, Linux или Windows. Для чтения проекта больше ничего не нужно: ни
Xcode, ни инструментов Flutter или React Native. Для скриптов симулятора нужен Mac с Xcode, XcodeGen и
ImageMagick.

## Архитектура

```text
detectProject      native | flutter | react-native | expo, the iOS folder, package versions
  ─► collectApp    app targets, Info.plist files, build settings, blanked sources
  ─► checkApp      GLS001 opt-out · GLS002–009 native · GLS101–104 React Native · GLS201–202 Flutter
                   rules/liquid-glass.json: what each rule says, fixes, sources (validated with zod)
  ─► scan          findings, verdict, impact score, adopted APIs
  ─► render        tty | text | markdown | json
```

- Данные правил отделены от кода и имеют версию (`liquid-glass@2026.10.27`); тесты падают, если у правила
  нет источника или оно называет несуществующее руководство.
- CLI (`src/cli/`) лишь разбирает аргументы, выбирает цвета и ширину и задаёт код завершения.

## Связанное

[sdkbump](https://github.com/muhittincamdali/sdkbump) отвечает на другой вопрос о SDK iOS 27: запустится ли
приложение? Он проверяет жизненный цикл UIScene, который обязаны принять приложения, собранные с SDK
iOS 27. glassready отвечает, как приложение будет выглядеть. Запустите оба перед первой сборкой в Xcode 27.

## FAQ

**Моё приложение сегодня работает в iOS 27 и выглядит по-прежнему. Затронет ли его это?** Документация
Apple связывает изменение с SDK, которым собрано приложение, поэтому сборка, сделанная в Xcode 26, должна
сохранить своё оформление; проверить это здесь мы не смогли, потому что был установлен только Xcode 27.1.
Ваша следующая сборка в Xcode 27 проигнорирует ключ.

**Всегда ли предупреждение GLS002 или GLS004 — это ошибка?** Нет. Фирменный цвет на панели может быть
осознанным решением. Предупреждение лишь сообщает, что код перекрашивает панель, которую рисует Liquid
Glass; посмотрите на экран в симуляторе iOS 27 и решите сами.

**Меняет ли glassready мой проект?** Нет. Он читает проект и записывает только тот отчёт, который вы
просите.

## Участие в разработке

Мы рады вашему участию. Перед открытием pull request прочитайте [руководство для участников](CONTRIBUTING.md) и [кодекс поведения](https://github.com/muhittincamdali/.github/blob/main/CODE_OF_CONDUCT.md). О проблемах безопасности сообщайте конфиденциально, как описано в [политике безопасности](SECURITY.md).

## Лицензия

Распространяется по лицензии MIT. Подробнее — в файле [LICENSE](LICENSE).
