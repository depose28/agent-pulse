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
  },
];

const FrameworkSection = () => {
  return (
    <section className="py-28 relative">
      {/* Holographic divider at top */}
      <div className="absolute top-0 left-0 right-0 holo-divider" />
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-6 tracking-tight">
            Most tools check SEO.
            <br />
            We check if AI can actually{" "}
            <span className="font-serif-italic">shop</span> your
            site.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Our scoring framework evaluates your entire AI commerce journey —
            from discovery to checkout.
          </p>
        </motion.div>

        {/* Framework Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="holo-border rounded-xl p-8 bg-card transition-all"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-border/30 flex items-center justify-center">
                    <layer.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className="font-mono text-sm tracking-wider text-foreground">
                    {layer.name}
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground/60">
                  {layer.weight}
                </span>
              </div>

              {/* Question */}
              <h3 className="text-lg font-serif text-foreground mb-6">
                {layer.question}
              </h3>

              {/* Signals */}
              <ul className="space-y-2.5">
                {layer.signals.map((signal, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground font-sans"
                  >
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    {signal}
                  </li>
                ))}
              </ul>

              {/* Code snippet preview */}
              <div className="mt-6 bg-surface rounded-lg p-4 border border-border/30">
                <pre className="text-xs font-mono text-muted-foreground/70 overflow-x-auto">
                  {layer.name === "FIND" && (
                    <code>
{`{
  "@type": "Product",
  "name": "...",
  "sku": "..."
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
  "availability": "..."
}`}
                    </code>
                  )}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;