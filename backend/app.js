require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const authenticateUser = require("./middleware/authentication");
const cors = require("cors");

const citiesRouter = require("./routes/cities");
const authRouter = require("./routes/auth");

const port = process.env.PORT || 3000;

// middleware

app.use(express.json());
app.use(cors());
// routes

app.use("/api/auth", authRouter);
app.use("/api/cities", authenticateUser, citiesRouter);

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
