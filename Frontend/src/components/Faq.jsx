import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <section className="py-24 px-6 mb-14  text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-regular text-[#080A16] mb-14 leading-tight">
        Frequently Asked <br /> Questions
      </h2>

      <div className="max-w-5xl mx-auto rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-8 py-10 shadow-lg">
        <div className="text-left space-y-6 text-gray-700">
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default Faq;
