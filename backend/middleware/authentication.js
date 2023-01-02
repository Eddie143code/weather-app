const User = require("../models/authModel");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  // check header
  let token;

  token = req.headers.authorization.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload);
    // attach the user to the job routes
    req.user = { userId: payload.id };
    console.log(req.user);
    next();
  } catch (error) {
    throw new Error("Authentication wrong");
  }
};

module.exports = auth;
