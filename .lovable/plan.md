
## Goal
Make the “73” (main score) truly centered inside the ScoreGauge, in a way that stays centered across sizes (Hero uses size 70, ShareScoreSection uses size 50) and across different score values (0–100).

## What’s happening now (why it still looks off)
- The number is currently rendered as HTML (`<span>`) overlaid on top of the SVG ring and centered via flex.
- Even when the bounding box is mathematically centered, serif numerals can look optically off-center (especially “7” in Playfair Display). This is a typography/optical-centering issue, not just a CSS “center me” issue.
- Also, the gauge SVG uses global IDs (`scoreHoloGradient`, `glow`). Because there are multiple ScoreGauge instances on the page, those IDs can collide and cause subtle rendering inconsistencies (not the centering issue, but worth fixing while we touch this component).

## Approach
Rebuild the gauge’s center label so it’s anchored to the SVG’s exact center point, using SVG text alignment rules:
- Render the number as an SVG `<text>` (or `<motion.text>`) positioned at `(size/2, size/2)`
- Use `textAnchor="middle"` and `dominantBaseline="central"` (or `middle`) for true geometric centering
- Rotate only the ring circles (not the whole SVG), so the text stays upright
- Add a small optional “optical nudge” (dx) that can be tuned if Playfair still looks slightly off (typically a tiny negative dx in `em`), but only after we verify the pure SVG centering.

## Implementation steps (code changes)
### 1) Update `src/components/ScoreGauge.tsx` rendering
- Replace the current “rotated SVG + absolutely-positioned HTML span” setup with a single SVG that includes:
  - `<defs>` for gradient/filter
  - background circle
  - animated progress circle (Framer Motion)
  - centered score text in SVG

Key details:
- **Rotate the circles only**:
  - Remove `className="transform -rotate-90"` from the `<svg>`
  - Add `transform={`rotate(-90 ${size/2} ${size/2})`}` to the circle elements (or to a wrapping `<g>`)
  - This keeps the number upright and avoids mixing different coordinate systems.

- **SVG text centering**:
  - Use `<motion.text>` (or `<text>`) with:
    - `x={size / 2}`
    - `y={size / 2}`
    - `textAnchor="middle"`
    - `dominantBaseline="central"`
  - Apply the same font styling as today (Playfair Display), but set numeric features explicitly:
    - `fontVariantNumeric: "tabular-nums lining-nums"` (as an inline style)
  - Keep the animated opacity timing similar to the current label fade-in.

### 2) Fix SVG ID collisions (important because ScoreGauge appears multiple times)
- Use `useId()` from React to generate unique IDs per instance:
  - `const id = useId()`
  - `const gradientId = \`scoreHoloGradient-\${id}\``
  - `const glowId = \`scoreGlow-\${id}\``
- Update:
  - `stroke={`url(#${gradientId})`}`
  - `filter={`url(#${glowId})`}`
- This prevents multiple gauges from fighting over the same `<defs>` IDs.

### 3) Clamp score values to keep geometry stable
- Add:
  - `const clampedScore = Math.max(0, Math.min(100, score));`
- Use `clampedScore` for:
  - stroke offset calculations
  - the animation target for the count-up
This prevents any future out-of-range score from creating weird offsets that could also make the label feel visually misaligned.

### 4) Optional: optical correction (only if needed after SVG centering)
If it still “looks” slightly off due to the serif glyph shapes:
- Add a tiny `dx` to the SVG text, defaulting to something subtle like `dx="-0.02em"` for 2-digit numbers.
- Make it dependent on digit count so it doesn’t break 1-digit or 3-digit scores:
  - 1 digit: `dx="0em"`
  - 2 digits: `dx="-0.02em"` (tunable)
  - 3 digits (100): `dx="-0.03em"` (tunable)

We’ll try without this first; most of the time, SVG centering fixes the “it’s not centered” complaint much more reliably than HTML overlay.

## Verification checklist
1. Open `/` and check the Hero card gauge (size=70) — confirm “73” is centered.
2. Scroll to the section that uses the smaller gauge (size=50) — confirm centering holds there too.
3. Temporarily test a few values (e.g., 7, 73, 100) to ensure centering doesn’t drift across digit counts.
4. Confirm the ring animation still starts at top (12 o’clock) and animates correctly after moving rotation to the circles.
5. Confirm no console warnings about duplicate SVG IDs (the `useId()` change should eliminate this).

## Expected outcome
- The number will be geometrically centered in the circle (not dependent on flex/HTML overlay).
- The layout will be consistent across multiple ScoreGauge instances.
- If Playfair’s “73” still feels optically off, we’ll have a controlled, minimal “optical nudge” knob rather than fighting CSS.
