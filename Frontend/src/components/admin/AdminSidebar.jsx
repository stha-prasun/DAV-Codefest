import React from "react";
import {
  BookOpen,
  Home,
  LogOut,
  MessageCircle,
  MessageCircleQuestionMark,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ADMIN_API_ENDPOINT } from "../../utils/constants";
import axios from "axios";
import { toast } from "react-hot-toast";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${ADMIN_API_ENDPOINT}/logout`,
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
    <div>
      <aside className="w-64 bg-[#080A16] text-white min-h-screen overflow-y-auto">
        {/* Header */}
        <div className="w-full border border-white/20 p-4 mb-3">
          <h1 className="text-2xl font-semibold font-sans ml-4">Admin Panel</h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 p-4">
          <Link
            to="/admin/home"
            className="flex items-center space-x-3 hover:bg-[#0c1756] p-3 rounded cursor-pointer transition"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/admin/course/add"
            className="flex items-center space-x-3 hover:bg-[#0c1756] p-3 rounded cursor-pointer transition"
          >
            <BookOpen className="w-5 h-5" />
            <span>Add Courses</span>
          </Link>

          <Link
            to="/admin/question/add"
            className="flex items-center space-x-3 hover:bg-[#0c1756] p-3 rounded cursor-pointer transition"
          >
            <BookOpen className="w-5 h-5" />
            <span>Add Question</span>
          </Link>

          <Link
            to="/admin/messages"
            className="flex items-center space-x-3 hover:bg-[#0c1756] p-3 rounded cursor-pointer transition"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Messages</span>
          </Link>

          <Link
            to="/admin/questions"
            className="flex items-center space-x-3 hover:bg-[#0c1756] p-3 rounded cursor-pointer transition"
          >
            <MessageCircleQuestionMark className="w-5 h-5" />
            <span>Questions</span>
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

export default AdminSidebar;
