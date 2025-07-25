import React from "react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-center items-center w-[40%] p-12 bg-white">
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center relative">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 18a3.75 3.75 0 00-7.5 0m7.5 0A3.75 3.75 0 0112 21.75m3.75-3.75H8.25m7.5 0a6 6 0 00-12 0m12 0a6 6 0 01-12 0m12 0V6.75A3.75 3.75 0 0012 3a3.75 3.75 0 00-3.75 3.75v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-2 text-4xl font-semibold text-center text-black">
          Log into your account
        </div>
        <p className="text-[#656565] mb-10">Enter your login details.</p>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              placeholder="example15@gmail.com"
              className="w-full h-[80%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password*
            </label>
            <input
              type="password"
              className="w-full h-[80%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-black font-semibold">
            Register
          </a>
        </div>
      </div>

      {/* Right Side - Testimonial */}
      <div className="w-[60%] py-2 px-2 bg-white">
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
            <div className="p-2">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avatar"
                  className="w-11 h-11 rounded-full mr-3 border-2 border-[#FFA463] shadow-sm"
                />
              </div>
              <p className="text-gray-700 font-sans text-left w-full">
                "DSA Buddy has been a game-changer for mastering Java
                algorithms. The platform is intuitive and makes complex concepts
                easy to grasp. Highly recommended!"
              </p>
              <div className="mt-4">
                <p className="text-gray-900 font-medium text-left">
                  Cameron Williamson
                </p>
                <p
                  className="text-xs text-[#080A16] text-left"
                  style={{ opacity: 0.6 }}
                >
                  Software Engineer / TechNova
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
