import { useState } from "react";
import { motion } from "framer-motion";

const ProblemSection = () => {
  const [viewMode, setViewMode] = useState<"human" | "agent">("human");

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with accent bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-accent mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              The Problem
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-display font-serif text-foreground mb-6 tracking-tight max-w-3xl">
            The way people shop is{" "}
            <span className="font-serif-italic">changing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-sans">
            AI shopping agents are becoming the new storefront. But what they
            see is very different from what humans see.
          </p>
        </motion.div>

        {/* Human/Agent Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-start mb-8"
        >
          <div className="inline-flex p-1 rounded-lg bg-card border border-border">
            <button
              onClick={() => setViewMode("human")}
              className={`px-5 py-2.5 rounded-md text-sm font-sans font-medium transition-all ${
                viewMode === "human"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Human View
            </button>
            <button
              onClick={() => setViewMode("agent")}
              className={`px-5 py-2.5 rounded-md text-sm font-sans font-medium transition-all ${
                viewMode === "agent"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Agent View
            </button>
          </div>
        </motion.div>

        {/* Visual Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          {viewMode === "human" ? (
            <div className="card-elevated p-8 transition-all duration-500">
              {/* Human view - clean product display */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <div className="aspect-square bg-surface rounded-lg flex items-center justify-center border border-border">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 bg-border/50 rounded-lg mx-auto mb-4" />
                      <p className="text-muted-foreground/60 text-sm font-sans">
                        Product Image
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-serif text-foreground mb-3">
                    Premium Running Shoes
                  </h3>
                  <p className="text-3xl font-serif text-foreground mb-4">
                    $129.99
                  </p>
                  <p className="text-muted-foreground mb-6 font-sans">
                    Lightweight performance running shoes with responsive
                    cushioning and breathable mesh upper.
                  </p>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex text-accent-gold text-sm">
                      {"★★★★★"}
                    </div>
                    <span className="text-muted-foreground text-sm font-sans">
                      4.8 (2,847 reviews)
                    </span>
                  </div>
                  <button className="w-full btn-primary py-3 rounded-lg font-sans font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="terminal-block p-6 transition-all duration-500">
              {/* Agent view - Terminal aesthetic */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Request Card */}
                <div className="bg-white/5 rounded-lg border border-white/10 p-5">
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-3 font-mono">
                    Request
                  </p>
                  <p className="text-white/90 font-sans">
                    I want gear to start trail running this fall
                  </p>
                </div>

                {/* Normalized Intent */}
                <div className="bg-white/5 rounded-lg border border-white/10 p-5">
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-3 font-mono">
                    Normalized Intent
                  </p>
                  <div className="font-mono text-sm space-y-1">
                    <p>
                      <span className="text-white/40">intent:</span>{" "}
                      <span className="text-amber-400">find_trail_running_gear</span>
                    </p>
                    <p>
                      <span className="text-white/40">season:</span>{" "}
                      <span className="text-emerald-400">fall</span>
                    </p>
                    <p>
                      <span className="text-white/40">goal:</span>{" "}
                      <span className="text-emerald-400">starter_outfit</span>
                    </p>
                  </div>
                </div>

                {/* JSON Response */}
                <div className="md:col-span-2 bg-white/5 rounded-lg border border-white/10 p-5">
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-3 font-mono">
                    Signed Response
                  </p>
                  <pre className="font-mono text-xs text-white/80 overflow-x-auto">
                    <code>
{`{
  "intent_summary": {
    "intent": `}<span className="text-emerald-400">"find_trail_running_gear"</span>{`,
    "season": `}<span className="text-emerald-400">"fall"</span>{`,
    "goal": `}<span className="text-emerald-400">"starter_outfit"</span>{`
  },
  "search_activity": {
    "products_scanned": `}<span className="text-amber-400">389</span>{`,
    "pages_parsed": `}<span className="text-amber-400">38</span>{`,
    "reviews_analyzed": `}<span className="text-amber-400">124</span>{`
  },
  "result_summary": {
    "recommendations": [
      `}<span className="text-sky-400">"Alpine Trail Runner GTX"</span>{`,
      `}<span className="text-sky-400">"DryFit Trail Cap"</span>{`,
      `}<span className="text-sky-400">"Merino Performance Socks"</span>{`
    ],
    "confidence": `}<span className="text-emerald-400">0.93</span>{`
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Error indicator */}
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-sm text-red-400 font-sans font-medium">
                  ⚠ Your site returned incomplete data
                </p>
                <p className="text-xs text-white/50 mt-1 font-sans">
                  Missing: Product schema, Offer markup, Review aggregation
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-4 mt-20 max-w-4xl"
        >
          {[
            { stat: "10x", label: "Growth in AI-influenced purchases by 2027" },
            { stat: "90%", label: "Of e-commerce sites have broken AI markup" },
            { stat: "30%", label: "Higher visibility with optimized schemas" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-lg card-elevated border-l-2 border-l-accent-orange"
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
