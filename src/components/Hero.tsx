import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Sparkles } from "lucide-react";
import ScoreGauge from "./ScoreGauge";

const Hero = () => {
  const [url, setUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      setIsScanning(true);
      // Mock scanning animation
      setTimeout(() => setIsScanning(false), 2000);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 code-texture" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              AI Commerce Readiness Diagnostic
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Is your store{" "}
            <span className="font-serif italic text-primary">invisible</span>{" "}
            to AI shopping agents?
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Get your AI Commerce Score in 60 seconds. Free.
          </motion.p>

          {/* URL Input Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto mb-6"
          >
            <div className="relative flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter your website URL"
                  className="w-full px-5 py-4 bg-surface border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isScanning}
                className="group relative px-6 py-4 bg-primary text-primary-foreground rounded-xl font-semibold transition-all hover:bg-primary/90 disabled:opacity-70 glow-primary-sm hover:glow-primary flex items-center justify-center gap-2"
              >
                {isScanning ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Scanning...
                  </>
                ) : (
                  <>
                    Get My Score
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </motion.form>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Results in under 2 minutes
            </div>
          </motion.div>

          {/* Score Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            <div className="bg-card border border-border rounded-2xl p-8 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">AI Commerce Score™</p>
                  <p className="text-xs text-muted-foreground font-mono">example-store.com</p>
                </div>
                <ScoreGauge score={73} size={80} />
              </div>
              
              {/* Layer breakdown */}
              <div className="space-y-3">
                {[
                  { name: "FIND", score: 82, color: "bg-score-high" },
                  { name: "TRUST", score: 65, color: "bg-score-medium" },
                  { name: "BUY", score: 71, color: "bg-score-high" },
                ].map((layer) => (
                  <div key={layer.name} className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground w-12">
                      {layer.name}
                    </span>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${layer.score}%` }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className={`h-full ${layer.color} rounded-full`}
                      />
                    </div>
                    <span className="text-xs font-mono text-foreground w-8 text-right">
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
