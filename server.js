import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import connectDB from "./config/db.js";

import eventRoutes from "./Routes/eventRoutes.js";
import memberRoutes from "./Routes/memberRoutes.js";
import contactRoutes from "./Routes/contactRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js"
import bannerRoutes from "./Routes/bannerRoutes.js";
import siteInfoRoutes from "./Routes/siteInfoRoutes.js";


import aboutRoutes from "./Routes/aboutRoutes.js";




// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// API Routes
app.use("/api/admin", adminRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/banners", bannerRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/siteinfo", siteInfoRoutes);
// Start server
const PORT = process.env.PORT ;
// console.log(process.env.PORT);
// console.log(process.env.JWT_SECRET);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





