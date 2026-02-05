import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Bot, Star, Check, X, AlertTriangle } from "lucide-react";
import trailRunnerImage from "@/assets/trail-runner.png";

const ProblemSection = () => {
  const [viewMode, setViewMode] = useState<"human" | "agent">("human");

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">
            The Shift
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-display font-serif text-foreground mb-6 tracking-tight">
            The way people shop is{" "}
            <span className="font-serif-italic">changing</span>
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            What you see isn't what AI sees. The gap between human experience and machine readability determines your visibility in the AI commerce era.
          </p>
        </motion.div>

        {/* View Toggle - Premium styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 rounded-2xl bg-secondary border border-border">
            <button
              onClick={() => setViewMode("human")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-sans font-medium transition-all ${
                viewMode === "human"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <User className="w-4 h-4" />
              Human View
            </button>
            <button
              onClick={() => setViewMode("agent")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-sans font-medium transition-all ${
                viewMode === "agent"
                  ? "bg-dark-bg text-dark-fg shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Bot className="w-4 h-4" />
              Agent View
            </button>
          </div>
        </motion.div>

        {/* Visual Comparison - DRAMATIC CONTRAST */}
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
                className="human-view rounded-2xl p-10 shadow-lg"
              >
                {/* Human view - Warm, beautiful e-commerce experience */}
                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Product Image */}
                  <div className="lg:w-1/2">
                    <div className="aspect-square bg-white rounded-xl flex items-center justify-center border border-gray-100 overflow-hidden p-4">
                      <img 
                        src={trailRunnerImage} 
                        alt="Alpine Trail Runner GTX" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="mb-2">
                      <span className="text-xs font-sans uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                        Best Seller
                      </span>
                    </div>
                    <h3 className="text-3xl font-serif text-gray-900 mb-3">
                      Alpine Trail Runner GTX
                    </h3>
                    <p className="text-4xl font-serif text-gray-900 mb-4">
                      $189.00
                    </p>
                    <p className="text-gray-600 mb-6 font-sans leading-relaxed">
                      Premium trail running shoes with GORE-TEX waterproofing, Vibram outsole, and responsive cushioning. Built for serious runners who demand performance in any condition.
                    </p>
                    
                    {/* Reviews */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm font-sans">
                        4.9 · 2,847 reviews
                      </span>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {["GORE-TEX", "Vibram", "Eco-Friendly"].map((tag) => (
                        <span key={tag} className="text-xs font-sans px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-sans font-medium hover:bg-gray-800 transition-colors">
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
                className="agent-view rounded-2xl p-6 md:p-10"
              >
                {/* Agent view - Cold, technical, data-driven */}
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left Column - Found & Missing stacked */}
                  <div className="lg:w-1/2 space-y-6">
                    {/* Top Bar - Scan Command */}
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🛒</span>
                        <code className="text-sm font-mono text-white/90">
                          agent.scan(<span className="text-emerald-400">"alpine-trail-runner"</span>)
                        </code>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-xs font-mono font-medium text-amber-400 tracking-wide">PARTIAL DATA</span>
                      </div>
                    </div>

                    {/* Card 1: FOUND */}
                    <div className="bg-white/5 rounded-xl border-l-4 border-l-emerald-500/70 border border-white/10 p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider">Found</span>
                      </div>
                      <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap break-words">
<span className="text-white/50">{"{"}</span>
{`  `}<span className="text-white/80">"@type"</span><span className="text-white/50">:</span> <span className="text-emerald-300">"Product"</span><span className="text-white/50">,</span>
{`  `}<span className="text-white/80">"name"</span><span className="text-white/50">:</span> <span className="text-emerald-300">"Alpine Trail Runner GTX"</span><span className="text-white/50">,</span>
{`  `}<span className="text-white/80">"image"</span><span className="text-white/50">:</span> <span className="text-emerald-300">"/images/alpine-trail..."</span><span className="text-white/50">,</span>
{`  `}<span className="text-white/80">"description"</span><span className="text-white/50">:</span> <span className="text-emerald-300">"Premium trail..."</span><span className="text-white/50">,</span>
{`  `}<span className="text-white/80">"brand"</span><span className="text-white/50">:</span> <span className="text-white/50">{"{"}</span>
{`    `}<span className="text-white/80">"@type"</span><span className="text-white/50">:</span> <span className="text-emerald-300">"Brand"</span><span className="text-white/50">,</span>
{`    `}<span className="text-white/80">"name"</span><span className="text-white/50">:</span> <span className="text-emerald-300">"SpeedTrail"</span>
{`  `}<span className="text-white/50">{"}"}</span>
<span className="text-white/50">{"}"}</span>
                      </pre>
                    </div>
                  </div>

                  {/* Right Column - Missing & Decision stacked */}
                  <div className="lg:w-1/2 space-y-6">
                    {/* Card 2: MISSING */}
                    <div className="bg-rose-500/5 rounded-xl border-l-4 border-l-rose-500/70 border border-rose-500/20 p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <X className="w-4 h-4 text-rose-400" />
                        <span className="text-xs font-mono font-medium text-rose-400 uppercase tracking-wider">Missing</span>
                      </div>
                      <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap break-words">
<span className="text-white/50">{"{"}</span>
{`  `}<span className="text-rose-300">"offers"</span><span className="text-white/50">:</span> <span className="text-rose-400">null</span><span className="text-white/50">,</span>       <span className="text-amber-400">{"// ⚠"}</span>
{`  `}<span className="text-rose-300">"price"</span><span className="text-white/50">:</span> <span className="text-rose-400">undefined</span><span className="text-white/50">,</span>  <span className="text-amber-400">{"// ⚠"}</span>
{`  `}<span className="text-rose-300/70">"priceCurrency"</span><span className="text-white/50">:</span> <span className="text-rose-400/70">null</span><span className="text-white/50">,</span>
{`  `}<span className="text-rose-300/70">"availability"</span><span className="text-white/50">:</span> <span className="text-rose-400/70">null</span><span className="text-white/50">,</span>
{`  `}<span className="text-rose-300/70">"review"</span><span className="text-white/50">:</span> <span className="text-rose-400/70">null</span><span className="text-white/50">,</span>
{`  `}<span className="text-rose-300/70">"aggregateRating"</span><span className="text-white/50">:</span> <span className="text-rose-400/70">null</span>
<span className="text-white/50">{"}"}</span>
                      </pre>
                    </div>

                    {/* Card 3: DECISION */}
                    <div className="bg-amber-500/5 rounded-xl border-l-4 border-l-amber-500/70 border border-amber-500/20 p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-mono font-medium text-amber-400 uppercase tracking-wider">Decision</span>
                      </div>
                      <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap break-words">
<span className="text-white/50">{"{"}</span>
{`  `}<span className="text-white/80">"action"</span><span className="text-white/50">:</span> <span className="text-rose-400 font-semibold">"SKIP"</span><span className="text-white/50">,</span>
{`  `}<span className="text-white/80">"reason"</span><span className="text-white/50">:</span> <span className="text-amber-300">"insufficient purchase data"</span><span className="text-white/50">,</span>
{`  `}<span className="text-white/80">"confidence"</span><span className="text-white/50">:</span> <span className="text-amber-300">0.23</span><span className="text-white/50">,</span>
{`  `}<span className="text-white/80">"fallback"</span><span className="text-white/50">:</span> <span className="text-rose-400 font-semibold">"competitor"</span>
<span className="text-white/50">{"}"}</span>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Bottom Summary Bar - Full width */}
                <div className="mt-6 p-6 bg-gradient-to-r from-rose-500/15 via-rose-500/10 to-transparent rounded-xl border border-rose-500/25">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-3xl">😞</span>
                    </div>
                    <div>
                      <p className="text-lg font-sans text-white font-medium mb-1">
                        Agent couldn't complete purchase evaluation
                      </p>
                      <p className="text-base font-sans text-white/60 leading-relaxed">
                        Missing Offer schema, price markup, and availability signals. Customer was sent to a competitor.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Stats - Clean cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {[
            { stat: "10×", label: "Growth in AI-influenced purchases by 2027" },
            { stat: "90%", label: "Of e-commerce sites have broken AI markup" },
            { stat: "30%", label: "Higher visibility with optimized schemas" },
          ].map((item, i) => (
            <div
              key={i}
              className="holo-border p-8 text-center"
            >
              <p className="text-4xl font-serif text-foreground mb-2">
                {item.stat}
              </p>
              <p className="text-sm text-muted-foreground font-sans">
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
