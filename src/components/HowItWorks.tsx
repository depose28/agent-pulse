import { motion } from "framer-motion";
import { Link, Scan, ListChecks } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link,
    title: "Paste any website URL",
    description: "Enter any URL — your store, service site, or landing page. That's it.",
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
    description: "Receive your AI Commerce Score with a prioritized action plan — completely free.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 relative section-dark overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <p className="text-sm font-mono text-dark-muted uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-display font-serif text-dark-fg mb-6 tracking-tight">
            Three steps to{" "}
            <span className="font-serif-italic">clarity</span>
          </h2>
          <p className="text-lg text-dark-muted font-sans">
            Get actionable insights in under two minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-dark-border to-transparent" />
              )}

              <div className="holo-border-dark p-8 h-full">
                {/* Number */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-holo-1 via-holo-2 to-holo-3 opacity-60">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-holo-2" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif text-dark-fg mb-3">
                  {step.title}
                </h3>
                <p className="text-dark-muted leading-relaxed font-sans text-sm">
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
