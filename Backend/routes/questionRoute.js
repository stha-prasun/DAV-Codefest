import express from "express";
import { getAllQuestions } from "../controllers/questionController.js";

const router = express.Router();

router.route("/get/all").get(getAllQuestions);

export default router;