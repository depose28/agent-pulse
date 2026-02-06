import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface ScoreGaugeProps {
  score: number;
  size?: number;
  showLabel?: boolean;
}

const ScoreGauge = ({ score, size = 100, showLabel = true }: ScoreGaugeProps) => {
  const strokeWidth = size * 0.05;
  const radius = (size - strokeWidth) / 2 - 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;
  
  const [displayScore, setDisplayScore] = useState(0);
  const motionScore = useMotionValue(0);

  useEffect(() => {
    const controls = animate(motionScore, score, {
      duration: 1.8,
      ease: "easeOut",
      delay: 0.6,
      onUpdate: (latest) => {
        setDisplayScore(Math.round(latest));
      },
    });
    return controls.stop;
  }, [score, motionScore]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* SVG Gradient Definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="scoreHoloGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(280, 75%, 65%)" />
            <stop offset="25%" stopColor="hsl(320, 70%, 68%)" />
            <stop offset="50%" stopColor="hsl(40, 85%, 65%)" />
            <stop offset="75%" stopColor="hsl(155, 50%, 50%)" />
            <stop offset="100%" stopColor="hsl(220, 85%, 70%)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(240, 10%, 20%)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle with glow */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          stroke="url(#scoreHoloGradient)"
          filter="url(#glow)"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
          style={{
            strokeDasharray: circumference,
          }}
        />
      </svg>
      {showLabel && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span
            className="font-serif text-dark-fg tabular-nums text-center"
            style={{ 
              fontSize: size * 0.42,
              lineHeight: 1,
              fontWeight: 600,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {displayScore}
          </span>
        </motion.div>
      )}
    </div>
  );
};

export default ScoreGauge;
