import dotenv from "dotenv";
import connectDB from "./db/dbconnection.js";
import { app } from "./app.js";

dotenv.config({ path: "./.evn" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server Running at port : ${process.env.PORT}`);
    });
    app.on((err) => {
      console.log(`Server Port Running Error : ${err}`);
      throw err;
    });
  })
  .catch((err) => {
    console.log(`MongoDB Connetion Failed..! : ${err}`);
  });
