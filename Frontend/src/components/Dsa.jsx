import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import { AI_API_ENDPOINT } from "../utils/constants";

const Dsa = () => {
  const Question = useSelector((store) => store.Question.Question);
  const [suggestion, setSuggestion] = useState(
    "AI Suggestion Will Appear Here"
  );
  const [code, setCode] = useState("");

  const handleSuggestionClick = async () => {
    try {
      const res = await axios.post(`${AI_API_ENDPOINT}/answer/check`, {
        question: Question.question,
        description: Question.description,
        code: code,
      });

      if (res.data?.success) {
        setSuggestion(res.data.suggestion);
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
      <Navbar />
      <div
        className="p-6 min-h-screen  flex flex-col"
        style={{
          minHeight: "100vh",
          backgroundImage: "url('/background.png-dsa')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex gap-6 flex-grow h-full">
          {/* Left Panel */}
          <div className="left w-[60%] flex flex-col rounded-xl gap-6">
            {/* Top Left: Question Panel */}
            <div className="top-left flex-1 p-6 overflow-y-auto bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {Question.question}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {Question.description}
              </p>
            </div>

            {/* Bottom Left: AI Suggestion Box */}
            <div className="bottom-left h-56 bg-white p-4 border border-gray-200 rounded-lg shadow flex flex-col overflow-hidden">
              <h3 className="text-lg font-semibold text-gray-700 mb-2 shrink-0">
                AI Suggestions
              </h3>

              {/* Suggestion Text */}
              <div className="bg-[#f9f9f9] p-3 rounded-md shadow-inner text-sm text-gray-700 overflow-y-auto flex-grow">
                {suggestion}
              </div>

              {/* Suggestion Button aligned to bottom right */}
              <div className="mt-3 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={handleSuggestionClick}
                  className="px-4 py-2 text-sm font-medium bg-black text-white rounded hover:bg-gray-800 transition"
                >
                  Suggestions
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: Monaco Editor */}
          <div className="right w-[40%] p-6 border border-gray-300 rounded-lg bg-white flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Code Editor
            </h2>

            {/* Editor Box with padding */}
            <div className="flex-grow overflow-hidden mb-4 p-4">
              <Editor
                height="100%"
                defaultLanguage="java"
                defaultValue={`// Enter your Java code here`}
                theme="vs-dark"
                onChange={(value) => setCode(value)}
                options={{
                  minimap: { enabled: false },
                  padding: { top: 10, bottom: 10, left: 10, right: 10 },
                }}
              />
            </div>

            {/* Submit Button aligned right */}
            <div className="flex justify-end">
              <button
                onClick={handleSuggestionClick}
                className="px-5 py-2 bg-black text-white rounded hover:bg-gray-800 transition text-sm font-medium"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dsa;
