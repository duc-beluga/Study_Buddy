const express = require("express");
const router = express.Router();
const { searchNearby } = require("../controllers/searchController");

router.route("/:id").get(searchNearby);

module.exports = router;
