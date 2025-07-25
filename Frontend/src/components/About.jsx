import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const About = () => {
  return (
    <div className="relative bg-light font-sans antialiased">
      {/* Fixed Fullscreen Background Image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/background.png')" }}
      ></div>

      <Navbar />

      {/* Hero Section */}
      <header className="bg-black bg-opacity-60 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About DsaBuddy</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Learn Data Structures and Algorithms by solving real coding challenges,
            assisted by intelligent AI suggestions.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-dark mb-6">
                Project Overview
              </h2>
              <p className="text-gray-700 mb-4">
                DsaBuddy started with a vision to make DSA learning interactive,
                practical, and intelligent. Instead of reading theory endlessly,
                learners can practice curated problems that evolve with their
                skill level.
              </p>
              <p className="text-gray-700 mb-4">
                Our platform doesn’t just show you the problem—it guides you
                through logic breakdowns, points out common pitfalls, and
                explains time complexities dynamically using our AI assistant.
              </p>
              <p className="text-gray-700">
                Whether you’re preparing for interviews or just sharpening your
                coding brain, DsaBuddy is your all-in-one personalized DSA tutor
                and playground.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="AI and DSA"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-primary-50 rounded-xl p-12 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-8">
              "To make DSA learning efficient and enjoyable by blending real
              coding challenges with real-time AI feedback and mentorship."
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                <div className="text-primary-600 mb-4">
                  <i className="fas fa-code text-3xl"></i>
                </div>
                <h3 className="font-bold text-dark mb-2">Practice-Oriented</h3>
                <p className="text-gray-600">
                  Solve real problems, learn by doing, and build muscle memory
                  for interviews.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                <div className="text-primary-600 mb-4">
                  <i className="fas fa-robot text-3xl"></i>
                </div>
                <h3 className="font-bold text-dark mb-2">AI-Powered Help</h3>
                <p className="text-gray-600">
                  Our AI coach provides hints, detects logic errors, and gives
                  performance tips instantly.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                <div className="text-primary-600 mb-4">
                  <i className="fas fa-bolt text-3xl"></i>
                </div>
                <h3 className="font-bold text-dark mb-2">Efficient Learning</h3>
                <p className="text-gray-600">
                  Track progress and tackle weaknesses with personalized
                  roadmaps and smart difficulty scaling.
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
