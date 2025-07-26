import React from "react";
import { motion } from "framer-motion";
import Accordion from "./Accordion";
import Footer from "./shared/Footer";

const Faq = () => {
  return (
    <>
      <section className="py-24 px-6 text-center bg-[#FEFEFF]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-serif font-medium text-[#080A16] mb-14 leading-tight"
        >
          Frequently Asked <br /> Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto bg-white/30 backdrop-blur-xl rounded-2xl px-8 py-10 shadow-xl border border-gray-100"
        >
          <div className="text-left space-y-6 text-gray-700">
            <Accordion />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Faq;
