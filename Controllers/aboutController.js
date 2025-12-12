import About from "../models/About.js";

export const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: "Failed to load about info" });
  }
};

export const updateAbout = async (req, res) => {
  try {
    const { title, description, mission } = req.body;

    const data = { title, description, mission };

    if (req.file) data.image = req.file.path;

    let about = await About.findOne();

    if (!about) {
      about = await About.create(data);
    } else {
      about = await About.findByIdAndUpdate(about._id, data, { new: true });
    }

    res.json(about);
  } catch (err) {
    res.status(500).json({ message: "Failed to update about info", error: err });
  }
};
