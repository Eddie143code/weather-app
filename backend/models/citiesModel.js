const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20],
  },
  temperature: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20],
  },
  precipitation: {
    type: String,
    required: true,
    maxlength: [20],
  },
  wind: {
    type: String,
    required: true,
    maxlength: [20],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Cities", citiesSchema);
