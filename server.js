const express = require("express");
const app = express();
const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`running on https://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("WELCOME TO MY STUPID API");
});
