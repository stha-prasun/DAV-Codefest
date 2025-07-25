import express from "express";
import { admin_signup } from "../controllers/adminController.js";

const router = express.Router();

router.route("/signup").post(admin_signup);

export default router;