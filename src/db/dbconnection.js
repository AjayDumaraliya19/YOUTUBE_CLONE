import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

/* ------------------- Create database connection function ------------------ */
const connectDB = async () => {
  try {
    const connectionInstent = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );

    /** You are get connection details of MongoDB Database URI */
    console.log(
      `\n MongoDB Database connection Successfully..! On DB Host:${connectionInstent.connection.host}`
    );
  } catch (err) {
    console.log("MongoDB Database connection Failed: ", err);
    process.exit(1);
  }
};

export default connectDB;
