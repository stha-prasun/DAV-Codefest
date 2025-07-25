import React from "react";
import { Link } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import Navbar from "./shared/Navbar";

const Profile = () => {
  return (
    <>
      {/* Navbar fixed on top of background */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      <div
        className="relative flex min-h-screen flex-col overflow-x-hidden items-center justify-center pt-20"
        style={{
          backgroundImage: "url('/profile-background.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          fontFamily: 'Inter, "Noto Sans", sans-serif',
        }}
      >
        <div className="bg-white shadow-xl rounded-2xl w-[480px] p-8">
          <Link to="/">
            <button
              type="button"
              className="flex items-center text-gray-500 hover:text-gray-700 text-base font-normal"
            >
              <span className="mr-1 text-xl">
                <TbArrowBackUp />
              </span>{" "}
              Back
            </button>
          </Link>

          <div className="flex flex-col items-center mb-6">
            <p className="text-[22px] font-bold text-center text-[#121416] tracking-[-0.015em] mt-4">
              Profile Picture
            </p>
            <div
              className="w-26 h-26 rounded-full bg-cover bg-center mt-2"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCf5S2DVcn0QDy68aUiGHaP8o71P6GgMWtPqbbxOY_J1Nky1gGkUL4rrnQagwYi_PUglWG77bpnqbhYYr2W1cqRGDcaslBukp-YttdCLYqy6MSBR8SFit7xLNj0QBwBB7WUVVWRBx9S6Tp-7ruFsiO6u-vsrsZYHBMcmGoNeU_A5s2WjoDNIozI7HaVtnNVsz66KhdE8b7deGxKrQo7FRr6tUU2oJVsN79wlUtffEIVouLTmfhNg93O9FRn56sVIKjRq6wanPcdyZC4')",
              }}
            ></div>
          </div>

          {/* Form */}
          {[
            { label: "Profile Name", type: "text" },
            { label: "Username", type: "text" },
            { label: "Email", type: "email" },
          ].map((field, idx) => (
            <div key={idx} className="flex max-w-[480px] flex-wrap gap-4 py-3">
              <label className="flex flex-col flex-1 min-w-40">
                <p className="text-base font-medium text-[#121416] pb-2">
                  {field.label}
                </p>

                <input
                  type={field.type}
                  value={""}
                  readOnly
                  className="form-input w-full flex-1 rounded-xl border border-[#dde1e3] bg-white text-[#121416] p-[15px] h-10 placeholder:text-[#6a7681] text-base leading-normal focus:outline-none focus:ring-0 focus:border-[#dde1e3]"
                  defaultValue=""
                />
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
