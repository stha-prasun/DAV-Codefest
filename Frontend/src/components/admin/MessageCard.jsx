import axios from "axios";
import React from "react";
import { MESSAGE_API_ENDPOINT } from "../../utils/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useGetAllMessage from "../../hooks/useGetAllMessage";

const MessageCard = ({ message }) => {
  const fetchMessage = useGetAllMessage();

  const handleClick = async () => {
    try {
      const res = await axios.post(`${MESSAGE_API_ENDPOINT}/mark/completed`, {
        id: message._id,
      }, {withCredentials: true});
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
        fetchMessage();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="bg-white dark:bg-neutral text-black dark:text-white shadow rounded-md p-4 space-y-4 border border-gray-200 mb-6">
      {/* User Info + Status */}
      <div className="flex items-start justify-between text-sm text-gray-600 dark:text-gray-300">
        {/* Avatar + User */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-[#FFA463] shadow-sm flex items-center justify-center">
            <img
              src={`https://avatar.iran.liara.run/username?username=${message.user?.fullname}`}
              alt=""
            />
          </div>
          <div>
            <div className="font-medium text-base leading-none">
              {message.user?.fullname}
            </div>
            <div className="text-xs text-gray-500">{message.user?.email}</div>
          </div>
        </div>

        {/* Solved / Unsolved Badge */}
        <span
          className={`text-xs px-3 py-1 rounded-md font-medium border ${
            message.isSolved
              ? "bg-green-100 text-green-700 border-green-300"
              : "bg-yellow-100 text-yellow-700 border-yellow-300"
          }`}
        >
          {message.isSolved ? "Solved" : "Unsolved"}
        </span>
      </div>

      {/* Message Body */}
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

      {/* Action Button */}
      <div className="flex mt-4">
        <button
        onClick={handleClick}
          className="text-sm px-4 py-2 bg-[#080A16] hover:bg-[#0c1756] text-white rounded-md transition-colors duration-200"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default MessageCard;
