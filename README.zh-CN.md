<!-- i18n-source: README.md@cc508d1f809458f745b5bab7c247f3a74e1abe82 status=reviewed -->
<!-- brand:start -->

<p align="center"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg" alt="glassready: Shows what Liquid Glass changes in iOS, Flutter and React Native apps built with the iOS 27 SDK, and the fix for each."></picture></p>

<!-- lang-selector:start -->
<p align="center"><a href="README.md">English</a> · <a href="README.tr.md">Türkçe</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a></p>
<!-- lang-selector:end -->

<p align="center">
<a href="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml"><img src="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml/badge.svg" alt="CI 状态"></a>
<a href="https://github.com/muhittincamdali/glassready/releases"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg" alt="最新版本: v0.1.3"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/package.json"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg" alt="语言版本: Node.js 22.12+"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/LICENSE"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg" alt="许可证: MIT"></picture></a>
</p>

<p align="center">
<a href="#快速开始"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-zh-CN-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-zh-CN-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-zh-CN-light.svg" alt="开始使用"></picture></a>
<a href="https://muhittincamdali.github.io/glassready/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-zh-CN-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-zh-CN-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-zh-CN-light.svg" alt="文档"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/docs/guides"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-zh-CN-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-zh-CN-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-zh-CN-light.svg" alt="指南"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/examples"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-zh-CN-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-zh-CN-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-zh-CN-light.svg" alt="示例"></picture></a>
</p>

> 本文是英文 README 的译文。如两者内容不一致，以英文版为准。

<!-- brand:end -->

如果你曾用 `UIDesignRequiresCompatibility` 推迟采用 Liquid Glass，请注意 iOS 27 SDK 会忽略这个键：用 Xcode 27 构建的应用，无论 Info.plist 怎么写，在 iOS 27 上都会显示 Liquid Glass。glassready 会读取原生 iOS、Flutter 或 React Native/Expo 项目，并列出这将带来的变化：包括这个退出键，以及应用中所有覆盖、隐藏或测量 Liquid Glass 所绘制的栏和 sheet 的位置，并给出每一处的修复办法。它只读取项目的文件，不会构建、运行或更改任何内容。

<picture><source media="(prefers-color-scheme: dark)" srcset="docs/media/demo-uikit-optout-dark.svg"><source media="(prefers-color-scheme: light)" srcset="docs/media/demo-uikit-optout-light.svg"><img src="docs/media/demo-uikit-optout-light.svg" alt="在 UIKit 应用上运行 glassready：用 iOS 27 SDK 构建时，Liquid Glass 退出键被忽略；GLS001 为 Info.plist 中的退出键，GLS002 为两处不透明的栏外观，GLS003 为 isTranslucent 和 barTintColor，GLS006 为一个模糊面板，GLS008 为固定的 tab bar 偏移，每一项都附有修复办法"></picture>

<sub>录制自真实的 CLI，对象是 <a href="fixtures/native-uikit-optout">native-uikit-optout
fixture</a>，这是一个为测试编写的 UIKit 应用（<code>npm run demo</code>）。</sub>

## 亮点

- **无论退出键在哪里，都能找到。** 无论是在 Info.plist 中，还是作为 `INFOPLIST_KEY_UIDesignRequiresCompatibility` 构建设置（Xcode 27.1 甚至不会把它复制到生成的 Info.plist 中），或是在 Expo 配置中。
- **显示是什么遮住了 Liquid Glass。** 原生代码中的不透明栏外观、`barTintColor`、SwiftUI toolbar 背景、自定义 tab bar、模糊层、sheet 背景、固定的栏高度和全大写的分区标题；React Native 和 Expo 中的标题颜色、用 JavaScript 绘制的 tab bar 以及被忽略的 tab bar 属性；Flutter 中由 Flutter 自行绘制的 Cupertino 栏和 UIKit platform view。
- **针对你的代码类型给出修复办法。** UIKit、SwiftUI、React Native、Expo 或 Flutter，每种都有一份指南，并列出应用已经在使用的 Liquid Glass API。
- **每条规则都有出处。** 规则是数据（[rules/liquid-glass.json](rules/liquid-glass.json)），引用的是 Apple、React Navigation、Expo 和 Flutter 自己的页面；如果有规则缺少出处，测试就会失败。
- **在模拟器中验证过。** 用 Xcode 27.1 构建，同一个应用在有键和无键两种情况下，在 iOS 27.0 上显示相同的画面，在 iOS 26.4 上则是两种不同的设计。录屏和截图都在仓库中。
- **为 CI 而设计。** 提供终端、纯文本、Markdown 和 JSON 报告，以及退出码：0 表示无问题，1 表示有发现，2 表示用法错误。

## 快速开始

**1. 安装 glassready。** 用 [Homebrew](https://brew.sh/) 安装（它会一并安装 Node.js）：

```sh
brew install muhittincamdali/tap/glassready
```

或者用 npm 从 [GitHub release](https://github.com/muhittincamdali/glassready/releases/tag/v0.1.2) 安装，这需要 [Node.js](https://nodejs.org/) 22.12 或更高版本（`node --version` 可查看版本）：

```sh
npm i -g https://github.com/muhittincamdali/glassready/releases/download/v0.1.2/glassready-0.1.2.tgz
```

这个包还没有发布到 npm registry；计划以 `@mcamdali/glassready` 的名字发布。两条命令安装的是同一个 release tarball。

**2. 在应用所在的文件夹中打开终端**，也就是包含 `.xcodeproj`、`pubspec.yaml` 或 `package.json` 的那个文件夹：

```sh
cd path/to/YourApp
```

**3. 运行 glassready：**

```sh
glassready
```

**4. 阅读项目名称下面的那一行。** 看到 "The Liquid Glass opt-out is ignored"（Liquid Glass 退出键被忽略），说明这个应用即使设置了退出，在 iOS 27 上也会发生变化：先看 **ERROR**，再看 **WARNING** 发现，这些是你的代码覆盖新栏的位置。**INFO** 发现值得在 iOS 27 模拟器上看一眼。每条发现都会按名称指向 "How to fix" 列表中的修复办法。

## 用 iOS 27 SDK 构建时会发生什么变化

引自 Apple 的 [UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility) 页面：

> The system ignores this key when you build for iOS 27 or later, iPadOS 27 or later, Mac Catalyst
> 27 or later, macOS 27 or later, or tvOS 27 or later.

我们用 Xcode 27.1 把同一个 UIKit 应用构建了两次，一次带这个键，一次不带，并在 iPhone 17 模拟器上比较了截图（[方法](docs/guides/opt-out.md#what-we-saw-in-the-simulator)）：

| 模拟器   | 有键和无键时画面相同吗？                                                                      |
| -------- | --------------------------------------------------------------------------------------------- |
| iOS 27.0 | 相同：主屏幕指示条以上有 0 个像素不同；这个键被忽略                                           |
| iOS 26.4 | 不同：3,089,772 个像素中有 361,909 个不同；带这个键时，应用保留早期 SDK 的设计                |

<p align="center"><img src="docs/media/simulator/opt-out-ios26-ios27.png" width="720" alt="在 iPhone 17 模拟器上、用 Xcode 27.1 构建的 native-uikit-optout fixture。从左到右：带键的 iOS 26.4（通栏 tab bar、大标题）、不带键的 iOS 26.4（悬浮的 Liquid Glass tab bar）、带键的 iOS 27.0 和不带键的 iOS 27.0（两者都是悬浮的 Liquid Glass tab bar）"></p>

因此，只要 Info.plist 中还有这个键，同一个构建就会呈现两种设计：在 iOS 26 上是旧设计，在 iOS 27 上是 Liquid Glass。Apple 的 [Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass) 列出了接下来要检查的内容；下面的规则就是依照它制定的。

上传必须使用哪个 SDK，由 App Store Connect 在 Apple 的 [Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) 页面中规定。2026 年 10 月 27 日，这一要求是使用 iOS 26 SDK 的 Xcode 26（自 2026 年 4 月 28 日起）。当要求改为 iOS 27 SDK 时，第一行的情况将适用于每一次上传。

## glassready 检查什么

| 规则   | 严重程度 | 发现                                                                                                          | 代码               |
| ------ | -------- | ------------------------------------------------------------------------------------------------------------- | ------------------ |
| GLS001 | error    | Info.plist 中、构建设置里或 Expo 配置中的 `UIDesignRequiresCompatibility` 为 YES                              | 全部               |
| GLS002 | warning  | 使用 `configureWithOpaqueBackground()`，或设置了自己的背景色、图片、效果或阴影的栏外观                        | UIKit              |
| GLS003 | warning  | `barTintColor`、`isTranslucent = false`、栏的背景图片或阴影图片                                               | UIKit              |
| GLS004 | warning  | 不是 `.automatic` 的 `toolbarBackground` / `toolbarBackgroundVisibility`                                      | SwiftUI            |
| GLS005 | warning  | `UITabBar` 或 `UIToolbar` 的子类，或为了换成自定义 tab bar 而隐藏的系统 tab bar                               | UIKit、SwiftUI     |
| GLS006 | info     | 在未使用 `UIGlassEffect` 的文件中出现的 `UIBlurEffect` 视图                                                   | UIKit              |
| GLS007 | warning  | `presentationBackground`，或 popover 的 `backgroundColor`                                                     | SwiftUI、UIKit     |
| GLS008 | info     | 加到 safe-area inset 上的数字、为布局而读取的栏的 frame 高度、49 或 83 pt 的 tab bar                          | 除 Flutter 外全部  |
| GLS009 | info     | 用大写字母书写的分区标题                                                                                      | SwiftUI            |
| GLS101 | warning  | 带有 `headerStyle.backgroundColor`、`headerBackground` 或 `headerBlurEffect` 的原生 stack 标题                | React Native、Expo |
| GLS102 | info     | 用 JavaScript 绘制的 tab bar：`createBottomTabNavigator`、Expo Router `Tabs`、自定义 `tabBar`                 | React Native、Expo |
| GLS103 | info     | iOS 26 及更高版本会忽略的原生 tab bar 属性（`backgroundColor`、`blurEffect` 等）                              | React Native、Expo |
| GLS104 | warning  | 使用低于 4.30.0 的 `react-native-screens` 的原生底部 tab                                                      | React Native       |
| GLS201 | info     | Flutter 自行绘制的 Cupertino 栏                                                                               | Flutter            |
| GLS202 | info     | 与 Flutter widget 并列的、含 UIKit 控件的 `UiKitView`                                                         | Flutter            |

规则数据为 `liquid-glass@2026.10.27`，已对照 Xcode 27.1（27A9275）核对。报告还会列出应用已在使用的 Liquid Glass API（`UIGlassEffect`、`glassEffect`、glass 按钮样式、`safeAreaBar`、`NativeTabs` 等），以及一个影响分数：退出键 50 分，每个 warning 6 分，每个 info 发现 2 分，最高 100 分。这个分数用于给项目排序，不是对设计的评分。

## 安装

“快速开始”中的命令会从 GitHub release 安装 `glassready` 命令。每个 [GitHub release](https://github.com/muhittincamdali/glassready/releases) 都以 `glassready-<version>.tgz` 的形式附带这个包，并附有 `SHA256SUMS` 文件。要在项目中固定某个 release：

```sh
npm install --save-dev https://github.com/muhittincamdali/glassready/releases/download/v0.1.2/glassready-0.1.2.tgz
```

之后 `npx glassready` 会运行这份副本。这个包以 `@mcamdali/glassready` 的名字安装，下面的 JavaScript API 导入的也是这个名字。发布到 npm registry 已在计划中；在那之前，`npx @mcamdali/glassready` 找不到这个包。

## 使用方法

```text
glassready [path] [options]
```

| 选项                    | 作用                                                                       |
| ----------------------- | -------------------------------------------------------------------------- |
| `path`                  | 项目文件夹或 `.xcodeproj`；默认为当前文件夹                                |
| `-f, --format <format>` | `tty`（默认）、`text`、`markdown` 或 `json`                                |
| `--json`                | 等同于 `--format json`                                                     |
| `-o, --output <file>`   | 把报告写入文件，而不是输出到终端                                           |
| `--fail-on <severity>`  | `warning`（默认）、`error`、`info` 或 `none`：决定何时返回退出码 1         |
| `--no-color`            | 即使在终端中也输出纯文本（遵循 `NO_COLOR` 和 `FORCE_COLOR`）               |

退出码：`0` 表示没有达到或高于 `--fail-on` 的发现，`1` 表示有达到或高于它的发现，`2` 表示参数错误、未找到 iOS 项目或发生意外错误。如果因为 Info.plist 或 Xcode 项目无法读取而未能检查退出键，除非使用 `--fail-on none`，退出码同样为 `1`。

glassready 会自动找到 iOS 应用：原生应用是根目录或下一级文件夹中的 `.xcodeproj`，Flutter、React Native 和 Expo 应用是 `ios/`（Flutter 插件是 `example/ios/`）。它会读取每个 iOS 应用 target 的 Info.plist（XML 或二进制）和构建设置、应用的 Swift 和 Objective-C 文件、React Native 或 Expo 应用的 JavaScript 和 TypeScript 文件，以及 `lib/` 中的 Dart 文件，并跳过依赖、构建产物和测试。没有 `ios/` 的 Expo 应用则根据其配置检查。

### 把 Markdown 报告与代码放在一起

```sh
glassready --format markdown --output glassready.md
```

### 在脚本中使用 JSON 报告

```sh
glassready --json > glassready.json
```

每条发现都有 `rule`、`severity`、`title`、`message`、`file`、`line`、`target`，以及包含步骤和指南的 `fix` 和 `sources`。其结构为 `schemaVersion` 0，在 1.0 之前可能会改变。[examples/shell/opt-out-targets.sh](examples/shell/opt-out-targets.sh) 用 `jq` 对它进行筛选。

### 在 CI 中运行

[examples/github-actions/glassready.yml](examples/github-actions/glassready.yml) 会把报告添加到每个涉及该应用的 pull request 的 job 摘要中，并在出现 warning 时让 job 失败。`--fail-on error` 只会在退出键被忽略时失败。

### 通过 JavaScript 使用

```js
import { render, scan } from '@mcamdali/glassready';

const report = await scan('path/to/app');
console.log(report.verdict.text, report.impact.level);
console.log(render(report, 'markdown'));
```

可运行的版本见 [examples/api/impact.mjs](examples/api/impact.mjs)。

## 演示

终端录屏取自 CLI 在 [fixtures](fixtures/README.md) 上的运行，这些是用各个工具链制作的项目：

| 项目                                                            | 录屏                                                                                                                                        |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 带有退出键和不透明栏的 UIKit 应用                               | 本页顶部                                                                                                                                    |
| 带有原生 stack 和 JavaScript tab 的 React Native 0.88.1 应用    | [浅色](docs/media/demo-react-native-light.svg) · [深色](docs/media/demo-react-native-dark.svg)                                              |
| 带有 Cupertino 栏和 `UiKitView` 的 Flutter 3.47.5 应用          | [浅色](docs/media/demo-flutter-light.svg) · [深色](docs/media/demo-flutter-dark.svg)                                                        |
| 带有 toolbar 背景和自定义底部栏的 SwiftUI 应用                  | [浅色](docs/media/demo-swiftui-light.svg) · [深色](docs/media/demo-swiftui-dark.svg)                                                        |
| 在 iOS 27.0 和 iOS 26.4 上运行 `scripts/simulator-compare.sh`   | [27.0](docs/media/demo-simulator-native-uikit-optout-27.0-light.svg) · [26.4](docs/media/demo-simulator-native-uikit-optout-26.4-light.svg) |

iOS 27.0 的 iPhone 17 模拟器上的四个 fixture，均由 Xcode 27.1 构建：带有不透明深蓝色栏的 UIKit 应用（未显示大标题）、修复后的同一个应用、带有绿色 toolbar 背景的 SwiftUI 应用，以及带有 Flutter 自绘的扁平 tab bar 的 Flutter 应用：

<p align="center"><img src="docs/media/simulator/fixtures-ios27.png" width="720" alt="iOS 27.0 的 iPhone 17 模拟器上的四个 fixture，均由 Xcode 27.1 构建：native-uikit-optout、native-uikit-glass、native-swiftui 和 flutter-cupertino"></p>

测量于 2026 年 10 月 27 日，在一台 Mac（Apple silicon，M5 Max）上使用 Node.js 26.11：对七个 fixture 运行 `node dist/cli/main.js --json`，共三组、每组 100 次，包含 Node.js 的启动时间。三组的中位数分别为 0.12、0.12 和 0.11 秒；最慢的一次耗时 0.17 秒。

## 状态

| 功能                                                                                          | 状态          |
| --------------------------------------------------------------------------------------------- | ------------- |
| 识别原生、Flutter（应用和插件示例）、React Native 和 Expo 项目                                | 可用          |
| 检查 Info.plist、构建设置和 Expo 配置中的 GLS001（app.json；app.config.js/ts 按文本处理）     | 可用          |
| 在 Swift 和 Objective-C 上检查 GLS002 至 GLS009；在 JavaScript 和 TypeScript 上检查 GLS101 至 GLS104 | 可用   |
| 在 Dart 上检查 GLS201 和 GLS202                                                               | 可用          |
| 终端、文本、Markdown 和 JSON 报告；影响分数；已采用的 API；`--fail-on` 退出码                 | 可用          |
| 依赖（Pods、`node_modules`、Flutter 插件）和 `.xcconfig` 构建设置                             | 计划中（0.2） |
| SARIF 输出和 GitHub Action                                                                    | 计划中（0.3） |
| 用 Swift 语法树取代模式匹配；通过 CLI 在模拟器中截图                                          | 计划中（0.5） |
| 稳定的规则 schema 和 JSON 结构                                                                | 计划中（1.0） |

## 局限

- **是模式匹配，不是编译器。** 规则是作用于源码文本的正则表达式，其中的注释和字符串已被置空。生成的代码、藏在宏后面的代码、运行时才构造的代码，或写法不常见的代码，可能被漏掉，也可能被误匹配。
- **只检查应用自己的源码。** 规则只作用于应用自己的代码：不会读取 Pods、应用文件夹之外的 Swift package、`node_modules` 和 Flutter 插件的源码。glassready 只从 `node_modules` 中读取它关注的 React Native 和 Expo 包（`react-native`、`expo`、`react-native-screens` 等共 11 个）的 `<name>/package.json`，以获得已安装的版本；链接到 `node_modules/<name>` 文件夹之外的此类文件不会被读取。
- **构建设置只来自 project.pbxproj。** 不会读取 `.xcconfig` 文件。如果无法读取某个 target 的 Info.plist，其退出状态为"未知"，报告会说明原因。无法读取 Xcode 项目时也是如此；此时结论为 "Opt-out not known"，绝不会显示为已就绪。
- **Expo 配置按文本处理。** `app.config.js` 和 `app.config.ts` 不会被执行，因此通过变量或 config plugin 设置的退出键不会被发现。
- **只看文件。** glassready 不会构建应用，也不会查看应用的界面。本仓库中的模拟器录屏来自 `scripts/` 中的脚本，在 Mac 上运行。
- **输入有上限。** 项目可能来自 pull request，因此 glassready 每个项目文件最多读取 32 MB；源码每个文件最多 4 MB、最多 20,000 个文件、总计最多 128 MB，未读取的内容会列在报告的说明中。一个二进制 plist 最多产生 100,000 个值，plist 和 JSON 文件（package.json、package-lock.json、app.json）最多嵌套 64 层，更深的 JSON 文件不会被解析。在 Mac (Apple silicon) 和 Node 26 上，一个 package.json、package-lock.json 和 `node_modules` 中 4 个 package.json 各为 31 MB 嵌套数组的项目，检查用时 0.2 秒，内存最多 190 MB。

## 文档

API 参考和指南：[muhittincamdali.github.io/glassready](https://muhittincamdali.github.io/glassready/)。

## 指南

- [为什么 Liquid Glass 退出键会失效](docs/guides/opt-out.md)
- [原生 UIKit 和 SwiftUI 应用](docs/guides/native-ios.md)
- [React Native 和 Expo 应用](docs/guides/react-native-expo.md)
- [Flutter 应用](docs/guides/flutter.md)

## 参考资料

查阅于 2026 年 10 月 27 日：

- Apple：[UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility)、[Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)、[Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/)，以及每条规则在 [rules/liquid-glass.json](rules/liquid-glass.json) 中链接的 API 页面。
- React Navigation：[Native Stack](https://reactnavigation.org/docs/native-stack-navigator/)、[Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator/)、[Native Bottom Tabs](https://reactnavigation.org/docs/native-bottom-tab-navigator/)。
- Expo：[JavaScript tabs](https://docs.expo.dev/router/advanced/tabs/)、[Native tabs](https://docs.expo.dev/router/advanced/native-tabs/)、[app config `ios.infoPlist`](https://docs.expo.dev/versions/latest/config/app/)。
- Flutter：[issue 170310](https://github.com/flutter/flutter/issues/170310)、[cupertino_ui changelog](https://pub.dev/packages/cupertino_ui/changelog)、[platform views on iOS](https://docs.flutter.dev/platform-integration/ios/platform-views)。

## 系统要求

在 macOS、Linux 或 Windows 上使用 Node.js 22.12 或更高版本。读取项目不需要其他任何东西：不需要 Xcode、Flutter 或 React Native 工具链。模拟器脚本需要装有 Xcode、XcodeGen 和 ImageMagick 的 Mac。

## 架构

```text
detectProject      native | flutter | react-native | expo, the iOS folder, package versions
  ─► collectApp    app targets, Info.plist files, build settings, blanked sources
  ─► checkApp      GLS001 opt-out · GLS002–009 native · GLS101–104 React Native · GLS201–202 Flutter
                   rules/liquid-glass.json: what each rule says, fixes, sources (validated with zod)
  ─► scan          findings, verdict, impact score, adopted APIs
  ─► render        tty | text | markdown | json
```

- 规则数据与代码分开，并带有版本（`liquid-glass@2026.10.27`）；如果某条规则没有出处，或指向了不存在的指南，测试就会失败。
- CLI（`src/cli/`）只负责解析参数、选择颜色和宽度，并设置退出码。

## 相关项目

[sdkbump](https://github.com/muhittincamdali/sdkbump) 回答的是 iOS 27 SDK 的另一个问题：应用还能启动吗？它检查 UIScene 生命周期，这是用 iOS 27 SDK 构建的应用必须采用的。glassready 回答的是应用会长什么样。第一次用 Xcode 27 构建之前，请两个都运行一下。

## 常见问题

**我的应用今天在 iOS 27 上运行，外观依然没变。它会受影响吗？** Apple 的文档把这一变化与应用所用的构建 SDK 联系在一起，所以用 Xcode 26 构建的版本应该会保持原有设计；我们无法在这里验证这一点，因为只安装了 Xcode 27.1。你下一次用 Xcode 27 构建时，就会忽略这个键。

**GLS002 或 GLS004 的警告一定是 bug 吗？** 不一定。栏上的品牌色可能是有意为之。警告只是说明代码覆盖了 Liquid Glass 所绘制的栏；请在 iOS 27 模拟器上看一下实际画面，再做决定。

**glassready 会修改我的项目吗？** 不会。它只读取项目，只写入你要求的报告。

## 参与贡献

欢迎参与贡献。提交 pull request 之前，请先阅读[贡献指南](CONTRIBUTING.md)和[行为准则](https://github.com/muhittincamdali/.github/blob/main/CODE_OF_CONDUCT.md)。如发现安全问题，请按照[安全策略](SECURITY.md)私下报告。

## 许可证

基于 MIT 许可证发布。详见 [LICENSE](LICENSE)。
