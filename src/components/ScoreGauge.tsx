import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState, useId } from "react";

interface ScoreGaugeProps {
  score: number;
  size?: number;
  showLabel?: boolean;
}

const ScoreGauge = ({ score, size = 100, showLabel = true }: ScoreGaugeProps) => {
  const id = useId();
  const gradientId = `scoreHoloGradient-${id}`;
  const glowId = `scoreGlow-${id}`;
  
  const clampedScore = Math.max(0, Math.min(100, score));
  
  const strokeWidth = size * 0.05;
  const radius = (size - strokeWidth) / 2 - 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (clampedScore / 100) * circumference;
  
  const [displayScore, setDisplayScore] = useState(0);
  const motionScore = useMotionValue(0);

  useEffect(() => {
    const controls = animate(motionScore, clampedScore, {
      duration: 1.8,
      ease: "easeOut",
      delay: 0.6,
      onUpdate: (latest) => {
        setDisplayScore(Math.round(latest));
      },
    });
    return controls.stop;
  }, [clampedScore, motionScore]);

  const center = size / 2;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(280, 75%, 65%)" />
            <stop offset="25%" stopColor="hsl(320, 70%, 68%)" />
            <stop offset="50%" stopColor="hsl(40, 85%, 65%)" />
            <stop offset="75%" stopColor="hsl(155, 50%, 50%)" />
            <stop offset="100%" stopColor="hsl(220, 85%, 70%)" />
          </linearGradient>
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background circle - rotated to start from top */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="hsl(240, 10%, 20%)"
          strokeWidth={strokeWidth}
          fill="none"
          transform={`rotate(-90 ${center} ${center})`}
        />
        
        {/* Progress circle with glow - rotated to start from top */}
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          stroke={`url(#${gradientId})`}
          filter={`url(#${glowId})`}
          transform={`rotate(-90 ${center} ${center})`}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
          style={{
            strokeDasharray: circumference,
          }}
        />

        {/* Centered score text using SVG text element */}
        {showLabel && (
          <motion.text
            x={center}
            y={center}
            textAnchor="middle"
            dominantBaseline="central"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
              fontSize: size * 0.42,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fill: "hsl(var(--dark-fg))",
              fontVariantNumeric: "tabular-nums lining-nums",
            }}
          >
            {displayScore}
          </motion.text>
        )}
      </svg>
    </div>
  );
};

export default ScoreGauge;
