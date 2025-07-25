import React, { useState } from "react";

const Course = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <div className="text-gray-800">
        {/* Hero Section */}
        <div
          className="w-full h-[80vh] bg-center bg-cover relative flex items-center justify-center"
          style={{
            backgroundImage: `url('/background.png')`,
          }}
        >
          <div className="absolute bg-black/30 inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Test
            </h1>
            <p className="text-lg md:text-2xl mb-2">
              Test
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="bg-white px-4 md:px-20 mt-10">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {["overview", "faq"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm md:text-base rounded font-semibold ${
                  activeTab === tab ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-green-700 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "overview" && "OVERVIEW"}
                {tab === "faq" && "FAQ"}
              </button>
            ))}
          </div>
        </div>

        {/* Content and Course Details Section */}
        <div className="px-4 md:px-20 py-12 bg-white flex flex-col lg:flex-row gap-12">
          {/* Main Tab Content */}
          <div className="flex-1">
            {activeTab === "overview" && (
              "Test"
            )}
            {activeTab === "faq" && (
              "Test"
            )}
          </div>

          {/* Sidebar Course Details */}
          <div className="lg:w-[350px] w-full bg-gray-100 shadow-lg rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Course Details</h2>
            Test
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;