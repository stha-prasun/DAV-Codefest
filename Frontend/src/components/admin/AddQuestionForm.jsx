import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";

const AddQuestionForm = () => {
  const [formData, setFormData] = useState({
    question: "",
    description: "",
    difficulty: "Easy",
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
    const { question, description, difficulty } = formData;

    if (!question || !description || !difficulty) {
      setError("All fields are required.");
      setSuccessMessage("");
    } else {
      setError("");
      setSuccessMessage("Question Added Successfully");
      console.log("Question Data:", formData);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background-dsa.png')" }}
      >
        <div className="w-full h-full bg-black/20 bg-opacity-10"></div>
      </div>

      {/* Glassy Form Container */}
      <div className="relative z-10 max-w-2xl w-full bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-xl p-8">
        <div className="flex justify-between items-center mb-6 px-2 space-x-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Add New Question
          </h2>
          <Link to="/admin/home">
            <button
              type="button"
              className="flex items-center gap-1 text-gray-400 hover:text-gray-500 text-sm px-3 py-1"
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
          {/* Question */}
          <div>
            <label className="block font-medium mb-1">Question</label>
            <input
              type="text"
              name="question"
              value={formData.question}
              onChange={handleChange}
              className="w-full border border-white/40 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded p-2"
              placeholder="Enter the question"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-white/40 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded p-2 h-28"
              placeholder="Explain the question briefly"
            ></textarea>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block font-medium mb-1">Difficulty</label>
            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="w-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 rounded p-2
             focus:outline-none focus:ring-0 focus:border-transparent"
            >
              <option className="text-black" value="Easy">
                Easy
              </option>
              <option className="text-black" value="Medium">
                Medium
              </option>
              <option className="text-black" value="Hard">
                Hard
              </option>
            </select>
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

export default AddQuestionForm;
