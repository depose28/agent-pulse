import { motion } from "framer-motion";
import { Link, Scan, ListChecks } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link,
    title: "Enter your URL",
    description: "Paste your store URL. That's it.",
  },
  {
    number: "02",
    icon: Scan,
    title: "We scan 50+ signals",
    description:
      "Our engine analyzes structured data, schema markup, crawlability, and protocol readiness across your entire AI commerce surface.",
  },
  {
    number: "03",
    icon: ListChecks,
    title: "Get your score + fix list",
    description: "Receive your AI Commerce Score with a prioritized action plan.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-28 relative">
      {/* Holographic divider at top */}
      <div className="absolute top-0 left-0 right-0 holo-divider" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-6 tracking-tight">
            How it{" "}
            <span className="font-serif-italic">works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-sans">
            Get actionable insights in three simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px holo-divider" />
              )}

              <div className="holo-border rounded-xl p-8 h-full bg-card transition-all">
                {/* Number */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-5xl font-serif text-border/50">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 rounded-lg bg-surface border border-border/30 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-sans text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;