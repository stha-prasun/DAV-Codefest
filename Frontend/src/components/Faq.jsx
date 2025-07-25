import React from "react";

const Faq = () => {
  return (
    <section className="py-24 px-6 mb-14  text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-regular text-[#080A16] mb-14 leading-tight">
        Frequently Asked <br /> Questions
      </h2>

      <div className="max-w-5xl mx-auto rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-8 py-10 shadow-lg">
        <div className="text-left space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold">
              What is this course about?
            </h3>
            <p className="text-gray-600">
              This course teaches Data Structures and Algorithms in Java,
              helping you ace technical interviews and build strong
              problem-solving skills.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Do I need Java experience?
            </h3>
            <p className="text-gray-600">
              A basic understanding is helpful, but we provide resources to
              guide beginners too.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Will I get a certificate?</h3>
            <p className="text-gray-600">
              Yes! You'll receive a certificate after successfully completing
              the course and final assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
