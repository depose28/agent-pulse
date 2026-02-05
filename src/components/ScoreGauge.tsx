import { motion } from "framer-motion";

interface ScoreGaugeProps {
  score: number;
  size?: number;
  showLabel?: boolean;
}

const ScoreGauge = ({ score, size = 100, showLabel = true }: ScoreGaugeProps) => {
  const strokeWidth = size * 0.04; // Even thinner for elegance
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  const getScoreColor = (score: number) => {
    if (score < 40) return "hsl(0, 50%, 55%)"; // Muted red
    if (score < 70) return "hsl(38, 80%, 50%)"; // Warm gold
    return "hsl(150, 35%, 40%)"; // Sage green
  };

  const getScoreTextColor = (score: number) => {
    if (score < 40) return "score-low";
    if (score < 70) return "score-medium";
    return "score-high";
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
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
          stroke="hsl(var(--border))"
          strokeWidth={strokeWidth}
          fill="none"
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
