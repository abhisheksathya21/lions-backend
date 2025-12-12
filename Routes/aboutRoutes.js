import express from "express";
import { getAbout, updateAbout } from "../Controllers/aboutController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getAbout);
router.put("/", protect, upload.single("image"), updateAbout);

export default router;
