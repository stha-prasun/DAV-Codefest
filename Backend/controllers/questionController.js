import { Question } from "../models/questionSchema.js";

export const getAllQuestions = async (req, res)=>{
    try {
        const questions = await Question.find();

        return res.status(200).json({
            questions,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}