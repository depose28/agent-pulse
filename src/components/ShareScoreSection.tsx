import { motion } from "framer-motion";
import ScoreGauge from "./ScoreGauge";

const ShareScoreSection = () => {
  return (
    <section className="py-12 md:py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left order-2 md:order-1"
            >
              <p className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-widest mb-2 md:mb-4">
                Share Your Score
              </p>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-serif text-foreground mb-3 md:mb-4 tracking-tight">
                Show the world you're{" "}
                <span className="font-serif-italic">AI-ready</span>.
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground font-sans">
                Get a shareable badge for your website and social profiles.
              </p>
            </motion.div>

            {/* Right: Badge Mockup - Smaller on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center order-1 md:order-2"
            >
              <div className="relative scale-90 md:scale-100">
                {/* Subtle glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-holo-1/10 via-holo-2/5 to-holo-3/10 rounded-2xl blur-xl opacity-60" />
                
                {/* Badge Card */}
                <div className="relative bg-dark-bg border border-dark-border rounded-xl p-4 md:p-6 min-w-[240px] md:min-w-[280px]">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-md holo-button flex items-center justify-center">
                        <span className="text-[8px] md:text-[10px] font-serif font-semibold text-dark-fg">A</span>
                      </div>
                      <span className="text-xs md:text-sm font-serif text-dark-fg">
                        Agent<span className="font-serif-italic">Pulse</span>
                      </span>
                    </div>
                    <span className="text-[8px] md:text-[10px] font-mono text-dark-muted uppercase tracking-wider">
                      Verified
                    </span>
                  </div>

                  {/* Score Display */}
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div>
                      <p className="text-[8px] md:text-[10px] font-mono text-dark-muted uppercase tracking-wider mb-1">
                        AI Commerce Score
                      </p>
                      <p className="text-2xl md:text-3xl font-serif text-dark-fg">
                        73<span className="text-sm md:text-lg text-dark-muted">/100</span>
                      </p>
                    </div>
                    <ScoreGauge score={73} size={50} />
                  </div>

                  {/* Footer */}
                  <div className="pt-3 md:pt-4 border-t border-dark-border">
                    <p className="text-[10px] md:text-xs text-dark-muted font-sans text-center">
                      Scan yours → <span className="text-holo-2">agentpulse.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareScoreSection;
