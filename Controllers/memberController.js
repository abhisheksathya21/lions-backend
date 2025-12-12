import Member from "../models/Member.js";

// @desc Get all members
export const getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: "Error fetching members" });
  }
};

// @desc Create member
export const createMember = async (req, res) => {
  try {
    const { name, role, phone } = req.body;

    const photoURL = req.file?.path || "/placeholder-profile.png";

    const member = await Member.create({
      name,
      role,
      phone,
      photo: photoURL
    });

    res.json(member);
  } catch (error) {
    res.status(500).json({ message: "Error creating member", error });
  }
};



export const updateMember = async (req, res) => {
  try {
    const { name, role, phone } = req.body;

    // Get existing member first
    const existingMember = await Member.findById(req.params.id);
    if (!existingMember) {
      return res.status(404).json({ message: "Member not found" });
    }

    const updatedData = { name, role, phone };

    // If new image uploaded → update with new image  
    if (req.file) {
      updatedData.photo = req.file.path;
    } 
    // If no new image → keep existing image OR use placeholder
    else {
      updatedData.photo = existingMember.photo || "/placeholder-profile.png";
    }

    const member = await Member.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.json(member);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating member", error });
  }
};


// @desc Delete member
export const deleteMember = async (req, res) => {
  try {
    await Member.findByIdAndDelete(req.params.id);
    res.json({ message: "Member deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting member" });
  }
};
export const getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: "Error fetching member" });
  }
};

