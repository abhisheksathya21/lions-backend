import express from "express";
import { getSiteInfo, updateSiteInfo } from "../Controllers/siteInfoController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getSiteInfo);
router.put("/", protect, updateSiteInfo);

export default router;
