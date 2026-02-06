import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const freeFeatures = [
  "AI Commerce Score (0-100)",
  "FIND / TRUST / BUY breakdown",
  "Top 3 priority issues",
  "Shareable score badge",
];

const paidFeatures = [
  "Everything in Pulse Check, plus:",
  "All issues with severity ratings",
  "Implementation guidance with code snippets",
  "Platform-specific fix instructions",
  "Recommended tools to fix each issue",
  "Competitor benchmark (1 site)",
  "PDF export",
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
            Simple Pricing
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-display font-serif text-dark-fg mb-4 md:mb-6 tracking-tight">
            Start free.{" "}
            <span className="font-serif-italic">Go deeper when you're ready.</span>
          </h2>
        </motion.div>

        {/* Two-Tier Cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="pt-3"
          >
            <div className="holo-border-dark glow-holo p-6 md:p-8 h-full flex flex-col">
              <div className="mb-4 md:mb-6">
                <p className="text-[10px] md:text-xs font-mono text-dark-muted uppercase tracking-[0.15em] mb-2">
                  Free
                </p>
                <h3 className="text-lg md:text-2xl font-serif text-dark-fg tracking-tight">
                  Pulse Check
                </h3>
                <p className="text-2xl md:text-4xl font-serif text-dark-fg mt-2">
                  $0
                </p>
              </div>

              <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-1">
                {freeFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-dark-fg font-sans">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-score-high mt-0.5 shrink-0" />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <div>
                <button
                  onClick={() => {
                    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-3 md:py-4 px-6 rounded-lg md:rounded-xl font-sans font-medium text-sm md:text-base flex items-center justify-center gap-2 transition-all holo-button text-dark-fg"
                >
                  Get Your Free Score
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] md:text-xs text-dark-muted font-sans text-center mt-2">
                  No credit card required
                </p>
              </div>
            </div>
          </motion.div>

          {/* Paid Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative pt-3"
          >
            {/* Recommended badge — outside overflow:hidden container */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-wider holo-cta text-dark-fg whitespace-nowrap">
                Full Diagnosis
              </span>
            </div>

            <div className="holo-border-dark glow-holo p-6 md:p-8 h-full flex flex-col">

              <div className="mb-4 md:mb-6 mt-2">
                <p className="text-[10px] md:text-xs font-mono text-dark-muted uppercase tracking-[0.15em] mb-2">
                  One-time
                </p>
                <h3 className="text-lg md:text-2xl font-serif text-dark-fg tracking-tight">
                  Full Report
                </h3>
                <p className="text-2xl md:text-4xl font-serif text-dark-fg mt-2">
                  $49
                </p>
              </div>

              <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-1">
                {paidFeatures.map((feature, i) => (
                  <li key={i} className={`flex items-start gap-2 md:gap-3 text-sm md:text-base font-sans ${i === 0 ? "text-dark-muted italic" : "text-dark-fg"}`}>
                    {i > 0 && <Check className="w-4 h-4 md:w-5 md:h-5 text-score-high mt-0.5 shrink-0" />}
                    {i === 0 && <span className="w-4 md:w-5 shrink-0" />}
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <div>
                <button
                  onClick={() => {
                    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-3 md:py-4 px-6 rounded-lg md:rounded-xl font-sans font-medium text-sm md:text-base flex items-center justify-center gap-2 transition-all holo-cta text-dark-fg"
                >
                  Get Your Score First
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] md:text-xs text-dark-muted font-sans text-center mt-2">
                  Upgrade after you see your free results
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Free Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mt-12 md:mt-16"
        >
          <h3 className="text-xl md:text-2xl font-serif text-dark-fg mb-3 md:mb-4 tracking-tight">
            Why offer a <span className="font-serif-italic">free</span> tier?
          </h3>
          <p className="text-sm md:text-base text-dark-muted font-sans leading-relaxed">
            Everyone deserves to know their score. The free Pulse Check gives you enough to understand where you stand. The full report is for teams ready to take action — with code, platform-specific instructions, and tool recommendations to fix every issue.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
