import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi";
import faqs from "../data/faq";

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass overflow-hidden !rounded-2xl"
      id={`faq-item-${index}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer bg-transparent border-none"
        aria-expanded={open}
      >
        <span className="text-text-primary font-semibold text-base md:text-lg pr-6 leading-snug">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-primary shrink-0 p-1 bg-primary-muted rounded-lg"
        >
          {open ? <HiMinus size={20} /> : <HiPlus size={20} />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.25em] uppercase mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          {/* Divider line */}
          <div className="section-divider" />
        </motion.div>

        {/* FAQ accordion */}
        <div className="max-w-4xl mx-auto flex flex-col gap-5 md:gap-6">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
