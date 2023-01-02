const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20],
  },
  temp: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20],
  },
  precip: {
    type: String,
    required: true,
    maxlength: [20],
  },
  wind: {
    type: String,
    required: true,
    maxlength: [20],
  },
  humid: {
    type: String,
    required: true,
    maxlength: [20],
  },
  press: {
    type: String,
    required: true,
    maxlength: [20],
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Cities", citiesSchema);
