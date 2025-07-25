import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Link } from "react-router-dom";
import { Code2, Bot, Gauge } from "lucide-react";

const About = () => {
  return (
    <div className="relative bg-light font-sans antialiased ">
      {/* Hero Section with Background and Navbar */}
      <section className="relative min-h-screen text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('././src/assets/background.png')" }}
        ></div>

        {/* Navbar inside Hero */}
        <Navbar />

        {/* Hero Content */}
        <div className="min-h-[80vh] flex items-center justify-start h-full px-50">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-[42px] md:text-[50px] font-bold leading-tight">
              Behind DsaBuddy-
              <br className="block" />
              Shaping Better Coders
              <br className="block" />
              Through Smart Learning
            </h1>
            <p className="text-lg text-gray-200 max-w-xl">
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
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className=" mx-auto px-6 py-24 bg-[#FEFEFF]">
        {/* Project Overview */}
        <section className="mb-20">
          {/* Heading Container */}
          <div className="relative z-10 px-9">
            <h2 className="text-4xl font-sans font-medium text-[#080A16] mb-20">
              Project Overview
            </h2>
          </div>

          {/* Full-width Horizontal Line */}
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
            <hr className="border-t border-gray-300 mb-10" />
          </div>

          {/* Content: Text and Image side by side with equal height */}
          <div className="flex flex-col md:flex-row items-stretch gap-12 h-full px-6">
            {/* Text Section */}
            <div className="w-full md:w-3/5 flex">
              <div className="bg-white rounded-lg flex items-center">
                <p className="text-gray-700 leading-relaxed">
                  DsaBuddy was born out of a deep understanding that traditional
                  DSA learning methods—relying heavily on passive reading—often
                  fall short in delivering real comprehension. Our platform
                  reimagines this journey by focusing on active problem-solving,
                  practical thinking, and immediate feedback. Every feature of
                  DsaBuddy is built to enhance engagement. Learners are not just
                  given problems—they are guided with smart suggestions, logical
                  checkpoints, and real-time AI insights. Our goal is to help
                  users not only solve problems, but to understand the{" "}
                  <em>why</em> behind every step. We leverage modern educational
                  techniques and responsive feedback to help learners develop
                  critical thinking. As your skill evolves, our system adapts to
                  ensure the difficulty matches your learning curve—no more
                  one-size-fits-all problems. Whether you're prepping for your
                  first technical interview, looking to master fundamentals, or
                  just strengthening your coding brain, DsaBuddy delivers a
                  dynamic, interactive, and personalized environment to grow
                  with confidence. Beyond just learning, DsaBuddy emphasizes
                  progress tracking and motivation. Users can visualize their
                  journey with real-time analytics, personalized improvement
                  paths, and goal-based challenges. This gamified approach turns
                  practice into a rewarding habit. Collaboration is also at the
                  core of DsaBuddy. With peer leaderboards, discussion boards,
                  and community-curated challenges, learners stay inspired and
                  connected. Our mission is to redefine how students and
                  professionals approach DSA—not as a barrier to clear, but as a
                  foundation to excel. With DsaBuddy, we’re not just teaching
                  data structures and algorithms—we’re nurturing problem
                  solvers, creative thinkers, and confident coders.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-2/5">
              <img
                src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="AI and DSA"
                className="rounded-[10px] border-[1px] border-black w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className=" p-18 ">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#080A16] mb-6 tracking-tight">
              Our Mission
            </h2>
            <p className="text-lg  text-gray-700 mb-20 font-light max-w-3xl mx-auto">
              “To make DSA learning efficient and enjoyable by blending real
              coding challenges with real-time AI feedback and mentorship.”
            </p>

            <div className="flex flex-wrap justify-center gap-10">
              {/* Card 1 */}
              <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full sm:w-72 transition duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
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
              <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full sm:w-72 transition duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
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
              <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full sm:w-72 transition duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
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
