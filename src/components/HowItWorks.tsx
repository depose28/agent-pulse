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
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            How it{" "}
            <span className="font-serif italic text-primary">works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Get actionable insights in three simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                {/* Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-muted-foreground/20 font-mono">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
