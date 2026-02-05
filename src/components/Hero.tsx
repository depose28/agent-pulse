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
              Is your store{" "}
              <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-holo-1 via-holo-2 to-holo-3">
                invisible
              </span>{" "}
              to AI?
            </h1>

            <p className="text-lg text-dark-muted mb-10 max-w-lg font-sans">
              AI shopping agents are the new storefront. Find out if they can discover, trust, and buy from your site.
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
                  className="group px-8 py-4 bg-white text-dark-bg rounded-xl font-sans font-semibold text-lg transition-all flex items-center justify-center gap-2 hover:bg-white/90 hover:scale-[1.02] shadow-xl shadow-white/10"
                >
                  {isScanning ? (
                    <>
                      <div className="w-5 h-5 border-2 border-dark-bg/30 border-t-dark-bg rounded-full animate-spin" />
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
            <div className="flex flex-wrap items-center gap-4 text-xs text-dark-muted font-sans">
              <span>✓ No credit card required</span>
              <span>✓ Results in 60 seconds</span>
            </div>
          </motion.div>

          {/* Right: Score Preview Card - The Visual Centerpiece */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="holo-border-dark rounded-2xl p-8 glow-holo">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-dark-border">
                <div>
                  <p className="text-xs font-mono text-dark-muted uppercase tracking-widest mb-1">
                    AI Commerce Score™
                  </p>
                  <p className="text-sm text-dark-fg font-sans">
                    example-store.com
                  </p>
                </div>
                <ScoreGauge score={73} size={90} />
              </div>

              {/* Layer Breakdown */}
              <div className="space-y-5">
                {[
                  { name: "FIND", score: 82, description: "Discoverability" },
                  { name: "TRUST", score: 65, description: "Verification" },
                  { name: "BUY", score: 71, description: "Purchase Ready" },
                ].map((layer, index) => (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-16">
                      <span className="text-xs font-mono text-dark-muted tracking-wider">
                        {layer.name}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-dark-border rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${layer.score}%` }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                          className={`h-full rounded-full ${
                            layer.score >= 70 ? "bg-score-high" : layer.score >= 40 ? "bg-score-medium" : "bg-score-low"
                          }`}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-mono text-dark-fg w-8 text-right">
                      {layer.score}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Issues Preview */}
              <div className="mt-8 pt-6 border-t border-dark-border">
                <p className="text-xs font-mono text-dark-muted uppercase tracking-wider mb-3">
                  Top Issues
                </p>
                <div className="space-y-2">
                  {[
                    "Missing Product schema on 12 pages",
                    "Incomplete Offer markup",
                    "No Review aggregation found",
                  ].map((issue, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-dark-fg/80 font-sans">
                      <div className="w-1.5 h-1.5 rounded-full bg-score-medium" />
                      {issue}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
