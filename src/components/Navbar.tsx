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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo with accent bar */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-0.5 h-6 bg-accent-orange rounded-full" />
            <span className="text-xl font-serif text-foreground tracking-tight">
              Agent<span className="font-serif-italic">Pulse</span>
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans"
            >
              FAQ
            </a>
          </div>

          {/* CTA */}
          <a
            href="#hero"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 btn-primary rounded-lg text-sm font-sans"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
