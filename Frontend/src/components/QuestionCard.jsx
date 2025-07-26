import React from "react";
import { setQuestion } from "../redux/questionSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const QuestionCard = ({ Question }) => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  // Badge color based on difficulty
  const difficultyBadgeClass = {
    Easy: "bg-green-100 text-green-700 border border-green-300",
    Medium: "bg-yellow-100 text-yellow-700 border border-yellow-300",
    Hard: "bg-red-100 text-red-700 border border-red-300",
  };

  return (
    <div className="bg-white dark:bg-neutral text-black dark:text-white shadow rounded-md p-4 space-y-4 border border-gray-200 mb-6">
      {/* Title + Badge */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{Question.question}</h3>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-md ${
            difficultyBadgeClass[Question.difficulty]
          }`}
        >
          {Question.difficulty}
        </span>
      </div>

      {/* Truncated Description */}
      <p className="text-sm opacity-70 line-clamp-2">{Question.description}</p>

      {/* Submit Button */}
      <button
        onClick={()=>{
          dispatch(setQuestion(Question));
          navigate(`/user/dsa`)
        }}
        className="text-sm w-fit h-10 py-2 px-4 bg-[#080A16] text-white rounded-md hover:bg-[#0c1756]"
      >
        View Details
      </button>
    </div>
  );
};

export default QuestionCard;
