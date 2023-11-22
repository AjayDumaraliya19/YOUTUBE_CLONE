import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

/** Create a video model Schema */
const videoSchema = new mongoose.Schema(
  {
    videofile: {
      type: String, // cloudinary url
      trim: true,
      required: [true, "Video file is required..!!"],
    },
    thumbnail: {
      type: String, // cloudinary url
      trim: true,
      required: [true, "Thumbnail is required..!!"],
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required..!!"],
    },
    description: {
      type: Number,
      trim: true,
      required: true,
    },
    duration: {
      type: Number, // cloudinary url
      integer: true,
    },
    views: {
      type: Number,
      default: 0,
      integer: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

vedioSchema.plugin(mongooseAggregatePaginate);

/** Export and save model schema */
export const Video = mongoose.model("Video", videoSchema);
