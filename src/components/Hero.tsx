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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden"
    >
      {/* Subtle topographic pattern */}
      <div className="absolute inset-0 topo-pattern opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Large editorial headline - centered like AMP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-display-lg font-serif text-foreground mb-8 leading-[1.05] tracking-tight">
              <span className="font-serif-italic">Invisible</span>
              <br />
              To AI Shoppers?
            </h1>
          </motion.div>

          {/* Description + CTA row - like AMP's layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-6"
          >
            {/* Left: Description with accent bar */}
            <div className="max-w-md text-center lg:text-left lg:border-l-2 lg:border-border lg:pl-6">
              <p className="text-lg text-foreground mb-2 font-sans">
                AgentPulse scans your e-commerce site for AI readiness.
              </p>
              <p className="text-muted-foreground font-sans">
                Get your AI Commerce Score in 60 seconds. Free.
              </p>
            </div>

            {/* Right: CTA Button - solid dark like AMP */}
            <a
              href="#scan"
              className="inline-flex items-center gap-2 px-7 py-4 btn-primary rounded-lg text-base font-sans group"
            >
              Get Started for Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* URL Input Section */}
          <motion.div
            id="scan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto mt-20"
          >
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter your website URL"
                    className="w-full px-5 py-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all font-sans text-base"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isScanning}
                  className="group px-6 py-4 btn-primary rounded-lg font-sans font-medium transition-all flex items-center justify-center gap-2"
                >
                  {isScanning ? (
                    <>
                      <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
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
            </form>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground mt-4">
              <span>No credit card required</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Results in under 2 minutes</span>
            </div>
          </motion.div>

          {/* Score Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20 max-w-md mx-auto"
          >
            <div className="card-elevated p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="text-left">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-widest font-sans">
                    AI Commerce Score™
                  </p>
                  <p className="text-xs text-muted-foreground/60 font-mono">
                    example-store.com
                  </p>
                </div>
                <ScoreGauge score={73} size={72} />
              </div>

              {/* Layer breakdown */}
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
                    <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
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
