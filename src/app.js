import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

/** Create a express function */
const app = express();

/** Create a middleware for the app */
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export { app };
