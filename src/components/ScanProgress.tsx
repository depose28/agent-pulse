import { motion, useMotionValue, animate, AnimatePresence } from "framer-motion";
import { useEffect, useState, useId } from "react";
import ScoreGauge from "./ScoreGauge";

interface ScanPhase {
  id: string;
  label: string;
  messages: string[];
  range: [number, number];
}

const SCAN_PHASES: ScanPhase[] = [
  {
    id: "FIND",
    label: "Find",
    range: [0, 35],
    messages: [
      "Checking if AI agents can actually find you…",
      "Crawling your pages like a very polite robot 🤖",
      "Sniffing out your structured data…",
      "Reading your schema markup… or lack thereof",
      "Hunting for Product, Offer & FAQ schemas…",
      "Seeing if Google's AI Overview even knows you exist…",
    ],
  },
  {
    id: "TRUST",
    label: "Trust",
    range: [35, 68],
    messages: [
      "Evaluating your trust signals…",
      "Counting your reviews (every star matters ⭐)",
      "Checking if agents would swipe right on your brand 💍",
      "Verifying your digital credibility…",
      "Cross-referencing social proof and mentions…",
      "Judging your return policy (don't worry, we won't return you)…",
    ],
  },
  {
    id: "BUY",
    label: "Buy",
    range: [68, 92],
    messages: [
      "Testing your purchase flow for AI compatibility…",
      "Simulating an AI checkout experience 🛒",
      "Checking if an agent can actually add to cart…",
      "Inspecting price clarity and availability signals…",
      "Verifying payment and shipping data exposure…",
    ],
  },
  {
    id: "SCORE",
    label: "Score",
    range: [92, 100],
    messages: [
      "Crunching the final numbers…",
      "Generating your AI Commerce Score™…",
      "Almost there — polishing your results ✨",
    ],
  },
];

const TOTAL_DURATION = 150;
const MESSAGE_INTERVAL = 4500;
const FINAL_SCORE = 73; // Simulated score

interface ScanProgressProps {
  url: string;
  onComplete?: () => void;
}

const ScanProgress = ({ url, onComplete }: ScanProgressProps) => {
  const instanceId = useId();
  const gradientId = `scanGradient-${instanceId}`;
  const glowId = `scanGlow-${instanceId}`;
  const outerGlowId = `scanOuterGlow-${instanceId}`;
  const bgGradientId = `scanBgGradient-${instanceId}`;

  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(SCAN_PHASES[0].messages[0]);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const motionProgress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(motionProgress, 100, {
      duration: TOTAL_DURATION,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => {
        setProgress(Math.min(Math.round(latest), 100));
      },
      onComplete: () => {
        setIsComplete(true);
        // Brief pause then reveal score
        setTimeout(() => {
          setShowScore(true);
          onComplete?.();
        }, 800);
      },
    });
    return controls.stop;
  }, [motionProgress, onComplete]);

  useEffect(() => {
    const phaseIdx = SCAN_PHASES.findIndex(
      (p) => progress >= p.range[0] && progress < p.range[1]
    );
    if (phaseIdx !== -1 && phaseIdx !== currentPhaseIndex) {
      setCurrentPhaseIndex(phaseIdx);
      setMessageIndex(0);
    }
  }, [progress, currentPhaseIndex]);

  useEffect(() => {
    const phase = SCAN_PHASES[currentPhaseIndex];
    setCurrentMessage(phase.messages[messageIndex % phase.messages.length]);

    const timer = setInterval(() => {
      setMessageIndex((prev) => {
        const next = prev + 1;
        setCurrentMessage(phase.messages[next % phase.messages.length]);
        return next;
      });
    }, MESSAGE_INTERVAL);

    return () => clearInterval(timer);
  }, [currentPhaseIndex, messageIndex]);

  // Ring geometry
  const size = 220;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2 - 6;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;
  const center = size / 2;

  // Outer decorative ring
  const outerRadius = radius + 14;
  const outerCircumference = outerRadius * 2 * Math.PI;
  // Thin dashes for the outer ring
  const outerDash = outerCircumference / 60;

  // Time estimate
  const elapsedFraction = progress / 100;
  const remainingSeconds = Math.max(0, Math.round(TOTAL_DURATION * (1 - elapsedFraction)));
  const remainingMin = Math.floor(remainingSeconds / 60);
  const remainingSec = remainingSeconds % 60;

  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      {/* Ring area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-8 md:mb-12"
      >
        {/* Multi-layered glow behind ring */}
        <div className="absolute -inset-12 bg-gradient-to-br from-holo-1/20 via-holo-2/15 to-holo-3/20 rounded-full blur-3xl opacity-50 animate-float" />
        <div
          className="absolute -inset-16 bg-gradient-to-tr from-holo-5/10 via-transparent to-holo-4/10 rounded-full blur-3xl opacity-40 animate-float"
          style={{ animationDelay: "-3s" }}
        />

        <AnimatePresence mode="wait">
          {!showScore ? (
            <motion.div
              key="scanning"
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <svg width={size} height={size} className="relative z-10">
                <defs>
                  {/* Holographic gradient - animated via CSS */}
                  <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(220, 85%, 70%)">
                      <animate attributeName="stop-color" values="hsl(220,85%,70%);hsl(280,75%,72%);hsl(40,80%,70%);hsl(220,85%,70%)" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="33%" stopColor="hsl(280, 75%, 72%)">
                      <animate attributeName="stop-color" values="hsl(280,75%,72%);hsl(320,70%,70%);hsl(180,70%,65%);hsl(280,75%,72%)" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="66%" stopColor="hsl(320, 70%, 70%)">
                      <animate attributeName="stop-color" values="hsl(320,70%,70%);hsl(40,80%,70%);hsl(220,85%,70%);hsl(320,70%,70%)" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="hsl(40, 80%, 70%)">
                      <animate attributeName="stop-color" values="hsl(40,80%,70%);hsl(180,70%,65%);hsl(280,75%,72%);hsl(40,80%,70%)" dur="4s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>

                  {/* Subtle background gradient for outer ticks */}
                  <linearGradient id={bgGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(220, 85%, 70%)" stopOpacity="0.15" />
                    <stop offset="50%" stopColor="hsl(280, 75%, 72%)" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="hsl(40, 80%, 70%)" stopOpacity="0.15" />
                  </linearGradient>

                  {/* Inner glow */}
                  <filter id={glowId}>
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Outer glow - softer */}
                  <filter id={outerGlowId}>
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Outer decorative tick ring */}
                <circle
                  cx={center}
                  cy={center}
                  r={outerRadius}
                  stroke={`url(#${bgGradientId})`}
                  strokeWidth={1}
                  fill="none"
                  strokeDasharray={`${outerDash * 0.6} ${outerDash * 0.4}`}
                  transform={`rotate(-90 ${center} ${center})`}
                />

                {/* Outer progress ticks - holographic */}
                <motion.circle
                  cx={center}
                  cy={center}
                  r={outerRadius}
                  strokeWidth={1.5}
                  fill="none"
                  strokeLinecap="butt"
                  stroke={`url(#${gradientId})`}
                  filter={`url(#${outerGlowId})`}
                  transform={`rotate(-90 ${center} ${center})`}
                  strokeDasharray={`${outerDash * 0.6} ${outerDash * 0.4}`}
                  style={{
                    strokeDashoffset: outerCircumference - (progress / 100) * outerCircumference,
                    transition: "stroke-dashoffset 0.3s ease",
                  }}
                  opacity={0.8}
                />

                {/* Background track */}
                <circle
                  cx={center}
                  cy={center}
                  r={radius}
                  stroke="hsl(240, 10%, 16%)"
                  strokeWidth={strokeWidth}
                  fill="none"
                  transform={`rotate(-90 ${center} ${center})`}
                />

                {/* Main progress arc - holographic with glow */}
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
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: offset,
                  }}
                />

                {/* Center percentage */}
                <motion.text
                  x={center}
                  y={center - 10}
                  textAnchor="middle"
                  dominantBaseline="central"
                  style={{
                    fontSize: 52,
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fill: "hsl(0, 0%, 96%)",
                    fontVariantNumeric: "tabular-nums lining-nums",
                  }}
                >
                  {progress}
                </motion.text>
                <text
                  x={center}
                  y={center + 28}
                  textAnchor="middle"
                  dominantBaseline="central"
                  style={{
                    fontSize: 9,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 400,
                    fill: "hsl(240, 10%, 50%)",
                    letterSpacing: "0.2em",
                  }}
                >
                  {isComplete ? "COMPLETE" : "SCANNING"}
                </text>
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="score"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              {/* Completed score display using ScoreGauge */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-holo-1/25 via-holo-2/15 to-holo-3/25 rounded-full blur-2xl" />
                <ScoreGauge score={FINAL_SCORE} size={200} />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-4"
              >
                <p className="text-[10px] font-mono text-dark-muted uppercase tracking-[0.2em]">
                  AI Commerce Score™
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* URL being scanned */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="font-mono text-sm text-dark-muted mb-6 md:mb-8 truncate max-w-xs md:max-w-md text-center"
      >
        {displayUrl}
      </motion.p>

      {/* Phase indicators */}
      <AnimatePresence>
        {!showScore && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-2 md:gap-3 mb-8 md:mb-10"
          >
            {SCAN_PHASES.map((phase, idx) => {
              const isActive = idx === currentPhaseIndex;
              const isDone = idx < currentPhaseIndex || isComplete;
              return (
                <div key={phase.id} className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${
                        isDone
                          ? "bg-score-high"
                          : isActive
                          ? "bg-holo-2 animate-pulse"
                          : "bg-dark-border"
                      }`}
                    />
                    <span
                      className={`text-[10px] md:text-xs font-mono uppercase tracking-widest transition-colors duration-500 ${
                        isDone
                          ? "text-score-high"
                          : isActive
                          ? "text-dark-fg"
                          : "text-dark-muted/50"
                      }`}
                    >
                      {phase.label}
                    </span>
                  </div>
                  {idx < SCAN_PHASES.length - 1 && (
                    <div
                      className={`w-6 md:w-10 h-px transition-colors duration-500 ${
                        isDone ? "bg-score-high/50" : "bg-dark-border/50"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Status message */}
      <div className="h-12 md:h-14 flex items-center justify-center mb-6 md:mb-8 max-w-md">
        <AnimatePresence mode="wait">
          <motion.p
            key={showScore ? "done" : currentMessage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className={`text-sm md:text-base text-center font-sans leading-relaxed ${
              showScore ? "text-dark-fg" : "text-dark-muted"
            }`}
          >
            {showScore
              ? "Your AI Commerce Score is ready."
              : currentMessage}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Time remaining */}
      {!showScore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-xs font-mono text-dark-muted/60 uppercase tracking-wider">
            {isComplete
              ? "Scan complete!"
              : `~${remainingMin}:${remainingSec.toString().padStart(2, "0")} remaining`}
          </p>
        </motion.div>
      )}

      {/* Tip card */}
      {!showScore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-10 md:mt-16 max-w-sm"
        >
          <div className="holo-border-dark rounded-xl p-4 md:p-5 text-center">
            <p className="text-[10px] font-mono text-dark-muted uppercase tracking-[0.15em] mb-2">
              Did you know?
            </p>
            <p className="text-xs md:text-sm text-dark-fg/80 font-sans leading-relaxed">
              AI-referred traffic to e-commerce sites has grown{" "}
              <span className="text-holo-2 font-medium">4,700% year-over-year</span>.
              By 2030, AI agents will influence{" "}
              <span className="text-holo-4 font-medium">$17.5 trillion</span> in spending.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ScanProgress;
