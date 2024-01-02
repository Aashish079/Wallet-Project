import mongoose from "mongoose";
import { User } from "../models/users.models.js";
import bcrypt from "bcrypt";

const userRegister = async (req, res) => {
  const { name, email, password, address, balance } = req.body;

  //Validation code goes here

  //Creation code goes here
    const encPassword = await bcrypt.hash(password, 10);

  try {
    const createdUser = await User.create({
      name,
      email,
      password,
      address,
      balance,
    });
    createdUser.save();

    res.status(200).json({
      status: "Registered",
    });
  } catch (error) {
    res.status(500).json({
      status: "Not Registered",
      error: error.message,
    });
  }
};

export default userRegister;
