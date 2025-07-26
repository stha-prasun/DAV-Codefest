import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import axios from "axios";
import { COURSE_API_ENDPOINT } from "../../utils/constants";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const EditCourseForm = () => {
  const navigate = useNavigate();

  const admin = useSelector((store) => store.Admin.Admin);

  useEffect(() => {
    if (!admin) {
      navigate("/");
    }
  }, []);

  const course = useSelector((store) => store.Course.Course);

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
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-16">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/background-dsa.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-xl px-6 py-10 md:px-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Edit Course</h2>
          <Link to="/admin/home">
            <button className="flex items-center gap-1 text-white hover:text-gray-300 text-sm">
              <TbArrowBackUp className="text-lg" />
              Back
            </button>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-white">
          {["title", "subtitle"].map((field) => (
            <div key={field}>
              <label className="block font-medium mb-1 capitalize">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border border-white/40 bg-white/10 text-white placeholder-white/60 rounded p-2 backdrop-blur-sm"
                placeholder={`Enter ${field}`}
              />
            </div>
          ))}

          {["overview", "faq", "details"].map((field) => (
            <div key={field}>
              <label className="block font-medium mb-1 capitalize">
                {field}
              </label>
              <textarea
                name={field}
                value={formData[field]}
                onChange={handleChange}
                rows={field === "details" ? 6 : 4}
                className="w-full border border-white/40 bg-white/10 text-white placeholder-white/60 rounded p-2 backdrop-blur-sm"
                placeholder={`Enter ${field}`}
              ></textarea>
            </div>
          ))}

          <button
            type="submit"
            className="text-sm px-6 py-2 bg-[#080A16] hover:bg-[#0c1756] text-white rounded-md"
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourseForm;
