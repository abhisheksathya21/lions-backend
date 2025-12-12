// Backend/middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET =process.env.JWT_SECRET;



export const protect = (req, res, next) => {
  try {
    console.log("JWT_SECRET",JWT_SECRET);
    console.log("enterd")
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ message: "No token" });

    const token = auth.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Invalid token" });
   
    const decoded = jwt.verify(token, JWT_SECRET);
    
    req.admin = decoded;
        console.log("enterd next", req.admin)

    next();
  } catch (err) {
    res.status(401).json({ message: "Not authorized", error: err.message });
  }
};
