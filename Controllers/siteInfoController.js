import SiteInfo from "../models/SiteInfo.js";

// Get site info
export const getSiteInfo = async (req, res) => {
  try {
    const info = await SiteInfo.findOne();
    res.json(info);
  } catch (err) {
    res.status(500).json({ message: "Error loading site info" });
  }
};

// Update or create
export const updateSiteInfo = async (req, res) => {
  try {
    const { address, phone, email, mapEmbed } = req.body;

    let info = await SiteInfo.findOne();

    if (!info) {
      info = await SiteInfo.create({ address, phone, email, mapEmbed });
    } else {
      info.address = address;
      info.phone = phone;
      info.email = email;
      info.mapEmbed = mapEmbed;
      await info.save();
    }

    res.json(info);
  } catch (err) {
    res.status(500).json({ message: "Error updating site info" });
  }
};
