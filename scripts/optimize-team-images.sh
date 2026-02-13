#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TEAM_DIR="${1:-$ROOT_DIR/public/images/team}"

if ! command -v sips >/dev/null 2>&1; then
  echo "error: sips is required (macOS)." >&2
  exit 1
fi

if [ ! -d "$TEAM_DIR" ]; then
  echo "error: team directory not found: $TEAM_DIR" >&2
  exit 1
fi

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

# source_filename target_filename y_crop_anchor_percent
# y_crop_anchor_percent is applied when source is portrait.
MAP=$(cat <<'MAP'
komphet-meesab.jpg komphet-meesab.jpg 12
panitchai-chaenglek.jpg panitchai-chaenglek.jpg 12
kritsada-suriyachan.jpg kritsada-suriyachan.jpg 10
niti-kosutao.jpg niti-kosutao.jpg 12
apirat-jamnongrat.jpg apirat-jamnongrat.jpg 14
pongsathon-tungkanakul.jpg pongsathon-tungkanakul.jpg 14
poomchanok-sangprasert.jpg poomchanok-sangprasert.jpg 14
sorawit-poemponsri.jpg sorawit-poemponsri.jpg 12
sittipong-sainum.jpg sittipong-sainum.jpg 12
suvapat-pimklang.jpg suvapat-pimklang.jpg 12
witsawachit-wangklang.jpg witsawachit-wangklang.jpg 12
noppon-changchai.jpg noppon-changchai.jpg 12
pramin-wangwun.jpg pramin-wangwun.jpg 10
thanathorn-chulay.jpg thanathorn-chulay.jpg 10
parichat-hongsa.jpg parichat-hongsa.jpg 10
irin-maysasittiroj.jpg irin-maysasittiroj.jpg 10
nuntakarn-paonariang.jpg nuntakarn-paonariang.jpg 10
suriya-thanee.jpg suriya-thanee.jpg 10
wichayoot-wongsason.jpg wichayoot-wongsason.jpg 10
MAP
)

before_kb=$(du -sk "$TEAM_DIR" | awk '{print $1}')
ok=0
missing=0

while read -r source target y_pct; do
  [ -z "$source" ] && continue

  in_path="$TEAM_DIR/$source"
  out_path="$TEAM_DIR/$target"

  if [ ! -f "$in_path" ]; then
    echo "warn: missing source $source"
    missing=$((missing + 1))
    continue
  fi

  width=$(sips -g pixelWidth "$in_path" 2>/dev/null | awk '/pixelWidth:/{print $2}')
  height=$(sips -g pixelHeight "$in_path" 2>/dev/null | awk '/pixelHeight:/{print $2}')

  if [ -z "$width" ] || [ -z "$height" ]; then
    echo "warn: failed to inspect $source"
    missing=$((missing + 1))
    continue
  fi

  if [ "$width" -le "$height" ]; then
    side="$width"
    extra=$((height - side))
    offset_y=$((extra * y_pct / 100))
    offset_x=0
  else
    side="$height"
    extra=$((width - side))
    offset_x=$((extra / 2))
    offset_y=0
  fi

  crop_tmp="$TMP_DIR/${target%.jpg}-crop.jpg"
  size_tmp="$TMP_DIR/${target%.jpg}-size.jpg"

  sips -c "$side" "$side" --cropOffset "$offset_y" "$offset_x" "$in_path" --out "$crop_tmp" >/dev/null
  sips -z 960 960 "$crop_tmp" --out "$size_tmp" >/dev/null
  sips -s format jpeg -s formatOptions 78 "$size_tmp" --out "$out_path" >/dev/null

  if [ "$source" != "$target" ]; then
    rm -f "$in_path"
  fi

  ok=$((ok + 1))
  echo "optimized: $source -> $target"
done <<< "$MAP"

after_kb=$(du -sk "$TEAM_DIR" | awk '{print $1}')

echo "done: optimized=$ok missing=$missing"
echo "size_kb_before=$before_kb size_kb_after=$after_kb"
