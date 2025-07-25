import express from "express";
import { addCourse, getAllCourses } from "../controllers/courseController.js";

const router = express.Router();

router.route("/get/all").get(getAllCourses);

router.route("/add").post(addCourse);

export default router;
