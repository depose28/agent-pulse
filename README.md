# AgentPulse — AI Commerce Readiness Score

## What is AgentPulse?

AgentPulse is an AI Commerce Readiness diagnostic tool that scores any website (0–100) on how well it's prepared for the emerging wave of AI shopping agents. As AI agents increasingly discover, evaluate, compare, and transact on behalf of consumers, businesses need to ensure their digital presence is optimized for machine readability — not just human visitors.

### Who it's for

Digital leaders — e-commerce managers, founders, heads of digital — at mid-market businesses ($5M–$100M revenue) across e-commerce, SaaS, marketplaces, and service industries who value authoritative, data-driven diagnostic reports.

### Scope

AgentPulse is positioned for **any website where AI agents discover, evaluate, or transact**, including:

- E-commerce stores
- Service businesses
- Marketplaces
- SaaS pricing pages

## Business Model

AgentPulse uses a **hybrid monetization model**: free teaser + paid full report.

### Free Tier — "Pulse Check"

- AI Commerce Score (0-100) with animated score ring
- FIND / TRUST / BUY layer breakdown with progress bars
- Top 3 priority issues with severity ratings
- Shareable score badge (LinkedIn, X, embed code)
- One affiliate "Fix This →" link for the #1 priority issue

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

Key principles:

- The free scan is genuinely useful, not a crippled version
- Monetization is transparent: FAQ entries and pricing section explain the model clearly
- Affiliate disclosure labels ("Affiliate" badge) appear next to tool links in results only
- Every recommended tool is vetted by the team

## Website Structure

The landing page is a single-page marketing site built as a conversion funnel:

| Section                       | Purpose                                                                 |
| ----------------------------- | ----------------------------------------------------------------------- |
| **Navbar**                    | Sticky navigation with links to key sections                            |
| **Hero**                      | Score gauge visual + CTA to scan your site                              |
| **ProblemSection**            | Frames the problem: AI agents are changing commerce                     |
| **HowItWorks**                | Three-step explainer (Enter URL → Get Score → Fix Issues)               |
| **FrameworkSection**          | Details the scoring framework / what's measured                         |
| **FixRecommendationsSection** | Sample recommendations with affiliate tool links                        |
| **ShareScoreSection**         | Social proof / share your score with peers                              |
| **PricingSection**            | Two-tier pricing: Pulse Check (Free) + Full Report ($49)                |
| **FAQSection**                | Common questions including pricing and business model disclosure         |
| **CTASection**                | Final conversion CTA with URL input                                     |
| **Footer**                    | Links, legal, branding                                                  |

### Results Flow

1. **Scan** (`/scan`) — Animated diagnostic interstitial with progress ring
2. **Results** (`/results`) — Free results shown immediately; upgrade wall with blurred preview of remaining issues; paid tier reveals full report

Additional pages: **Privacy** policy page and a **404** fallback.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS with a custom dark-mode design system (HSL tokens)
- **UI Components:** shadcn/ui (Radix primitives)
- **Animations:** Framer Motion
- **Routing:** React Router v6

## Key Design Details

- **ScoreGauge:** The hero visual — an animated SVG ring with a holographic gradient, count-up animation, and SVG-native text centering for pixel-perfect score display
- **Design system:** Custom HSL color tokens in `index.css` with semantic Tailwind classes; dark-first palette with accent gradients
- **Typography:** Playfair Display (display/headings) paired with a clean sans-serif body font

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
