import React from "react";
import Navbar from "./shared/Navbar";
import Faq from "./Faq";
import Teams from "./teams";
import Footer from "./shared/Footer";
const HomePage = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: "url('././src/assets/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div>
          <section className="min-h-[80vh] flex items-center px-50 text-white">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-[50px] font-bold leading-tight">
                Master DSA in Java-
                <br className="block" />
                Accelerate Your
                <br className="block" />
                Coding Future
              </h1>
              <p className="text-base md:text-lg text-gray-200">
                Sharpen your programming skills and ace technical interviews by
                mastering Data Structures & Algorithms in Java.
              </p>
              <div className="group">
                <button className="px-6 py-2 rounded-full bg-white/30 backdrop-blur-md text-gray-800 font-medium shadow-md hover:text-white hover:bg-[#080A16] transition-all">
                  <span className="">Sign up for free</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Teams />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
