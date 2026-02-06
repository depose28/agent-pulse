import { motion } from "framer-motion";
import { ArrowRight, Lock, Check, ExternalLink } from "lucide-react";
import ScoreGauge from "./ScoreGauge";
import { Link } from "react-router-dom";

interface Issue {
  name: string;
  severity: "high" | "medium" | "low";
  impact: string;
  fix?: string;
  toolName?: string;
  toolUrl?: string;
  codeSnippet?: string;
  platformInstructions?: string;
}

interface LayerScore {
  name: string;
  score: number;
  label: string;
}

interface ResultsData {
  overallScore: number;
  url: string;
  totalIssues: number;
  weakestLayer: string;
  layers: LayerScore[];
  issues: Issue[];
}

interface ResultsDisplayProps {
  tier: "free" | "paid";
  data: ResultsData;
  onUpgrade?: () => void;
}

const SEVERITY_CONFIG = {
  high: { label: "High", colorClass: "bg-score-low", textClass: "text-score-low", borderClass: "border-score-low/30" },
  medium: { label: "Medium", colorClass: "bg-score-medium", textClass: "text-score-medium", borderClass: "border-score-medium/30" },
  low: { label: "Low", colorClass: "bg-score-high", textClass: "text-score-high", borderClass: "border-score-high/30" },
};

const getScoreColor = (score: number) => {
  if (score >= 70) return "bg-score-high";
  if (score >= 40) return "bg-score-medium";
  return "bg-score-low";
};

const ResultsDisplay = ({ tier, data, onUpgrade }: ResultsDisplayProps) => {
  const visibleIssues = tier === "free" ? data.issues.slice(0, 3) : data.issues;
  const hiddenIssueCount = data.totalIssues - 3;
  const displayUrl = data.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Score Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-[10px] md:text-xs font-mono text-dark-muted uppercase tracking-[0.2em] mb-2">
          AI Commerce Score™
        </p>
        <p className="text-sm md:text-base font-mono text-dark-muted mb-6">
          {displayUrl}
        </p>

        {/* Score Ring */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-holo-1/20 via-holo-2/15 to-holo-3/20 rounded-full blur-2xl opacity-60" />
            <ScoreGauge score={data.overallScore} size={180} />
          </div>
        </div>

        {/* Summary Text */}
        <p className="text-sm md:text-base text-dark-muted font-sans max-w-lg mx-auto leading-relaxed">
          We found <span className="text-dark-fg font-medium">{data.totalIssues} issues</span> across your site.
          Your biggest gaps are in <span className="text-dark-fg font-medium">{data.weakestLayer}</span>.
        </p>
      </motion.div>

      {/* Layer Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-lg mx-auto"
      >
        <p className="text-[10px] md:text-xs font-mono text-dark-muted uppercase tracking-[0.2em] mb-4 md:mb-6 text-center">
          Layer Breakdown
        </p>
        <div className="space-y-4 md:space-y-5">
          {data.layers.map((layer, index) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              className="flex items-center gap-4 md:gap-5"
            >
              <div className="w-14 shrink-0">
                <span className="text-xs font-mono text-dark-muted tracking-widest">
                  {layer.name}
                </span>
              </div>
              <div className="flex-1">
                <div className="h-2.5 bg-dark-border/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${layer.score}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-full ${getScoreColor(layer.score)}`}
                  />
                </div>
              </div>
              <span className="text-sm md:text-base font-mono text-dark-fg w-8 text-right tabular-nums">
                {layer.score}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      {/* Top Issues */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <p className="text-[10px] md:text-xs font-mono text-dark-muted uppercase tracking-[0.2em]">
            {tier === "free" ? "Top 3 Priority Issues" : `All ${data.totalIssues} Issues`}
          </p>
          {tier === "paid" && (
            <p className="text-[10px] md:text-xs text-dark-muted font-sans">
              Some recommendations contain affiliate links.{" "}
              <Link to="/privacy" className="text-holo-2 hover:text-holo-1 transition-colors underline underline-offset-2">
                Learn more
              </Link>
            </p>
          )}
        </div>

        <div className="space-y-4">
          {visibleIssues.map((issue, index) => {
            const severity = SEVERITY_CONFIG[issue.severity];
            const showAffiliate = tier === "free" ? index === 0 : !!issue.toolUrl;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                className="holo-border-dark rounded-xl p-4 md:p-6"
              >
                <div className="flex items-start justify-between gap-4 mb-2 md:mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`px-2 py-0.5 rounded text-[10px] md:text-xs font-mono uppercase tracking-wider ${severity.colorClass}/15 ${severity.textClass} border ${severity.borderClass}`}>
                      {severity.label}
                    </div>
                  </div>
                </div>

                <h4 className="text-sm md:text-base font-serif text-dark-fg mb-1.5 md:mb-2">
                  {issue.name}
                </h4>
                <p className="text-xs md:text-sm text-dark-muted font-sans mb-3 md:mb-4">
                  {issue.impact}
                </p>

                {/* Code snippet (paid only) */}
                {tier === "paid" && issue.codeSnippet && (
                  <div className="mb-3 md:mb-4 rounded-lg bg-dark-bg border border-dark-border p-3 md:p-4 overflow-x-auto">
                    <pre className="text-[10px] md:text-xs font-mono text-dark-fg/80 whitespace-pre">
                      {issue.codeSnippet}
                    </pre>
                  </div>
                )}

                {/* Platform instructions (paid only) */}
                {tier === "paid" && issue.platformInstructions && (
                  <p className="text-xs text-dark-muted font-sans mb-3 italic">
                    {issue.platformInstructions}
                  </p>
                )}

                {/* Fix link */}
                {showAffiliate && issue.toolUrl && (
                  <div className="flex items-center gap-2 pt-3 border-t border-dark-border/50">
                    <a
                      href={issue.toolUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs md:text-sm font-sans text-holo-2 hover:text-holo-1 transition-colors group"
                    >
                      Fix This
                      <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <span className="text-[9px] md:text-[10px] font-mono text-dark-muted/60 uppercase tracking-wider px-1.5 py-0.5 rounded border border-dark-border/50">
                      Affiliate
                    </span>
                  </div>
                )}

                {/* Paid fix text without affiliate */}
                {tier === "paid" && issue.fix && !issue.toolUrl && (
                  <div className="pt-3 border-t border-dark-border/50">
                    <p className="text-[10px] md:text-xs font-mono text-dark-muted uppercase tracking-wider mb-1">Fix</p>
                    <p className="text-xs md:text-sm text-dark-fg font-sans">{issue.fix}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Shareable Score Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-dark-border to-transparent mb-8 md:mb-12" />

        <div className="text-center mb-6">
          <p className="text-[10px] md:text-xs font-mono text-dark-muted uppercase tracking-[0.2em] mb-2">
            Share Your Score
          </p>
          <p className="text-sm md:text-base text-dark-muted font-sans">
            Show the world you're taking AI commerce seriously.
          </p>
        </div>

        {/* Badge Preview */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-holo-1/10 via-holo-2/5 to-holo-3/10 rounded-2xl blur-xl opacity-60" />
            <div className="relative bg-dark-bg border border-dark-border rounded-xl p-4 md:p-5 min-w-[220px] md:min-w-[260px]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md holo-button flex items-center justify-center">
                    <span className="text-[8px] font-serif font-semibold text-dark-fg">A</span>
                  </div>
                  <span className="text-xs font-serif text-dark-fg">
                    Agent<span className="font-serif-italic">Pulse</span>
                  </span>
                </div>
                <span className="text-[8px] font-mono text-dark-muted uppercase tracking-wider">Verified</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-[8px] font-mono text-dark-muted uppercase tracking-wider mb-1">AI Commerce Score</p>
                  <p className="text-2xl font-serif text-dark-fg">{data.overallScore}<span className="text-sm text-dark-muted">/100</span></p>
                </div>
                <ScoreGauge score={data.overallScore} size={44} />
              </div>
              <div className="pt-3 border-t border-dark-border">
                <p className="text-[9px] text-dark-muted font-sans text-center">
                  Scan yours → <span className="text-holo-2">agentpulse.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center justify-center gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg holo-button text-sm font-sans text-dark-fg">
            <ExternalLink className="w-3.5 h-3.5" />
            Share on LinkedIn
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg holo-button text-sm font-sans text-dark-fg">
            <ExternalLink className="w-3.5 h-3.5" />
            Share on X
          </button>
        </div>

        {/* Embed Code */}
        <div className="mt-4 max-w-sm mx-auto">
          <p className="text-[10px] font-mono text-dark-muted uppercase tracking-wider mb-2 text-center">Embed Code</p>
          <div className="bg-dark-bg border border-dark-border rounded-lg p-3">
            <code className="text-[10px] md:text-xs font-mono text-dark-muted break-all">
              {`<a href="https://agentpulse.com"><img src="https://agentpulse.com/badge/${data.overallScore}" alt="AI Commerce Score: ${data.overallScore}/100" /></a>`}
            </code>
          </div>
        </div>
      </motion.div>

      {/* Upgrade Wall (free tier only) */}
      {tier === "free" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="relative mt-12 md:mt-16"
        >
          {/* Blurred preview of hidden issues */}
          <div className="relative">
            <div className="space-y-4 blur-sm select-none pointer-events-none" aria-hidden="true">
              {data.issues.slice(3, 6).map((issue, index) => {
                const severity = SEVERITY_CONFIG[issue.severity];
                return (
                  <div key={index} className="holo-border-dark rounded-xl p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${severity.colorClass}/15 ${severity.textClass}`}>
                        {severity.label}
                      </div>
                    </div>
                    <h4 className="text-sm font-serif text-dark-fg mb-1.5">{issue.name}</h4>
                    <p className="text-xs text-dark-muted font-sans">{issue.impact}</p>
                  </div>
                );
              })}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/95 to-dark-bg/60 flex items-center justify-center">
              <div className="text-center px-4 max-w-md">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-dark-card border border-dark-border mb-4">
                  <Lock className="w-5 h-5 text-dark-muted" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-dark-fg mb-3 tracking-tight">
                  You have {hiddenIssueCount} more issues to fix.
                  <br />
                  <span className="font-serif-italic">Get the full report.</span>
                </h3>

                <ul className="text-left space-y-2 mb-6 max-w-xs mx-auto">
                  {[
                    `All ${data.totalIssues} issues identified (not just top 3)`,
                    "Implementation guidance with code snippets",
                    "Platform-specific fix instructions (Shopify, WooCommerce, etc.)",
                    "Recommended tools for each issue",
                    "Competitor benchmark — scan 1 competitor & compare",
                    "PDF export of your complete report",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-dark-fg/80 font-sans">
                      <Check className="w-3.5 h-3.5 text-score-high mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onUpgrade}
                  className="w-full max-w-xs holo-cta px-8 py-4 rounded-xl font-sans text-base md:text-lg font-medium transition-all flex items-center justify-center gap-2 mb-3"
                >
                  Unlock Full Report — $49
                </button>
                <p className="text-xs text-dark-muted font-sans">
                  One-time payment. No subscription. Instant access.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Paid tier success banner */}
      {tier === "paid" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="holo-border-dark rounded-xl p-4 md:p-6 text-center"
        >
          <p className="text-sm md:text-base font-sans text-dark-fg">
            ✅ Your full report is unlocked. We've also sent a PDF to your email.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ResultsDisplay;
