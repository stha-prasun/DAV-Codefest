import React from "react";
import { BookOpen, LogOut, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AdminCourseCard from "./AdminCourseCard";

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {};

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-600 text-white min-h-screen overflow-y-auto">
        {/* Header */}
        <div className="w-full border border-white/20 p-4 mb-3">
          <h1 className="text-2xl font-semibold font-sans ml-4">Admin Panel</h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 p-4">
          <Link
            to="/admin/add-course"
            className="flex items-center space-x-3 hover:bg-emerald-700 p-3 rounded cursor-pointer transition"
          >
            <BookOpen className="w-5 h-5" />
            <span>Add Courses</span>
          </Link>

          <Link
            to="/admin/messages"
            className="flex items-center space-x-3 hover:bg-emerald-700 p-3 rounded cursor-pointer transition"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Messages</span>
          </Link>

          <div className="w-full mt-6 border-t border-white/30" />
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 hover:bg-emerald-700 p-3 rounded cursor-pointer transition w-full text-left mt-6"
            type="button"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto min-h-screen">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
          Welcome, Admin
        </h2>

        <section id="courses" className="mt-8">
          <div className="border border-dashed border-gray-300 rounded-lg bg-white p-6">
            <div className="text-xl font-medium text-gray-700 mb-4">
              Courses
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <AdminCourseCard title="test" description="test" id={1} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;
