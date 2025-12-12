// Backend/controllers/adminController.js
import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET

// Register (one-time use or protected)
// You can call this route once to create admin or use a seed script.
export const registerAdmin = async (req, res) => {
  try {
    // Check if admin already exists
    const adminCount = await Admin.countDocuments();
    if (adminCount >= 1) {
      return res.status(403).json({ message: "Admin registration disabled" });
    }

    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Missing fields" });

    const exists = await Admin.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "Admin already exists" });

    const hash = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ email, passwordHash: hash });

    res.json({
      message: "Admin created",
      admin: { id: admin._id, email: admin.email }
    });
  } catch (err) {
    res.status(500).json({ message: "Error creating admin", error: err.message });
  }
};


// Login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    const ok = await admin.comparePassword(password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: admin._id, email: admin.email }, JWT_SECRET, { expiresIn: "8h" });
    res.json({ token, admin: { id: admin._id, email: admin.email } });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err.message });
  }
};
