import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const recommendations = [
  {
    severity: "high",
    severityLabel: "High",
    severityColor: "bg-score-low",
    issue: "Missing product review schema",
    impact: "AI agents can't verify social proof for your products",
    fix: "Add review markup with Judge.me or Yotpo",
  },
  {
    severity: "medium",
    severityLabel: "Medium",
    severityColor: "bg-score-medium",
    issue: "Incomplete offer schema",
    impact: "AI agents see your products but can't confirm pricing or availability",
    fix: "Update structured data with Schema Pro",
  },
  {
    severity: "medium",
    severityLabel: "Medium",
    severityColor: "bg-score-medium",
    issue: "No JSON-LD product markup",
    impact: "AI agents can't parse your product catalog",
    fix: "Implement JSON-LD with Rank Math or custom markup",
  },
];

const FixRecommendationsSection = () => {
  return (
    <section className="py-16 md:py-32 relative section-dark overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16 max-w-3xl mx-auto"
        >
          <p className="text-xs md:text-sm font-mono text-dark-muted uppercase tracking-widest mb-3 md:mb-4">
            Actionable Fixes
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-display font-serif text-dark-fg mb-4 md:mb-6 tracking-tight px-2">
            We don't just diagnose.
            <br />
            We show you how to{" "}
            <span className="font-serif-italic">fix it</span>.
          </h2>
          <p className="text-base md:text-lg text-dark-muted font-sans">
            Every issue comes with a clear fix recommendation.
          </p>
        </motion.div>

        {/* Fix Cards - Stack on mobile */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col"
            >
              {/* Severity Badge */}
              <div className="flex items-center gap-2 mb-2 md:mb-4">
                <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${rec.severityColor}`} />
                <span className="text-[10px] md:text-xs font-mono text-dark-muted uppercase tracking-wider">
                  {rec.severityLabel}
                </span>
              </div>

              {/* Issue */}
              <h3 className="text-sm md:text-lg font-serif text-dark-fg mb-2 md:mb-3">
                {rec.issue}
              </h3>

              {/* Impact - Hidden on mobile for brevity */}
              <p className="text-xs md:text-sm text-dark-muted font-sans mb-3 md:mb-4 flex-1 hidden md:block">
                {rec.impact}
              </p>

              {/* Fix */}
              <div className="pt-3 md:pt-4 border-t border-dark-border">
                <p className="text-[10px] md:text-xs font-mono text-dark-muted uppercase tracking-wider mb-1 md:mb-2">
                  Fix
                </p>
                <p className="text-xs md:text-sm text-dark-fg font-sans mb-2 md:mb-3">
                  {rec.fix}
                </p>
                <button className="inline-flex items-center gap-1 md:gap-1.5 text-xs md:text-sm font-sans text-holo-2 hover:text-holo-1 transition-colors group">
                  Fix This
                  <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
              </motion.div>
          ))}
        </div>

        {/* Why is this free? section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto mt-16 md:mt-24 text-center"
        >
          <h3 className="text-xl md:text-2xl font-serif text-dark-fg mb-3 md:mb-4 tracking-tight">
            Why is this <span className="font-serif-italic">free</span>?
          </h3>
          <p className="text-sm md:text-base text-dark-muted font-sans leading-relaxed">
            We earn a commission when you use one of our recommended tools to fix an issue. Every tool we recommend has been vetted by our team. You'll never see a recommendation we wouldn't use ourselves.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FixRecommendationsSection;
