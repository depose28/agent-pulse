import { motion } from "framer-motion";
import { Search, ShieldCheck, CreditCard } from "lucide-react";

const layers = [
  {
    name: "FIND",
    weight: "35%",
    icon: Search,
    question: "Can AI agents discover your products?",
    signals: [
      "Schema.org Product markup",
      "JSON-LD structured data",
      "Open Graph tags",
      "Sitemap accessibility",
      "Crawlability signals",
    ],
    color: "from-holo-1/20 to-transparent",
  },
  {
    name: "TRUST",
    weight: "20%",
    icon: ShieldCheck,
    question: "Can AI agents verify you're legitimate?",
    signals: [
      "Reviews schema",
      "Organization markup",
      "Security signals",
      "Publisher authority",
      "Brand verification",
    ],
    color: "from-holo-2/20 to-transparent",
  },
  {
    name: "BUY",
    weight: "45%",
    icon: CreditCard,
    question: "Can AI agents complete a purchase?",
    signals: [
      "Offer schema accuracy",
      "Price/availability markup",
      "Checkout accessibility",
      "Payment protocol readiness",
      "API integration signals",
    ],
    color: "from-holo-4/20 to-transparent",
  },
];

const FrameworkSection = () => {
  return (
    <section className="py-16 md:py-32 relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-20 max-w-3xl mx-auto"
        >
          <p className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-widest mb-3 md:mb-4">
            The Framework
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-display font-serif text-foreground mb-4 md:mb-6 tracking-tight px-2">
            Most tools check SEO.
            <br />
            We check if AI can{" "}
            <span className="font-serif-italic">shop</span>.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-sans px-2">
            Our scoring framework evaluates your entire AI commerce journey.
          </p>
        </motion.div>

        {/* Framework Cards - Horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible">
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto min-w-max md:min-w-0">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="holo-border p-4 md:p-8 w-64 md:w-auto flex-shrink-0 md:flex-shrink"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-b ${layer.color} rounded-t-lg pointer-events-none`} />
                
                {/* Header */}
                <div className="relative flex items-center justify-between mb-4 md:mb-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl bg-secondary border border-border flex items-center justify-center">
                      <layer.icon className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
                    </div>
                    <span className="font-mono text-xs md:text-sm tracking-wider text-foreground font-medium">
                      {layer.name}
                    </span>
                  </div>
                  <span className="text-[10px] md:text-xs font-mono text-muted-foreground bg-secondary px-1.5 md:px-2 py-0.5 md:py-1 rounded-md">
                    {layer.weight}
                  </span>
                </div>

                {/* Question */}
                <h3 className="relative text-base md:text-xl font-serif text-foreground mb-4 md:mb-6">
                  {layer.question}
                </h3>

                {/* Signals - Show fewer on mobile */}
                <ul className="relative space-y-2 md:space-y-3">
                  {layer.signals.slice(0, 3).map((signal, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground font-sans"
                    >
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-holo-2/60" />
                      {signal}
                    </li>
                  ))}
                  {layer.signals.length > 3 && (
                    <li className="text-xs text-muted-foreground/60 font-sans md:hidden">
                      +{layer.signals.length - 3} more...
                    </li>
                  )}
                  {/* Show remaining signals on desktop only */}
                  {layer.signals.slice(3).map((signal, i) => (
                    <li
                      key={i + 3}
                      className="hidden md:flex items-center gap-3 text-sm text-muted-foreground font-sans"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-holo-2/60" />
                      {signal}
                    </li>
                  ))}
                </ul>

                {/* Code snippet - Hidden on mobile */}
                <div className="relative mt-4 md:mt-6 bg-dark-bg rounded-lg md:rounded-xl p-3 md:p-4 border border-dark-border hidden md:block">
                  <pre className="text-xs font-mono text-white/70 overflow-x-auto">
                    {layer.name === "FIND" && (
                      <code>
{`{
  "@type": "Product",
  "name": "...",
  "sku": "SKU-001"
}`}
                      </code>
                    )}
                    {layer.name === "TRUST" && (
                      <code>
{`{
  "@type": "Review",
  "reviewRating": {...},
  "author": "..."
}`}
                      </code>
                    )}
                    {layer.name === "BUY" && (
                      <code>
{`{
  "@type": "Offer",
  "price": "129.99",
  "availability": "InStock"
}`}
                      </code>
                    )}
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile scroll hint */}
        <p className="text-center text-xs text-muted-foreground/50 mt-2 md:hidden">
          ← Swipe to see all →
        </p>
      </div>
    </section>
  );
};

export default FrameworkSection;
