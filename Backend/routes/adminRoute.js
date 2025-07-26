import express from "express";
import { admin_login, admin_logout, admin_signup } from "../controllers/adminController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/signup").post(admin_signup);

router.route("/login").post(admin_login);

router.route("/logout").post(isAuthenticated, admin_logout);

export default router;