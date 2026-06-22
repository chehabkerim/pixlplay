#!/usr/bin/env bash
# ===========================================================================
# build-site.sh — assemble a clean, deploy-ready ./dist folder for Pixlplay.
#
#   ./build-site.sh
#
# Then deploy the ./dist folder (drag it to https://app.netlify.com/drop,
# or push it to GitHub Pages / Vercel). Re-run after any edits.
# ===========================================================================
set -e
cd "$(dirname "$0")"
ROOT="$(pwd)"
DIST="$ROOT/dist"

echo "Building $DIST …"
rm -rf "$DIST"
mkdir -p "$DIST/assets/covers"

# --- Portal shell --------------------------------------------------------
cp index.html pixlplay.html style.css game-data.js "$DIST/"
cp assets/portal-overlay.js "$DIST/assets/"

# --- Covers (only the slugs the site references) -------------------------
for c in pixelball26 pixelsiege ghosttownotto wordg clumsymonkey worldatwar; do
  cp "assets/covers/$c.png" "$DIST/assets/covers/$c.png"
done
# Shrink the 2000px originals to a web-friendly 1200px (much smaller download).
if command -v sips >/dev/null 2>&1; then
  sips -Z 1200 "$DIST"/assets/covers/*.png >/dev/null 2>&1 || true
fi

# --- Games ---------------------------------------------------------------
cp -R "pixel-ball-26" "pixel siege" "ghost-town-otto" "wordg" "clumsy-monkey" "$DIST/"

# --- Prune dev-only / heavy files ----------------------------------------
rm -rf "$DIST/ghost-town-otto/otto refrences"   # 12 MB of reference art
rm -f "$DIST/pixel-ball-26/index.html"          # old broken loader
rm -f "$DIST/pixel-ball-26/pixel_ball_26_cover_no5_no_badge.html"
find "$DIST" -iname "Screenshot*.png" -delete || true
find "$DIST" -name ".DS_Store" -delete || true

echo "Done."
du -sh "$DIST"
echo "Deploy the ./dist folder (e.g. drag it to https://app.netlify.com/drop)."
