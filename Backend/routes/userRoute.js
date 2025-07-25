import express from "express";
import { signup } from "../controllers/userController";

const router = express.Router();

router.route("/signup").post(signup);

export default router;