# reFound — AI Commerce Readiness Score

## What is reFound?

reFound is an AI Commerce Readiness diagnostic tool that scores any website (0–100) on how well it's prepared for the emerging wave of AI shopping agents. As AI agents increasingly discover, evaluate, compare, and transact on behalf of consumers, businesses need to ensure their digital presence is optimized for machine readability — not just human visitors.

### Who it's for

Digital leaders — e-commerce managers, founders, heads of digital — at mid-market businesses ($5M–$100M revenue) across e-commerce, SaaS, marketplaces, and service industries who value authoritative, data-driven diagnostic reports.

### Scope

reFound is positioned for **any website where AI agents discover, evaluate, or transact**, including:

- E-commerce stores
- Service businesses
- Marketplaces
- SaaS pricing pages

---

## Business Model

reFound uses a **hybrid monetization model**: free teaser + paid full report.

### Free Tier — "Pulse Check"

- AI Commerce Score (0-100) with animated score ring
- FIND / TRUST / BUY layer breakdown with progress bars
- Top 3 priority issues with severity ratings
- Shareable score badge (LinkedIn, X, embed code)
- One affiliate "Fix This →" link for the #1 priority issue only

### Paid Tier — "Full Report" ($49 one-time)

- All issues identified with severity ratings
- Implementation guidance with code snippets
- Platform-specific fix instructions (Shopify, WooCommerce, etc.)
- Recommended tools for each issue (with affiliate "Fix This →" links)
- Competitor benchmark (scan 1 competitor and compare scores)
- PDF export of the complete report

### Revenue Streams

1. **Full Report sales** — $49 one-time payment per scan (via Lemon Squeezy)
2. **Affiliate commissions** — earned when users click "Fix This →" tool recommendations in results

### Key Principles

- The free scan is genuinely useful, not a crippled version
- Monetization is transparent: FAQ entries and pricing section explain the model clearly
- Affiliate disclosure labels ("Affiliate" badge) appear next to tool links in results only
- Every recommended tool is vetted by the team — no pay-to-play recommendations

---

## Website Structure

The landing page is a single-page marketing site built as a conversion funnel:

| Section                       | Purpose                                                                 |
| ----------------------------- | ----------------------------------------------------------------------- |
| **Navbar**                    | Sticky navigation with links to key sections                            |
| **Hero**                      | Score gauge visual + URL input CTA to start a scan                      |
| **ProblemSection**            | Frames the problem: AI agents are changing commerce                     |
| **HowItWorks**                | Three-step explainer (Enter URL → Get Score → Fix Issues)               |
| **FrameworkSection**          | Details the FIND/TRUST/BUY scoring framework                            |
| **FixRecommendationsSection** | Sample fix recommendations with affiliate tool links                    |
| **ShareScoreSection**         | Social proof / shareable badge mockup                                   |
| **PricingSection**            | Two-tier pricing cards: Pulse Check (Free) + Full Report ($49)          |
| **FAQSection**                | Common questions including pricing and business model disclosure         |
| **CTASection**                | Final conversion CTA with URL input ("Free" + "$49 for more" messaging) |
| **Footer**                    | Links, legal, branding                                                  |

Additional pages: **Privacy** policy, **404** fallback.

---

## User Flow: Scan → Interstitial → Results → Upgrade

This is the core product flow and the primary conversion funnel. Every step is designed to build engagement, demonstrate value, and create a natural upgrade moment.

### Step 1: URL Submission (Landing Page)

**Component:** `Hero.tsx`
**Route:** `/`

The user enters their website URL in the hero section and clicks "Get Your Score." This navigates to `/scan?url=<encoded-url>` using React Router's `useNavigate`.

The CTA section at the bottom of the page (`CTASection.tsx`) mirrors this behavior — its URL input also navigates to `/scan`.

### Step 2: Scan Interstitial (Loading Experience)

**Component:** `ScanProgress.tsx`
**Route:** `/scan?url=<encoded-url>`
**Page container:** `Scan.tsx`

This is a purpose-built waiting page that keeps users engaged during a ~2.5 minute scan. It uses UX best practices for long-wait interstitials:

#### How the interstitial works

1. **Progress Ring:** A holographic SVG ring animates from 0% to 100% over `TOTAL_DURATION` (150 seconds). The ring uses a multi-stop `linearGradient` with CSS `<animate>` elements to create a shifting holographic color effect. An outer decorative "tick ring" fills alongside the main progress arc.

2. **Phased Status Messages:** The scan is divided into four phases, each with its own progress range and rotating status messages:

   | Phase   | Progress Range | Example Messages                                              |
   | ------- | -------------- | ------------------------------------------------------------- |
   | **FIND**  | 0–35%          | "Checking if AI agents can actually find you…"                |
   | **TRUST** | 35–68%         | "Counting your reviews (every star matters ⭐)"               |
   | **BUY**   | 68–92%         | "Simulating an AI checkout experience 🛒"                     |
   | **SCORE** | 92–100%        | "Generating your AI Commerce Score™…"                         |

   Messages cycle every 4.5 seconds (`MESSAGE_INTERVAL`). They use quirky, personality-driven copy to maintain engagement.

3. **Phase Indicators:** A horizontal stepper (FIND → TRUST → BUY → SCORE) shows which phase is active. Completed phases turn green with a solid dot; the active phase pulses.

4. **Time Remaining:** A countdown formatted as `~M:SS remaining` updates in real-time based on the progress fraction.

5. **"Did You Know?" Card:** A fact card appears after 2 seconds, showing compelling industry statistics (e.g., "AI-referred traffic has grown 4,700% YoY") to reinforce urgency and value.

6. **Completion Transition:** When progress reaches 100%:
   - The progress ring shows "COMPLETE"
   - After 800ms, the ring cross-fades (via `AnimatePresence`) to the final `ScoreGauge` component showing the user's actual score
   - A "View Your Results →" CTA button animates in below

#### Navigation on completion

Clicking "View Your Results →" navigates to `/results?url=<encoded-url>`.

If no URL is provided in the query params, the user is redirected back to `/`.

### Step 3: Free Results Page

**Component:** `ResultsDisplay.tsx` (with `tier="free"`)
**Route:** `/results?url=<encoded-url>`
**Page container:** `Results.tsx`

The results page renders `ResultsDisplay` with `tier="free"` by default. This shows:

#### Free results content

1. **Overall AI Commerce Score** — The `ScoreGauge` component renders an animated holographic ring with the 0–100 score, identical in style to the hero preview and scan completion display.

2. **Summary Text** — "We found [X] issues across your site. Your biggest gaps are in [weakest layer]." Dynamic based on scan data.

3. **FIND / TRUST / BUY Layer Breakdown** — Three horizontal progress bars with animated fill and numeric score. Each bar color-codes by score: green (≥70), gold (40–69), red (<40).

4. **Top 3 Priority Issues** — Each issue card shows:
   - Severity badge (High / Medium / Low) with color-coded dot and border
   - Issue name (e.g., "Missing product review schema")
   - One-line impact description (e.g., "AI agents can't verify social proof for your products")
   - For the **#1 priority issue only**: a "Fix This →" affiliate link with an "Affiliate" badge

5. **Shareable Score Badge** — A miniature branded card mockup with:
   - reFound branding
   - The user's score and `ScoreGauge` mini ring
   - "Share on LinkedIn" and "Share on X" buttons
   - Embed code snippet for websites

### Step 4: Upgrade Wall

**Location:** Below the free results in `ResultsDisplay.tsx` (rendered when `tier="free"`)

Immediately after the free content, the remaining issues are shown in a **blurred, locked state**:

1. **Blurred Issue Cards** — Issues 4–6 from the full list are rendered with `blur-sm`, `select-none`, and `pointer-events-none` to create a preview-but-locked effect.

2. **Gradient Overlay** — A `bg-gradient-to-t` overlay fades from the dark background upward, creating a smooth reveal-to-locked transition.

3. **Lock Icon + Headline** — A centered lock icon with the headline: "You have [X] more issues to fix. Get the full report."

4. **Full Report Feature List** — A checklist of what's included:
   - ✓ All [X] issues identified (not just top 3)
   - ✓ Implementation guidance with code snippets
   - ✓ Platform-specific fix instructions (Shopify, WooCommerce, etc.)
   - ✓ Recommended tools for each issue
   - ✓ Competitor benchmark — scan 1 competitor & compare
   - ✓ PDF export of your complete report

5. **CTA Button** — `[Unlock Full Report — $49]` styled with `holo-cta` (the brand's holographic gradient button).

6. **Reassurance Copy** — "One-time payment. No subscription. Instant access."

### Step 5: Payment (Planned)

**Current state:** Placeholder implementation

Clicking "Unlock Full Report — $49" currently opens a placeholder Lemon Squeezy checkout URL in a new tab. The URL is constructed to pass the user's email and scan ID as checkout custom fields:

```
https://your-store.lemonsqueezy.com/checkout/buy/placeholder
  ?checkout[email]=user@example.com
  &checkout[custom][scan_id]=demo
```

**Planned behavior after Lemon Squeezy setup:**
1. User clicks CTA → Lemon Squeezy checkout opens (new tab or overlay)
2. After successful payment → webhook notifies backend
3. The results page switches `tier` from `"free"` to `"paid"`
4. All blurred content is immediately revealed (no page reload needed — React state change)
5. A success banner appears: "Your full report is unlocked. We've also sent a PDF to your email."
6. Full report PDF is emailed to the user

### Step 6: Paid Results (Post-Upgrade)

**Component:** `ResultsDisplay.tsx` (with `tier="paid"`)

When `tier="paid"`, the same component renders the complete report:

1. **All issues** are shown (not just top 3), each with:
   - Severity badge
   - Issue name and impact description
   - **Code snippets** — actual implementation examples in a monospace code block
   - **Platform-specific instructions** — e.g., "Shopify: Install Judge.me app → Settings → Enable Schema Markup"
   - **"Fix This →" affiliate links** for every issue that has a tool recommendation, each with an "Affiliate" badge
   - For issues without a tool: plain-text fix instructions

2. **Affiliate disclosure** — A general notice at the top of the issues list: "Some recommendations contain affiliate links. [Learn more](/privacy)"

3. **Success banner** — Confirms the report is unlocked and a PDF has been sent.

4. **No upgrade wall** — The blurred section and lock overlay are not rendered.

---

## ResultsDisplay Architecture

The `ResultsDisplay` component (`src/components/ResultsDisplay.tsx`) is designed as a **single component with a `tier` prop** that controls what's visible:

```tsx
interface ResultsDisplayProps {
  tier: "free" | "paid";
  data: ResultsData;
  onUpgrade?: () => void;
}
```

| Feature                        | `tier="free"`           | `tier="paid"`          |
| ------------------------------ | ----------------------- | ---------------------- |
| Overall score + ring           | ✅ Shown                | ✅ Shown               |
| Layer breakdown bars           | ✅ Shown                | ✅ Shown               |
| Summary text                   | ✅ Shown                | ✅ Shown               |
| Issues displayed               | Top 3 only              | All issues             |
| Code snippets per issue        | ❌ Hidden               | ✅ Shown               |
| Platform instructions          | ❌ Hidden               | ✅ Shown               |
| Affiliate "Fix This →" links   | #1 issue only           | All issues with tools  |
| Affiliate disclosure notice    | ❌ Hidden               | ✅ Shown (top of list) |
| Shareable badge                | ✅ Shown                | ✅ Shown               |
| Upgrade wall (blurred issues)  | ✅ Shown                | ❌ Hidden              |
| Success banner                 | ❌ Hidden               | ✅ Shown               |

This architecture keeps the codebase clean — one component, two views, no duplication.

---

## Pricing Section (Landing Page)

**Component:** `PricingSection.tsx`

The pricing section on the landing page mirrors the two-tier model with side-by-side cards:

### Card 1: Pulse Check — Free ($0)

- AI Commerce Score (0-100)
- FIND / TRUST / BUY breakdown
- Top 3 priority issues
- Shareable score badge
- CTA: `[Get Your Free Score →]` → scrolls to hero URL input
- Subtext: "No credit card required"

### Card 2: Full Report — $49

- Everything in Pulse Check, plus:
- All issues with severity ratings
- Implementation guidance with code snippets
- Platform-specific fix instructions
- Recommended tools to fix each issue
- Competitor benchmark (1 site)
- PDF export
- CTA: `[Get Your Score First →]` → scrolls to hero URL input
- Subtext: "Upgrade after you see your free results"
- "Full Diagnosis" badge floats above the card

The free card feels generous. The paid card feels like an obvious next step for serious teams. Both CTAs funnel to the same entry point (URL input), reinforcing that the free scan is the gateway.

---

## FAQ Entries (Pricing-Related)

The FAQ section includes three entries specifically addressing the hybrid model:

1. **"Is the free scan really free?"** — Confirms the free tier includes score, breakdown, and top 3 issues with no credit card. Mentions the $49 full report as an optional upgrade.

2. **"What do I get in the full report that I don't get for free?"** — Frames the free scan as "the diagnosis" and the full report as "the treatment plan" with code snippets, platform instructions, and competitor comparison.

3. **"How does reFound make money?"** — Transparent disclosure: $49 full report revenue + affiliate commissions on recommended tools, with an emphasis on editorial integrity.

---

## CTA Section (Bottom of Landing Page)

**Component:** `CTASection.tsx`

Updated to reflect the hybrid model:

- **Headline:** "Your AI Commerce Score in 60 seconds. Free."
- **Subline:** "See your score and top issues instantly. Go deeper for $49."
- **CTA button:** `[Get My Score →]`
- The URL input navigates to `/scan?url=<encoded-url>` (same as hero)

---

## File Map

| File                                    | Purpose                                                        |
| --------------------------------------- | -------------------------------------------------------------- |
| `src/pages/Index.tsx`                   | Landing page — assembles all marketing sections                |
| `src/pages/Scan.tsx`                    | Scan interstitial page container                               |
| `src/pages/Results.tsx`                 | Results page container; manages `tier` state + mock data       |
| `src/components/ScanProgress.tsx`       | Animated scan progress ring with phased messages               |
| `src/components/ResultsDisplay.tsx`     | Core results component; renders free or paid view via `tier`   |
| `src/components/ScoreGauge.tsx`         | Reusable animated SVG score ring (used in hero, scan, results) |
| `src/components/PricingSection.tsx`     | Two-tier pricing cards on landing page                         |
| `src/components/CTASection.tsx`         | Bottom-of-page CTA with URL input                              |
| `src/components/FAQSection.tsx`         | FAQ accordion with pricing-related entries                     |
| `src/components/Hero.tsx`              | Hero section with URL input, score preview, social proof       |

---

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS with a custom dark-mode design system (HSL tokens in `index.css`)
- **UI Components:** shadcn/ui (Radix primitives)
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Payment (planned):** Lemon Squeezy (handles VAT, no Stripe setup needed)

## Key Design Details

- **ScoreGauge:** Reusable animated SVG ring with holographic gradient, count-up animation, and SVG-native text centering. Used in the hero preview card, scan completion transition, and results page header. Each instance uses `useId()` for unique SVG gradient/filter IDs to prevent rendering conflicts.
- **Design system:** Custom HSL color tokens in `index.css` with semantic Tailwind classes (`section-dark`, `holo-cta`, `holo-border-dark`, `glow-holo`); dark-first palette with holographic accent gradients.
- **Typography:** Playfair Display (serif display/headings) paired with Inter (sans-serif body) and JetBrains Mono (monospace labels/code).

## Local Development

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm i
npm run dev
```

Requires Node.js — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

## Deployment

Open [Lovable](https://lovable.dev) → Share → Publish. Custom domains supported via Project > Settings > Domains.
