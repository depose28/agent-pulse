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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 code-texture" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 mb-10"
          >
            <span className="text-xs tracking-wide text-muted-foreground uppercase">
              AI Commerce Readiness Diagnostic
            </span>
          </motion.div>

          {/* Headline - Large and commanding */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-8 leading-[1.1] tracking-tight"
          >
            Is your store{" "}
            <span className="font-serif-italic">invisible</span>{" "}
            to AI shopping agents?
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto font-sans"
          >
            Get your AI Commerce Score in 60 seconds. Free.
          </motion.p>

          {/* URL Input Form - Refined */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto mb-8"
          >
            <div className="relative flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 holo-border rounded-lg">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter your website URL"
                  className="w-full px-5 py-4 bg-card rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-all font-sans text-base"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isScanning}
                className="group relative px-6 py-4 holo-button rounded-lg font-sans font-medium text-foreground transition-all flex items-center justify-center gap-2"
              >
                {isScanning ? (
                  <>
                    <div className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                    <span>Scanning...</span>
                  </>
                ) : (
                  <>
                    <span>Get My Score</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </motion.form>

          {/* Trust indicators - Smaller and more muted */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground/70"
          >
            <span>No credit card required</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <span>Results in under 2 minutes</span>
          </motion.div>

          {/* Score Preview - Premium card with holographic border */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            <div className="holo-border rounded-xl p-8 max-w-md mx-auto bg-card glow-subtle">
              <div className="flex items-center justify-between mb-8">
                <div className="text-left">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">AI Commerce Score™</p>
                  <p className="text-xs text-muted-foreground/60 font-mono">example-store.com</p>
                </div>
                <ScoreGauge score={73} size={72} />
              </div>
              
              {/* Layer breakdown - Thinner progress bars */}
              <div className="space-y-4">
                {[
                  { name: "FIND", score: 82, color: "bg-score-high" },
                  { name: "TRUST", score: 65, color: "bg-score-medium" },
                  { name: "BUY", score: 71, color: "bg-score-high" },
                ].map((layer) => (
                  <div key={layer.name} className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-muted-foreground w-12 tracking-wider">
                      {layer.name}
                    </span>
                    <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${layer.score}%` }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className={`h-full ${layer.color} rounded-full`}
                      />
                    </div>
                    <span className="text-xs font-mono text-foreground/80 w-8 text-right">
                      {layer.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;