import React from "react";
import UserSidebar from "./UserSideBar";
import QuestionCard from "./QuestionCard";

const UserPanel = () => {
    const Question = {
    question: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    difficulty: "Easy",
  };
  return (
    <div className="min-h-screen flex">
      <UserSidebar/>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto min-h-screen">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
          Welcome, Name
        </h2>

        <section id="courses" className="mt-8">
          <div className="border border-gray-300 rounded-lg bg-white p-6">
            <div className="text-xl font-semibold text-gray-700 mb-4">
              Questions
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <QuestionCard Question={Question}/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserPanel;
