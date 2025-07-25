import express from "express";
import { getAllMessages, newMessage } from "../controllers/messageController.js";

const router = express.Router();

router.route("/get/all").post(getAllMessages);

router.route("/new").post(newMessage);

export default router;