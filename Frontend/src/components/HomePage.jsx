import React from "react";
import Navbar from "./shared/Navbar";
import Faq from "./Faq";
import Footer from "./shared/Footer";
import { Link } from "react-router-dom";
import Teams from "./teams";
import { motion } from "framer-motion";

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
          <section className="min-h-[80vh] flex items-center px-4 md:px-50 text-white">
            <motion.div
              className="max-w-3xl space-y-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[40px] md:text-[50px] font-bold leading-tight">
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
              <motion.div
                className="group"
               
              >
                <Link to="/signup">
                  <button className="px-6 py-2 rounded-full bg-white/30 backdrop-blur-md text-gray-800 font-medium shadow-md hover:text-white hover:bg-[#080A16] ">
                    <span>Sign up for free</span>
                  </button>
                </Link>
              </motion.div>
            </motion.div>
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
