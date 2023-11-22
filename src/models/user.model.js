import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

/** Create a user model Schema */
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      indeX: ture,
      required: [true, "Username is required..!!"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required..!!"],
    },
    fullName: {
      type: String,
      trim: true,
      indeX: ture,
      required: [true, "FullName is required..!!"],
    },
    avatar: {
      type: String, // cloudinary url
      trim: true,
      requied: true,
    },
    coverImage: {
      type: String, // cloudinary url
      trim: true,
    },
    watchhistory: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      trim: true,
      required: [true, "Password is required..!!"],
    },
    refreshToken: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/** Password hash using the bcrypt package */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password, 10);
  next();
});

/** Create metods to comapare password */
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

/** Genrate Access token using methods */
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

/** Genrate Refresh token using methods */
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  });
};

/** Export and save model schema */
export const User = mongoose.model("User", userSchema);
