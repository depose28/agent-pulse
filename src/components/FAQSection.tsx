import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an AI Commerce Score?",
    answer:
      "The AI Commerce Score is a 0-100 rating that measures how well your e-commerce site is optimized for AI shopping agents. It evaluates structured data, schema markup, and protocol readiness across three layers: Find (discovery), Trust (verification), and Buy (purchase completion).",
  },
  {
    question: 'What does "AI shopping agent" mean?',
    answer:
      "AI shopping agents are automated systems that help users discover and purchase products. Examples include ChatGPT plugins, Perplexity Shopping, Google Shopping Graph, and emerging AI commerce protocols. These agents read and interpret your site's structured data to understand your products.",
  },
  {
    question: "How is this different from an SEO audit?",
    answer:
      "Traditional SEO audits focus on search engine visibility for humans. AgentPulse specifically analyzes the machine-readable signals that AI agents use — Schema.org markup, JSON-LD, Open Graph, and commerce protocol readiness. We check if AI can actually shop your site, not just find it.",
  },
  {
    question: "How long does a scan take?",
    answer:
      "A Pulse Check (free tier) typically completes in under 60 seconds. A Deep Scan analyzes more pages and provides comprehensive results, usually completing within 2-5 minutes depending on your site size.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We only access publicly available pages on your website — the same pages any visitor or search engine would see. We don't store your full page content, only the structured data analysis results. All data is encrypted in transit and at rest.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-28 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-accent mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-display font-serif text-foreground tracking-tight">
            Frequently asked{" "}
            <span className="font-serif-italic">questions</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated px-6 data-[state=open]:border-foreground/20"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-foreground hover:no-underline py-5 font-serif text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 font-sans text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
