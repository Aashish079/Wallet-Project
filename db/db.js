import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config();

const connectdb = async () => {
  try{
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
  }
  catch(err){
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectdb;