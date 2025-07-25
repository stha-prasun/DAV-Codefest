import { Course } from "../models/courseSchema.js";

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    return res.status(200).json({
      courses,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addCourse = async (req, res) => {
  try {
    const { title, subtitle, overview, faq, details } = req.body;

    if (!title || !subtitle || !overview || !faq || !details) {
      return res.status(400).json({
        message: "All Fields Required",
        success: false,
      });
    }

    await Course.create({
      title,
      subtitle,
      overview,
      faq,
      details,
    });

    return res.status(200).json({
      message: "Course Added Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
