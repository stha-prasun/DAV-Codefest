import express from "express";
import { addCourse, deleteCourse, getAllCourses, updateCourse } from "../controllers/courseController.js";

const router = express.Router();

router.route("/get/all").get(getAllCourses);

router.route("/add").post(addCourse);

router.route("/delete").delete(deleteCourse);

router.route("/update").put(updateCourse);

export default router;
