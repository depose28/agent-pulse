import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <span className={`text-sm font-serif font-semibold ${scrolled ? "text-foreground" : "text-white"}`}>A</span>
            </div>
            <span className={`text-xl font-serif tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
              Agent<span className="font-serif-italic">Pulse</span>
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className={`transition-colors text-sm font-sans font-medium ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className={`transition-colors text-sm font-sans font-medium ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className={`transition-colors text-sm font-sans font-medium ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
            >
              FAQ
            </a>
          </div>

          {/* CTA */}
          <a
            href="#hero"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-white text-foreground rounded-lg text-sm font-sans font-medium hover:bg-white/90 transition-all shadow-lg"
          >
            Get Your Score
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
