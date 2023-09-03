const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://admin:hackathon1111@cluster0.komigg9.mongodb.net/"
    );

    // Create the 2dsphere index on location.coordinates
    await connection.connection.db.collection("users").createIndex({
      "location.coordinates": "2dsphere",
    });

    console.log("Database connected: ", connection.connection.host);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDb;
