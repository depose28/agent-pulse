import { useState } from "react";
import { motion } from "framer-motion";

const ProblemSection = () => {
  const [viewMode, setViewMode] = useState<"human" | "agent">("human");

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Holographic divider at top */}
      <div className="absolute top-0 left-0 right-0 holo-divider" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-6 tracking-tight">
            The way people shop is{" "}
            <span className="font-serif-italic">changing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            AI shopping agents are becoming the new storefront. But what they
            see is very different from what humans see.
          </p>
        </motion.div>

        {/* Human/Agent Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 rounded-lg bg-surface border border-border/50">
            <button
              onClick={() => setViewMode("human")}
              className={`px-5 py-2 rounded-md text-sm font-sans font-medium transition-all ${
                viewMode === "human"
                  ? "bg-card text-foreground holo-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Human View
            </button>
            <button
              onClick={() => setViewMode("agent")}
              className={`px-5 py-2 rounded-md text-sm font-sans font-medium transition-all ${
                viewMode === "agent"
                  ? "bg-card text-foreground holo-border"
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
          className="max-w-4xl mx-auto"
        >
          {viewMode === "human" ? (
            <div className="holo-border rounded-xl p-8 bg-card transition-all duration-500">
              {/* Human view - clean product display */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <div className="aspect-square bg-surface rounded-lg flex items-center justify-center border border-border/30">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 bg-border/50 rounded-lg mx-auto mb-4" />
                      <p className="text-muted-foreground/50 text-sm font-sans">Product Image</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-serif text-foreground mb-3">
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
                    <div className="flex text-score-medium text-sm">{"★★★★★"}</div>
                    <span className="text-muted-foreground text-sm font-sans">
                      4.8 (2,847 reviews)
                    </span>
                  </div>
                  <button className="w-full holo-button text-foreground py-3 rounded-lg font-sans font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="holo-border rounded-xl p-6 bg-card transition-all duration-500">
              {/* Agent view - Bloomberg Terminal aesthetic */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Request Card */}
                <div className="bg-surface rounded-lg border border-border/30 p-5">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70 mb-3">Request</p>
                  <p className="text-foreground font-sans">
                    I want gear to start trail running this fall
                  </p>
                </div>

                {/* Normalized Intent */}
                <div className="bg-surface rounded-lg border border-border/30 p-5">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70 mb-3">
                    Normalized Intent
                  </p>
                  <div className="font-mono text-sm space-y-1">
                    <p>
                      <span className="text-muted-foreground/60">intent:</span>{" "}
                      <span className="text-holo-blue">find_trail_running_gear</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground/60">season:</span>{" "}
                      <span className="text-holo-lavender">fall</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground/60">goal:</span>{" "}
                      <span className="text-holo-lavender">starter_outfit</span>
                    </p>
                  </div>
                </div>

                {/* JSON Response */}
                <div className="md:col-span-2 bg-surface rounded-lg border border-border/30 p-5">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70 mb-3">
                    Signed Response
                  </p>
                  <pre className="font-mono text-xs text-foreground/80 overflow-x-auto">
                    <code>
{`{
  "intent_summary": {
    "intent": `}<span className="text-holo-lavender">"find_trail_running_gear"</span>{`,
    "season": `}<span className="text-holo-lavender">"fall"</span>{`,
    "goal": `}<span className="text-holo-lavender">"starter_outfit"</span>{`
  },
  "search_activity": {
    "products_scanned": `}<span className="text-score-medium">389</span>{`,
    "pages_parsed": `}<span className="text-score-medium">38</span>{`,
    "reviews_analyzed": `}<span className="text-score-medium">124</span>{`
  },
  "result_summary": {
    "recommendations": [
      `}<span className="text-holo-blue">"Alpine Trail Runner GTX"</span>{`,
      `}<span className="text-holo-blue">"DryFit Trail Cap"</span>{`,
      `}<span className="text-holo-blue">"Merino Performance Socks"</span>{`
    ],
    "confidence": `}<span className="text-score-high">0.93</span>{`
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Error indicator - more subtle */}
              <div className="mt-4 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                <p className="text-sm text-destructive/90 font-sans font-medium">
                  ⚠ Your site returned incomplete data
                </p>
                <p className="text-xs text-muted-foreground mt-1 font-sans">
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
          className="grid sm:grid-cols-3 gap-4 mt-20 max-w-3xl mx-auto"
        >
          {[
            { stat: "10x", label: "Growth in AI-influenced purchases by 2027" },
            { stat: "90%", label: "Of e-commerce sites have broken AI markup" },
            { stat: "30%", label: "Higher visibility with optimized schemas" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-lg holo-border bg-card"
            >
              <p className="text-3xl font-serif text-foreground mb-2">
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