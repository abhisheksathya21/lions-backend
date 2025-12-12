import Banner from "../models/Banner.js";

export const getBanners = async (req, res) => {
  try {
    const banners = await Banner.find().sort({ createdAt: -1 });
    res.json(banners);
  } catch {
    res.status(500).json({ message: "Failed to fetch banners" });
  }
};

export const addBanner = async (req, res) => {
  try {
    const banner = await Banner.create({
      image: req.file?.path // Cloudinary resized URL
    });
    res.json(banner);
  } catch (err) {
    res.status(500).json({ message: "Failed to upload banner", error: err });
  }
};

export const deleteBanner = async (req, res) => {
  try {
    await Banner.findByIdAndDelete(req.params.id);
    res.json({ message: "Banner deleted" });
  } catch {
    res.status(500).json({ message: "Failed to delete banner" });
  }
};
