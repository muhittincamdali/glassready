# Contributing to glassready

Thanks for taking the time to improve glassready. The
[shared contributing guide](https://github.com/muhittincamdali/.github/blob/main/CONTRIBUTING.md)
applies (small fixes as a pull request, larger changes as an issue first, security issues through
[SECURITY.md](SECURITY.md), the
[code of conduct](https://github.com/muhittincamdali/.github/blob/main/CODE_OF_CONDUCT.md) for
everyone). This file adds what is specific to this repository.

## Set up

Node.js 22.12 or later, then:

```sh
git clone https://github.com/muhittincamdali/glassready.git
cd glassready
npm ci
npm test          # builds dist/ first, then runs every test
```

CI runs `npm run lint`, `npm run typecheck`, `npm test` and `npm run build` on Node.js 22 and 24;
if they pass locally they pass on your pull request. Tests read only files in the repository and
write only to `.test-work/`; they need neither the network nor Xcode.

| Command                                         | What it does                                                                                |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `npm run lint`                                  | Biome (code) and Prettier (formatting); `npm run format` fixes formatting                   |
| `npm run typecheck`                             | TypeScript in strict mode over `src/`, `test/` and `scripts/`                               |
| `npm test`                                      | Unit, integration, snapshot and end-to-end tests                                            |
| `npm run demo`                                  | Records the terminal SVGs in `docs/media/` from the CLI                                     |
| `npm run docs`                                  | Builds the documentation site into `site/` (run `npm ci --prefix docs/site` once first)     |
| `npm run smoke`                                 | Packs the package, installs the tarball and runs it                                         |
| `node scripts/rule-schema.ts`                   | Writes `rules/schema.json` from the zod schema of the rule data                             |
| `scripts/simulator-check.sh <fixture> <png>`    | Mac with Xcode and XcodeGen (or Flutter): builds a fixture, launches it, takes a screenshot |
| `scripts/simulator-compare.sh <fixture> [27.0]` | Same, with and without `UIDesignRequiresCompatibility`, and compares the screenshots        |

## Where things live

- `src/detect/`: what kind of project a folder holds and the package versions that matter.
- `src/collect/`: readers for Info.plist (XML and binary), project.pbxproj and source files with
  comments and strings blanked. No rule logic here.
- `src/rules/`: the opt-out (`optout.ts`), native (`native.ts`), React Native (`react-native.ts`)
  and Flutter (`flutter.ts`) checks, `check.ts` that runs them, and the data loader (`data.ts`).
- `rules/liquid-glass.json`: what each rule says, with sources and fixes.
- `src/report/`: terminal, Markdown and JSON output. `src/cli/`: arguments and exit codes.
- `fixtures/`: real projects; [fixtures/README.md](fixtures/README.md) says how each was made.

## Tests

- A bug fix starts with a test that fails without it. A false positive or a missed finding is
  best reported with the smallest code that shows it; the rule tests in `test/unit/` take a source
  string, and `test/helpers/tree.ts` builds a small project in `.test-work/`.
- Fixture reports are recorded in `test/__snapshots__/fixtures`. When output changes on purpose,
  run `npm test -- -u`, read the diff, and run `npm run demo` if the terminal output changed.
- `test/integration/fixtures.test.ts` lists the expected findings of each fixture; change that
  list deliberately, never to make a run pass.

## Adding to the rule data

Every rule in `rules/liquid-glass.json` needs at least one https source that says what the rule
says, in the publisher's own words: Apple's documentation, React Navigation's, Expo's or Flutter's
pages and issues. A behaviour you saw in the simulator goes into a guide with how to reproduce it,
labelled with the simulator runtime and the Xcode build. Bump `dataVersion` to the date of your
change, and run `node scripts/rule-schema.ts` when the schema changes.

## Wording

glassready reports what it can show. Do not write that a screen "breaks" unless a source or a
recorded run says so, say "simulator" when a result is from the simulator, and keep planned
features marked as planned. The hygiene check in CI rejects unverifiable superlatives.

## Commits and pull requests

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (`feat:`, `fix:`, `docs:`,
`test:`, `refactor:`, `build:`, `ci:`, `chore:`), one topic per pull request, and an entry under
"Unreleased" in [CHANGELOG.md](CHANGELOG.md) for anything a user would notice.

## Releases

Maintainers bump `version` in `package.json`, move the "Unreleased" entries under the new version
in `CHANGELOG.md`, and push a `v<version>` tag. The release workflow checks, packs and publishes;
see the comment at the top of `.github/workflows/release.yml`.

## License

By contributing, you agree that your contributions are licensed under the [MIT license](LICENSE).
