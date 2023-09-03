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
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
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
    subject: {
      type: String,
      required: false,
    },
    accountType: {
      type: Number,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"], // Specify that it should be a Point
 
      },
      coordinates: {
        type: [Number], // Array of [longitude, latitude]
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

// Create a geospatial index on the "location.coordinates" field --> easy to lookup
userSchema.index({ "location.coordinates": "2dsphere" });

module.exports = mongoose.model("Users", userSchema);
