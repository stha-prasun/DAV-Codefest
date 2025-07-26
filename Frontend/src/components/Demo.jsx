import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import axios from "axios";
import { AI_API_ENDPOINT } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";

const Demo = () => {
  const [suggestion, setSuggestion] = useState(
    "AI Suggestion Will Appear Here"
  );
  const [code, setCode] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const question = "Implement Binary Search";
  const description = `
Write a function that takes a sorted array of integers and a target integer.
Return the index of the target if it's found in the array, otherwise return -1.

Example:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

Use the binary search algorithm.`;

  useEffect(() => {
    const lastSubmit = localStorage.getItem("lastSubmitTime");
    if (lastSubmit) {
      const elapsed = Date.now() - parseInt(lastSubmit, 10);
      const holdTime = 60 * 1000;

      if (elapsed < holdTime) {
        setHasSubmitted(true);

        const timeout = setTimeout(() => {
          setHasSubmitted(false);
          localStorage.removeItem("lastSubmitTime");
        }, holdTime - elapsed);

        return () => clearTimeout(timeout);
      } else {
        setHasSubmitted(false);
        localStorage.removeItem("lastSubmitTime");
      }
    }
  }, []);

  const handleSuggestionClick = async () => {
    if (hasSubmitted) {
      setShowPopup(true);
      return;
    }

    try {
      const res = await axios.post(`${AI_API_ENDPOINT}/answer/check`, {
        question,
        description,
        code,
      });

      if (res.data?.success) {
        setSuggestion(res.data.suggestion);
        setHasSubmitted(true);
        setShowPopup(true);

        const now = Date.now();
        localStorage.setItem("lastSubmitTime", now.toString());

        setTimeout(() => {
          setHasSubmitted(false);
          localStorage.removeItem("lastSubmitTime");
        }, 60 * 1000);
      }
    } catch (err) {
      console.error(err);
      setSuggestion("Failed to fetch AI suggestions.");
    }
  };

  return (
    <div
      className=""
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/background-dsa.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Popup - Top Center */}
      {showPopup && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 shadow-lg p-6 rounded-lg z-50 w-[90%] max-w-md text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            You’ve reached the limit
          </h2>
          <p className="text-gray-600 mb-6">
            Please{" "}
            <Link
              to="/signup"
              className="font-semibold text-blue-600 hover:underline"
            >
              sign up for free
            </Link>{" "}
            to continue using this feature.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
            >
              Close
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Sign Up for Free
            </button>
          </div>
        </div>
      )}

      <div
        className="p-4 sm:p-6 min-h-screen flex flex-col"
        style={{
          backgroundImage: "url('/background.png-dsa')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-6 flex-grow h-full">
          {/* Left Panel */}
          <div className="left w-full lg:w-[60%] flex flex-col rounded-xl gap-6">
            {/* Question */}
            <div className="top-left flex-1 p-4 sm:p-6 overflow-y-auto bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
                {question}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {description}
              </p>
            </div>

            {/* AI Suggestion */}
            <div className="bottom-left h-56 bg-white p-4 border border-gray-200 rounded-lg shadow flex flex-col overflow-hidden">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 shrink-0">
                AI Suggestions
              </h3>
              <div className="bg-[#f9f9f9] p-3 rounded-md shadow-inner text-sm text-gray-700 overflow-y-auto flex-grow">
                {suggestion}
              </div>
              <div className="mt-3 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={handleSuggestionClick}
                  className={`px-4 py-2 text-sm font-medium text-white rounded transition ${
                    hasSubmitted
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black hover:bg-gray-800"
                  }`}
                  disabled={hasSubmitted}
                >
                  Ai Suggestion
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="right w-full lg:w-[40%] p-4 sm:p-6 border border-gray-300 rounded-lg bg-white flex flex-col">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Code Editor
            </h2>
            <div className="flex-grow overflow-hidden mb-4">
              <Editor
                height="100%"
                defaultLanguage="java"
                defaultValue={`// Enter your Java code here`}
                theme="vs-dark"
                onChange={(value) => setCode(value)}
                options={{
                  padding: { top: 10, bottom: 10, left: 10, right: 10 },
                }}
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSuggestionClick}
                className={`px-5 py-2 text-sm font-medium text-white rounded transition ${
                  hasSubmitted
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black hover:bg-gray-800"
                }`}
                disabled={hasSubmitted}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
