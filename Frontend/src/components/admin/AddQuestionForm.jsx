import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { QUESTIONS_API_ENDPOINT } from "../../utils/constants";
import toast from "react-hot-toast";
import axios from "axios";

const AddQuestionForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    question: "",
    description: "",
    difficulty: "Easy",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${QUESTIONS_API_ENDPOINT}/add`, {
        question: formData.question,
        description: formData.description,
        difficulty: formData.difficulty
      }, { withCredentials: true });

      if(res.data.success){
        toast.success(res.data.message);
        navigate("/admin/home");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
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
