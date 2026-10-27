# Examples

| Example                                                        | What it shows                                                                                 |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [api/impact.mjs](api/impact.mjs)                               | glassready from JavaScript: projects sorted by impact, with the verdict and the rules found   |
| [shell/opt-out-targets.sh](shell/opt-out-targets.sh)           | Filtering the JSON report with `jq`: every place the project opts out of Liquid Glass         |
| [github-actions/glassready.yml](github-actions/glassready.yml) | A workflow for an app repository: the report in the job summary, and a failed job on warnings |

Run the first two from the repository root after `npm ci && npm run build`:

```sh
node examples/api/impact.mjs
sh examples/shell/opt-out-targets.sh fixtures/expo-58-optout
```

`impact.mjs` imports `@mcamdali/glassready` by name; inside this repository that resolves to the
package itself, so it runs the code you just built. The tests run all three on every change.
