<!-- i18n-source: README.md@5a33e2ed00b8a7f76f50cb3a1c066de8d9b966f5 status=reviewed -->
<!-- brand:start -->

<p align="center"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/banner-light.svg" alt="glassready: Shows what Liquid Glass changes in iOS, Flutter and React Native apps built with the iOS 27 SDK, and the fix for each."></picture></p>

<!-- lang-selector:start -->
<p align="center"><a href="README.md">English</a> · <a href="README.tr.md">Türkçe</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.ru.md">Русский</a></p>
<!-- lang-selector:end -->

<p align="center">
<a href="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml"><img src="https://github.com/muhittincamdali/glassready/actions/workflows/ci.yml/badge.svg" alt="Status da CI"></a>
<a href="https://github.com/muhittincamdali/glassready/releases"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-version-light.svg" alt="Versão mais recente: v0.1.3"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/package.json"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-language-light.svg" alt="Versão da linguagem: Node.js 22.12+"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/blob/main/LICENSE"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/badge-license-light.svg" alt="Licença: MIT"></picture></a>
</p>

<p align="center">
<a href="#início-rápido"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-pt-BR-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-pt-BR-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-start-pt-BR-light.svg" alt="Começar"></picture></a>
<a href="https://muhittincamdali.github.io/glassready/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-pt-BR-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-pt-BR-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-docs-pt-BR-light.svg" alt="Documentação"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/docs/guides"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-pt-BR-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-pt-BR-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-guides-pt-BR-light.svg" alt="Guias"></picture></a>
<a href="https://github.com/muhittincamdali/glassready/tree/main/examples"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-pt-BR-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-pt-BR-light.svg"><img src="https://raw.githubusercontent.com/muhittincamdali/glassready/main/.github/brand/button-examples-pt-BR-light.svg" alt="Exemplos"></picture></a>
</p>

> Esta é uma tradução do README em inglês. Se houver diferença, vale a versão em inglês.

<!-- brand:end -->

Se você adiou o Liquid Glass com `UIDesignRequiresCompatibility`, o SDK do iOS 27 ignora essa chave:
um app compilado com o Xcode 27 mostra o Liquid Glass no iOS 27, não importa o que o Info.plist diga.
O glassready lê um projeto nativo de iOS, Flutter ou React Native/Expo e lista o que isso vai mudar: o
opt-out e cada ponto em que o app pinta por cima, esconde ou mede as barras e os sheets que o Liquid
Glass desenha, com a correção para cada um. Ele lê os arquivos do seu projeto; não compila, não executa
e não altera nada.

<picture><source media="(prefers-color-scheme: dark)" srcset="docs/media/demo-uikit-optout-dark.svg"><source media="(prefers-color-scheme: light)" srcset="docs/media/demo-uikit-optout-light.svg"><img src="docs/media/demo-uikit-optout-light.svg" alt="glassready executado em um app UIKit: o opt-out do Liquid Glass é ignorado ao compilar com o SDK do iOS 27; GLS001 o opt-out no Info.plist, GLS002 duas aparências de barra opacas, GLS003 isTranslucent e barTintColor, GLS006 um painel de desfoque, GLS008 um deslocamento fixo da tab bar, cada um com sua correção"></picture>

<sub>Gravado com o CLI de verdade no <a href="fixtures/native-uikit-optout">fixture
native-uikit-optout</a>, um app UIKit escrito para os testes (<code>npm run demo</code>).</sub>

## Destaques

- **Encontra o opt-out onde quer que ele esteja.** Em um Info.plist, como a configuração de build
  `INFOPLIST_KEY_UIDesignRequiresCompatibility` (que o Xcode 27.1 nem copia para o Info.plist gerado) ou
  em uma configuração do Expo.
- **Mostra o que cobre o Liquid Glass.** No código nativo: aparências de barra opacas, `barTintColor`,
  fundos de toolbar do SwiftUI, tab bars personalizadas, camadas de desfoque, fundos de sheet, alturas de
  barra fixas e cabeçalhos de seção em maiúsculas. No React Native e no Expo: cores de cabeçalho, tab bars
  desenhadas em JavaScript e props de tab bar ignoradas. No Flutter: barras Cupertino desenhadas pelo
  Flutter e platform views do UIKit.
- **A correção para o seu tipo de código.** UIKit, SwiftUI, React Native, Expo ou Flutter, com um guia
  para cada um e uma lista das APIs do Liquid Glass que o app já usa.
- **Toda regra tem uma fonte.** As regras são dados ([rules/liquid-glass.json](rules/liquid-glass.json))
  que citam as páginas da Apple, do React Navigation, do Expo e do Flutter; os testes falham se alguma
  regra não tiver fonte.
- **Verificado no simulador.** Compilado com o Xcode 27.1, o mesmo app com e sem a chave mostra a mesma
  tela no iOS 27.0 e dois designs diferentes no iOS 26.4. As gravações e as capturas de tela estão no
  repositório.
- **Feito para CI.** Relatórios no terminal, em texto simples, em Markdown e em JSON, e um código de
  saída: 0 sem achados, 1 com achados, 2 erro de uso.

## Início rápido

**1. Instale o glassready.** Com o [Homebrew](https://brew.sh/), que também instala o Node.js:

```sh
brew install muhittincamdali/tap/glassready
```

Ou com npm a partir do registro, o que exige o [Node.js](https://nodejs.org/) 22.12 ou superior
(`node --version` mostra a versão):

```sh
npm i -g @mcamdali/glassready
```

Para executar sem instalar, use `npx @mcamdali/glassready`. Cada [release no GitHub](https://github.com/muhittincamdali/glassready/releases/tag/v0.1.3) também
traz o mesmo pacote como tarball com um arquivo `SHA256SUMS`, para fixar ou verificar uma release.

**2. Abra um terminal na pasta do seu app**, a que contém o `.xcodeproj`, o `pubspec.yaml` ou o
`package.json`:

```sh
cd path/to/YourApp
```

**3. Execute o glassready:**

```sh
glassready
```

**4. Leia a linha abaixo do nome do seu projeto.** "The Liquid Glass opt-out is ignored" (o opt-out do
Liquid Glass é ignorado) significa que o app muda no iOS 27 mesmo tendo feito o opt-out: comece pelo
**ERROR** e depois veja os achados **WARNING**, que são os pontos em que o seu código pinta por cima das
barras novas. Vale olhar os achados **INFO** em um simulador com iOS 27. Cada achado indica sua correção
pelo nome, da lista "How to fix".

## O que muda ao compilar com o SDK do iOS 27

Da página da Apple
[UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility):

> The system ignores this key when you build for iOS 27 or later, iPadOS 27 or later, Mac Catalyst
> 27 or later, macOS 27 or later, or tvOS 27 or later.

Compilamos duas vezes o mesmo app UIKit com o Xcode 27.1, com e sem a chave, e comparamos as capturas de
tela em um simulador de iPhone 17 ([como](docs/guides/opt-out.md#what-we-saw-in-the-simulator)):

| Simulador | Mesma tela com e sem a chave?                                                                 |
| --------- | --------------------------------------------------------------------------------------------- |
| iOS 27.0  | sim: 0 pixels diferentes acima do indicador de início; a chave é ignorada                     |
| iOS 26.4  | não: 361.909 de 3.089.772 pixels são diferentes; com a chave, o app mantém o design dos SDKs anteriores |

<p align="center"><img src="docs/media/simulator/opt-out-ios26-ios27.png" width="720" alt="O fixture native-uikit-optout em um simulador de iPhone 17, compilado com o Xcode 27.1. Da esquerda para a direita: iOS 26.4 com a chave (tab bar de largura total, título grande), iOS 26.4 sem a chave (tab bar flutuante do Liquid Glass), iOS 27.0 com a chave e iOS 27.0 sem a chave (ambos com a tab bar flutuante do Liquid Glass)"></p>

Portanto, enquanto a chave estiver no Info.plist, uma mesma compilação mostra dois designs: o antigo no
iOS 26 e o Liquid Glass no iOS 27. O
[Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass),
da Apple, lista o que revisar em seguida; as regras abaixo o seguem.

O SDK que um envio deve usar é definido pelo App Store Connect na página
[Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) da Apple. Em 27 de
outubro de 2026, era o Xcode 26 com o SDK do iOS 26 (desde 28 de abril de 2026). Quando isso passar para o
SDK do iOS 27, a primeira linha valerá para todos os envios.

## O que o glassready verifica

| Regra  | Gravidade | Achado                                                                                                      | Código             |
| ------ | --------- | ----------------------------------------------------------------------------------------------------------- | ------------------ |
| GLS001 | error     | `UIDesignRequiresCompatibility` é YES no Info.plist, como configuração de build ou em uma configuração do Expo | todos           |
| GLS002 | warning   | Uma aparência de barra com `configureWithOpaqueBackground()` ou com cor de fundo, imagem, efeito ou sombra próprios | UIKit        |
| GLS003 | warning   | `barTintColor`, `isTranslucent = false`, imagens de fundo ou de sombra da barra                             | UIKit              |
| GLS004 | warning   | `toolbarBackground` / `toolbarBackgroundVisibility` diferente de `.automatic`                               | SwiftUI            |
| GLS005 | warning   | Uma subclasse de `UITabBar` ou `UIToolbar`, ou a tab bar do sistema oculta para usar uma personalizada      | UIKit, SwiftUI     |
| GLS006 | info      | Uma view `UIBlurEffect` em um arquivo que não usa `UIGlassEffect`                                           | UIKit              |
| GLS007 | warning   | `presentationBackground` ou o `backgroundColor` de um popover                                               | SwiftUI, UIKit     |
| GLS008 | info      | Um número somado aos insets da área segura, a altura do frame de uma barra lida para o layout, uma tab bar de 49 ou 83 pontos | todos, exceto Flutter |
| GLS009 | info      | Um cabeçalho de seção escrito em maiúsculas                                                                 | SwiftUI            |
| GLS101 | warning   | Um cabeçalho de native stack com `headerStyle.backgroundColor`, `headerBackground` ou `headerBlurEffect`    | React Native, Expo |
| GLS102 | info      | Uma tab bar desenhada em JavaScript: `createBottomTabNavigator`, `Tabs` do Expo Router, uma `tabBar` personalizada | React Native, Expo |
| GLS103 | info      | Props da tab bar nativa que o iOS 26 e posteriores ignoram (`backgroundColor`, `blurEffect`, …)             | React Native, Expo |
| GLS104 | warning   | Bottom tabs nativas com `react-native-screens` anterior à 4.30.0                                            | React Native       |
| GLS201 | info      | Uma barra Cupertino que o próprio Flutter desenha                                                           | Flutter            |
| GLS202 | info      | Uma `UiKitView` com controles do UIKit ao lado de widgets do Flutter                                        | Flutter            |

Dados de regras `liquid-glass@2026.10.27`, verificados com o Xcode 27.1 (27A9275). O relatório também lista
as APIs do Liquid Glass que o app já usa (`UIGlassEffect`, `glassEffect`, estilos de botão glass,
`safeAreaBar`, `NativeTabs` e outras) e uma pontuação de impacto: 50 pelo opt-out, 6 por warning, 2 por
achado info, no máximo 100. A pontuação serve para ordenar projetos; ela não avalia o design.

## Instalação

Os comandos de Início rápido instalam o comando `glassready` a partir do registro do npm. Para
adicioná-lo a um projeto:

```sh
npm install --save-dev @mcamdali/glassready
```

Depois, `npx glassready` executa essa cópia. O pacote é instalado com o nome `@mcamdali/glassready`,
o mesmo que a API JavaScript mais abaixo importa. Para fixar ou verificar uma release, cada
[release no GitHub](https://github.com/muhittincamdali/glassready/releases) também traz o pacote como `glassready-<version>.tgz` com um arquivo
`SHA256SUMS`; `npm install --save-dev` aceita a URL desse tarball no lugar do nome do pacote.

## Uso

```text
glassready [path] [options]
```

| Opção                   | O que faz                                                                  |
| ----------------------- | -------------------------------------------------------------------------- |
| `path`                  | Pasta do projeto ou `.xcodeproj`; o padrão é a pasta atual                 |
| `-f, --format <format>` | `tty` (padrão), `text`, `markdown` ou `json`                               |
| `--json`                | Igual a `--format json`                                                    |
| `-o, --output <file>`   | Grava o relatório em um arquivo em vez de no terminal                      |
| `--fail-on <severity>`  | `warning` (padrão), `error`, `info` ou `none`: quando o código de saída é 1 |
| `--no-color`            | Texto simples até em um terminal (`NO_COLOR` e `FORCE_COLOR` são respeitados) |

Códigos de saída: `0` nada no nível de `--fail-on` ou acima, `1` achados nesse nível ou acima, `2`
argumentos incorretos, nenhum projeto iOS encontrado ou um erro inesperado. Um opt-out que o
glassready não pôde verificar, porque um Info.plist ou um projeto do Xcode não foi lido, também dá
`1`, exceto com `--fail-on none`.

O glassready encontra o app iOS sozinho: um `.xcodeproj` na raiz ou uma pasta abaixo nos apps nativos,
`ios/` nos apps Flutter, React Native e Expo (`example/ios/` em um plugin do Flutter). Ele lê o Info.plist
(XML ou binário) e as configurações de build de cada target de app iOS, os arquivos Swift e Objective-C do
app, o JavaScript e o TypeScript de um app React Native ou Expo e os arquivos Dart de `lib/`, ignorando
dependências, saída de build e testes. Um app Expo sem `ios/` é verificado a partir da sua configuração.

### Guarde um relatório em Markdown junto com o código

```sh
glassready --format markdown --output glassready.md
```

### Use o relatório JSON em scripts

```sh
glassready --json > glassready.json
```

Cada achado tem `rule`, `severity`, `title`, `message`, `file`, `line`, `target`, o `fix` com seus passos e
seu guia, e `sources`. O formato é `schemaVersion` 0 e pode mudar antes da 1.0.
[examples/shell/opt-out-targets.sh](examples/shell/opt-out-targets.sh) o filtra com `jq`.

### Execute no CI

[examples/github-actions/glassready.yml](examples/github-actions/glassready.yml) adiciona o relatório ao
resumo do job de cada pull request que mexe no app e faz o job falhar quando há warnings.
`--fail-on error` falha apenas quando o opt-out é ignorado.

### Pelo JavaScript

```js
import { render, scan } from '@mcamdali/glassready';

const report = await scan('path/to/app');
console.log(report.verdict.text, report.impact.level);
console.log(render(report, 'markdown'));
```

Uma versão executável está em [examples/api/impact.mjs](examples/api/impact.mjs).

## Demonstração

As gravações do terminal vêm do CLI rodando nos [fixtures](fixtures/README.md), projetos criados com cada
toolchain:

| Projeto                                                                  | Gravação                                                                                                                                    |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| App UIKit com o opt-out e barras opacas                                  | no topo desta página                                                                                                                        |
| App React Native 0.88.1 com um native stack e tabs em JavaScript         | [claro](docs/media/demo-react-native-light.svg) · [escuro](docs/media/demo-react-native-dark.svg)                                           |
| App Flutter 3.47.5 com barras Cupertino e uma `UiKitView`                | [claro](docs/media/demo-flutter-light.svg) · [escuro](docs/media/demo-flutter-dark.svg)                                                     |
| App SwiftUI com fundos de toolbar e uma barra inferior personalizada     | [claro](docs/media/demo-swiftui-light.svg) · [escuro](docs/media/demo-swiftui-dark.svg)                                                     |
| `scripts/simulator-compare.sh` no iOS 27.0 e no iOS 26.4                 | [27.0](docs/media/demo-simulator-native-uikit-optout-27.0-light.svg) · [26.4](docs/media/demo-simulator-native-uikit-optout-26.4-light.svg) |

Quatro fixtures em um simulador de iPhone 17 com iOS 27.0, compilados com o Xcode 27.1: o app UIKit com a
barra azul-marinho opaca (sem título grande), o mesmo app depois das correções, o app SwiftUI com o fundo
de toolbar verde e o app Flutter com a tab bar plana que o Flutter desenha:

<p align="center"><img src="docs/media/simulator/fixtures-ios27.png" width="720" alt="Quatro fixtures em um simulador de iPhone 17 com iOS 27.0, compilados com o Xcode 27.1: native-uikit-optout, native-uikit-glass, native-swiftui e flutter-cupertino"></p>

Medido em 27 de outubro de 2026 em um Mac (Apple silicon, M5 Max) com Node.js 26.11: três séries de 100
execuções de `node dist/cli/main.js --json` sobre os sete fixtures, incluindo a inicialização do
Node.js. As medianas das três séries foram 0,12, 0,12 e 0,11 segundo; a execução mais lenta levou 0,17
segundo.

## Status

| Recurso                                                                                       | Status          |
| --------------------------------------------------------------------------------------------- | --------------- |
| Detecção de projetos nativos, Flutter (app e exemplo de plugin), React Native e Expo          | funciona        |
| GLS001 no Info.plist, nas configurações de build e na configuração do Expo (app.json; app.config.js/ts como texto) | funciona |
| GLS002 a GLS009 em Swift e Objective-C; GLS101 a GLS104 em JavaScript e TypeScript            | funciona        |
| GLS201 e GLS202 em Dart                                                                       | funciona        |
| Relatórios em terminal, texto, Markdown e JSON; pontuação de impacto; APIs adotadas; códigos de saída de `--fail-on` | funciona |
| Dependências (Pods, `node_modules`, plugins do Flutter) e configurações de build de `.xcconfig` | planejado (0.2) |
| Saída SARIF e uma GitHub Action                                                               | planejado (0.3) |
| Árvores de sintaxe do Swift em vez de padrões; capturas de tela do simulador feitas pelo CLI  | planejado (0.5) |
| Esquema de regras e formato JSON estáveis                                                     | planejado (1.0) |

## Limites

- **Padrões, não um compilador.** As regras são expressões regulares sobre o texto do código-fonte, com
  os comentários e as strings esvaziados. Código gerado, escondido atrás de macros, montado em tempo de
  execução ou escrito de forma incomum pode passar despercebido ou ser reconhecido por engano.
- **Só o código-fonte do próprio app.** As regras rodam sobre o código do próprio app: o
  código-fonte de Pods, de pacotes Swift fora da pasta do app, de `node_modules` e de plugins do
  Flutter não é lido. De `node_modules`, o glassready lê apenas o `<name>/package.json` dos
  pacotes React Native e Expo que examina (`react-native`, `expo`, `react-native-screens` e mais
  oito), para saber a versão instalada; um desses arquivos que aponte para fora de uma pasta
  `node_modules/<name>` não é lido.
- **Configurações de build apenas do project.pbxproj.** Os arquivos `.xcconfig` não são lidos.
  Quando o Info.plist de um target não pode ser lido, o estado do opt-out dele é "desconhecido" e o
  relatório diz por quê. O mesmo vale quando um projeto do Xcode não pode ser lido; o veredito passa
  a ser "Opt-out not known", nunca pronto.
- **Configuração do Expo como texto.** `app.config.js` e `app.config.ts` não são executados, então um
  opt-out definido por uma variável ou por um config plugin não é visto.
- **Só arquivos.** O glassready não compila o app nem olha as telas dele. As gravações do simulador neste
  repositório vêm dos scripts em `scripts/`, executados em um Mac.
- **Entrada limitada.** Um projeto pode vir de um pull request, então o glassready lê no máximo
  32 MB por arquivo do projeto e, das fontes, 4 MB por arquivo, 20.000 arquivos e 128 MB no total;
  o que fica de fora aparece nas notas do relatório. Um plist binário pode produzir no máximo
  100.000 valores, e um plist ou um arquivo JSON (package.json, package-lock.json, app.json) pode
  ter até 64 níveis de aninhamento; um JSON mais profundo não é analisado. Em um Mac (Apple
  silicon) com Node 26, um projeto cujos package.json, package-lock.json e quatro package.json de
  `node_modules` têm 31 MB de arrays aninhados cada é verificado em 0,2 s com no máximo 190 MB de
  memória.

## Documentação

Referência da API e guias: [muhittincamdali.github.io/glassready](https://muhittincamdali.github.io/glassready/).

## Guias

- [Por que o opt-out do Liquid Glass deixa de funcionar](docs/guides/opt-out.md)
- [Apps nativos UIKit e SwiftUI](docs/guides/native-ios.md)
- [Apps React Native e Expo](docs/guides/react-native-expo.md)
- [Apps Flutter](docs/guides/flutter.md)

## Fontes

Consultadas em 27 de outubro de 2026:

- Apple: [UIDesignRequiresCompatibility](https://developer.apple.com/documentation/bundleresources/information-property-list/uidesignrequirescompatibility),
  [Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass),
  [Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) e as páginas de API que
  cada regra referencia em [rules/liquid-glass.json](rules/liquid-glass.json).
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

Node.js 22.12 ou superior no macOS, Linux ou Windows. Ler um projeto não exige mais nada: nem Xcode, nem
toolchain de Flutter ou de React Native. Os scripts do simulador exigem um Mac com Xcode, XcodeGen e
ImageMagick.

## Arquitetura

```text
detectProject      native | flutter | react-native | expo, the iOS folder, package versions
  ─► collectApp    app targets, Info.plist files, build settings, blanked sources
  ─► checkApp      GLS001 opt-out · GLS002–009 native · GLS101–104 React Native · GLS201–202 Flutter
                   rules/liquid-glass.json: what each rule says, fixes, sources (validated with zod)
  ─► scan          findings, verdict, impact score, adopted APIs
  ─► render        tty | text | markdown | json
```

- Os dados das regras ficam separados do código e têm versão (`liquid-glass@2026.10.27`); os testes falham
  quando uma regra não tem fonte ou cita um guia que não existe.
- O CLI (`src/cli/`) só interpreta os argumentos, escolhe cores e larguras e define o código de saída.

## Relacionado

O [sdkbump](https://github.com/muhittincamdali/sdkbump) responde à outra pergunta sobre o SDK do iOS 27: o
app vai abrir? Ele verifica o ciclo de vida do UIScene, que os apps compilados com o SDK do iOS 27 precisam
adotar. O glassready responde como o app vai ficar. Execute os dois antes da primeira compilação com o
Xcode 27.

## Perguntas frequentes

**Meu app roda hoje no iOS 27 e continua com a mesma aparência. Ele é afetado?** A documentação da Apple
liga a mudança ao SDK com o qual o app é compilado, então uma compilação feita com o Xcode 26 deve manter o
design; não conseguimos verificar isso aqui, porque só o Xcode 27.1 estava instalado. A sua próxima
compilação com o Xcode 27 vai ignorar a chave.

**Um aviso GLS002 ou GLS004 é sempre um bug?** Não. Uma cor de marca em uma barra pode ser uma decisão. O
aviso diz que o código pinta por cima da barra que o Liquid Glass desenha; olhe a tela em um simulador com
iOS 27 e decida.

**O glassready altera meu projeto?** Não. Ele o lê e grava apenas o relatório que você pede.

## Como contribuir

Contribuições são bem-vindas. Leia o [guia de contribuição](CONTRIBUTING.md) e o [código de conduta](https://github.com/muhittincamdali/.github/blob/main/CODE_OF_CONDUCT.md) antes de abrir um pull request. Relate problemas de segurança de forma privada, como descrito na [política de segurança](SECURITY.md).

## Licença

Publicado sob a licença MIT. Veja [LICENSE](LICENSE).
