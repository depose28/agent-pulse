import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import ResultsDisplay from "@/components/ResultsDisplay";

// Mock results data — will be replaced with real API data
const MOCK_RESULTS = {
  overallScore: 73,
  url: "https://example-store.com",
  totalIssues: 12,
  weakestLayer: "TRUST",
  layers: [
    { name: "FIND", score: 82, label: "Discovery" },
    { name: "TRUST", score: 58, label: "Verification" },
    { name: "BUY", score: 71, label: "Purchase" },
  ],
  issues: [
    {
      name: "Missing product review schema",
      severity: "high" as const,
      impact: "AI agents can't verify social proof for your products",
      fix: "Add AggregateRating and Review schema to product pages",
      toolName: "Judge.me",
      toolUrl: "https://judge.me",
      codeSnippet: `{
  "@type": "Product",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "127"
  }
}`,
      platformInstructions: "Shopify: Install Judge.me app → Settings → Enable Schema Markup. WooCommerce: Add via Rank Math or custom JSON-LD in product template.",
    },
    {
      name: "Incomplete Offer markup",
      severity: "high" as const,
      impact: "AI agents see your products but can't confirm pricing or availability",
      fix: "Update Offer schema with price, priceCurrency, and availability",
      toolName: "Schema Pro",
      toolUrl: "https://wpschema.com",
      codeSnippet: `{
  "@type": "Offer",
  "price": "49.99",
  "priceCurrency": "USD",
  "availability": "https://schema.org/InStock",
  "url": "https://example.com/product"
}`,
      platformInstructions: "Shopify: This is usually handled by your theme. Check Dawn theme settings. WooCommerce: Use Schema Pro or manually update your product template.",
    },
    {
      name: "No JSON-LD product markup",
      severity: "medium" as const,
      impact: "AI agents can't parse your product catalog efficiently",
      fix: "Implement JSON-LD structured data with Rank Math or custom markup",
      toolName: "Rank Math",
      toolUrl: "https://rankmath.com",
      codeSnippet: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Your Product Name",
  "description": "Product description..."
}
</script>`,
      platformInstructions: "Shopify: Use JSON-LD for SEO app. WooCommerce: Install Rank Math → Schema Settings → Enable Product Schema.",
    },
    {
      name: "Missing Organization schema",
      severity: "medium" as const,
      impact: "AI agents can't verify your business legitimacy",
      fix: "Add Organization schema to your homepage with logo, name, and contact info",
    },
    {
      name: "No FAQ schema detected",
      severity: "medium" as const,
      impact: "AI assistants can't surface your FAQ answers in conversational results",
      fix: "Add FAQPage schema to pages with frequently asked questions",
      toolName: "Rank Math",
      toolUrl: "https://rankmath.com",
    },
    {
      name: "Missing BreadcrumbList markup",
      severity: "low" as const,
      impact: "AI agents have difficulty understanding your site hierarchy",
      fix: "Add BreadcrumbList schema to category and product pages",
    },
    {
      name: "No SiteNavigationElement schema",
      severity: "low" as const,
      impact: "AI crawlers can't efficiently map your site structure",
      fix: "Add SiteNavigationElement to your main navigation",
    },
    {
      name: "Missing return policy markup",
      severity: "medium" as const,
      impact: "AI shopping agents can't communicate your return terms to buyers",
      fix: "Add MerchantReturnPolicy schema",
      codeSnippet: `{
  "@type": "MerchantReturnPolicy",
  "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
  "merchantReturnDays": 30
}`,
    },
    {
      name: "Shipping details not structured",
      severity: "medium" as const,
      impact: "AI agents can't surface delivery information during product comparison",
      fix: "Add OfferShippingDetails to your Offer schema",
    },
    {
      name: "No review aggregation found",
      severity: "high" as const,
      impact: "AI agents have no trust signal data to recommend your products",
      fix: "Add AggregateRating schema or connect a review platform",
      toolName: "Yotpo",
      toolUrl: "https://yotpo.com",
    },
    {
      name: "Missing image alt text on product images",
      severity: "low" as const,
      impact: "AI visual agents can't understand your product imagery",
      fix: "Add descriptive alt attributes to all product images",
    },
    {
      name: "No Open Graph commerce tags",
      severity: "low" as const,
      impact: "Social sharing by AI-driven tools lacks product context",
      fix: "Add og:type, og:price:amount, og:price:currency meta tags",
    },
  ],
};

const Results = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const url = searchParams.get("url") || "";
  const [tier, setTier] = useState<"free" | "paid">("free");

  useEffect(() => {
    if (!url) {
      navigate("/");
    }
  }, [url, navigate]);

  const handleUpgrade = () => {
    // Placeholder: open Lemon Squeezy checkout
    // In production, this will redirect to a checkout URL with email + scan ID
    const checkoutUrl = `https://your-store.lemonsqueezy.com/checkout/buy/placeholder?checkout[email]=user@example.com&checkout[custom][scan_id]=demo`;
    window.open(checkoutUrl, "_blank");
  };

  if (!url) return null;

  const resultsData = {
    ...MOCK_RESULTS,
    url,
  };

  return (
    <div className="min-h-screen section-dark overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-holo-2/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 right-1/4 w-56 md:w-96 h-56 md:h-96 bg-holo-1/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-4s" }}
      />

      <Navbar />

      <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-32 pb-16 md:pb-24">
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

        <div className="max-w-2xl mx-auto">
          <ResultsDisplay tier={tier} data={resultsData} onUpgrade={handleUpgrade} />
        </div>
      </div>
    </div>
  );
};

export default Results;
