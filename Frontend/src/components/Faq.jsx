import React from "react";
import Accordion from "./Accordion";
import Footer from "./shared/Footer";
const Faq = () => {
  return (
    <>
      <section className="py-24 px-6 text-center bg-[#FEFEFF]">
        <h2 className="text-5xl font-serif font-medium text-[#080A16] mb-14 leading-tight">
          Frequently Asked <br /> Questions
        </h2>

        <div className="max-w-5xl mx-auto rounded-2xl px-8 py-10">
          <div className="text-left space-y-6 text-gray-700">
            <Accordion />
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
