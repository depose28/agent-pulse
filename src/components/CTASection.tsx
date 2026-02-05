import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      console.log("Scanning:", url);
    }
  };

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 topo-pattern opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="section-accent mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Get Started
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-display font-serif text-foreground mb-6 tracking-tight">
            Don't let AI shoppers{" "}
            <span className="font-serif-italic">pass you by</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 font-sans max-w-xl">
            Get your AI Commerce Score now — free, fast, and actionable.
          </p>

          {/* URL Input */}
          <form onSubmit={handleSubmit} className="max-w-xl">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter your website URL"
                  className="w-full px-5 py-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all font-sans text-base"
                  required
                />
              </div>
              <button
                type="submit"
                className="group px-6 py-4 btn-primary rounded-lg font-sans font-medium transition-all flex items-center justify-center gap-2"
              >
                Get My Score
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
