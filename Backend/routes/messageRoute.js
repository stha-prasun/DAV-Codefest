import express from "express";
import { getAllMessages, MarkAsComplete, newMessage } from "../controllers/messageController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/get/all").get(getAllMessages);

router.route("/new").post(isAuthenticated, newMessage);

router.route("/mark/completed").post(MarkAsComplete);

export default router;