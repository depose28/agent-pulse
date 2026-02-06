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
      "The AI Commerce Score is a 0-100 rating that measures how well your website is optimized for AI shopping agents. It evaluates structured data, schema markup, and protocol readiness across three layers: Find (discovery), Trust (verification), and Buy (purchase completion).",
  },
  {
    question: 'What does "AI shopping agent" mean?',
    answer:
      "AI shopping agents are automated systems that help users discover and purchase products or services. Examples include ChatGPT plugins, Perplexity Shopping, Google Shopping Graph, and emerging AI commerce protocols. These agents read and interpret your site's structured data to understand your offerings.",
  },
  {
    question: "Is the free scan really free?",
    answer:
      "Yes. You get your AI Commerce Score, layer breakdown, and top 3 priority issues completely free. No credit card needed. If you want the full issue list with implementation guidance and competitor benchmarking, the full report is a one-time $49 payment.",
  },
  {
    question: "What do I get in the full report that I don't get for free?",
    answer:
      "The free Pulse Check shows your score and top 3 issues. The full report reveals every issue we found, with detailed implementation guidance, platform-specific code snippets, recommended fix tools, and a competitor comparison. Think of the free scan as the diagnosis — the full report is the treatment plan.",
  },
  {
    question: "Is this only for e-commerce stores?",
    answer:
      "No. AgentPulse works for any website where AI agents might discover, evaluate, or transact — online stores, service businesses, marketplaces, SaaS pricing pages, booking sites, and more. If an AI agent can interact with your site, we can score it.",
  },
  {
    question: "How does AgentPulse make money?",
    answer:
      "The full report is $49. We also earn affiliate commissions when you use one of our recommended tools to fix an issue. Every tool we recommend has been vetted by our team — we'll never recommend something just because it pays us. If a fix doesn't require a tool, we'll tell you how to do it yourself.",
  },
  {
    question: "How is this different from an SEO audit?",
    answer:
      "Traditional SEO audits focus on search engine visibility for humans. AgentPulse specifically analyzes the machine-readable signals that AI agents use — Schema.org markup, JSON-LD, Open Graph, and commerce protocol readiness. We check if AI can actually interact with your site, not just find it.",
  },
  {
    question: "How long does a scan take?",
    answer:
      "A full scan typically completes in under 2 minutes. Results are delivered immediately in your browser and also sent to your email.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We only access publicly available pages on your website — the same pages any visitor or search engine would see. We don't store your full page content, only the structured data analysis results. All data is encrypted in transit and at rest.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-display font-serif text-foreground tracking-tight">
            Frequently asked{" "}
            <span className="font-serif-italic">questions</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="holo-border px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-foreground hover:no-underline py-6 font-serif text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 font-sans text-base leading-relaxed">
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
