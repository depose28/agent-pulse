import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Store } from "lucide-react";

const SocialProofBar = () => {
  const [displayCount, setDisplayCount] = useState(0);
  const motionCount = useMotionValue(0);
  const targetCount = 428;

  useEffect(() => {
    const controls = animate(motionCount, targetCount, {
      duration: 2,
      ease: "easeOut",
      delay: 0.3,
      onUpdate: (latest) => {
        setDisplayCount(Math.round(latest));
      },
    });
    return controls.stop;
  }, [motionCount]);

  return (
    <section className="section-dark relative border-t border-dark-border/50">
      <div className="container mx-auto px-4 md:px-6 py-5 md:py-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 md:gap-4"
        >
          {/* Icon with holographic accent */}
          <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-holo-1/20 via-holo-2/15 to-holo-3/20 border border-holo-2/30">
            <Store className="w-4 h-4 md:w-5 md:h-5 text-holo-2" />
          </div>

          {/* Counter and label */}
          <div className="flex items-baseline gap-2">
            <motion.span
              className="text-2xl md:text-3xl font-serif text-dark-fg tabular-nums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {displayCount.toLocaleString()}
            </motion.span>
            <span className="text-sm md:text-base text-dark-muted font-sans">
              stores diagnosed
            </span>
          </div>

          {/* Decorative dot separator */}
          <span className="hidden md:block w-1 h-1 rounded-full bg-dark-border" />

          {/* Additional context - desktop only */}
          <span className="hidden md:block text-xs text-dark-muted/70 font-mono uppercase tracking-wider">
            and counting
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofBar;
