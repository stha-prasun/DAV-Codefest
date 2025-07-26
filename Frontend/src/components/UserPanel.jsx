import React, { useEffect } from "react";
import UserSidebar from "./UserSideBar";
import QuestionCard from "./QuestionCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetAllQuestions from "../hooks/useGetAllQuestions";
const UserPanel = () => {
  const fetchQuestions = useGetAllQuestions();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const loggedInUser = useSelector((store) => store?.User.loggedInUser);
  const Questions = useSelector((store) => store?.Questions?.Questions);

  return (
    <div className="min-h-screen flex relative">
      <UserSidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto min-h-screen sm:ml-64">
        <h2 className="text-2xl font-medium text-[#080A16] mb-4 lg:ml-0 sm:ml-60 ml-10">
          Welcome, {`${loggedInUser?.fullname}`}
        </h2>

        <section id="courses" className="mt-8">
          <div className="border border-gray-300 rounded-lg bg-white p-6">
            <div className="text-xl font-medium text-gray-700 mb-4">
              Questions
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Questions && Questions.length > 0 ? (
                Questions.map((question, index) => (
                  <QuestionCard key={index} Question={question} />
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

      {/* Contact a Mentor Floating Chat Bubble */}
      <Link to="/contact/mentor">
        <button
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 h-14 rounded-full shadow-xl bg-white/80 backdrop-blur-lg border border-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out group text-sm font-medium text-gray-800"
          aria-label="Contact a Mentor"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/8524/8524923.png"
            alt="Contact Mentor"
            className="w-6 h-6"
          />
          Contact a Mentor
        </button>
      </Link>
    </div>
  );
};

export default UserPanel;
