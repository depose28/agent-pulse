import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ScanProgress from "@/components/ScanProgress";
import Navbar from "@/components/Navbar";

const Scan = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const url = searchParams.get("url") || "";
  const [scanComplete, setScanComplete] = useState(false);

  // Redirect if no URL provided
  useEffect(() => {
    if (!url) {
      navigate("/");
    }
  }, [url, navigate]);

  const handleScanComplete = () => {
    setScanComplete(true);
  };

  if (!url) return null;

  return (
    <div className="min-h-screen section-dark overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 left-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-holo-2/8 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/3 w-56 md:w-96 h-56 md:h-96 bg-holo-1/8 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-4s" }}
      />

      <Navbar />

      <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-32 pb-16">
        {/* Back link */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-dark-muted hover:text-dark-fg transition-colors mb-8 md:mb-12 font-sans text-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back
        </motion.button>

        <ScanProgress url={url} onComplete={handleScanComplete} />

        {/* Completion CTA */}
        {scanComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => {
                navigate(`/results?url=${encodeURIComponent(url)}`);
              }}
              className="holo-cta px-8 py-4 rounded-xl font-sans text-base md:text-lg font-medium"
            >
              View Your Results →
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Scan;
