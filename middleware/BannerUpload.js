import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Auto-resize rule
const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    const folder = "lionsclub";

    return {
      folder,
      allowed_formats: ["jpg", "jpeg", "png"],
      transformation: [
        { width: 1600, height: 600, crop: "fill", gravity: "auto" } // auto-crop banner
      ]
    };
  },
});

export default multer({ storage });
