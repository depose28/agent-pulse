import { useState } from "react";
import { motion } from "framer-motion";

const ProblemSection = () => {
  const [viewMode, setViewMode] = useState<"human" | "agent">("human");

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Light section for Human view contrast */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          viewMode === "human"
            ? "bg-gradient-to-b from-slate-100 to-slate-50"
            : "bg-background"
        }`}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
              viewMode === "human" ? "text-slate-900" : "text-foreground"
            }`}
          >
            The way people shop is{" "}
            <span className="font-serif italic text-primary">changing</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
              viewMode === "human" ? "text-slate-600" : "text-muted-foreground"
            }`}
          >
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
          <div
            className={`inline-flex p-1.5 rounded-full transition-colors duration-500 ${
              viewMode === "human"
                ? "bg-slate-200"
                : "bg-surface border border-border"
            }`}
          >
            <button
              onClick={() => setViewMode("human")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                viewMode === "human"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Human
            </button>
            <button
              onClick={() => setViewMode("agent")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                viewMode === "agent"
                  ? "bg-card text-foreground shadow-sm border border-border"
                  : viewMode === "human"
                  ? "text-slate-500 hover:text-slate-700"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Agent
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
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 transition-all duration-500">
              {/* Human view - clean product display */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 bg-slate-300 rounded-lg mx-auto mb-4" />
                      <p className="text-slate-400 text-sm">Product Image</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Premium Running Shoes
                  </h3>
                  <p className="text-3xl font-bold text-slate-900 mb-4">
                    $129.99
                  </p>
                  <p className="text-slate-600 mb-6">
                    Lightweight performance running shoes with responsive
                    cushioning and breathable mesh upper.
                  </p>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex text-yellow-400">{"★★★★★"}</div>
                    <span className="text-slate-600 text-sm">
                      4.8 (2,847 reviews)
                    </span>
                  </div>
                  <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-card rounded-2xl border border-border p-6 transition-all duration-500">
              {/* Agent view - code/markup display */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Request Card */}
                <div className="bg-surface rounded-xl border border-border p-5">
                  <p className="text-muted-foreground text-sm mb-3">Request</p>
                  <p className="text-foreground">
                    I want gear to start trail running this fall
                  </p>
                </div>

                {/* Normalized Intent */}
                <div className="bg-surface rounded-xl border border-border p-5">
                  <p className="text-muted-foreground text-sm mb-3">
                    Normalized Intent
                  </p>
                  <div className="font-mono text-sm space-y-1">
                    <p>
                      <span className="text-muted-foreground">intent:</span>{" "}
                      <span className="text-primary">find_trail_running_gear</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground">season:</span>{" "}
                      <span className="text-cyan-300">fall</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground">goal:</span>{" "}
                      <span className="text-cyan-300">starter_outfit</span>
                    </p>
                  </div>
                </div>

                {/* JSON Response - spans full width on larger screens */}
                <div className="md:col-span-2 bg-surface rounded-xl border border-border p-5">
                  <p className="text-muted-foreground text-sm mb-3">
                    Signed Response
                  </p>
                  <pre className="font-mono text-xs text-foreground overflow-x-auto">
                    <code>
{`{
  "intent_summary": {
    "intent": `}<span className="text-cyan-300">"find_trail_running_gear"</span>{`,
    "season": `}<span className="text-cyan-300">"fall"</span>{`,
    "goal": `}<span className="text-cyan-300">"starter_outfit"</span>{`
  },
  "search_activity": {
    "products_scanned": `}<span className="text-score-medium">389</span>{`,
    "pages_parsed": `}<span className="text-score-medium">38</span>{`,
    "reviews_analyzed": `}<span className="text-score-medium">124</span>{`
  },
  "result_summary": {
    "recommendations": [
      `}<span className="text-cyan-300">"Alpine Trail Runner GTX"</span>{`,
      `}<span className="text-cyan-300">"DryFit Trail Cap"</span>{`,
      `}<span className="text-cyan-300">"Merino Performance Socks"</span>{`
    ],
    "confidence": `}<span className="text-score-high">0.93</span>{`
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Error indicators */}
              <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-sm text-destructive font-medium">
                  ⚠️ Your site returned incomplete data
                </p>
                <p className="text-xs text-muted-foreground mt-1">
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
          className="grid sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
        >
          {[
            { stat: "10x", label: "Growth in AI-influenced purchases by 2027" },
            { stat: "90%", label: "Of e-commerce sites have broken AI markup" },
            { stat: "30%", label: "Higher visibility with optimized schemas" },
          ].map((item, i) => (
            <div
              key={i}
              className={`text-center p-6 rounded-xl transition-colors duration-500 ${
                viewMode === "human"
                  ? "bg-white border border-slate-200"
                  : "bg-card border border-border"
              }`}
            >
              <p
                className={`text-3xl font-bold mb-2 ${
                  viewMode === "human" ? "text-primary" : "text-primary"
                }`}
              >
                {item.stat}
              </p>
              <p
                className={`text-sm ${
                  viewMode === "human" ? "text-slate-600" : "text-muted-foreground"
                }`}
              >
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
