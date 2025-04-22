import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },

  password: String,
  role: {
    type: String,
    enum: ["user", "manager", "super-admin"],
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

userSchema.methods.isPassMatch = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.getAuthToken = async function () {
  return await jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
};

export default mongoose.model("user", userSchema);
