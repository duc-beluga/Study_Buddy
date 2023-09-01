const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://admin:hackathon1111@cluster0.komigg9.mongodb.net/"
    );
    console.log("Database connected: ", connect.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
