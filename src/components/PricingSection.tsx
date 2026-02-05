import { motion } from "framer-motion";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Pulse Check",
    price: "Free",
    description: "Quick diagnostic to see where you stand",
    cta: "Get Your Free Score",
    featured: false,
    features: [
      { text: "Homepage + 5 product pages scanned", included: true },
      { text: "AI Commerce Score (0-100)", included: true },
      { text: "Find / Trust / Buy breakdown", included: true },
      { text: "Top 3 priority issues", included: true },
      { text: "Email delivery of results", included: true },
      { text: "Full site crawl", included: false },
      { text: "Competitor benchmark", included: false },
      { text: "Implementation guidance", included: false },
    ],
  },
  {
    name: "Deep Scan",
    price: "$49",
    priceNote: "one-time",
    description: "Complete analysis with actionable fix list",
    cta: "Get Deep Scan",
    featured: true,
    features: [
      { text: "Full site crawl (up to 500 pages)", included: true },
      { text: "Complete AI Commerce Score", included: true },
      { text: "Detailed layer breakdown", included: true },
      { text: "All issues with severity ratings", included: true },
      { text: "Prioritized fix list", included: true },
      { text: "Implementation guidance", included: true },
      { text: "Competitor benchmark (1 site)", included: true },
      { text: "PDF export + dashboard", included: true },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 relative section-dark overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Holographic orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-holo-2/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <p className="text-sm font-mono text-dark-muted uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-display font-serif text-dark-fg mb-6 tracking-tight">
            Start free, upgrade when{" "}
            <span className="font-serif-italic">ready</span>
          </h2>
          <p className="text-lg text-dark-muted font-sans">
            No credit card required for your first scan.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative ${tier.featured ? "holo-border-dark glow-holo" : "bg-dark-card border border-dark-border rounded-2xl"} p-8`}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-8 z-10">
                  <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-foreground rounded-full text-xs font-sans font-medium shadow-lg">
                    <Sparkles className="w-3 h-3 text-holo-2" />
                    Recommended
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6 pt-2">
                <h3 className="text-2xl font-serif text-dark-fg mb-2">
                  {tier.name}
                </h3>
                <p className="text-dark-muted text-sm font-sans">
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-serif text-dark-fg">
                    {tier.price}
                  </span>
                  {tier.priceNote && (
                    <span className="text-dark-muted text-sm font-sans">
                      {tier.priceNote}
                    </span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <button
                className={`w-full py-4 px-6 rounded-xl font-sans font-medium flex items-center justify-center gap-2 transition-all mb-8 ${
                  tier.featured
                    ? "holo-button text-dark-fg"
                    : "bg-dark-border/50 text-dark-fg hover:bg-dark-border"
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Features */}
              <ul className="space-y-3">
                {tier.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-sm font-sans ${
                      feature.included
                        ? "text-dark-fg"
                        : "text-dark-muted/40"
                    }`}
                  >
                    {feature.included ? (
                      <Check className="w-4 h-4 text-score-high mt-0.5 shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-dark-muted/30 mt-0.5 shrink-0" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
