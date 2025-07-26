import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import axios from "axios";
import { COURSE_API_ENDPOINT } from "../../utils/constants";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
const EditCourseForm = () => {
  const navigate = useNavigate();
  const course = useSelector((store)=>store.Course.Course);

  const [formData, setFormData] = useState({
    id: course._id,
    title: course.title,
    subtitle: course.subtitle,
    overview: course.overview,
    faq: course.faq,
    details: course.details,
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
      const res = await axios.post(
        `${COURSE_API_ENDPOINT}/update`,
        {
          id: formData.id,
          title: formData.title,
          subtitle: formData.subtitle,
          overview: formData.overview,
          faq: formData.faq,
          details: formData.details,
        },
        { withCredentials: true }
      );

      if (res.data.success) {
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
          <h2 className="text-3xl font-bold text-white mb-4">Edit Course</h2>
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

export default EditCourseForm;
