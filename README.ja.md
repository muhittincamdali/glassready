<!-- i18n-source: README.md@9196f58b96864395911d2d092b128cd308d8cce4 status=reviewed -->
<!-- brand:start -->

<p align="center"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg" alt="glassready: Shows what Liquid Glass changes in iOS, Flutter and React Native apps built with the iOS 27 SDK, and the fix for each."></picture></p>

<!-- lang-selector:start -->
<p align="center"><a href="README.md">English</a> · <a href="README.tr.md">Türkçe</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a></p>
<!-- lang-selector:end -->

<p align="center">
<a href="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml"><img src="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml/badge.svg" alt="CI ステータス"></a>
<a href="https://github.com/muhittincamdali/glassready/releases"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg" alt="最新バージョン: v0.1.3"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/package.json"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg" alt="言語バージョン: Node.js 22.12+"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/LICENSE"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg" alt="ライセンス: MIT"></picture></a>
</p>

<p align="center">
<a href="#クイックスタート"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-ja-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-ja-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-ja-light.svg" alt="はじめる"></picture></a>
<a href="https://muhittincamdali.github.io/glassready/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-ja-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-ja-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-ja-light.svg" alt="ドキュメント"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/docs/guides"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-ja-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-ja-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-ja-light.svg" alt="ガイド"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/examples"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-ja-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-ja-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-ja-light.svg" alt="サンプル"></picture></a>
</p>

> このドキュメントは英語版 README の翻訳です。内容が異なる場合は英語版が最新です。

<!-- brand:end -->

Liquid Glass の採用を `UIDesignRequiresCompatibility` で延期している場合、iOS 27 SDK はこのキーを無視します。Xcode 27 でビルドしたアプリは、Info.plist の内容にかかわらず iOS 27 で Liquid Glass 表示になります。glassready は、ネイティブ iOS、Flutter、React Native/Expo のプロジェクトを読み取り、それによって何が変わるかを一覧にします。対象は、オプトアウトのキーと、Liquid Glass が描画するバーやシートをアプリが塗りつぶしたり、隠したり、サイズを計測したりしているすべての箇所で、それぞれに対処方法を示します。読み取るのはプロジェクトのファイルだけで、ビルド、実行、変更は行いません。

<picture><source media="(prefers-color-scheme: dark)" srcset="docs/media/demo-uikit-optout-dark.svg"><source media="(prefers-color-scheme: light)" srcset="docs/media/demo-uikit-optout-light.svg"><img src="docs/media/demo-uikit-optout-light.svg" alt="UIKit アプリで glassready を実行した結果。iOS 27 SDK でビルドすると Liquid Glass のオプトアウトは無視される。GLS001 は Info.plist のオプトアウト、GLS002 は 2 件の不透明なバー外観、GLS003 は isTranslucent と barTintColor、GLS006 はブラーパネル、GLS008 は固定の tab bar オフセットで、それぞれに対処方法が付く"></picture>

<sub>実際の CLI で <a href="fixtures/native-uikit-optout">native-uikit-optout
fixture</a> を実行して記録したものです。これはテスト用に作成した UIKit アプリです（<code>npm run demo</code>）。</sub>

## 主な特長

- **オプトアウトがどこにあっても見つけます。** Info.plist の中、ビルド設定の `INFOPLIST_KEY_UIDesignRequiresCompatibility`（Xcode 27.1 は生成される Info.plist にコピーすらしません）、または Expo の設定が対象です。
- **Liquid Glass を覆っているものを示します。** ネイティブコードでは、不透明なバー外観、`barTintColor`、SwiftUI の toolbar 背景、カスタム tab bar、ブラーレイヤー、シートの背景、固定のバーの高さ、大文字で書かれたセクションヘッダー。React Native と Expo では、ヘッダーの色、JavaScript で描画された tab bar、無視される tab bar の props。Flutter では、Flutter が描画する Cupertino バーと UIKit の platform view です。
- **お使いのコードに合った対処方法を示します。** UIKit、SwiftUI、React Native、Expo、Flutter のそれぞれにガイドがあり、アプリがすでに使っている Liquid Glass API の一覧も出力します。
- **すべてのルールに出典があります。** ルールはデータ（[rules/liquid-glass.json](rules/liquid-glass.json)）で、Apple、React Navigation、Expo、Flutter 自身のページを引用しています。出典のないルールがあればテストが失敗します。
- **シミュレーターで確認済みです。** Xcode 27.1 でビルドした同じアプリは、キーがあってもなくても iOS 27.0 では同じ画面になり、iOS 26.4 では 2 種類のデザインになります。録画とスクリーンショットはリポジトリに入っています。
- **CI 向けに作られています。** ターミナル、プレーンテキスト、Markdown、JSON のレポートと終了コード（0 は問題なし、1 は検出あり、2 は使い方の誤り）を備えています。

## クイックスタート

**1. glassready をインストールします。** Node.js も一緒にインストールされる [Homebrew](https://brew.sh/) の場合：

```sh
brew install muhittincamdali/tap/glassready
```

または npm レジストリから npm でインストールします。[Node.js](https://nodejs.org/) 22.12 以降が必要です（`node --version` で確認できます）：

```sh
npm i -g @mcamdali/glassready
```

インストールせずに実行するには `npx @mcamdali/glassready` を使います。各 [GitHub release](https://github.com/muhittincamdali/glassready/releases/tag/v0.1.3) には同じパッケージが tarball として `SHA256SUMS` ファイルと一緒に含まれており、release の固定や検証に使えます。

**2. アプリのフォルダーでターミナルを開きます。** `.xcodeproj`、`pubspec.yaml`、または `package.json` があるフォルダーです。

```sh
cd path/to/YourApp
```

**3. glassready を実行します。**

```sh
glassready
```

**4. プロジェクト名の下の行を読みます。** "The Liquid Glass opt-out is ignored"（Liquid Glass のオプトアウトは無視される）と表示された場合、オプトアウトしていても iOS 27 でアプリの見た目が変わります。まず **ERROR** を確認し、次に **WARNING** の検出に進んでください。これは、コードが新しいバーを塗りつぶしている箇所です。**INFO** の検出は、iOS 27 シミュレーターで確認する価値があります。各検出には、"How to fix" の一覧にある対処方法の名前が付いています。

## iOS 27 SDK でビルドすると何が変わるか

Apple の [UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility) のページより:

> The system ignores this key when you build for iOS 27 or later, iPadOS 27 or later, Mac Catalyst
> 27 or later, macOS 27 or later, or tvOS 27 or later.

同じ UIKit アプリを Xcode 27.1 でキーありとキーなしの 2 通りにビルドし、iPhone 17 シミュレーターでスクリーンショットを比較しました（[方法](docs/guides/opt-out.md#what-we-saw-in-the-simulator)）。

| シミュレーター | キーありとキーなしで同じ画面か                                                              |
| -------------- | ------------------------------------------------------------------------------------------- |
| iOS 27.0       | はい。ホームインジケーターより上で異なるピクセルは 0 で、キーは無視されます                |
| iOS 26.4       | いいえ。3,089,772 ピクセル中 361,909 ピクセルが異なり、キーがあると以前の SDK のデザインを維持します |

<p align="center"><img src="docs/media/simulator/opt-out-ios26-ios27.png" width="720" alt="iPhone 17 シミュレーター上の、Xcode 27.1 でビルドした native-uikit-optout fixture。左から、キーありの iOS 26.4（全幅の tab bar、ラージタイトル）、キーなしの iOS 26.4（浮いた Liquid Glass の tab bar）、キーありの iOS 27.0、キーなしの iOS 27.0（どちらも浮いた Liquid Glass の tab bar）"></p>

つまり、Info.plist にキーが残っている間は、1 つのビルドが 2 つのデザインを見せることになります。iOS 26 では従来のデザイン、iOS 27 では Liquid Glass です。Apple の [Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass) には次に確認すべき項目が挙げられており、以下のルールはそれに沿っています。

アップロードにどの SDK を使う必要があるかは、App Store Connect が Apple の [Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) のページで定めています。2026年10月27日時点では、iOS 26 SDK を含む Xcode 26 でした（2026年4月28日から）。これが iOS 27 SDK に変わると、最初の行の動作がすべてのアップロードに当てはまります。

## glassready が調べること

| ルール | 重大度  | 検出内容                                                                                                      | コード             |
| ------ | ------- | ------------------------------------------------------------------------------------------------------------- | ------------------ |
| GLS001 | error   | Info.plist、ビルド設定、または Expo の設定で `UIDesignRequiresCompatibility` が YES                           | すべて             |
| GLS002 | warning | `configureWithOpaqueBackground()` を使う、または独自の背景色、画像、エフェクト、シャドウを持つバー外観       | UIKit              |
| GLS003 | warning | `barTintColor`、`isTranslucent = false`、バーの背景画像やシャドウ画像                                         | UIKit              |
| GLS004 | warning | `.automatic` 以外の `toolbarBackground` / `toolbarBackgroundVisibility`                                       | SwiftUI            |
| GLS005 | warning | `UITabBar` または `UIToolbar` のサブクラス、またはカスタム tab bar のために隠されたシステムの tab bar        | UIKit、SwiftUI     |
| GLS006 | info    | `UIGlassEffect` を使っていないファイル内の `UIBlurEffect` ビュー                                              | UIKit              |
| GLS007 | warning | `presentationBackground`、またはポップオーバーの `backgroundColor`                                            | SwiftUI、UIKit     |
| GLS008 | info    | safe-area inset に加算された数値、レイアウトのために読み取られたバーの frame の高さ、49 または 83 ポイントの tab bar | Flutter 以外すべて |
| GLS009 | info    | 大文字で書かれたセクションヘッダー                                                                            | SwiftUI            |
| GLS101 | warning | `headerStyle.backgroundColor`、`headerBackground`、`headerBlurEffect` を持つネイティブ stack のヘッダー       | React Native、Expo |
| GLS102 | info    | JavaScript で描画された tab bar: `createBottomTabNavigator`、Expo Router の `Tabs`、カスタムの `tabBar`      | React Native、Expo |
| GLS103 | info    | iOS 26 以降で無視されるネイティブ tab bar の props（`backgroundColor`、`blurEffect` など）                    | React Native、Expo |
| GLS104 | warning | 4.30.0 より古い `react-native-screens` でのネイティブ bottom tabs                                             | React Native       |
| GLS201 | info    | Flutter が自前で描画する Cupertino バー                                                                       | Flutter            |
| GLS202 | info    | Flutter ウィジェットと並べて UIKit コントロールを置いた `UiKitView`                                           | Flutter            |

ルールデータは `liquid-glass@2026.10.27` で、Xcode 27.1（27A9275）に対して確認しています。レポートには、アプリがすでに使っている Liquid Glass API（`UIGlassEffect`、`glassEffect`、glass ボタンスタイル、`safeAreaBar`、`NativeTabs` など）と、影響スコアも出力されます。スコアは、オプトアウトが 50、warning 1 件につき 6、info の検出 1 件につき 2 で、最大 100 です。このスコアはプロジェクトを並べ替えるためのもので、デザインを評価するものではありません。

## インストール

「クイックスタート」のコマンドは、npm レジストリから `glassready` コマンドをインストールします。プロジェクトに追加するには：

```sh
npm install --save-dev @mcamdali/glassready
```

その後は `npx glassready` がそのコピーを実行します。パッケージは `@mcamdali/glassready` という名前でインストールされ、後述の JavaScript API もこの名前で import します。release を固定または検証するには、各 [GitHub release](https://github.com/muhittincamdali/glassready/releases) にパッケージが `glassready-<version>.tgz` として `SHA256SUMS` ファイルと一緒に含まれています。`npm install --save-dev` はパッケージ名の代わりにこの tarball の URL を受け付けます。

## 使い方

```text
glassready [path] [options]
```

| オプション              | 内容                                                                       |
| ----------------------- | -------------------------------------------------------------------------- |
| `path`                  | プロジェクトのフォルダーまたは `.xcodeproj`。省略時はカレントフォルダー   |
| `-f, --format <format>` | `tty`（既定）、`text`、`markdown`、`json`                                  |
| `--json`                | `--format json` と同じ                                                     |
| `-o, --output <file>`   | レポートをターミナルではなくファイルに書き出す                             |
| `--fail-on <severity>`  | `warning`（既定）、`error`、`info`、`none`。終了コードが 1 になる条件      |
| `--no-color`            | ターミナルでもプレーンテキストにする（`NO_COLOR` と `FORCE_COLOR` に対応） |

終了コード: `0` は `--fail-on` 以上の検出なし、`1` は `--fail-on` 以上の検出あり、`2` は引数の誤り、iOS プロジェクトが見つからない、または予期しないエラーです。Info.plist または Xcode プロジェクトを読み取れずにオプトアウトを確認できなかった場合も、`--fail-on none` でない限り `1` になります。

glassready は iOS アプリを自動で見つけます。ネイティブアプリではルートまたは 1 つ下のフォルダーにある `.xcodeproj`、Flutter、React Native、Expo のアプリでは `ios/`（Flutter プラグインでは `example/ios/`）です。iOS アプリのすべてのターゲットの Info.plist（XML またはバイナリ）とビルド設定、アプリの Swift と Objective-C のファイル、React Native または Expo アプリの JavaScript と TypeScript、`lib/` の Dart ファイルを読み取り、依存関係、ビルド出力、テストは読み飛ばします。`ios/` のない Expo アプリは、設定から調べます。

### Markdown レポートをコードと一緒に残す

```sh
glassready --format markdown --output glassready.md
```

### JSON レポートをスクリプトで使う

```sh
glassready --json > glassready.json
```

各検出には `rule`、`severity`、`title`、`message`、`file`、`line`、`target` と、手順とガイドを含む `fix`、そして `sources` があります。形式は `schemaVersion` 0 で、1.0 より前に変更される可能性があります。[examples/shell/opt-out-targets.sh](examples/shell/opt-out-targets.sh) は、これを `jq` で絞り込みます。

### CI で実行する

[examples/github-actions/glassready.yml](examples/github-actions/glassready.yml) は、アプリに手を加えるすべての pull request のジョブサマリーにレポートを追加し、warning があるとジョブを失敗させます。`--fail-on error` を指定すると、無視されるオプトアウトがある場合にのみ失敗します。

### JavaScript から使う

```js
import { render, scan } from '@mcamdali/glassready';

const report = await scan('path/to/app');
console.log(report.verdict.text, report.impact.level);
console.log(render(report, 'markdown'));
```

実行可能なサンプルは [examples/api/impact.mjs](examples/api/impact.mjs) にあります。

## デモ

ターミナルの録画は、各ツールチェーンで作った [fixtures](fixtures/README.md) に対して CLI を実行したものです。

| プロジェクト                                                           | 録画                                                                                                                                        |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| オプトアウトと不透明なバーを持つ UIKit アプリ                          | このページの先頭                                                                                                                            |
| ネイティブ stack と JavaScript タブを持つ React Native 0.88.1 アプリ   | [ライト](docs/media/demo-react-native-light.svg) · [ダーク](docs/media/demo-react-native-dark.svg)                                          |
| Cupertino バーと `UiKitView` を持つ Flutter 3.47.5 アプリ              | [ライト](docs/media/demo-flutter-light.svg) · [ダーク](docs/media/demo-flutter-dark.svg)                                                    |
| toolbar 背景とカスタムの下部バーを持つ SwiftUI アプリ                  | [ライト](docs/media/demo-swiftui-light.svg) · [ダーク](docs/media/demo-swiftui-dark.svg)                                                    |
| iOS 27.0 と iOS 26.4 での `scripts/simulator-compare.sh`               | [27.0](docs/media/demo-simulator-native-uikit-optout-27.0-light.svg) · [26.4](docs/media/demo-simulator-native-uikit-optout-26.4-light.svg) |

iOS 27.0 の iPhone 17 シミュレーター上の 4 つの fixture で、いずれも Xcode 27.1 でビルドしています。不透明な紺色のバーを持つ UIKit アプリ（ラージタイトルは表示されていません）、修正後の同じアプリ、緑の toolbar 背景を持つ SwiftUI アプリ、Flutter が描画するフラットな tab bar を持つ Flutter アプリです。

<p align="center"><img src="docs/media/simulator/fixtures-ios27.png" width="720" alt="iOS 27.0 の iPhone 17 シミュレーター上の 4 つの fixture（Xcode 27.1 でビルド）: native-uikit-optout、native-uikit-glass、native-swiftui、flutter-cupertino"></p>

計測は2026年10月27日に、Mac（Apple silicon、M5 Max）と Node.js 26.11 で行いました。7 つの fixture に対して `node dist/cli/main.js --json` を 100 回実行するセットを 3 回行っています。Node.js の起動時間を含みます。3 セットの中央値は 0.12 秒、0.12 秒、0.11 秒で、最も遅い実行は 0.17 秒でした。

## ステータス

| 機能                                                                                          | 状況          |
| --------------------------------------------------------------------------------------------- | ------------- |
| ネイティブ、Flutter（アプリとプラグインのサンプル）、React Native、Expo のプロジェクト検出   | 動作します    |
| Info.plist、ビルド設定、Expo の設定（app.json。app.config.js/ts はテキストとして）での GLS001 | 動作します    |
| Swift と Objective-C での GLS002 から GLS009、JavaScript と TypeScript での GLS101 から GLS104 | 動作します    |
| Dart での GLS201 と GLS202                                                                    | 動作します    |
| ターミナル、テキスト、Markdown、JSON のレポート、影響スコア、採用済み API、`--fail-on` の終了コード | 動作します |
| 依存関係（Pods、`node_modules`、Flutter プラグイン）と `.xcconfig` のビルド設定               | 計画中（0.2） |
| SARIF 出力と GitHub Action                                                                    | 計画中（0.3） |
| パターンの代わりに Swift の構文木を使用、CLI からシミュレーターでスクリーンショットを撮影    | 計画中（0.5） |
| 安定したルールスキーマと JSON の形式                                                          | 計画中（1.0） |

## 制限事項

- **コンパイラーではなくパターンです。** ルールは、コメントと文字列を空白に置き換えたソースコードに対する正規表現です。生成されたコード、マクロの陰に隠れたコード、実行時に組み立てられるコード、特殊な書き方のコードは、見落とされたり誤って一致したりすることがあります。
- **アプリ自身のソースのみです。** ルールはアプリ自身のコードに対して動きます。Pods、アプリのフォルダー外にある Swift パッケージ、`node_modules`、Flutter プラグインのソースは読み取りません。`node_modules` からは、glassready が見る React Native と Expo のパッケージ（`react-native`、`expo`、`react-native-screens` ほか 8 個）の `<name>/package.json` だけを、インストール済みのバージョンを知るために読み取ります。`node_modules/<name>` フォルダーの外を指すリンクになっているものは読み取りません。
- **ビルド設定は project.pbxproj のみです。** `.xcconfig` ファイルは読み取りません。ターゲットの Info.plist を読み取れない場合、そのオプトアウトの状態は「不明」となり、レポートに理由が表示されます。Xcode プロジェクトを読み取れない場合も同じで、判定は「Opt-out not known」となり、準備完了とはなりません。
- **Expo の設定はテキストとして扱います。** `app.config.js` と `app.config.ts` は実行しないため、変数や config plugin 経由で設定されたオプトアウトは検出されません。
- **ファイルのみです。** glassready はアプリをビルドせず、画面も見ません。このリポジトリにあるシミュレーターの録画は、Mac で実行した `scripts/` のスクリプトによるものです。
- **入力には上限があります。** プロジェクトは pull request から来ることもあるため、glassready が読み取るのはプロジェクトファイル 1 つあたり最大 32 MB、ソースはファイルあたり最大 4 MB・最大 20,000 ファイル・合計 128 MB までです。読み取らなかったものはレポートの注記に一覧表示されます。バイナリ plist が生成できる値は最大 100,000 個、plist と JSON ファイル（package.json、package-lock.json、app.json）の入れ子は最大 64 階層で、それより深い JSON ファイルは解析しません。Mac (Apple silicon) と Node 26 で、package.json、package-lock.json、`node_modules` の package.json 4 つがそれぞれ 31 MB の入れ子配列であるプロジェクトのチェックは 0.2 秒、メモリは最大 190 MB でした。

## ドキュメント

API リファレンスとガイド: [muhittincamdali.github.io/glassready](https://muhittincamdali.github.io/glassready/)。

## ガイド

- [Liquid Glass のオプトアウトが効かなくなる理由](docs/guides/opt-out.md)
- [ネイティブの UIKit と SwiftUI のアプリ](docs/guides/native-ios.md)
- [React Native と Expo のアプリ](docs/guides/react-native-expo.md)
- [Flutter のアプリ](docs/guides/flutter.md)

## 出典

2026年10月27日に確認しました。

- Apple: [UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility)、[Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)、[Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/)、および各ルールが [rules/liquid-glass.json](rules/liquid-glass.json) でリンクしている API のページ。
- React Navigation: [Native Stack](https://reactnavigation.org/docs/native-stack-navigator/)、[Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator/)、[Native Bottom Tabs](https://reactnavigation.org/docs/native-bottom-tab-navigator/)。
- Expo: [JavaScript tabs](https://docs.expo.dev/router/advanced/tabs/)、[Native tabs](https://docs.expo.dev/router/advanced/native-tabs/)、[app config `ios.infoPlist`](https://docs.expo.dev/versions/latest/config/app/)。
- Flutter: [issue 170310](https://github.com/flutter/flutter/issues/170310)、[cupertino_ui changelog](https://pub.dev/packages/cupertino_ui/changelog)、[platform views on iOS](https://docs.flutter.dev/platform-integration/ios/platform-views)。

## 動作要件

macOS、Linux、Windows 上の Node.js 22.12 以降。プロジェクトの読み取りに、ほかに必要なものはありません。Xcode、Flutter、React Native のツールチェーンは不要です。シミュレーター用のスクリプトには、Xcode、XcodeGen、ImageMagick を入れた Mac が必要です。

## アーキテクチャ

```text
detectProject      native | flutter | react-native | expo, the iOS folder, package versions
  ─► collectApp    app targets, Info.plist files, build settings, blanked sources
  ─► checkApp      GLS001 opt-out · GLS002–009 native · GLS101–104 React Native · GLS201–202 Flutter
                   rules/liquid-glass.json: what each rule says, fixes, sources (validated with zod)
  ─► scan          findings, verdict, impact score, adopted APIs
  ─► render        tty | text | markdown | json
```

- ルールのデータはコードから分離されており、バージョンが付いています（`liquid-glass@2026.10.27`）。ルールに出典がない場合や、存在しないガイドを指している場合は、テストが失敗します。
- CLI（`src/cli/`）が行うのは、引数の解析、色と幅の選択、終了コードの設定だけです。

## 関連プロジェクト

[sdkbump](https://github.com/muhittincamdali/sdkbump) は、iOS 27 SDK についてのもう 1 つの疑問「アプリは起動するか」に答えます。iOS 27 SDK でビルドしたアプリが採用しなければならない UIScene のライフサイクルを調べます。glassready は、アプリがどう見えるかに答えます。最初の Xcode 27 ビルドの前に、両方を実行してください。

## FAQ

**私のアプリは今日 iOS 27 で動いていて、見た目も変わっていません。影響を受けますか？** Apple のドキュメントは、この変更をアプリのビルドに使う SDK に結び付けています。そのため、Xcode 26 で作ったビルドは従来のデザインを維持するはずです。ただし、ここでは Xcode 27.1 しかインストールされていなかったため、確認できていません。次に Xcode 27 でビルドすると、このキーは無視されます。

**GLS002 や GLS004 の warning は、必ずバグですか？** いいえ。バーのブランドカラーは意図した選択かもしれません。warning は、Liquid Glass が描画するバーをコードが塗りつぶしていることを伝えるものです。iOS 27 シミュレーターで画面を確認して判断してください。

**glassready はプロジェクトを変更しますか？** いいえ。プロジェクトを読み取るだけで、書き出すのは指定したレポートだけです。

## コントリビューション

コントリビューションを歓迎します。pull request を作成する前に[コントリビューションガイド](CONTRIBUTING.md)と[行動規範](https://github.com/muhittincamdali/.github/blob/main/CODE_OF_CONDUCT.md)をお読みください。セキュリティ上の問題は[セキュリティポリシー](SECURITY.md)に従って非公開で報告してください。

## ライセンス

MIT ライセンスで公開しています。詳細は [LICENSE](LICENSE) を参照してください。
