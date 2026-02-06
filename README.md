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

AgentPulse is **100% free to use**. Revenue is generated through **affiliate links** embedded in the fix recommendations — when users scan their site and receive actionable improvement suggestions, the recommended tools and services include affiliate partnerships.

Key principles:

- The scan and score are completely free, with no paywalls or gated features
- Monetization is transparent: the Pricing section includes a "Why is this free?" explanation, and detailed FAQ entries cover how the tool sustains itself
- Affiliate disclosure labels are reserved for tool links within scan results only, keeping the landing page clean and trustworthy

## Website Structure

The landing page is a single-page marketing site built as a conversion funnel:

| Section                    | Purpose                                                                 |
| -------------------------- | ----------------------------------------------------------------------- |
| **Navbar**                 | Sticky navigation with links to key sections                            |
| **Hero**                   | Score gauge visual + CTA to scan your site                              |
| **ProblemSection**         | Frames the problem: AI agents are changing commerce                     |
| **HowItWorks**             | Three-step explainer (Enter URL → Get Score → Fix Issues)               |
| **FrameworkSection**       | Details the scoring framework / what's measured                         |
| **FixRecommendationsSection** | Sample recommendations with affiliate tool links (monetization layer) |
| **ShareScoreSection**      | Social proof / share your score with peers                              |
| **PricingSection**         | "Free" pricing card with "Why is this free?" transparency               |
| **FAQSection**             | Common questions including business model disclosure                    |
| **CTASection**             | Final conversion call-to-action                                        |
| **Footer**                 | Links, legal, branding                                                  |

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
