import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

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
    <section id="pricing" className="py-28 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-accent mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Pricing
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-display font-serif text-foreground mb-6 tracking-tight">
            Start free, upgrade when{" "}
            <span className="font-serif-italic">ready</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl font-sans">
            No credit card required for your first scan.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative card-elevated p-8 ${
                tier.featured ? "border-foreground/30" : ""
              }`}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-6">
                  <div className="px-3 py-1 bg-foreground text-background rounded-full text-[10px] font-sans font-medium uppercase tracking-wider">
                    Recommended
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-serif text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-muted-foreground text-sm font-sans">
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-serif text-foreground">
                    {tier.price}
                  </span>
                  {tier.priceNote && (
                    <span className="text-muted-foreground text-sm font-sans">
                      {tier.priceNote}
                    </span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <button
                className={`w-full py-3.5 px-6 rounded-lg font-sans font-medium flex items-center justify-center gap-2 transition-all mb-8 ${
                  tier.featured
                    ? "btn-primary"
                    : "btn-secondary"
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
                        ? "text-foreground"
                        : "text-muted-foreground/50"
                    }`}
                  >
                    {feature.included ? (
                      <Check className="w-4 h-4 text-score-high mt-0.5 shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground/30 mt-0.5 shrink-0" />
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
