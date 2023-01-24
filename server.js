const express = require("express");
const app = express();
const PORT = 8080 || process.env.PORT;
const connectDB = require("./dbinit");
const cors = require("cors");
require("colors");
require("dotenv").config();
connectDB();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("WELCOME TO MY STUPID API");
});
app.listen(PORT, () => {
  console.log(`running on https://localhost:${PORT}`.america);
});
