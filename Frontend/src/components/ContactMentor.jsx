import React from "react";

const ContactMentor = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/background.png')",
        fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif',
      }}
    >
      <div className="w-full max-w-3xl px-6 py-10 bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-[#141414] text-left mb-6 px-2">
          Contact Your Mentor
        </h2>

        <div className="px-2 mb-4">
          <label className="block w-full">
            <textarea
              placeholder="Write your message here"
              className="w-full resize-none rounded-xl border border-gray-300 bg-neutral-50 text-[#141414] p-4 h-36 text-base placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-black"
            ></textarea>
          </label>
        </div>

        <div className="px-2 text-left">
          <button className="px-5 py-2 rounded-xl bg-black text-white font-semibold text-sm hover:bg-gray-900 transition cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMentor;