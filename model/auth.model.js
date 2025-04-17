import mongoose, { Schema } from "mongoose";

const userSchema = Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },

  password: String,
  role: {
    type: String,
    default: "user",
  },

  profile_pic: {
    type: String,
    default: "avator.png",
  },

  phone: {
    type: String,
  },

  created_at: { type: Date, default: Date.now },
  updated_at: Date,
});

export default mongoose.model("user", userSchema);
