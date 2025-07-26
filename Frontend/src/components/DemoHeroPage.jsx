import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { motion } from "framer-motion";
import Demo from "./Demo";
import Footer from "./shared/Footer";
import { ChevronDown } from "lucide-react";

const DemoHeroPage = () => {
  const demoRef = useRef(null);

  // Scroll to the video section by id
  const scrollToVideo = () => {
    const videoSection = document.getElementById("video-section");
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll to demo section using ref
  const scrollToDemo = () => {
    if (demoRef.current) {
      demoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#080A16] min-h-screen text-white">
      {/* Hero Section */}
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        <Navbar />
        <section className="min-h-[80vh] flex items-center px-50">
          <motion.div
            className="max-w-3xl space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[40px] md:text-[50px] font-bold leading-tight">
              Experience DsaBuddy in Action
              <br />
              See How It Helps You
              <br />
              Master DSA Faster
            </h1>
            <p className="text-base md:text-lg text-gray-300">
              Explore our interactive platform that simplifies Data Structures &
              Algorithms in Java. Get hands-on with the tools and features that
              make DsaBuddy your perfect coding companion.
            </p>
            <motion.div className="group">
              <Link to="/signup">
                <button className="px-6 py-2 rounded-full bg-white/30 backdrop-blur-md text-gray-800 font-medium shadow-md hover:text-white hover:bg-[#080A16] transition">
                  <span>Try the Demo</span>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Scroll Down Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <button
            onClick={scrollToVideo}
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-black p-3 rounded-full backdrop-blur shadow-lg transition-all duration-300 hover:scale-105"
            aria-label="Scroll down to video section"
          >
            <ChevronDown className="w-6 h-6" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div
        id="video-section"
        className="relative bg-black py-10"
      >
        <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/2Vv-BfVoq4g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Scroll Button to Demo Section */}
        <div className="flex justify-center py-8">
          <button
            onClick={scrollToDemo}
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur shadow-lg transition-all duration-300 hover:scale-105 animate-bounce"
            aria-label="Scroll down to demo editor"
          >
            <ChevronDown className="w-6 h-6" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Demo Editor Section */}
      <div
        ref={demoRef}
        className="demo-part bg-[#f8f9fa]"
      >
        <Demo />
      </div>

      <Footer />
    </div>
  );
};

export default DemoHeroPage;
