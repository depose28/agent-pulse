import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      navigate(`/scan?url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <section className="py-20 md:py-32 relative section-dark overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Holographic glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-holo-2/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs md:text-sm font-mono text-dark-muted uppercase tracking-widest mb-3 md:mb-4">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-display font-serif text-dark-fg mb-4 md:mb-6 tracking-tight">
            Your AI Commerce Score in 60 seconds.{" "}
            <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-holo-1 via-holo-2 to-holo-3">
              Free.
            </span>
          </h2>
          <p className="text-base md:text-lg text-dark-muted mb-8 md:mb-12 font-sans max-w-xl mx-auto">
            See your score and top issues instantly. Go deeper for $49.
          </p>

          {/* URL Input */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <div className="relative flex-1">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter your website URL"
                  className="w-full px-4 md:px-5 py-3.5 md:py-4 bg-dark-card border border-dark-border rounded-xl text-dark-fg placeholder:text-dark-muted/60 focus:outline-none focus:border-holo-2/50 transition-all font-sans text-base md:text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="group px-6 md:px-8 py-3.5 md:py-4 holo-cta rounded-xl font-sans text-base md:text-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                Get My Score
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
