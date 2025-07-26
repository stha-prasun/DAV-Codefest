import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import Navbar from "./shared/Navbar";
import { useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();

  const loggedInUser = useSelector((store) => store?.User?.loggedInUser);

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/");
    }
  }, []);

  const firstName = loggedInUser?.fullname?.trim().split(" ")[0] || "XYZ";

  const fields = [
    {
      label: "Profile Name",
      type: "text",
      value: loggedInUser?.fullname || "",
    },
    { label: "Username", type: "text", value: loggedInUser?.fullname || "" },
    { label: "Email", type: "email", value: loggedInUser?.email || "" },
  ];

  return (
    <>
      {/* Navbar fixed on top of background */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      <div
        className="relative flex min-h-screen flex-col overflow-x-hidden items-center justify-center pt-24 px-4 sm:px-6"
        style={{
          backgroundImage: "url('/profile-background.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          fontFamily: 'Inter, "Noto Sans", sans-serif',
        }}
      >
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-md sm:w-[480px] p-6 sm:p-8">
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
              className="w-24 h-24 sm:w-26 sm:h-26 rounded-full bg-cover bg-center mt-2"
              style={{
                backgroundImage: `url(https://avatar.iran.liara.run/username?username=${firstName})`,
              }}
            ></div>
          </div>

          {/* Form */}
          {fields.map((field, idx) => (
            <div key={idx} className="flex flex-wrap gap-4 py-3">
              <label className="flex flex-col flex-1 min-w-40 w-full">
                <p className="text-base font-medium text-[#121416] pb-2">
                  {field.label}
                </p>

                <input
                  type={field.type}
                  value={field.value}
                  readOnly
                  className="form-input w-full flex-1 rounded-xl border border-[#dde1e3] bg-white text-[#121416] p-[15px] h-10 placeholder:text-[#6a7681] text-base leading-normal focus:outline-none focus:ring-0 focus:border-[#dde1e3]"
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
