const express = require("express");
const router = express.Router();
const {
  getStudents,
  createStudent,
  getStudent,
  deleteStudent,
  updateStudent,
} = require("../controllers/studentController");

router.route("/").get(getStudents).post(createStudent);

router.route("/:id").get(getStudent).delete(deleteStudent).put(updateStudent);

module.exports = router;
