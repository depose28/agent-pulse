import { motion } from "framer-motion";

const WhyFreeSection = () => {
  return (
    <section className="py-10 md:py-14 relative section-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h3 className="text-xl md:text-2xl font-serif text-dark-fg mb-3 md:mb-4 tracking-tight">
            Why is this <span className="font-serif-italic">free</span>?
          </h3>
          <p className="text-sm md:text-base text-dark-muted font-sans leading-relaxed">
            We earn a commission when you use one of our recommended tools to fix an issue. Every tool we recommend has been vetted by our team. You'll never see a recommendation we wouldn't use ourselves.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyFreeSection;
