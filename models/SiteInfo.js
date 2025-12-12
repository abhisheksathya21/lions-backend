import mongoose from "mongoose";

const siteInfoSchema = new mongoose.Schema(
  {
    address: String,
    phone: String,
    email: String,
    mapEmbed: String,

    // NEW FIELDS
    facebook: String,
    instagram: String,
    youtube: String,
    website: String,
  },
  { timestamps: true }
);

export default mongoose.model("SiteInfo", siteInfoSchema);
