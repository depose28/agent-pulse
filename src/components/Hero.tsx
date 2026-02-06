import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScoreGauge from "./ScoreGauge";
import SocialProofCounter from "./SocialProofCounter";

const Hero = () => {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      navigate(`/scan?url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen lg:min-h-screen section-dark overflow-hidden"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Holographic glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-holo-1/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-holo-2/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 md:pt-32 pb-12 md:pb-24">
        {/* Mobile: Stack vertically with CTA first, card as social proof below */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:min-h-[80vh]">
          
          {/* Content - Always first on mobile for conversion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left order-1"
          >
            {/* Badge - Smaller on mobile */}
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-dark-border bg-dark-card/50 backdrop-blur-sm mb-4 md:mb-8">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-holo-2 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono text-dark-muted uppercase tracking-wider">
                AI Commerce Diagnostic
              </span>
            </div>

            {/* Headline - Punchy on mobile */}
            <h1 className="text-3xl sm:text-4xl lg:text-display-xl font-serif text-dark-fg mb-4 md:mb-6 leading-[1.1]">
              Is your site{" "}
              <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-holo-1 via-holo-2 to-holo-3">
                invisible
              </span>{" "}
              to AI?
            </h1>

            <p className="text-base md:text-lg text-dark-muted mb-6 md:mb-10 max-w-lg mx-auto lg:mx-0 font-sans">
              We scanned 500 e-commerce sites. The average score was 34. What's yours?
            </p>

            {/* URL Input - High priority CTA */}
            <form onSubmit={handleSubmit} className="mb-4 md:mb-6">
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <div className="relative flex-1">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter your website URL"
                    className="w-full px-4 md:px-5 py-3.5 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all font-sans text-base md:text-lg"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group px-6 md:px-8 py-3.5 md:py-4 holo-cta rounded-xl font-sans text-base md:text-lg font-medium transition-all flex items-center justify-center gap-2"
                >
                  <span>Get Your Score</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>

            {/* Social proof + Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-6 mb-4 md:mb-6">
              <SocialProofCounter />
              <span className="hidden sm:block w-px h-4 bg-dark-border" />
              <div className="flex items-center gap-3 md:gap-4 text-[11px] md:text-xs text-dark-muted font-sans">
                <span>✓ No credit card</span>
                <span>✓ Results in 2 min</span>
              </div>
            </div>

            {/* Works with bar - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block">
              <p className="text-xs text-dark-muted/60 font-sans">
                Works with: <span className="text-dark-muted/80">Shopify · WooCommerce · Magento · Squarespace · BigCommerce</span>
              </p>
            </div>
          </motion.div>

          {/* Score Preview Card - Compact on mobile, social proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-sm lg:max-w-none mx-auto order-2"
          >
            {/* Subtle glow behind card */}
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-holo-1/20 via-holo-2/10 to-holo-3/20 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-50" />
            
            <div className="relative holo-border-dark rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 glow-holo backdrop-blur-sm">
              {/* Card Header - Compact */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center justify-between mb-4 md:mb-10"
              >
                <div>
                  <p className="text-[9px] md:text-[10px] font-mono text-dark-muted uppercase tracking-[0.15em] md:tracking-[0.2em] mb-1 md:mb-2">
                    AI Commerce Score™
                  </p>
                  <p className="text-sm md:text-lg text-dark-fg font-sans font-medium">
                    example-site.com
                  </p>
                </div>
                <ScoreGauge score={73} size={70} />
              </motion.div>

              {/* Layer Breakdown - Compact on mobile */}
              <div className="space-y-3 md:space-y-6">
                {[
                  { name: "FIND", score: 82, color: "bg-score-high" },
                  { name: "TRUST", score: 65, color: "bg-score-medium" },
                  { name: "BUY", score: 71, color: "bg-score-high" },
                ].map((layer, index) => (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 md:gap-5"
                  >
                    <div className="w-10 md:w-14 shrink-0">
                      <span className="text-[10px] md:text-xs font-mono text-dark-muted tracking-widest">
                        {layer.name}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 md:h-2.5 bg-dark-border/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${layer.score}%` }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                          className={`h-full rounded-full ${layer.color}`}
                        />
                      </div>
                    </div>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                      className="text-sm md:text-base font-mono text-dark-fg w-6 md:w-8 text-right tabular-nums"
                    >
                      {layer.score}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Issues Preview - Hidden on mobile, shown on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="hidden md:block"
              >
                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-dark-border to-transparent my-6 md:my-8" />
                
                <p className="text-[10px] font-mono text-dark-muted uppercase tracking-[0.2em] mb-3 md:mb-4">
                  Top Issues
                </p>
                <div className="space-y-2 md:space-y-3">
                  {[
                    "Missing Product schema on 12 pages",
                    "Incomplete Offer markup",
                    "No Review aggregation found",
                  ].map((issue, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 + i * 0.08, duration: 0.3 }}
                      className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-dark-fg/80 font-sans"
                    >
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-score-medium shrink-0" />
                      {issue}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Mobile-only: Quick summary instead of full issues list */}
              <div className="md:hidden mt-4 pt-4 border-t border-dark-border/50">
                <p className="text-[10px] font-mono text-dark-muted text-center">
                  3 issues found · <span className="text-holo-2">See your full report →</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
