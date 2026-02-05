import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScoreGauge from "./ScoreGauge";

const Hero = () => {
  const [url, setUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      setIsScanning(true);
      setTimeout(() => setIsScanning(false), 2000);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen section-dark overflow-hidden"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Holographic glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-holo-1/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-holo-2/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-border bg-dark-card/50 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-holo-2 animate-pulse" />
              <span className="text-xs font-mono text-dark-muted uppercase tracking-wider">
                AI Commerce Diagnostic
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-display-xl font-serif text-dark-fg mb-6 leading-[1.05]">
              Is your site{" "}
              <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-holo-1 via-holo-2 to-holo-3">
                invisible
              </span>{" "}
              to AI?
            </h1>

            <p className="text-lg text-dark-muted mb-10 max-w-lg font-sans">
              We scanned 500 e-commerce sites. The average score was 34. What's yours?
            </p>

            {/* URL Input */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter your website URL"
                    className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all font-sans text-lg"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isScanning}
                  className="group px-8 py-4 holo-cta rounded-xl font-sans text-lg transition-all flex items-center justify-center gap-2"
                >
                  {isScanning ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Scanning...</span>
                    </>
                  ) : (
                    <>
                      <span>Get My Score</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-dark-muted font-sans mb-6">
              <span>✓ No credit card required</span>
              <span>✓ Results in under 2 minutes</span>
            </div>

            {/* Works with bar */}
            <div className="mb-8">
              <p className="text-xs text-dark-muted/60 mb-2 font-sans">
                Works with any platform: <span className="text-dark-muted/80">Shopify · WooCommerce · Magento · Squarespace · BigCommerce · Custom builds</span>
              </p>
            </div>

          </motion.div>

          {/* Right: Score Preview Card - The Visual Centerpiece */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Subtle glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-br from-holo-1/20 via-holo-2/10 to-holo-3/20 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative holo-border-dark rounded-2xl p-8 lg:p-10 glow-holo backdrop-blur-sm">
              {/* Card Header */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-start justify-between mb-10"
              >
                <div>
                  <p className="text-[10px] font-mono text-dark-muted uppercase tracking-[0.2em] mb-2">
                    AI Commerce Score™
                  </p>
                  <p className="text-lg text-dark-fg font-sans font-medium">
                    example-site.com
                  </p>
                </div>
                <ScoreGauge score={73} size={110} />
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-dark-border to-transparent mb-8" />

              {/* Layer Breakdown */}
              <div className="space-y-6">
                {[
                  { name: "FIND", score: 82, color: "bg-score-high" },
                  { name: "TRUST", score: 65, color: "bg-score-medium" },
                  { name: "BUY", score: 71, color: "bg-score-high" },
                ].map((layer, index) => (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
                    className="flex items-center gap-5"
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
                          transition={{ delay: 1 + index * 0.15, duration: 1, ease: "easeOut" }}
                          className={`h-full rounded-full ${layer.color}`}
                        />
                      </div>
                    </div>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.15, duration: 0.4 }}
                      className="text-base font-mono text-dark-fg w-8 text-right tabular-nums"
                    >
                      {layer.score}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-dark-border to-transparent my-8" />

              {/* Issues Preview */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <p className="text-[10px] font-mono text-dark-muted uppercase tracking-[0.2em] mb-4">
                  Top Issues
                </p>
                <div className="space-y-3">
                  {[
                    "Missing Product schema on 12 pages",
                    "Incomplete Offer markup",
                    "No Review aggregation found",
                  ].map((issue, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 text-sm text-dark-fg/80 font-sans"
                    >
                      <div className="w-2 h-2 rounded-full bg-score-medium shrink-0" />
                      {issue}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
