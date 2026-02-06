import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import FrameworkSection from "@/components/FrameworkSection";
import FixRecommendationsSection from "@/components/FixRecommendationsSection";
import PricingSection from "@/components/PricingSection";

import ShareScoreSection from "@/components/ShareScoreSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <FrameworkSection />
        <FixRecommendationsSection />
        <ShareScoreSection />
        <PricingSection />
        
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
