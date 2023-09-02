const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phoneNumber: {
      type: Number,
      requred: true,
    },
    profilePicture: {
      type: String,
      required: false,
    },
    school: {
      type: String,
      required: false,
    },
    level: {
      type: String,
      required: false,
    },
    year: {
      type: String,
      required: false,
    },
    zipCode: {
      type: Number,
      required: false,
    },
    subject: {
      type: String,
      required: false,
    },
    accountType: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
