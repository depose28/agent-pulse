import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Users } from "lucide-react";

interface SocialProofCounterProps {
  className?: string;
}

const SocialProofCounter = ({ className = "" }: SocialProofCounterProps) => {
  const [displayCount, setDisplayCount] = useState(0);
  const motionCount = useMotionValue(0);
  const targetCount = 428;

  useEffect(() => {
    const controls = animate(motionCount, targetCount, {
      duration: 1.8,
      ease: "easeOut",
      delay: 1.2,
      onUpdate: (latest) => {
        setDisplayCount(Math.round(latest));
      },
    });
    return controls.stop;
  }, [motionCount]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.4 }}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      {/* Subtle pulsing dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-holo-2/60 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-holo-2" />
      </span>
      
      {/* Counter with label */}
      <span className="text-xs md:text-sm text-dark-muted font-sans">
        <span className="text-dark-fg font-medium tabular-nums">{displayCount.toLocaleString()}+</span>
        {" "}stores already diagnosed
      </span>
    </motion.div>
  );
};

export default SocialProofCounter;
