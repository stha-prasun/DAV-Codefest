import { User } from "../models/userSchema.js";
import bcrypt from "bcryptjs";
//import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All Fields Required",
        success: false,
      });
    }

    const user = await User.find({ email });

    if (!user) {
      return res.status(400).json({
        message: "User with email already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User created successfully!!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};