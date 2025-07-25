import React, { useState } from "react";

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
      console.log("Course Data:", formData); // Mock action
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-md shadow border">
      <h1 className="text-2xl font-bold mb-4">Add New Course</h1>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {successMessage && (
        <p className="text-green-600 mb-2">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
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
            className="w-full border border-gray-300 rounded p-2"
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
            className="w-full border border-gray-300 rounded p-2 h-24"
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
            className="w-full border border-gray-300 rounded p-2 h-24"
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
            className="w-full border border-gray-300 rounded p-2 h-32"
            placeholder="Course details"
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-sm px-4 py-2 hover:bg-[#0c1756] text-white rounded-md bg-[#080A16]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCourseForm;
