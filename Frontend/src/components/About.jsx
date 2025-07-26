import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Link } from "react-router-dom";
import { Code2, Bot, Gauge } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative bg-light font-sans antialiased">
      {/* Hero Section */}
      <section
        className="relative min-h-screen text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('././src/assets/background.png')" }}
      >
        <Navbar />
        <div className="min-h-[80vh] flex items-center px-4 md:px-16 text-white">
          <motion.div
            className="max-w-3xl space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[40px] md:text-[50px] font-bold leading-tight">
              Behind DsaBuddy -
              <br className="block" />
              Shaping Better Coders
              <br className="block" />
              Through Smart Learning
            </h1>
            <p className="text-base md:text-lg text-gray-200">
              Learn Data Structures and Algorithms by solving real coding
              challenges, assisted by intelligent AI suggestions.
            </p>
            <div className="group">
              <Link to="/signup">
                <button className="px-6 py-2 rounded-full bg-white/30 backdrop-blur-md text-gray-800 font-medium shadow-md hover:text-white hover:bg-[#080A16] transition-all">
                  Try us for free!
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto px-6 py-24 bg-[#FEFEFF]">
        {/* Project Overview */}
        <section className="mb-20">
          <div className="relative z-10 px-6">
            <h2 className="text-4xl font-sans font-medium text-[#080A16] mb-8">
              Project Overview
            </h2>
          </div>

          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-[50vw]">
            <hr className="border-t border-gray-300 mb-10" />
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Text Section */}
            <div className="w-full lg:w-3/5 bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed text-base">
                DsaBuddy was born out of a deep understanding that traditional
                DSA learning methods—relying heavily on passive reading—often
                fall short in delivering real comprehension.
                <br />
                <br />
                Our platform reimagines this journey by focusing on active
                problem-solving, practical thinking, and immediate feedback.
                Every feature of DsaBuddy is built to enhance engagement.
                Learners are not just given problems—they are guided with smart
                suggestions, logical checkpoints, and real-time AI insights.
                <br />
                <br />
                Whether you're prepping for your first technical interview,
                mastering fundamentals, or strengthening your coding brain,
                DsaBuddy delivers a dynamic, interactive, and personalized
                environment to grow with confidence.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-2/5">
              <img
                src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="AI and DSA"
                className="rounded-[10px] border border-black w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="p-18">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#080A16] mb-6 tracking-tight">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-20 font-light max-w-3xl mx-auto">
              “To make DSA learning efficient and enjoyable by blending real
              coding challenges with real-time AI feedback and mentorship.”
            </p>

            <div className="flex flex-wrap justify-center gap-10">
              {/* Card 1 */}
              <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full sm:w-72 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-center mx-auto w-16 h-16 bg-primary-100 rounded-full mb-5">
                  <Code2 className="w-7 h-7 text-[#080A16] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg text-[#080A16] mb-2">
                  Practice-Oriented
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Solve real problems, learn by doing, and build muscle memory
                  for technical interviews.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full sm:w-72 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-center mx-auto w-16 h-16 bg-primary-100 rounded-full mb-5">
                  <Bot className="w-7 h-7 text-[#080A16] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg text-[#080A16] mb-2">
                  AI-Powered Help
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get smart hints, detect logic flaws, and improve with instant
                  feedback from our AI coach.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full sm:w-72 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-center mx-auto w-16 h-16 bg-primary-100 rounded-full mb-5">
                  <Gauge className="w-7 h-7 text-[#080A16] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-lg text-[#080A16] mb-2">
                  Efficient Learning
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Personalized roadmaps and adaptive challenges help you
                  progress faster with clarity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
