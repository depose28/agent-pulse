import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Bot, Star, Check, X, AlertTriangle } from "lucide-react";
import trailRunnerImage from "@/assets/trail-runner.png";

const ProblemSection = () => {
  const [viewMode, setViewMode] = useState<"human" | "agent">("human");

  return (
    <section className="py-16 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 max-w-3xl mx-auto"
        >
          <p className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-widest mb-3 md:mb-4">
            The Shift
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-display font-serif text-foreground mb-4 md:mb-6 tracking-tight">
            The way people shop is{" "}
            <span className="font-serif-italic">changing</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-sans px-2">
            What you see isn't what AI sees.
          </p>
        </motion.div>

        {/* Platform Objection Callout - More compact on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-8 md:mb-16"
        >
          <div className="relative p-4 md:p-6 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20">
            <p className="text-base md:text-lg font-serif text-foreground mb-1 md:mb-2">
              "Think your platform handles this?"
            </p>
            <p className="text-muted-foreground font-sans text-xs md:text-sm leading-relaxed">
              Shopify, WooCommerce, and others cover the basics. But your specific product data, review markup, and offer schema? That's where most sites break.
            </p>
          </div>
        </motion.div>

        {/* View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6 md:mb-12"
        >
          <div className="inline-flex p-1 md:p-1.5 rounded-xl md:rounded-2xl bg-secondary border border-border">
            <button
              onClick={() => setViewMode("human")}
              className={`flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-sans font-medium transition-all ${
                viewMode === "human"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <User className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Human
            </button>
            <button
              onClick={() => setViewMode("agent")}
              className={`flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-sans font-medium transition-all ${
                viewMode === "agent"
                  ? "bg-dark-bg text-dark-fg shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Bot className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Agent
            </button>
          </div>
        </motion.div>

        {/* Visual Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {viewMode === "human" ? (
              <motion.div
                key="human"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="human-view rounded-xl md:rounded-2xl p-4 md:p-10 shadow-lg"
              >
                {/* Human view - Compact on mobile */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                  {/* Product Image - Smaller on mobile */}
                  <div className="md:w-1/2">
                    <div className="aspect-square max-h-48 md:max-h-none bg-white rounded-lg md:rounded-xl flex items-center justify-center border border-gray-100 overflow-hidden p-2 md:p-4 mx-auto w-48 md:w-full">
                      <img 
                        src={trailRunnerImage} 
                        alt="Alpine Trail Runner GTX" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Product Info - Condensed on mobile */}
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <div className="mb-1.5 md:mb-2">
                      <span className="text-[10px] md:text-xs font-sans uppercase tracking-wider text-amber-600 bg-amber-50 px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                        Best Seller
                      </span>
                    </div>
                    <h3 className="text-xl md:text-3xl font-serif text-gray-900 mb-1 md:mb-3">
                      Alpine Trail Runner GTX
                    </h3>
                    <p className="text-2xl md:text-4xl font-serif text-gray-900 mb-2 md:mb-4">
                      $189.00
                    </p>
                    <p className="text-gray-600 mb-3 md:mb-6 font-sans text-sm md:text-base leading-relaxed hidden md:block">
                      Premium trail running shoes with GORE-TEX waterproofing, Vibram outsole, and responsive cushioning.
                    </p>
                    
                    {/* Reviews */}
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-6">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-gray-600 text-xs md:text-sm font-sans">
                        4.9 · 2,847 reviews
                      </span>
                    </div>

                    {/* Features - Hidden on mobile */}
                    <div className="hidden md:flex flex-wrap gap-2 mb-8">
                      {["GORE-TEX", "Vibram", "Eco-Friendly"].map((tag) => (
                        <span key={tag} className="text-xs font-sans px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="w-full bg-gray-900 text-white py-3 md:py-4 rounded-lg md:rounded-xl font-sans font-medium text-sm md:text-base hover:bg-gray-800 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="agent"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="agent-view rounded-xl md:rounded-2xl p-4 md:p-10"
              >
                {/* Agent view - Condensed mobile layout */}
                {/* Top Bar - Scan Command */}
                <div className="flex items-center justify-between p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10 mb-4 md:mb-6">
                  <code className="text-xs md:text-sm font-mono text-white/90 truncate">
                    agent.scan(<span className="text-emerald-400">"product"</span>)
                  </code>
                  <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-[10px] md:text-xs font-mono font-medium text-amber-400">PARTIAL</span>
                  </div>
                </div>

                {/* Cards Grid - Stack on mobile */}
                <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                  {/* Card: FOUND - Compact */}
                  <div className="bg-white/5 rounded-lg md:rounded-xl border-l-2 md:border-l-4 border-l-emerald-500/70 border border-white/10 p-3 md:p-6">
                    <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-4">
                      <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400" />
                      <span className="text-[10px] md:text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider">Found</span>
                    </div>
                    <pre className="font-mono text-[10px] md:text-sm leading-relaxed whitespace-pre-wrap break-words">
<span className="text-white/80">"@type"</span><span className="text-white/50">:</span> <span className="text-emerald-300">"Product"</span>
<span className="text-white/80">"name"</span><span className="text-white/50">:</span> <span className="text-emerald-300">"Alpine Trail..."</span>
<span className="text-white/80">"brand"</span><span className="text-white/50">:</span> <span className="text-emerald-300">"SpeedTrail"</span>
                    </pre>
                  </div>

                  {/* Card: MISSING - Compact */}
                  <div className="bg-rose-500/5 rounded-lg md:rounded-xl border-l-2 md:border-l-4 border-l-rose-500/70 border border-rose-500/20 p-3 md:p-6">
                    <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-4">
                      <X className="w-3.5 h-3.5 md:w-4 md:h-4 text-rose-400" />
                      <span className="text-[10px] md:text-xs font-mono font-medium text-rose-400 uppercase tracking-wider">Missing</span>
                    </div>
                    <pre className="font-mono text-[10px] md:text-sm leading-relaxed whitespace-pre-wrap break-words">
<span className="text-rose-300">"price"</span><span className="text-white/50">:</span> <span className="text-rose-400">null</span> <span className="text-amber-400">⚠</span>
<span className="text-rose-300">"availability"</span><span className="text-white/50">:</span> <span className="text-rose-400">null</span>
<span className="text-rose-300">"review"</span><span className="text-white/50">:</span> <span className="text-rose-400">null</span>
                    </pre>
                  </div>
                </div>

                {/* Decision - Inline on mobile */}
                <div className="mt-3 md:mt-6 p-3 md:p-6 bg-gradient-to-r from-rose-500/15 via-rose-500/10 to-transparent rounded-lg md:rounded-xl border border-rose-500/25">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="text-xl md:text-3xl">😞</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm md:text-lg font-sans text-white font-medium">
                        Agent skipped — sent to competitor
                      </p>
                      <p className="text-xs md:text-base font-sans text-white/60 hidden md:block">
                        Missing Offer schema, price markup, and availability signals.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Stats - More compact on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-3 md:gap-6 mt-10 md:mt-20 max-w-4xl mx-auto"
        >
          {[
            { stat: "10×", label: "AI purchase growth by 2027" },
            { stat: "90%", label: "Sites have broken AI markup" },
            { stat: "30%", label: "Higher visibility with schemas" },
          ].map((item, i) => (
            <div
              key={i}
              className="holo-border p-3 md:p-8 text-center"
            >
              <p className="text-2xl md:text-4xl font-serif text-foreground mb-1 md:mb-2">
                {item.stat}
              </p>
              <p className="text-[10px] md:text-sm text-muted-foreground font-sans leading-tight">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
