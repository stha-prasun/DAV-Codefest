import express from "express";
import { addQuestion, getAllQuestions } from "../controllers/questionController.js";

const router = express.Router();

router.route("/get/all").get(getAllQuestions);

router.route("/add").get(addQuestion);

export default router;
