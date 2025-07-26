import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AdminQuestionCard from "./AdminQuestionCard";
import AdminSidebar from "./AdminSidebar";
import useGetAllQuestions from "../../hooks/useGetAllQuestions";
import { useNavigate } from "react-router-dom";

const AdminQuestions = () => {
  const fetchQuestions = useGetAllQuestions();
  const navigate = useNavigate();

  const admin = useSelector((store) => store.Admin.Admin);

  useEffect(() => {
    if (!admin) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const Questions = useSelector((store) => store?.Questions?.Questions);

  return (
    <div className="min-h-screen flex relative">
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto min-h-screen">
        <h2 className="text-2xl font-medium text-[#080A16] mb-4">
          Welcome, Admin
        </h2>

        <section id="courses" className="mt-8">
          <div className="border border-gray-300 rounded-lg bg-white p-6">
            <div className="text-xl font-medium text-gray-700 mb-4">
              Questions
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Questions && Questions.length > 0 ? (
                Questions.map((question, index) => (
                  <AdminQuestionCard key={index} Question={question} />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">
                  No questions found.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminQuestions;
