import React from 'react'
import { BookOpen, LogOut, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
    const navigate = useNavigate();

  const handleLogout = () => {};

  return (
    <div>
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
    </div>
  )
}

export default AdminSidebar
