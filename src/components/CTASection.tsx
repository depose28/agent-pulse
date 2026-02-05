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
      {/* Holographic divider at top */}
      <div className="absolute top-0 left-0 right-0 holo-divider" />
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-holo-lavender/5 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 code-texture" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-6 tracking-tight">
            Don't let AI shoppers{" "}
            <span className="font-serif-italic">pass you by</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 font-sans">
            Get your AI Commerce Score now — free, fast, and actionable.
          </p>

          {/* URL Input */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 holo-border rounded-lg">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter your website URL"
                  className="w-full px-5 py-4 bg-card rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-all font-sans text-base"
                  required
                />
              </div>
              <button
                type="submit"
                className="group px-6 py-4 holo-button rounded-lg font-sans font-medium text-foreground transition-all flex items-center justify-center gap-2"
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