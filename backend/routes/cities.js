const express = require("express");
const router = express.Router();
const {
  createCities,
  getAllCities,
  deleteAllCities,
} = require("../controllers/citiesController");

router.route("/").get(getAllCities).delete(deleteAllCities);
router.route("/:id").post(createCities);

module.exports = router;
