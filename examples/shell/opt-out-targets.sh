#!/bin/sh
# Lists where a project opts out of Liquid Glass (GLS001), one per line as file:line message, so a
# script can remove the key or open the files. Needs jq.
#
#   sh examples/shell/opt-out-targets.sh [project folder]
#
# Prints nothing when the project does not opt out. Inside this repository it runs the build in
# dist/; elsewhere set GLASSREADY to the command you run glassready with (for example
# "npx --yes @mcamdali/glassready@0.1").
set -eu
project="${1:-.}"
here="$(cd "$(dirname "$0")" && pwd)"
glassready="${GLASSREADY:-node $here/../../dist/cli/main.js}"
$glassready "$project" --json --fail-on none |
  jq -r '.findings[]
    | select(.rule == "GLS001")
    | "\(.file)\(if .line then ":\(.line)" else "" end) \(.message)"'
