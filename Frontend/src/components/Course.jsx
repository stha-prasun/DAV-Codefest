import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";

const Course = () => {
  const navigate = useNavigate();

  const loggedInUser = useSelector((store) => store?.User?.loggedInUser);

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/");
    }
  }, []);

  const course = useSelector((store) => store.Course.Course);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <div className="text-gray-800">
        {/* Hero Section */}
        <div
          className="w-full h-[80vh] bg-center bg-cover relative flex items-center justify-center"
          style={{
            backgroundImage: `url('/code.jpg')`,
          }}
        >
          {/* Back Button (Top Left) */}
          <div className="absolute top-5 left-5 z-20">
            <Link to="/user/courses">
              <button
                type="button"
                className="flex items-center text-white hover:text-gray-200 text-base font-normal bg-black/40 px-3 py-1 rounded"
              >
                <span className="mr-1 text-xl">
                  <TbArrowBackUp />
                </span>
                Back
              </button>
            </Link>
          </div>

          {/* Overlay Text */}
          <div className="absolute bg-black/30 inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {course?.title}
            </h1>
            <p className="text-lg md:text-2xl mb-2">{course?.subtitle}</p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="bg-white px-4 md:px-20 mt-10">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {["overview", "faq"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm md:text-base rounded font-semibold ${
                  activeTab === tab
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 hover:bg-green-700 hover:text-white"
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
            {activeTab === "overview" && `${course?.overview}`}
            {activeTab === "faq" && `${course?.faq}`}
          </div>

          {/* Sidebar Course Details */}
          <div className="lg:w-[350px] w-full bg-gray-100 shadow-lg rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Course Details</h2>
            {`${course?.details}`}
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
