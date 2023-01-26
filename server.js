/*const express = require("express");
const app = express();
const PORT = 8080 || process.env.PORT;
const connectDB = require("./dbinit");
const cors = require("cors");
require("colors");
require("dotenv").config();
connectDB();
app.use(cors());

app.use("/", userRoutes);
app.use("/", donationRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("WELCOME TO MY STUPID API");
});
app.listen(PORT, () => {
  console.log(`running on https://localhost:${PORT}`.america);
});*/

/*const express = require("express");

import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./dbinit";
import userRoutes from "./routes/user";
import donationRoutes from "./routes/donations";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Food Sharing App");
});

app.use("/users", userRoutes);
app.use("/donations", donationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});*/

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./dbinit");
const userRoutes = require("./routes/user");
const donationRoutes = require("./routes/donations");
const institutionRoutes = require("./routes/institution");

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Food Sharing App");
});

app.use("/users", userRoutes);
app.use("/donations", donationRoutes);
app.use("/institutions", institutionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
