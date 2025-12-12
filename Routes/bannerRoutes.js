import express from "express";
import upload from "../middleware/upload.js";           // same Cloudinary middleware
import { protect } from "../middleware/authMiddleware.js";
import { getBanners, addBanner, deleteBanner } from "../Controllers/bannerController.js";

const router = express.Router();

router.get("/", getBanners);
router.post("/", protect, upload.single("image"), addBanner);
router.delete("/:id", protect, deleteBanner);

export default router;
