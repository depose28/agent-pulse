
# Fix Score Gauge Number Centering

## Problem
The "73" score number appears visually off-center within the gauge circle. This is caused by:
1. Using `display: flex` on the text `<span>` element itself (not ideal for text centering)
2. The `width: 100%` on the inner span is redundant since the parent div already handles centering
3. The serif font with its varying character widths creates optical imbalance

## Solution
Simplify the centering approach by removing the unnecessary flex properties from the inner `<span>` and relying on the parent `<div>` which already has proper flex centering with `inset-0 flex items-center justify-center`.

## Changes

### File: `src/components/ScoreGauge.tsx`

**Current code (lines 92-102):**
```tsx
<span
  className="font-serif text-dark-fg tabular-nums text-center"
  style={{ 
    fontSize: size * 0.42,
    lineHeight: 1,
    fontWeight: 600,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
```

**Updated code:**
```tsx
<span
  className="font-serif text-dark-fg tabular-nums"
  style={{ 
    fontSize: size * 0.42,
    lineHeight: 1,
    fontWeight: 600,
  }}
>
```

This removes the conflicting flex styles from the span and lets the parent motion.div handle all the centering. The `tabular-nums` class ensures consistent digit widths, and the parent's `flex items-center justify-center` will properly center the text both horizontally and vertically.
