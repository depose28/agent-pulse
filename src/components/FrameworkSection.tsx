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
    <section className="py-32 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">
            The Framework
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-display font-serif text-foreground mb-6 tracking-tight">
            Most tools check SEO.
            <br />
            We check if AI can{" "}
            <span className="font-serif-italic">shop</span>.
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Our scoring framework evaluates your entire AI commerce journey —
            from discovery to checkout.
          </p>
        </motion.div>

        {/* Framework Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="holo-border p-8"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${layer.color} rounded-t-lg pointer-events-none`} />
              
              {/* Header */}
              <div className="relative flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-secondary border border-border flex items-center justify-center">
                    <layer.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="font-mono text-sm tracking-wider text-foreground font-medium">
                    {layer.name}
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                  {layer.weight}
                </span>
              </div>

              {/* Question */}
              <h3 className="relative text-xl font-serif text-foreground mb-6">
                {layer.question}
              </h3>

              {/* Signals */}
              <ul className="relative space-y-3">
                {layer.signals.map((signal, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-muted-foreground font-sans"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-holo-2/60" />
                    {signal}
                  </li>
                ))}
              </ul>

              {/* Code snippet */}
              <div className="relative mt-6 bg-dark-bg rounded-xl p-4 border border-dark-border">
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
    </section>
  );
};

export default FrameworkSection;
