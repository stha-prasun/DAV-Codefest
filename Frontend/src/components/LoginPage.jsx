import React, { useState, useEffect } from "react";
import axios from "axios";  // <-- Add this line
import { GoPerson } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { USER_API_ENDPOINT } from "../utils/constants";
import { setLoggedInUser } from "../redux/userSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const testimonials = [
  {
    name: "Cameron Williamson",
    position: "Software Engineer / TechNova",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "DSA Buddy has been a game-changer for mastering Java algorithms. The platform is intuitive and makes complex concepts easy to grasp.",
  },
  {
    name: "Sarah Kim",
    position: "Frontend Developer / CodeCraft",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "DSA Buddy has been a game-changer for mastering Java algorithms. The platform is intuitive and makes complex concepts easy to grasp.",
  },
  {
    name: "Rajesh Mehta",
    position: "Backend Developer / DevSphere",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
    feedback:
      "DSA Buddy has been a game-changer for mastering Java algorithms. The platform is intuitive and makes complex concepts easy to grasp.",
  },
];

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.elements[0].value;
    const password = form.elements[1].value;

    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, { email, password }, {withCredentials: true});
      console.log("Login success:", res.data);
      if(res?.data?.success){
        dispatch(setLoggedInUser(res?.data?.loggedInUser));
        toast.success(res?.data?.message);
        navigate("/user/home");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Right side: login */}
      <div className="flex flex-col w-[40%] px-12 py-8 bg-white">
        {/* Top Register link */}
        <div className="flex justify-between items-center mb-6">
          <img
            src="././src/assets/logo_black.png"
            alt="logo"
            className="h-7 w-auto"
          />
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">
              Don’t have an account?
            </span>
            <div className="flex justify-center">
              <Link to="/signup">
                <button
                  type="button"
                  className="px-4 py-[4px] text-sm font-medium text-gray-900 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                  onClick={() => {
                    console.log("Register button clicked");
                  }}
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Centered login box */}
        <div className="flex flex-col justify-center items-center flex-grow">
          <div className="mb-6">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle, #ffffff 40%, #e6e4e4 100%)",
                boxShadow:
                  "inset -10px -10px 30px rgba(255,255,255,0.9), 10px 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                <GoPerson className="w-9 h-9 text-gray-900" />
              </div>
            </div>
          </div>
          <div className="mb-2 text-4xl font-semibold text-center text-black">
            Log into your account
          </div>
          <p className="text-[#656565] mb-10">Enter your login details.</p>

          {/* Attach handleSubmit here */}
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                placeholder="example15@gmail.com"
                className="w-full h-[80%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring text-black focus:border-black"
                required
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password*
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-3 py-2 pr-16 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring text-black focus:border-black"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-9 text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Login
            </button>
          </form>
        </div>

        {/* Back Button aligned with logo */}
        <div className="mt-9">
          <Link to="/">
            <button
              type="button"
              className="flex items-center text-gray-500 hover:text-gray-700 text-base font-normal"
              onClick={() => {
                console.log("Back button clicked");
              }}
            >
              <span className="mr-1 text-xl">
                <TbArrowBackUp />
              </span>{" "}
              Back
            </button>
          </Link>
        </div>
      </div>

      {/* Left side: Testimonials slider */}
      <div className="w-[60%] py-2 pl-2 bg-white">
        <div
          className="h-full w-full rounded-xl overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: "url('././src/assets/login-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "2rem",
          }}
        >
          <div className="max-w-md text-center p-8">
            <h2 className="text-3xl font-serif font-medium mb-6 text-gray-900">
              Testimonials
            </h2>
            <div className="p-2 transition duration-500 ease-in-out">
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[activeIndex].photo}
                  alt="Avatar"
                  className="w-11 h-11 rounded-full mr-3 border-2 border-[#FFA463] shadow-sm"
                />
              </div>
              <p className="text-gray-700 font-sans text-left w-full mb-4">
                "{testimonials[activeIndex].feedback}"
              </p>
              <div className="text-left">
                <p className="text-gray-900 font-medium">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-xs text-[#080A16]" style={{ opacity: 0.6 }}>
                  {testimonials[activeIndex].position}
                </p>
              </div>
              <div className="flex justify-start mt-4 space-x-2">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-300 ${
                      i === activeIndex
                        ? "w-6 h-2 bg-[#2C2C33] rounded-full"
                        : "w-2 h-2 bg-[#BB5A00] rounded-full"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
