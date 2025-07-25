import mongoose from "mongoose";

const questionModel = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Question = mongoose.model("Question", questionModel);