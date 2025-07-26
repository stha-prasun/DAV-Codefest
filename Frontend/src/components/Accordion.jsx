import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does DsaBuddy help me learn DSA better?",
    answer:
      "DsaBuddy offers guided problem-solving, real-time AI feedback, and adaptive difficulty to deepen your understanding.",
  },
  {
    question: "Do I need prior coding knowledge to use DsaBuddy?",
    answer:
      "No, DsaBuddy is beginner-friendly with step-by-step explanations and foundational topics covered from scratch.",
  },
  {
    question: "Can I track my progress on DsaBuddy?",
    answer:
      "Not yet — progress tracking is coming soon in our next major update!",
  },
];

const Accordion = () => {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="collapse collapse-arrow bg-white/30 backdrop-blur-lg border border-gray-100 shadow-lg rounded-lg"
        >
          <input
            type="radio"
            name="faq-accordion"
            defaultChecked={index === 0}
          />
          <div className="collapse-title font-semibold text-gray-800 text-base">
            {faq.question}
          </div>
          <div className="collapse-content text-sm text-gray-700">
            {faq.answer}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;
