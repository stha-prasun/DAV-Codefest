import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const loggedInUser = useSelector((store) => store.User.loggedInUser);
  const navigate = useNavigate();

  return (
    <>
      <nav
        className="bg-cover bg-center text-white"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-[10px] px-4">
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

          {/* Hamburger Icon (Mobile) */}
          <button
            className="text-white md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Links */}
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
                Demo
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

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <ul className="absolute top-[60px] left-0 w-full bg-[#080A16] flex flex-col items-center gap-4 py-4 md:hidden z-50">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-300 transition-colors font-normal"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/demo"
                  className="hover:text-gray-300 transition-colors font-normal"
                  onClick={() => setIsOpen(false)}
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-300 transition-colors font-normal"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          )}

          <div className="hidden md:block">
            {!loggedInUser ? (
              <Link to="/login">
                <button className="bg-white hover:text-white hover:bg-[#080A16] text-blue-950 font-medium py-[4px] px-[24px] rounded-3xl transition-colors flex justify-center items-center text-center w-fit group">
                  <span className="w-full text-center text-[16px] font-medium transition-transform duration-300 group-hover:-translate-y-0.5">
                    Get Started
                  </span>
                </button>
              </Link>
            ) : (
              <img
                src={`https://avatar.iran.liara.run/username?username=${loggedInUser?.fullname}`}
                onClick={() => navigate(`/profile/${loggedInUser._id}`)}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            )}
          </div>
        </div>

        {/* Mobile Button Placement */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <Link to="/login">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-white w-full hover:text-white hover:bg-[#080A16] text-blue-950 font-medium py-2 px-6 rounded-3xl transition-colors text-center group"
              >
                <span className="text-[16px] font-medium transition-transform duration-300 group-hover:-translate-y-0.5">
                  Get Started
                </span>
              </button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
