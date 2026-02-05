import { motion } from "framer-motion";

interface ScoreGaugeProps {
  score: number;
  size?: number;
  showLabel?: boolean;
}

const ScoreGauge = ({ score, size = 100, showLabel = true }: ScoreGaugeProps) => {
  const strokeWidth = size * 0.06; // Thinner stroke
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  const getScoreColor = (score: number) => {
    if (score < 40) return "#b45454"; // Muted red
    if (score < 70) return "#c9923a"; // Warm gold
    return "#5a9a6e"; // Sage green
  };

  const getScoreTextColor = (score: number) => {
    if (score < 40) return "score-low";
    if (score < 70) return "score-medium";
    return "score-high";
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* SVG Gradient Definition */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="holoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 80%, 70%)" stopOpacity="0.8" />
            <stop offset="25%" stopColor="hsl(270, 60%, 75%)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(320, 50%, 70%)" stopOpacity="0.5" />
            <stop offset="75%" stopColor="hsl(40, 60%, 70%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(210, 80%, 70%)" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle with holographic gradient */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#holoGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeOpacity={0.15}
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          stroke={getScoreColor(score)}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
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
            transition={{ delay: 0.5, duration: 0.5 }}
            className={`font-serif font-normal ${getScoreTextColor(score)}`}
            style={{ fontSize: size * 0.32 }}
          >
            {score}
          </motion.span>
        </div>
      )}
    </div>
  );
};

export default ScoreGauge;