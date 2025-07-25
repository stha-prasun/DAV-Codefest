import express from "express";
import { buyMembership, login, logout, signup } from "../controllers/userController.js";

const router = express.Router();

router.route("/signup").post(signup);

router.route("/login").post(login);

router.route("/logout").post(logout);

router.route("/membership/buy").post(buyMembership);

export default router;