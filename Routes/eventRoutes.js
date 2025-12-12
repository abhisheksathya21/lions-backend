import express from "express";
import {
  getEvents,
  createEvent,
  deleteEvent,
  updateEvent,
   getEventById
} from "../Controllers/eventController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getEvents);
router.post("/", protect, upload.single("image"), createEvent);
router.put("/:id", protect, upload.single("image"), updateEvent);
router.delete("/:id", protect, deleteEvent);
router.get("/:id",getEventById);

export default router;
