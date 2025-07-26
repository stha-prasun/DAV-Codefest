import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { motion } from "framer-motion";
import Demo from "./Demo";
import Footer from "./shared/Footer";
import { ChevronDown, X } from "lucide-react";

const DemoHeroPage = () => {
  const videoRef = useRef(null);
  const demoRef = useRef(null);
  const [showPopup, setShowPopup] = useState(true);

  const scrollToVideo = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDemo = () => {
    if (demoRef.current) {
      demoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Optionally you can auto-hide popup after a few seconds
    // const timer = setTimeout(() => setShowPopup(false), 8000);
    // return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: "url('././src/assets/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        <Navbar />
        <section className="min-h-[80vh] flex items-center px-4 md:px-20 text-white">
          <motion.div
            className="max-w-3xl space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[40px] md:text-[50px] font-bold leading-tight">
              Experience DsaBuddy in Action
              <br className="block" />
              See How It Helps You
              <br className="block" />
              Master DSA Faster
            </h1>
            <p className="text-base md:text-lg text-gray-200">
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
          >
            <ChevronDown className="w-6 h-6" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div ref={videoRef} className="relative">
        <div className="w-full aspect-video bg-black relative">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/2Vv-BfVoq4g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Video Popup Overlay */}
          {showPopup && (
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white p-6 z-20">
              <div className="text-center max-w-md">
                <h3 className="text-xl font-semibold mb-2">
                  Welcome to the Demo!
                </h3>
                <p className="text-sm text-gray-300">
                  Watch how DsaBuddy helps learners become confident in solving
                  DSA problems using Java.
                </p>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-6 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
              >
                Close & Watch Video
              </button>
              <button
                onClick={scrollToDemo}
                className="mt-4 inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur shadow-lg transition-all duration-300 hover:scale-105"
              >
                <ChevronDown className="w-6 h-6" strokeWidth={2} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Demo Editor Section */}
      <div ref={demoRef} className="demo-part">
        <Demo />
      </div>

      <Footer />
    </div>
  );
};

export default DemoHeroPage;
