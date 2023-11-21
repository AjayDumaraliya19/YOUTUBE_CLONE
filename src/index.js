import dotenv from "dotenv";
import connectDB from "./db/dbconnection.js";

dotenv.config({ path: "./.evn" });

connectDB();

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express();

// /* --------- Create a database connection imidiatly invock function --------- */
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     /** If any error occur that get the error */
//     app.on("Error : ", (err) => {
//       console.log("Error : ", err);
//       throw err;
//     });

//     /** Application run the server port */
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listing port ${process.env.PORT}`);
//     });
//   } catch (err) {
//     console.log("Database connection Error:", err);
//     throw err;
//   }
// })();
