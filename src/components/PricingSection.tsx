import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "Full site scan (homepage + product pages)",
  "AI Commerce Score (0-100)",
  "FIND / TRUST / BUY layer breakdown",
  "All issues identified with severity ratings",
  "Prioritized fix list",
  "Recommended tools to fix each issue",
  "Shareable score badge for your site and socials",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-32 relative section-dark overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Holographic orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-holo-2/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16 max-w-3xl mx-auto"
        >
          <p className="text-xs md:text-sm font-mono text-dark-muted uppercase tracking-widest mb-3 md:mb-4">
            No Catch
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-display font-serif text-dark-fg mb-4 md:mb-6 tracking-tight">
            Everything you need.{" "}
            <span className="font-serif-italic">Completely free.</span>
          </h2>
          <p className="text-base md:text-lg text-dark-muted font-sans">
            No tiers. No credit card. No catch.
          </p>
        </motion.div>

        {/* Single Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="holo-border-dark glow-holo p-6 md:p-10">
            {/* Features List - Two columns on mobile */}
            <ul className="grid grid-cols-1 md:grid-cols-1 gap-2.5 md:gap-4 mb-6 md:mb-8">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-dark-fg font-sans"
                >
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-score-high mt-0.5 shrink-0" />
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => {
                document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full py-3 md:py-4 px-6 rounded-lg md:rounded-xl font-sans font-medium text-sm md:text-base flex items-center justify-center gap-2 transition-all holo-cta text-dark-fg"
            >
              Get Your Free Score
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
