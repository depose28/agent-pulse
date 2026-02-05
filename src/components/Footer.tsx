import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold text-foreground">
              Agent<span className="text-primary">Pulse</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <span className="hidden sm:inline">·</span>
            <span>
              Built by{" "}
              <a
                href="#"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                re:found Labs
              </a>
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AgentPulse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
