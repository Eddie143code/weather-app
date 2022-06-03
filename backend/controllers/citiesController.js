const Cities = require("../models/citiesModel");

//   const createCities = async (req, res) => {
//       res.status(200).send("create a city");
//   };
//
//   const deleteAllCities = async (req, res) => {
//       res.status(200).send("delete all cities");
//   };
//
//   const getAllCities = async (req, res) => {
//       res.status(200).send("get all cities");
//   };

const createCities = async (req, res) => {
  const city = await Cities.create({
    city: req.body.city,
    temp: req.body.temp,
    precip: req.body.precip,
    wind: req.body.wind,
    humid: 1,
    press: 2,
    image: req.body.image,
    user: req.user.userId,
  });
  res.status(201).json({ city });
};

const getAllCities = async (req, res) => {
  const cities = await Cities.find({ user: req.user.userId });
  res.status(200).json({ cities });
};

const deleteAllCities = async (req, res) => {
  const cities = await Cities.deleteMany({ user: req.user.userId });
  if (!cities) {
    throw new Error("No cities to delete");
  }

  res.status(200).send("successfully deleted");
};

module.exports = {
  createCities,
  getAllCities,
  deleteAllCities,
};
