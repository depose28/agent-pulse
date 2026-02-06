import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg holo-button flex items-center justify-center">
              <span className="text-xs font-serif font-semibold">A</span>
            </div>
            <span className="text-lg font-serif text-foreground">
              Agent<span className="font-serif-italic">Pulse</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 md:gap-6 text-sm text-muted-foreground font-sans flex-wrap justify-center">
            <Link
              to="/impressum"
              className="hover:text-foreground transition-colors"
            >
              Impressum
            </Link>
            <Link
              to="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <span className="hidden sm:inline text-border">·</span>
            <span>
              Built by{" "}
              <a
                href="#"
                className="text-foreground hover:text-holo-2 transition-colors"
              >
                re:found Labs
              </a>
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-muted-foreground font-sans">
          © {new Date().getFullYear()} AgentPulse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
