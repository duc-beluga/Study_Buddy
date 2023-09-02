const asyncHandler = require("express-async-handler");
const Users = require("../models/userModel");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");

// @desc Get all users
//route GET /api/userss
const getUsers = async (req, res, next) => {
  try {
    console.log('-------------------------ENTERING getUsers middleware-----------------------------');
    const users = await Users.find();
    res.status(200).json(users);
    return next()
  }
  catch (error) {
    return next({
      log: 'Express error handler caught getUsers middleware error',
      status: 500,
      message: { err: error },
    }
    )
  }
};

// @desc get a users
// route GET /api/userss/:id
const getUser = async (req, res, next) => {
  try {
    console.log('-------------------------ENTERING getUser middleware-----------------------------');
    const users_id = req.params.id;
    const user = await Users.findById(users_id);
    if (!user) {
      res.status(404).send("User not found");
    }
    else {
      res.status(200).json(user);
    }
    return next();
  }
  catch (error) {
    return next({
      log: 'Express error handler caught getUser middleware error',
      status: 500,
      message: { err: error },
    }
    )
  }

};

// @desc create a users
//route POST /api/users
const createUser = async (req, res, next) => {
  try {
    console.log('-------------------------ENTERING createUser middleware-----------------------------');
    const { displayName, email, phoneNumber, profilePicture, school, year, level, zipCode, subject, accountType } =
      req.body;

    if (!displayName || !email || !phoneNumber || !school || !year || !level || !zipCode || !subject || !accountType) {
      res.status(400).send("Missing information");
      // throw new Error("All fields are mandatory!");
    }
    const user = await Users.create(req.body);
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400).send("user data is not valid");
    }
    return next();
  }

  catch (error) {
    return next({
      log: `Express error handler caught createUser middleware error ${error}`,
      status: 500,
      message: { err: error },
    })
  }
};

// @desc delete a users
//route DELETE /api/users/:id
const deleteUser = asyncHandler(async (req, res) => {
  try {

    console.log('-------------------------ENTERING deleteUser middleware-----------------------------');
    const users_id = req.params.id;
    const users = await Users.findById(users_id);
    if (!users) {
      res.status(404).send("User not found");
    }
    await users.deleteOne({ _id: req.params.id });
    res.status(200).json(users);
    return next();
  }
  catch (error) {
    return next({
      log: 'Express error handler caught deleteUser middleware error',
      status: 500,
      message: { err: error },
    });
  }
});

// @desc update a users
//route UPDATE /api/users/:id
const updateUser = async (req, res, next) => {
  try {
    console.log('-------------------------ENTERING updateUser middleware-----------------------------');
    const { displayName, email, phoneNumber, profilePicture, school, year, level, zipCode, subject, accountType } =
      req.body;
    if (!displayName || !email || !phoneNumber || !school || !year || !level || !zipCode || !subject || !accountType) {
      res.status(400).send("All fields mandatory");
    }
    const user = await Users.findById(req.params.id);
    if (!user) {
      res.status(404).send("User not found");
    }
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedUser);
    return next();
  }
  catch (error) {
    return next({
      log: 'Express error handler caught updateUser middleware error',
      status: 500,
      message: { err: error },
    });
  }
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
};
