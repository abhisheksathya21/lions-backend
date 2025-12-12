import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: String,
  phone: String,
  photo: String
});

export default mongoose.model("Member", memberSchema);
