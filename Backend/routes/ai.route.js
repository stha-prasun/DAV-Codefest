import express from "express";
import { checkAnswer } from "../controllers/ai.controller";

const router = express.Router();

router.route("/answer/check").post(checkAnswer);

export default router;
