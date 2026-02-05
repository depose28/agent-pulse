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
    <section className="py-32 relative section-dark overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-sm font-mono text-dark-muted uppercase tracking-widest mb-4">
            Actionable Fixes
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-display font-serif text-dark-fg mb-6 tracking-tight">
            We don't just diagnose.
            <br />
            We show you how to{" "}
            <span className="font-serif-italic">fix it</span>.
          </h2>
          <p className="text-lg text-dark-muted font-sans">
            Every issue comes with a clear explanation and recommended tools to resolve it.
          </p>
        </motion.div>

        {/* Fix Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-xl p-6 flex flex-col"
            >
              {/* Severity Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2.5 h-2.5 rounded-full ${rec.severityColor}`} />
                <span className="text-xs font-mono text-dark-muted uppercase tracking-wider">
                  {rec.severityLabel} severity
                </span>
              </div>

              {/* Issue */}
              <h3 className="text-lg font-serif text-dark-fg mb-3">
                {rec.issue}
              </h3>

              {/* Impact */}
              <p className="text-sm text-dark-muted font-sans mb-4 flex-1">
                {rec.impact}
              </p>

              {/* Fix */}
              <div className="pt-4 border-t border-dark-border">
                <p className="text-xs font-mono text-dark-muted uppercase tracking-wider mb-2">
                  Recommended Fix
                </p>
                <p className="text-sm text-dark-fg font-sans mb-3">
                  {rec.fix}
                </p>
                <button className="inline-flex items-center gap-1.5 text-sm font-sans text-holo-2 hover:text-holo-1 transition-colors group">
                  Fix This
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FixRecommendationsSection;
