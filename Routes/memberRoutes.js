import express from "express";
import {
  getMembers,
  createMember,
  deleteMember,
  updateMember,
  getMemberById
} from "../Controllers/memberController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getMembers);
router.post("/", upload.single("photo"), createMember);
router.put("/:id", upload.single("photo"), updateMember);
router.delete("/:id", deleteMember);
router.get("/:id", getMemberById);

export default router;
