#!/bin/bash
# Builds a native fixture twice with the installed Xcode, once as it is and once without
# UIDesignRequiresCompatibility, takes a screenshot of each on the same simulator and compares
# them. The same screen with and without the key means the opt-out had no effect on that iOS
# version. Needs ImageMagick (brew install imagemagick) for the comparison.
#
# Two things change between launches of the same build and are left out: the home indicator at
# the bottom (it animates, so the bottom 60 pixels are not compared) and the Liquid Glass
# material itself, whose pixels vary by up to 2 of 255 per channel. A pixel counts as different
# when a channel differs by more than 2%.
#
#   scripts/simulator-compare.sh <fixture> [runtime] [output-folder]
#
# The screenshots go to <output-folder>/<fixture>-<runtime>-{opt-out,no-key}.png (default
# folder: .simulator-work/screenshots). This is how docs/media/simulator/*.txt were recorded.
set -euo pipefail

fixture="${1:?usage: scripts/simulator-compare.sh <fixture> [runtime] [output-folder]}"
version="${2:-27.0}"
root="$(cd "$(dirname "$0")/.." && pwd)"
out="${3:-$root/.simulator-work/screenshots}"
mkdir -p "$out"
with="$out/$fixture-$version-opt-out.png"
without="$out/$fixture-$version-no-key.png"

"$root/scripts/simulator-check.sh" "$fixture" "$with" "$version"
echo
REMOVE_PLIST_KEY=UIDesignRequiresCompatibility "$root/scripts/simulator-check.sh" "$fixture" "$without" "$version"
echo
width="$(sips -g pixelWidth "$with" | awk '/pixelWidth/ { print $2 }')"
height="$(sips -g pixelHeight "$with" | awk '/pixelHeight/ { print $2 }')"
area="${width}x$((height - 60))+0+0"
different="$(magick compare -metric AE -fuzz 2% \
  \( "$with" -crop "$area" +repage \) \( "$without" -crop "$area" +repage \) null: 2>&1 |
  cut -d' ' -f1 || true)"
echo "compared:   ${width} x $((height - 60)) pixels above the home indicator, 2% tolerance"
echo "different:  $different pixels"
if [ "$different" = "0" ]; then
  echo "result:     same screen: the opt-out has no effect on iOS $version"
else
  echo "result:     different screens: the opt-out changes the app on iOS $version"
fi
