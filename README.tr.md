<!-- i18n-source: README.md@9196f58b96864395911d2d092b128cd308d8cce4 status=reviewed -->
<!-- brand:start -->

<p align="center"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg" alt="glassready: Shows what Liquid Glass changes in iOS, Flutter and React Native apps built with the iOS 27 SDK, and the fix for each."></picture></p>

<!-- lang-selector:start -->
<p align="center"><a href="README.md">English</a> · <a href="README.tr.md">Türkçe</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a></p>
<!-- lang-selector:end -->

<p align="center">
<a href="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml"><img src="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml/badge.svg" alt="CI durumu"></a>
<a href="https://github.com/muhittincamdali/glassready/releases"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg" alt="Son sürüm: v0.1.3"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/package.json"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg" alt="Dil sürümü: Node.js 22.12+"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/LICENSE"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg" alt="Lisans: MIT"></picture></a>
</p>

<p align="center">
<a href="#hızlı-başlangıç"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-tr-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-tr-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-tr-light.svg" alt="Başlayın"></picture></a>
<a href="https://muhittincamdali.github.io/glassready/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-tr-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-tr-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-tr-light.svg" alt="Dokümantasyon"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/docs/guides"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-tr-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-tr-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-tr-light.svg" alt="Rehberler"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/examples"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-tr-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-tr-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-tr-light.svg" alt="Örnekler"></picture></a>
</p>

> Bu belge İngilizce README'nin çevirisidir. İkisi arasında fark varsa güncel olan İngilizce sürümdür.

<!-- brand:end -->

Liquid Glass'ı `UIDesignRequiresCompatibility` ile ertelediyseniz, iOS 27 SDK bu anahtarı yok sayar:
Xcode 27 ile derlenen bir uygulama, Info.plist dosyasında ne yazarsa yazsın iOS 27'de Liquid Glass
ile görünür. glassready; yerel iOS, Flutter veya React Native/Expo projesini okur ve bunun neyi
değiştireceğini listeler: opt-out anahtarını ve uygulamanın Liquid Glass'ın çizdiği çubukların ve
sheet'lerin üzerini boyadığı, onları gizlediği ya da ölçtüğü her yeri, her biri için çözümüyle
birlikte. Yalnızca projenizin dosyalarını okur; derlemez, çalıştırmaz, hiçbir şeyi değiştirmez.

<picture><source media="(prefers-color-scheme: dark)" srcset="docs/media/demo-uikit-optout-dark.svg"><source media="(prefers-color-scheme: light)" srcset="docs/media/demo-uikit-optout-light.svg"><img src="docs/media/demo-uikit-optout-light.svg" alt="glassready bir UIKit uygulamasında çalıştırıldı: iOS 27 SDK ile derlendiğinde Liquid Glass opt-out anahtarı yok sayılıyor; GLS001 Info.plist içindeki opt-out, GLS002 iki opak çubuk görünümü, GLS003 isTranslucent ve barTintColor, GLS006 bir bulanıklık paneli, GLS008 sabit bir tab bar ofseti; her birinin çözümüyle"></picture>

<sub>Gerçek CLI'dan kaydedildi; kaynak, testler için yazılmış bir UIKit uygulaması olan
<a href="fixtures/native-uikit-optout">native-uikit-optout fixture'ı</a> (<code>npm run demo</code>).</sub>

## Öne çıkanlar

- **Opt-out anahtarını nerede olursa bulur.** Info.plist içinde, `INFOPLIST_KEY_UIDesignRequiresCompatibility`
  build ayarı olarak (Xcode 27.1 bunu oluşturulan Info.plist'e kopyalamaz bile) ya da bir Expo
  yapılandırmasında.
- **Liquid Glass'ı nelerin örttüğünü gösterir.** Yerel kodda opak çubuk görünümleri, `barTintColor`,
  SwiftUI toolbar arka planları, özel tab bar'lar, bulanıklık katmanları, sheet arka planları, sabit
  çubuk yükseklikleri ve büyük harfle yazılmış bölüm başlıkları; React Native ve Expo'da başlık
  renkleri, JavaScript ile çizilen tab bar'lar ve yok sayılan tab bar prop'ları; Flutter'da Flutter'ın
  çizdiği Cupertino çubukları ve UIKit platform view'ları.
- **Kod türünüze uygun çözüm.** UIKit, SwiftUI, React Native, Expo veya Flutter için ayrı birer
  rehber ve uygulamanın zaten kullandığı Liquid Glass API'lerinin listesi.
- **Her kuralın bir kaynağı var.** Kurallar veridir ([rules/liquid-glass.json](rules/liquid-glass.json))
  ve Apple'ın, React Navigation'ın, Expo'nun ve Flutter'ın kendi sayfalarına dayanır; birinin kaynağı
  yoksa testler başarısız olur.
- **Simülatörde doğrulandı.** Xcode 27.1 ile derlenen aynı uygulama, anahtarla ve anahtarsız, iOS
  27.0'da aynı ekranı, iOS 26.4'te ise iki farklı tasarımı gösterir. Kayıtlar ve ekran görüntüleri
  depodadır.
- **CI için yapıldı.** Terminal, düz metin, Markdown ve JSON raporları ile bir çıkış kodu: 0 temiz,
  1 bulgu var, 2 kullanım hatası.

## Hızlı başlangıç

**1. glassready'yi kurun.** Node.js'i de kuran [Homebrew](https://brew.sh/) ile:

```sh
brew install muhittincamdali/tap/glassready
```

Ya da npm ile [GitHub release](https://github.com/muhittincamdali/glassready/releases/tag/v0.1.3)
üzerinden; bunun için [Node.js](https://nodejs.org/) 22.12 veya üstü gerekir (`node --version`
sürümü yazdırır):

```sh
npm i -g https://github.com/muhittincamdali/glassready/releases/download/v0.1.3/glassready-0.1.3.tgz
```

Paket henüz npm kayıt defterinde değil; orada `@mcamdali/glassready` olarak yayımlanması
planlanıyor. İki komut da aynı release tarball'ını kurar.

**2. Uygulamanızın klasöründe bir terminal açın**; `.xcodeproj`, `pubspec.yaml` veya
`package.json` dosyasının bulunduğu klasör:

```sh
cd path/to/YourApp
```

**3. glassready'yi çalıştırın:**

```sh
glassready
```

**4. Projenizin adının altındaki satırı okuyun.** "The Liquid Glass opt-out is ignored" (Liquid Glass
opt-out anahtarı yok sayılıyor) satırı, uygulamanın opt-out etmesine rağmen iOS 27'de değişeceği
anlamına gelir: önce **ERROR**, sonra kodunuzun yeni çubukların üzerini boyadığı yerler olan
**WARNING** bulgularıyla başlayın. **INFO** bulgularına iOS 27 simülatöründe bakmaya değer. Her
bulgu, çözümünü "How to fix" listesinden adıyla belirtir.

## iOS 27 SDK ile derlediğinizde ne değişir

Apple'ın
[UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility)
sayfasından:

> The system ignores this key when you build for iOS 27 or later, iPadOS 27 or later, Mac Catalyst
> 27 or later, macOS 27 or later, or tvOS 27 or later.

Aynı UIKit uygulamasını Xcode 27.1 ile anahtarlı ve anahtarsız olmak üzere iki kez derledik ve
ekran görüntülerini bir iPhone 17 simülatöründe karşılaştırdık
([nasıl yaptık](docs/guides/opt-out.md#what-we-saw-in-the-simulator)):

| Simülatör | Anahtarlı ve anahtarsız aynı ekran mı?                                                        |
| --------- | --------------------------------------------------------------------------------------------- |
| iOS 27.0  | evet: ana ekran göstergesinin üstünde 0 piksel farklı; anahtar yok sayılıyor                  |
| iOS 26.4  | hayır: 3.089.772 pikselin 361.909'u farklı; anahtarla uygulama önceki SDK'ların tasarımını korur |

<p align="center"><img src="docs/media/simulator/opt-out-ios26-ios27.png" width="720" alt="Xcode 27.1 ile derlenen native-uikit-optout fixture'ı, bir iPhone 17 simülatöründe. Soldan sağa: anahtarlı iOS 26.4 (tam genişlikte tab bar, büyük başlık), anahtarsız iOS 26.4 (yüzen Liquid Glass tab bar), anahtarlı iOS 27.0 ve anahtarsız iOS 27.0 (ikisinde de yüzen Liquid Glass tab bar)"></p>

Yani anahtar Info.plist'te durduğu sürece tek bir derleme iki tasarım gösterir: iOS 26'da eskisini,
iOS 27'de Liquid Glass'ı. Apple'ın
[Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)
sayfası sırada neyin gözden geçirileceğini listeler; aşağıdaki kurallar onu izler.

Bir yüklemenin hangi SDK ile yapılması gerektiğini App Store Connect, Apple'ın
[Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) sayfasında belirler.
27 Ekim 2026'da bu, iOS 26 SDK'lı Xcode 26'ydı (28 Nisan 2026'dan beri). iOS 27 SDK'ya geçildiğinde
ilk satır her yüklemeye uygulanır.

## glassready neyi denetler

| Kural  | Önem     | Bulgu                                                                                                         | Kod                |
| ------ | -------- | ------------------------------------------------------------------------------------------------------------- | ------------------ |
| GLS001 | error    | `UIDesignRequiresCompatibility` Info.plist'te, bir build ayarı olarak ya da bir Expo yapılandırmasında YES    | tümü               |
| GLS002 | warning  | `configureWithOpaqueBackground()` kullanan ya da kendi arka plan rengi, görseli, efekti veya gölgesi olan bir çubuk görünümü | UIKit              |
| GLS003 | warning  | `barTintColor`, `isTranslucent = false`, çubuk arka plan veya gölge görselleri                                | UIKit              |
| GLS004 | warning  | `.automatic` dışında bir `toolbarBackground` / `toolbarBackgroundVisibility`                                  | SwiftUI            |
| GLS005 | warning  | Bir `UITabBar` veya `UIToolbar` alt sınıfı ya da özel bir tab bar için gizlenen sistem tab bar'ı              | UIKit, SwiftUI     |
| GLS006 | info     | `UIGlassEffect` kullanmayan bir dosyada `UIBlurEffect` view'ı                                                 | UIKit              |
| GLS007 | warning  | `presentationBackground` ya da bir popover'ın `backgroundColor` değeri                                        | SwiftUI, UIKit     |
| GLS008 | info     | Safe-area inset'lerine eklenen bir sayı, yerleşim için okunan bir çubuğun frame yüksekliği, 49 veya 83 puntoluk bir tab bar | Flutter hariç tümü |
| GLS009 | info     | Büyük harfle yazılmış bir bölüm başlığı                                                                       | SwiftUI            |
| GLS101 | warning  | `headerStyle.backgroundColor`, `headerBackground` veya `headerBlurEffect` olan bir native stack başlığı       | React Native, Expo |
| GLS102 | info     | JavaScript ile çizilen bir tab bar: `createBottomTabNavigator`, Expo Router `Tabs`, özel bir `tabBar`         | React Native, Expo |
| GLS103 | info     | iOS 26 ve sonrasının yok saydığı native tab bar prop'ları (`backgroundColor`, `blurEffect`, …)                | React Native, Expo |
| GLS104 | warning  | `react-native-screens` 4.30.0'dan eski sürümle native bottom tab'lar                                          | React Native       |
| GLS201 | info     | Flutter'ın kendisinin çizdiği bir Cupertino çubuğu                                                            | Flutter            |
| GLS202 | info     | Flutter widget'larının yanında UIKit kontrolleri içeren bir `UiKitView`                                       | Flutter            |

Kural verisi `liquid-glass@2026.10.27`, Xcode 27.1 (27A9275) karşısında denetlendi. Rapor ayrıca
uygulamanın zaten kullandığı Liquid Glass API'lerini (`UIGlassEffect`, `glassEffect`, cam düğme
stilleri, `safeAreaBar`, `NativeTabs` ve diğerleri) ve bir etki puanını listeler: opt-out için 50,
her warning için 6, her info bulgusu için 2, en çok 100. Puan projeleri sıralar; tasarımı
notlandırmaz.

## Kurulum

Hızlı başlangıç bölümündeki komutlar `glassready` komutunu GitHub release'inden kurar. Her
[GitHub release](https://github.com/muhittincamdali/glassready/releases) paketi
`glassready-<version>.tgz` olarak bir `SHA256SUMS` dosyasıyla birlikte sunar. Bir projede bir sürümü
sabitlemek için:

```sh
npm install --save-dev https://github.com/muhittincamdali/glassready/releases/download/v0.1.3/glassready-0.1.3.tgz
```

Ardından `npx glassready` o kopyayı çalıştırır. Paket `@mcamdali/glassready` adıyla kurulur;
aşağıdaki JavaScript API'si de bu adı içe aktarır. npm kayıt defterinde yayımlama planlanıyor; o
zamana kadar `npx @mcamdali/glassready` paketi bulamaz.

## Kullanım

```text
glassready [path] [options]
```

| Seçenek                 | Ne yapar                                                                   |
| ----------------------- | -------------------------------------------------------------------------- |
| `path`                  | Proje klasörü veya `.xcodeproj`; varsayılan geçerli klasördür              |
| `-f, --format <format>` | `tty` (varsayılan), `text`, `markdown` veya `json`                         |
| `--json`                | `--format json` ile aynı                                                   |
| `-o, --output <file>`   | Raporu terminal yerine bir dosyaya yazar                                   |
| `--fail-on <severity>`  | `warning` (varsayılan), `error`, `info` veya `none`: çıkış kodunun ne zaman 1 olacağı |
| `--no-color`            | Terminalde bile düz metin (`NO_COLOR` ve `FORCE_COLOR` dikkate alınır)     |

Çıkış kodları: `0` `--fail-on` düzeyinde veya üstünde bir şey yok, `1` bu düzeyde veya üstünde bulgu
var, `2` hatalı argümanlar, iOS projesi bulunamadı ya da beklenmeyen bir hata. Bir Info.plist ya da
Xcode projesi okunamadığı için denetlenemeyen bir opt-out da `--fail-on none` dışında `1` verir.

glassready iOS uygulamasını kendisi bulur: native uygulamalarda kökteki veya bir klasör aşağıdaki
`.xcodeproj`, Flutter, React Native ve Expo uygulamalarında `ios/` (Flutter eklentisinde
`example/ios/`). Uygulamanın her iOS hedefinin Info.plist dosyasını (XML veya ikili) ve build
ayarlarını, uygulamanın Swift ve Objective-C dosyalarını, bir React Native veya Expo uygulamasının
JavaScript ve TypeScript dosyalarını ve `lib/` içindeki Dart dosyalarını okur; bağımlılıkları, build
çıktısını ve testleri atlar. `ios/` klasörü olmayan bir Expo uygulaması yapılandırmasından denetlenir.

### Markdown raporunu kodla birlikte saklayın

```sh
glassready --format markdown --output glassready.md
```

### JSON raporunu betiklerde kullanın

```sh
glassready --json > glassready.json
```

Her bulgunun `rule`, `severity`, `title`, `message`, `file`, `line`, `target`, adımları ve rehberiyle
birlikte `fix` ve `sources` alanları vardır. Şema `schemaVersion` 0'dır ve 1.0'dan önce değişebilir.
[examples/shell/opt-out-targets.sh](examples/shell/opt-out-targets.sh) onu `jq` ile süzer.

### CI'da çalıştırın

[examples/github-actions/glassready.yml](examples/github-actions/glassready.yml), uygulamaya
dokunan her pull request'in job özetine raporu ekler ve warning'lerde job'u başarısız kılar.
`--fail-on error` yalnızca yok sayılan opt-out'ta başarısız olur.

### JavaScript'ten

```js
import { render, scan } from '@mcamdali/glassready';

const report = await scan('path/to/app');
console.log(report.verdict.text, report.impact.level);
console.log(render(report, 'markdown'));
```

Çalıştırılabilir sürümü [examples/api/impact.mjs](examples/api/impact.mjs) dosyasındadır.

## Demo

Terminal kayıtları, her araç zinciriyle hazırlanmış projeler olan [fixture'lar](fixtures/README.md)
üzerinde CLI'dan alınmıştır:

| Proje                                                            | Kayıt                                                                                                                                       |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Opt-out anahtarı ve opak çubukları olan UIKit uygulaması         | bu sayfanın en üstü                                                                                                                         |
| Native stack ve JavaScript tab'ları olan React Native 0.88.1 uygulaması | [açık](docs/media/demo-react-native-light.svg) · [koyu](docs/media/demo-react-native-dark.svg)                                       |
| Cupertino çubukları ve bir `UiKitView` içeren Flutter 3.47.5 uygulaması | [açık](docs/media/demo-flutter-light.svg) · [koyu](docs/media/demo-flutter-dark.svg)                                                 |
| Toolbar arka planları ve özel bir alt çubuğu olan SwiftUI uygulaması | [açık](docs/media/demo-swiftui-light.svg) · [koyu](docs/media/demo-swiftui-dark.svg)                                                    |
| iOS 27.0 ve iOS 26.4'te `scripts/simulator-compare.sh`           | [27.0](docs/media/demo-simulator-native-uikit-optout-27.0-light.svg) · [26.4](docs/media/demo-simulator-native-uikit-optout-26.4-light.svg) |

iOS 27.0'lı bir iPhone 17 simülatöründe, Xcode 27.1 ile derlenmiş dört fixture: opak lacivert
çubuklu UIKit uygulaması (büyük başlık görünmüyor), düzeltmelerden sonra aynı uygulama, yeşil
toolbar arka planlı SwiftUI uygulaması ve Flutter'ın çizdiği düz tab bar'lı Flutter uygulaması:

<p align="center"><img src="docs/media/simulator/fixtures-ios27.png" width="720" alt="iOS 27.0'lı bir iPhone 17 simülatöründe, Xcode 27.1 ile derlenmiş dört fixture: native-uikit-optout, native-uikit-glass, native-swiftui ve flutter-cupertino"></p>

27 Ekim 2026'da, Node.js 26.11 ile bir Mac'te (Apple silicon, M5 Max) ölçüldü: yedi fixture üzerinde
`node dist/cli/main.js --json` komutunun 100'er çalıştırmalık üç seti; Node.js'in açılışı dahil.
Üç setin medyanları 0,12, 0,12 ve 0,11 saniyeydi; en yavaş çalıştırma 0,17 saniye sürdü.

## Durum

| Özellik                                                                                       | Durum             |
| --------------------------------------------------------------------------------------------- | ----------------- |
| Native, Flutter (uygulama ve eklenti örneği), React Native ve Expo proje algılama             | çalışıyor         |
| Info.plist, build ayarları ve Expo yapılandırmasında GLS001 (app.json; app.config.js/ts metin olarak) | çalışıyor  |
| Swift ve Objective-C üzerinde GLS002 – GLS009; JavaScript ve TypeScript üzerinde GLS101 – GLS104 | çalışıyor      |
| Dart üzerinde GLS201 ve GLS202                                                                | çalışıyor         |
| Terminal, metin, Markdown ve JSON raporları; etki puanı; kullanılan API'ler; `--fail-on` çıkış kodları | çalışıyor |
| Bağımlılıklar (Pods, `node_modules`, Flutter eklentileri) ve `.xcconfig` build ayarları       | planlandı (0.2)   |
| SARIF çıktısı ve bir GitHub Action                                                            | planlandı (0.3)   |
| Kalıplar yerine Swift sözdizimi ağaçları; CLI'dan simülatörde ekran görüntüsü alma            | planlandı (0.5)   |
| Kararlı kural şeması ve JSON yapısı                                                           | planlandı (1.0)   |

## Sınırlar

- **Derleyici değil, kalıplar.** Kurallar, yorumları ve string'leri boşaltılmış kaynak metni
  üzerinde çalışan düzenli ifadelerdir. Üretilen, makroların arkasına gizlenen, çalışma zamanında
  oluşturulan ya da alışılmadık biçimde yazılan kod gözden kaçabilir veya yanlışlıkla eşleşebilir.
- **Yalnızca uygulamanın kendi kaynakları.** Kurallar uygulamanın kendi kodunda çalışır: Pods,
  uygulama klasörünün dışındaki Swift paketleri, `node_modules` ve Flutter eklentilerinin
  kaynakları okunmaz. glassready `node_modules` içinden yalnızca baktığı React Native ve Expo
  paketlerinin (`react-native`, `expo`, `react-native-screens` ve sekiz paket daha)
  `<name>/package.json` dosyasını, kurulu sürüm için okur; `node_modules/<name>` klasörü
  dışına bağlanan böyle bir dosya okunmaz.
- **Build ayarları yalnızca project.pbxproj'dan.** `.xcconfig` dosyaları okunmaz. Bir hedefin
  Info.plist dosyası okunamazsa opt-out durumu "bilinmiyor" olur ve rapor nedenini söyler. Bir Xcode
  projesi okunamadığında da aynısı geçerlidir; karar o zaman "Opt-out not known" olur, asla hazır
  denmez.
- **Expo yapılandırması metin olarak.** `app.config.js` ve `app.config.ts` çalıştırılmaz; bu yüzden
  bir değişken veya config plugin ile ayarlanan opt-out görülmez.
- **Yalnızca dosyalar.** glassready uygulamayı derlemez ve ekranlarına bakmaz. Bu depodaki simülatör
  kayıtları, bir Mac'te çalıştırılan `scripts/` altındaki betiklerden gelir.
- **Sınırlı girdi.** Bir proje bir pull request'ten gelebilir; bu yüzden glassready proje dosyası
  başına en fazla 32 MB, kaynaklardan da dosya başına 4 MB, 20.000 dosya ve toplam 128 MB okur;
  dışarıda kalanlar raporun notlarında listelenir. Bir binary plist en fazla 100.000 değer
  üretebilir; bir plist ya da JSON dosyası (package.json, package-lock.json, app.json) en fazla 64
  seviye iç içe olabilir, daha derin bir JSON dosyası ayrıştırılmaz. Mac (Apple silicon) ve Node
  26 üzerinde package.json, package-lock.json ve `node_modules` içindeki dört package.json
  dosyasının her biri 31 MB iç içe dizi olan bir proje 0,2 sn'de ve en fazla 190 MB bellekle
  denetlenir.

## Dokümantasyon

API başvurusu ve rehberler: [muhittincamdali.github.io/glassready](https://muhittincamdali.github.io/glassready/).

## Rehberler

- [Liquid Glass opt-out anahtarı neden çalışmayı bırakır](docs/guides/opt-out.md)
- [Native UIKit ve SwiftUI uygulamaları](docs/guides/native-ios.md)
- [React Native ve Expo uygulamaları](docs/guides/react-native-expo.md)
- [Flutter uygulamaları](docs/guides/flutter.md)

## Kaynaklar

27 Ekim 2026'da okundu:

- Apple: [UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility),
  [Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass),
  [Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) ve her kuralın
  [rules/liquid-glass.json](rules/liquid-glass.json) dosyasında bağladığı API sayfaları.
- React Navigation: [Native Stack](https://reactnavigation.org/docs/native-stack-navigator/),
  [Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator/),
  [Native Bottom Tabs](https://reactnavigation.org/docs/native-bottom-tab-navigator/).
- Expo: [JavaScript tabs](https://docs.expo.dev/router/advanced/tabs/),
  [Native tabs](https://docs.expo.dev/router/advanced/native-tabs/),
  [app config `ios.infoPlist`](https://docs.expo.dev/versions/latest/config/app/).
- Flutter: [issue 170310](https://github.com/flutter/flutter/issues/170310),
  [cupertino_ui changelog](https://pub.dev/packages/cupertino_ui/changelog),
  [platform views on iOS](https://docs.flutter.dev/platform-integration/ios/platform-views).

## Gereksinimler

macOS, Linux veya Windows'ta Node.js 22.12 ya da üstü. Bir projeyi okumak için başka bir şey
gerekmez: Xcode, Flutter ya da React Native araç zinciri yok. Simülatör betikleri için Xcode,
XcodeGen ve ImageMagick kurulu bir Mac gerekir.

## Mimari

```text
detectProject      native | flutter | react-native | expo, the iOS folder, package versions
  ─► collectApp    app targets, Info.plist files, build settings, blanked sources
  ─► checkApp      GLS001 opt-out · GLS002–009 native · GLS101–104 React Native · GLS201–202 Flutter
                   rules/liquid-glass.json: what each rule says, fixes, sources (validated with zod)
  ─► scan          findings, verdict, impact score, adopted APIs
  ─► render        tty | text | markdown | json
```

- Kural verisi koddan ayrıdır ve sürümlüdür (`liquid-glass@2026.10.27`); bir kuralın kaynağı yoksa ya
  da var olmayan bir rehberi adlandırıyorsa testler başarısız olur.
- CLI (`src/cli/`) yalnızca argümanları ayrıştırır, renkleri ve genişlikleri seçer ve çıkış kodunu
  belirler.

## İlgili

[sdkbump](https://github.com/muhittincamdali/sdkbump) iOS 27 SDK'nın öbür sorusunu yanıtlar:
uygulama açılacak mı? iOS 27 SDK ile derlenen uygulamaların benimsemesi gereken UIScene yaşam
döngüsünü denetler. glassready ise uygulamanın nasıl görüneceğini yanıtlar. İlk Xcode 27 derlemesinden
önce ikisini de çalıştırın.

## SSS

**Uygulamam bugün iOS 27'de çalışıyor ve hâlâ aynı görünüyor. Etkileniyor mu?** Apple'ın
dokümantasyonu değişikliği uygulamanın derlendiği SDK'ya bağlar; dolayısıyla Xcode 26 ile yapılmış
bir derleme tasarımını korumalıdır. Bunu burada doğrulayamadık, çünkü yalnızca Xcode 27.1 kuruluydu.
Xcode 27 ile yapacağınız bir sonraki derleme anahtarı yok sayar.

**GLS002 veya GLS004 uyarısı her zaman bir hata mı?** Hayır. Bir çubuktaki marka rengi bilinçli bir
karar olabilir. Uyarı, kodun Liquid Glass'ın çizdiği çubuğun üzerini boyadığını söyler; ekrana bir
iOS 27 simülatöründe bakın ve karar verin.

**glassready projemi değiştirir mi?** Hayır. Projeyi okur ve yalnızca istediğiniz raporu yazar.

## Katkıda bulunma

Katkılarınızı bekliyoruz. Pull request açmadan önce [katkı rehberini](CONTRIBUTING.md) ve
[davranış kurallarını](https://github.com/muhittincamdali/.github/blob/main/CODE_OF_CONDUCT.md)
okuyun. Güvenlik açıklarını [güvenlik politikasında](SECURITY.md) anlatıldığı gibi gizli olarak
bildirin.

## Lisans

MIT lisansıyla yayımlanmıştır. Ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
