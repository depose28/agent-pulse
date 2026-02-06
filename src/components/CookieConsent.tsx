import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_CONSENT_KEY = "agentpulse_cookie_consent";

type ConsentChoice = "all" | "essential" | null;

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const existingConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!existingConsent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setShowBanner(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: ConsentChoice) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, choice || "essential");
    setShowBanner(false);

    // Here you would enable/disable tracking based on choice
    if (choice === "all") {
      // Enable analytics and affiliate tracking cookies
      console.log("All cookies enabled");
    } else {
      // Only essential cookies - disable tracking
      console.log("Only essential cookies enabled");
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-dark-card border border-dark-border rounded-xl p-4 md:p-6 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                {/* Text */}
                <div className="flex-1">
                  <p className="text-sm md:text-base text-dark-fg font-sans leading-relaxed">
                    We use cookies to improve your experience and measure site
                    performance. We also use affiliate tracking cookies when you
                    click recommended tools.{" "}
                    <Link
                      to="/privacy"
                      className="text-holo-2 hover:text-holo-1 transition-colors underline underline-offset-2"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleConsent("essential")}
                    className="px-4 py-2.5 rounded-lg border border-dark-border text-dark-muted hover:text-dark-fg hover:border-dark-muted transition-all font-sans text-sm font-medium"
                  >
                    Only Essential
                  </button>
                  <button
                    onClick={() => handleConsent("all")}
                    className="px-4 py-2.5 rounded-lg bg-dark-fg text-dark-bg hover:opacity-90 transition-all font-sans text-sm font-medium"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
