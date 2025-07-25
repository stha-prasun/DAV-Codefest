import bcrypt from "bcryptjs";
import { Admin } from "../models/adminSchema.js";
//import jwt from "jsonwebtoken";

export const admin_signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Please provide username and password",
        success: false,
      });
    }

    const user = await Admin.find({ username });

    if (!user) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Admin created successfully!!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};