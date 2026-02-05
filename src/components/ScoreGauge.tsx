import { motion } from "framer-motion";

interface ScoreGaugeProps {
  score: number;
  size?: number;
  showLabel?: boolean;
}

const ScoreGauge = ({ score, size = 100, showLabel = true }: ScoreGaugeProps) => {
  const strokeWidth = size * 0.06;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* SVG Gradient Definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="scoreHoloGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(220, 85%, 70%)" />
            <stop offset="25%" stopColor="hsl(280, 75%, 72%)" />
            <stop offset="50%" stopColor="hsl(320, 70%, 70%)" />
            <stop offset="75%" stopColor="hsl(40, 80%, 70%)" />
            <stop offset="100%" stopColor="hsl(180, 70%, 65%)" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle with holographic effect */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#scoreHoloGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeOpacity={0.2}
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          stroke="url(#scoreHoloGradient)"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          style={{
            strokeDasharray: circumference,
          }}
        />
      </svg>
      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="font-serif text-dark-fg"
            style={{ fontSize: size * 0.35 }}
          >
            {score}
          </motion.span>
        </div>
      )}
    </div>
  );
};

export default ScoreGauge;
