import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
const AddCourseForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    overview: "",
    faq: "",
    details: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, subtitle, overview, faq, details } = formData;

    if (!title || !subtitle || !overview || !faq || !details) {
      setError("All fields are required.");
      setSuccessMessage("");
    } else {
      setError("");
      setSuccessMessage("Course Added Successfully");
      console.log("Course Data:", formData);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/background-dsa.png')",
        }}
      >
        {/* Add a semi-transparent overlay to darken the background slightly */}
        <div className="w-full h-full bg-black/20 bg-opacity-10"></div>
      </div>

      {/* Glassy Form Container */}
      <div className="relative z-10 max-w-2xl w-full bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-xl p-8">
        <div className="flex justify-between items-center mb-6 px-2 space-x-4">
          {/* Back Button */}
          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-4">
            Add New Course
          </h2>
          <Link to="/admin/home">
            <button
              type="button"
              className="flex items-center gap-1 border-none text-gray-400 hover:text-gray-500 text-sm bg-white/700 px-3 py-1 
              "
            >
              <TbArrowBackUp className="text-lg" />
              Back
            </button>
          </Link>
        </div>
        

        {error && <p className="text-red-500 mb-2">{error}</p>}
        {successMessage && (
          <p className="text-green-400 mb-2">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          {/* Title */}
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-white/40 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded p-2"
              placeholder="Course title"
            />
          </div>

          {/* Subtitle */}
          <div>
            <label className="block font-medium mb-1">Subtitle</label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              className="w-full border border-white/40 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded p-2"
              placeholder="Course subtitle"
            />
          </div>

          {/* Overview */}
          <div>
            <label className="block font-medium mb-1">Overview</label>
            <textarea
              name="overview"
              value={formData.overview}
              onChange={handleChange}
              className="w-full border border-white/40 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded p-2 h-24"
              placeholder="Brief course overview"
            ></textarea>
          </div>

          {/* FAQ */}
          <div>
            <label className="block font-medium mb-1">FAQ</label>
            <textarea
              name="faq"
              value={formData.faq}
              onChange={handleChange}
              className="w-full border border-white/40 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded p-2 h-24"
              placeholder="Frequently asked questions"
            ></textarea>
          </div>

          {/* Details */}
          <div>
            <label className="block font-medium mb-1">Details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="w-full border border-white/40 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded p-2 h-32"
              placeholder="Course details"
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-sm px-6 py-2 mt-2 bg-[#080A16] hover:bg-[#0c1756] text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseForm;
