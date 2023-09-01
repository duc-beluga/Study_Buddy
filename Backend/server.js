const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const port = process.env.PORT || 5001;
// establish connection to the database
connectDB();

const app = express();
// built_in parser
app.use(express.json());

// route a given path string with its handler
app.use("/api/students", require("./routes/studentRoutes"));

// error handler
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Started listening to port: ${port}`);
});
