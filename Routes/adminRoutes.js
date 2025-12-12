// Backend/routes/adminRoutes.js
import express from "express";
import { registerAdmin, loginAdmin } from "../Controllers/adminController.js";

const router = express.Router();

router.post("/register", registerAdmin); // remove or protect after first use
router.post("/login", loginAdmin);

export default router;
