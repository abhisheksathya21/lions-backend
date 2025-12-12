import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    title: { type: String, default: "About Our Club" },
    description: { type: String, required: true },
    mission: { type: String },
    image: { type: String }, // optional cloudinary image
  },
  { timestamps: true }
);

export default mongoose.model("About", aboutSchema);
