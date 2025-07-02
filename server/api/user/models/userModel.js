const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    gender: { type: String, enum: ["male", "female", "other"] },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", userSchema, "user");
module.exports = UserModel;
