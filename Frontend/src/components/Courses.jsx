import React from "react";
import UserSidebar from "./UserSideBar";
import UserCourseCard from "./UserCourseCard";
import { useEffect } from "react";
import useGetAllCourses from "../hooks/useGetAllCourses";
import { useSelector } from "react-redux";

const Courses = () => {
  const fetchCourses = useGetAllCourses();

  useEffect(() => {
    fetchCourses();
  }, []);

  const courses = useSelector((store) => store?.Courses.Courses);

  return (
    <div className="min-h-screen flex">
      <UserSidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto min-h-screen sm:ml-64">
        <h2 className="text-2xl font-medium text-[#080A16] mb-4 lg:ml-0 sm:ml-60 ml-10">
          Welcome, Name
        </h2>

        <section id="courses" className="mt-8">
          <div className="border border-gray-300 rounded-lg bg-white p-6">
            <div className="text-xl font-medium text-gray-700 mb-4">
              Courses
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {courses?.length > 0 ? (
                courses.map((course) => (
                  <UserCourseCard
                    key={course._id}
                    title={course.title}
                    description="By DSA Buddy"
                    id={course._id}
                  />
                ))
              ) : (
                <p className="text-gray-500 col-span-full">
                  No courses available.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Courses;
