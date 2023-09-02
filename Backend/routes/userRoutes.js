const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  getUser,
  // deleteUser,
  updateUser,
} = require("../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUser).put(updateUser);

// .delete(deleteUser)

module.exports = router;
