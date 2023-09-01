const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// @desc Get all student
//route GET /api/students
const getStudents = asyncHandler(async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
});

// @desc get a student
//route GET /api/students/:id
const getStudent = asyncHandler(async (req, res) => {
  const student_id = req.params.id;
  const student = await Student.findById(student_id);
  if (!student) {
    res.status(404);
    throw new Error("Student not found");
  }
  res.status(200).json(student);
});

// @desc create a student
//route POST /api/students
const createStudent = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, profilePicture } =
    req.body;
  if (!firstName || !lastName || !email || !phoneNumber || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const student = await Student.create(req.body);
  if (student) {
    res.status(201).json(student);
  } else {
    res.status(400);
    throw new Error("Student data is not valid");
  }
});

// @desc delete a student
//route DELETE /api/students/:id
const deleteStudent = asyncHandler(async (req, res) => {
  const student_id = req.params.id;
  const student = await Student.findById(student_id);
  if (!student) {
    res.status(404);
    throw new Error("Student not found");
  }
  await Student.deleteOne({ _id: req.params.id });
  res.status(200).json(student);
});

// @desc update a student
//route UPDATE /api/students/:id
const updateStudent = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, profilePicture } =
    req.body;
  if (!firstName || !lastName || !email || !phoneNumber || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const student = await Student.findById(req.params.id);
  if (!student) {
    res.status(404);
    throw new Error("Student not found");
  }
  const updatedStudent = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedStudent);
});

module.exports = {
  getStudents,
  createStudent,
  getStudent,
  deleteStudent,
  updateStudent,
};
