import React, { useState } from "react";
import { BookOpen, Home, LogOut, User, Menu, Wrench } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constants";
import toast from "react-hot-toast";

const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const loggedInUser = useSelector((store) => store.User.loggedInUser);

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${USER_API_ENDPOINT}/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      {/* Hamburger Menu - visible only on mobile */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-[#080A16] text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#080A16] text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 transition-transform duration-300 ease-in-out z-40 overflow-y-auto`}
      >
        {/* Header */}
        <div className="w-full border border-white/20 p-4 mb-3">
          <h1 className="text-2xl font-semibold font-sans ml-12">User Panel</h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 p-4">
          <Link
            to="/user/home"
            className="flex items-center space-x-3 hover:bg-[#0c1756] p-3 rounded cursor-pointer transition"
            onClick={() => setIsOpen(false)}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>

          {loggedInUser?.isPremium && (
            <Link
              to="/user/courses"
              className="flex items-center space-x-3 hover:bg-[#0c1756] p-3 rounded cursor-pointer transition"
              onClick={() => setIsOpen(false)}
            >
              <BookOpen className="w-5 h-5" />
              <span>Courses</span>
            </Link>
          )}

          <Link
            to={"/membership/buy"}
            className="flex items-center space-x-3 hover:bg-[#0c1756] p-3 rounded cursor-pointer transition"
            onClick={() => setIsOpen(false)}
          >
            <Wrench className="w-5 h-5" />
            <span>Upgarde Plan</span>
          </Link>

          <Link
            to={`/profile/${loggedInUser?._id}`}
            className="flex items-center space-x-3 hover:bg-[#0c1756] p-3 rounded cursor-pointer transition"
            onClick={() => setIsOpen(false)}
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </Link>

          <div className="w-full mt-6 border-t border-white/30" />

          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 hover:bg-[#0c1756] p-3 rounded cursor-pointer transition w-full text-left mt-6"
            type="button"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </nav>
      </aside>
    </div>
  );
};

export default UserSidebar;
