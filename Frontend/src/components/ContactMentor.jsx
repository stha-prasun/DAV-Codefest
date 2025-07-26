import React, { useState } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { MESSAGE_API_ENDPOINT } from "../utils/constants";

const ContactMentor = () => {
  const loggedInUser = useSelector((store)=>store?.User?.loggedInUser);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // HANDLE SUBMIT FUNCTION
  const handleSend = async () => {
    if (!message.trim()) {
      toast.error("Message cannot be empty.");
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(`${MESSAGE_API_ENDPOINT}/new`, {
        message,
        id: loggedInUser?._id,
      }, {withCredentials: true});

      if (response.data?.success) {
        toast.success(response.data.message);
        setMessage("");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/background.png')",
        fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif',
      }}
    >
      {/* Contact Form Card */}
      <div className="w-full max-w-3xl px-6 py-10 bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-lg">
        {/* Container for back button and heading */}
        <div className="flex justify-between items-center mb-6 px-2 space-x-4">
          {/* Back Button */}
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#141414] text-left">
            Contact A Mentor
          </h2>
          <Link to="/user/home">
            <button
              type="button"
              className="flex items-center gap-1 border-none text-gray-700 hover:text-black text-sm bg-white/700 px-3 py-1 
              "
            >
              <TbArrowBackUp className="text-lg" />
              Back
            </button>
          </Link>
        </div>

        <div className="px-2 mb-4">
          <label className="block w-full">
            <textarea
              placeholder="Write your message here"
              className="w-full resize-none rounded-xl border border-gray-300 bg-neutral-50 text-[#141414] p-4 h-36 text-base placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-black"
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
        </div>

        <div className="px-2 text-left">
          <button
            onClick={handleSend}
            className="px-5 py-2 rounded-xl bg-black text-white font-semibold text-sm hover:bg-gray-900 transition cursor-pointer"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMentor;
