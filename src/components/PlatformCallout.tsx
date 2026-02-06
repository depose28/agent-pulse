import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

type Platform = "shopify" | "woocommerce" | "magento" | "squarespace" | "bigcommerce" | "custom";

const platformData: Record<Platform, { name: string; message: string }> = {
  shopify: {
    name: "Shopify",
    message: "Shopify gives you a solid foundation — but 72% of Shopify stores we've analyzed have broken offer schema, missing review markup, or incomplete product data. The basics are covered. The details aren't.",
  },
  woocommerce: {
    name: "WooCommerce",
    message: "WooCommerce is flexible, but that flexibility means your structured data quality depends entirely on your plugins and theme. 81% of WooCommerce sites we've scanned have critical schema gaps.",
  },
  magento: {
    name: "Magento",
    message: "Magento handles complexity well — but complex setups create more places for markup to break. Multi-store configs, custom attributes, and dynamic pricing often produce inconsistent structured data.",
  },
  squarespace: {
    name: "Squarespace",
    message: "Squarespace keeps things simple, but its structured data output is limited. Most Squarespace sites we've seen are missing product offer schema, review markup, and proper JSON-LD entirely.",
  },
  bigcommerce: {
    name: "BigCommerce",
    message: "BigCommerce has decent built-in schema support, but it's often outdated or incomplete. Price, availability, and review markup frequently don't match what's actually on the page.",
  },
  custom: {
    name: "Custom / Other",
    message: "Custom builds have the most potential — and the most risk. Without a platform handling defaults, every piece of structured data is on you. Most custom sites we've scanned are missing 60%+ of what AI agents need.",
  },
};

const platforms: Platform[] = ["shopify", "woocommerce", "magento", "squarespace", "bigcommerce", "custom"];

const PlatformCallout = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToHero = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("hero");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById("hero");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto mt-10 md:mt-16"
    >
      {/* Headline */}
      <p className="text-base md:text-lg font-serif text-foreground text-center mb-4 md:mb-6">
        "Think your platform handles this?"
      </p>

      {/* Platform Pills */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-6">
        {platforms.map((platform) => (
          <button
            key={platform}
            onClick={() => setSelectedPlatform(platform)}
            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-sans font-medium transition-all duration-200 border ${
              selectedPlatform === platform
                ? "bg-dark-bg text-dark-fg border-holo-2/50 shadow-[0_0_12px_rgba(var(--holo-2-rgb),0.2)]"
                : "bg-secondary/50 text-muted-foreground border-border hover:border-muted-foreground/50 hover:text-foreground"
            }`}
          >
            {platformData[platform].name}
          </button>
        ))}
      </div>

      {/* Dynamic Response */}
      <AnimatePresence mode="wait">
        {selectedPlatform && (
          <motion.div
            key={selectedPlatform}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="text-center"
          >
            {/* Message */}
            <div className="p-4 md:p-6 rounded-xl bg-dark-bg border border-dark-border mb-4 md:mb-6">
              <p className="text-sm md:text-base text-dark-fg/90 font-sans leading-relaxed">
                {platformData[selectedPlatform].message}
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToHero}
              className="holo-button px-6 md:px-8 py-2.5 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base font-sans font-medium inline-flex items-center gap-2 group"
            >
              Check My Site
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Small Print */}
            <p className="mt-3 md:mt-4 text-[10px] md:text-xs text-muted-foreground/60 font-sans">
              Based on aggregate data from AgentPulse scans. Individual results vary.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PlatformCallout;
