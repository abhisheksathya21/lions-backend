import Contact from "../models/Contact.js";

// @desc Submit contact form
export const submitContact = async (req, res) => {
  try {
    const message = await Contact.create(req.body);
    res.json({ message: "Message received", data: message });
  } catch (error) {
    res.status(500).json({ message: "Error submitting message" });
  }
};
