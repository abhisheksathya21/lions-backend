import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  image: { type: String, required: true }, // Cloudinary URL
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Banner", bannerSchema);
