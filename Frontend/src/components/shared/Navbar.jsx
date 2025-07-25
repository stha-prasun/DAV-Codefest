import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <nav
        className="bg-cover bg-center text-white"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-[10px]">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="././src/assets/logo.png"
                alt="Company Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-medium cursor-pointer">
                DsaBuddy
              </span>
            </Link>
          </div>

          <ul className="hidden md:flex gap-6 list-none m-0 p-0">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 transition-colors font-normal"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#product"
                className="hover:text-gray-300 transition-colors font-normal"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 transition-colors font-normal"
              >
                About
              </Link>
            </li>
          </ul>
          <div>
            <Link to="/login">
              <button className="bg-white hover:text-white hover:bg-[#080A16] text-blue-950 font-medium py-[4px] px-[24px] rounded-3xl transition-colors flex justify-center items-center text-center w-fit group">
                <span className="w-full text-center text-[16px] font-medium transition-transform duration-300 group-hover:-translate-y-0.5">
                  Get Started
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav> */}

      <nav
        className="bg-cover bg-center text-white"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-[10px] px-1">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="././src/assets/logo.png"
                alt="Company Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-medium cursor-pointer">
                DsaBuddy
              </span>
            </Link>
          </div>
          <ul className="hidden md:flex gap-6 list-none m-0 p-0">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 transition-colors font-normal"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/demo"
                className="hover:text-gray-300 transition-colors font-normal"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 transition-colors font-normal"
              >
                About
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar relative group"
              >
                <div className="absolute inset-0 w-14 h-14 -top-2 -left-2 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 scale-125 group-hover:scale-150 transition-all duration-500 blur-md z-0"></div>

                <div className="w-10 rounded-full relative z-10 overflow-hidden ring-2 ring-transparent transform transition-transform duration-300 group-hover:scale-110">
                  <img
                    alt="User Avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf5S2DVcn0QDy68aUiGHaP8o71P6GgMWtPqbbxOY_J1Nky1gGkUL4rrnQagwYi_PUglWG77bpnqbhYYr2W1cqRGDcaslBukp-YttdCLYqy6MSBR8SFit7xLNj0QBwBB7WUVVWRBx9S6Tp-7ruFsiO6u-vsrsZYHBMcmGoNeU_A5s2WjoDNIozI7HaVtnNVsz66KhdE8b7deGxKrQo7FRr6tUU2oJVsN79wlUtffEIVouLTmfhNg93O9FRn56sVIKjRq6wanPcdyZC4"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 text-white rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile/:id" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/UpgradePlan">Upgrade plan</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
