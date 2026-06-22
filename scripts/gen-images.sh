#!/usr/bin/env bash
# Generate all images for dairy-insurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/dairy-insurance.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — DAIRY FARM insurance ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of a modern dairy farm at golden-hour dawn: a herd of black-and-white Holstein dairy cows grazing in a lush green rolling pasture, a classic red dairy barn and a modern white milking parlor in the background, soft morning mist, warm sunlight. Bright professional agricultural photography, warm natural colors, high-end commercial photography, no text, no watermark" 4

gen "coverage.jpg" \
  "Photorealistic elevated aerial view of a large modern dairy farm: long freestall barns, a milking parlor, green pastures with a grazing dairy herd, commodity silos, blue sky with soft clouds. Clean professional agricultural photography, no text" 4

gen "about.jpg" \
  "Photorealistic authentic portrait of a friendly dairy farmer wearing a flannel shirt and cap standing in a clean modern milking parlor with Holstein cows behind, warm natural light, trustworthy genuine expression, shallow depth of field, commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide cinematic landscape of a beautiful dairy farm at sunrise: green rolling pastures with a herd of dairy cows, a red barn and modern milking parlor, blue sky, warm golden light. Premium agricultural commercial photography, clean and inviting, no text, no watermark" 4 1216 640

gen "livestock-mortality.jpg" \
  "Photorealistic close-up of a herd of healthy premium registered Holstein dairy cows standing in a lush green pasture, fit well-cared-for breeding stock, warm morning light, shallow depth of field, professional agricultural photography, no text" 4

gen "farm-property.jpg" \
  "Photorealistic photo of modern dairy farm buildings: a large clean red-and-white freestall barn and milking parlor with commodity silos under a blue sky, neat and well-kept, professional agricultural architecture photography, no text" 4

gen "equipment-spoilage.jpg" \
  "Photorealistic photo of a gleaming stainless-steel milk bulk tank and chiller inside a spotless dairy milkhouse, polished metal, pipes and pressure gauges, bright clean industrial lighting, professional commercial photography, no text" 4

gen "dairy-product-liability.jpg" \
  "Photorealistic photo of fresh milk being filled into clean glass bottles on a hygienic dairy processing line, stainless steel nozzles and conveyor, bright clean facility, professional commercial food photography, no text" 4

gen "general-liability.jpg" \
  "Photorealistic photo of an agri-tourism farm tour at a dairy: a farmer in a cap guiding a visiting family past calves in a clean sunlit barn, warm friendly authentic moment, professional photography, no text" 4

gen "workers-compensation.jpg" \
  "Photorealistic photo of dairy farm workers in a modern milking parlor wearing clean workwear, safely tending to cows, bright professional agricultural photography, warm natural light, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic photo of a polished stainless-steel milk tanker truck and a feed truck parked at a dairy farm loading area, blue sky, clean vehicles, professional commercial automotive photography, no text" 4

gen "pollution-environmental.jpg" \
  "Photorealistic photo of a well-maintained modern dairy manure storage facility: a large earthen lagoon with neat green grass berms, a pump and nutrient-management piping, clean agricultural infrastructure, blue sky, professional environmental photography, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
