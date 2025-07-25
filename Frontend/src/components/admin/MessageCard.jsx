import React from "react";
import { GoPerson } from "react-icons/go";

const MessageCard = ({ message }) => {
  return (
    <div className="bg-white dark:bg-neutral text-black dark:text-white shadow rounded-md p-4 space-y-4 border border-gray-200 mb-6">
      {/* User Info + Badge */}
      <div className="flex items-start justify-between text-sm text-gray-600 dark:text-gray-300">
        {/* User Details */}
        <div className="flex gap-3">
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full border-2 border-[#FFA463] shadow-sm flex items-center justify-center">
            <GoPerson className="w-6 h-6 text-[#FFA463]" />
          </div>

          {/* Name + Email */}
          <div>
            <div className="font-medium text-base leading-none">
              {message.user.fullname}
            </div>
            <div className="text-xs text-gray-500">{message.user.email}</div>
          </div>
        </div>

        {/* Badge */}
        <span
          className={`badge badge-sm badge-soft rounded-md ${
            message.isSolved
              ? "border border-[#00d390] badge-success"
              : "border border-[#fcb900] badge-warning"
          }`}
        >
          {message.isSolved ? "Solved" : "Unsolved"}
        </span>
      </div>

      {/* Message */}
      <div>
        <p className="text-base font-medium leading-relaxed opacity-90">
          {message.message}
        </p>
      </div>

      {/* Timestamp */}
      {message.createdAt && (
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Sent on: {new Date(message.createdAt).toLocaleString()}
        </div>
      )}

      <button
              type="submit"
              className="text-sm w-20 h-10 py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
    </div>
  );
};

export default MessageCard;
