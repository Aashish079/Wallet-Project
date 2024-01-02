import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { User } from "../models/users.models.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const userLogin = async (req, res) => {
  //Validation code goes here
  const { email, password } = req.body;

  try {
    if (!email) throw "Please Provide the Email";

    if (!password) throw "Please Provide the Password";

    const getUser = await User.findOne({
      email,
    });
    if (!getUser) throw "User not registered";

    const matched = await bcrypt.compare(password, getUser.password);

    if (!matched) throw "Email and password do not match";
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
    return; //to stop the execution here, otherwise it will continue to the next step and send the success message
  }
  //everything is good!
  const getUserForAccessToken = await User.findOne({
    email,
  });

  const accessToken = jwt.sign(
    {
      email: getUserForAccessToken.email,
      name: getUserForAccessToken.name,
    },
    process.env.JWT_SECRET,
    {
        expiresIn:"72h",
    }
  );

  res.status(200).json({
    status: "User Logged in successfully",
  });
};

export default userLogin;
