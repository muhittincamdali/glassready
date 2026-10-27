# glassready

If you postponed Liquid Glass with `UIDesignRequiresCompatibility`, the iOS 27 SDK ignores that
key. glassready reads a native iOS, Flutter or React Native/Expo project and lists what Liquid Glass
will change: the opt-out, and every place where the app paints over, hides or measures the bars and
sheets it draws, with the fix for each.

```sh
brew install muhittincamdali/tap/glassready
glassready
```

Without Homebrew, npm installs the same package from the
[GitHub release](https://github.com/muhittincamdali/glassready/releases/tag/v0.1.0) (Node.js 22.12
or later):

```sh
npm i -g https://github.com/muhittincamdali/glassready/releases/download/v0.1.0/glassready-0.1.0.tgz
```

Publishing to the npm registry as `@mcamdali/glassready` is planned.

## Guides

- [Why the Liquid Glass opt-out stops working](../guides/opt-out.md)
- [Native UIKit and SwiftUI apps](../guides/native-ios.md)
- [React Native and Expo apps](../guides/react-native-expo.md)
- [Flutter apps](../guides/flutter.md)

## API

The command line is a thin layer over the package's exports, so the same checks run from
JavaScript:

```ts
import { render, scan } from '@mcamdali/glassready';

const report = await scan('path/to/app');
console.log(report.verdict.text, report.impact.level);
console.log(render(report, 'markdown'));
```

Start with {@link scan} and {@link render}; the JSON report is described by {@link Report}. Its
`schemaVersion` is 0 until the layout is declared stable in 1.0. The rule data behind every finding
is {@link RuleData}, available as {@link RULE_DATA}.
