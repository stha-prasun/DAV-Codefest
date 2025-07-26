import React from "react";

const Accordion = () => {
  return (
    <>
      <div className="collapse collapse-arrow bg-white/30 backdrop-blur-lg border border-gray-100 shadow-lg">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          How does DsaBuddy help me learn DSA better?
        </div>
        <div className="collapse-content text-sm">
          DsaBuddy offers guided problem-solving, real-time AI feedback, and
          adaptive difficulty to deepen your understanding.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white/30 backdrop-blur-lg border border-gray-100 shadow-lg">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Do I need prior coding knowledge to use DsaBuddy?
        </div>
        <div className="collapse-content text-sm">
          No, DsaBuddy is beginner-friendly with step-by-step explanations and
          foundational topics covered from scratch.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white/30 backdrop-blur-lg border border-gray-100 shadow-lg">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Can I track my progress on DsaBuddy?
        </div>
        <div className="collapse-content text-sm">
          No! You cannot track your progress on DsaBuddy. We currently are
          working on the next update to include this feature.
        </div>
      </div>
    </>
  );
};

export default Accordion;
