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

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        message: "Id required",
        success: false,
      });
    }

    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return res.status(400).json({
        message: "Course does not exist",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Course deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCourse = async (req, res) => {
  try {
    const {
      id,
      title,
      subtitle,
      overview,
      faq,
      details
    } = req.body;

    if (!id) {
      return res.status(400).json({
        message: "Id Required",
        success: false,
      });
    }

    const course = await Course.findById(id);

    if (!course) {
      return res.status(400).json({
        message: "Invalid Course",
        success: false,
      });
    }

    course.title = title || course.title;
    course.subtitle = subtitle || course.subtitle;
    course.overview = overview || course.overview;
    course.faq = faq || course.faq;
    course.details = details || course.details;

    const updatedCourse = await course.save();

    return res.status(200).json({
      message: "Course updated successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};