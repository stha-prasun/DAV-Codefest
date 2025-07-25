import bcrypt from "bcryptjs";
import { Admin } from "../models/adminSchema.js";
import jwt from "jsonwebtoken";

export const admin_signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "All Fields Required",
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
      username,
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

export const admin_login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Fields cannot be left empty!!",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid User",
        success: false,
      });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return res.status(400).json({
        message: "Incorrect Email or Password",
        success: false,
      });
    }

    const tokenData = {
      userID: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    const loggedInUser = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
    };

    return res
      .status(201)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome Back ${user.fullname}!!`,
        success: true,
        loggedInUser,
      });
  } catch (error) {
    console.log(error);
  }
};

export const admin_logout = async (req, res) => {
  try {
    return res.status(201).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully!!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};