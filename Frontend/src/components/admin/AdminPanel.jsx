import React, { useEffect } from "react";
import AdminCourseCard from "./AdminCourseCard";
import AdminSidebar from "./AdminSidebar";
import useGetAllCourses from "../../hooks/useGetAllCourses";
import { useSelector } from "react-redux";

const AdminPanel = () => {
  const fetchCourses = useGetAllCourses();

  useEffect(() => {
    fetchCourses();
  }, []);

  const courses = useSelector((store) => store.Courses.Courses);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto min-h-screen">
        <h2 className="text-2xl font-medium text-[#080A16] mb-4">
          Welcome, Admin
        </h2>

        <section id="courses" className="mt-8">
          <div className="border border-gray-300 rounded-lg bg-white p-6">
            <div className="text-xl font-medium text-gray-700 mb-4">Courses</div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {courses.map((course) => (
                <AdminCourseCard
                  key={course._id}
                  id={course._id}
                  course={course}
                  description="By DSA Buddy"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;
