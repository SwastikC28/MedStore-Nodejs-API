// Requiring Packages
const express = require("express");
const colors = require("colors");
const app = express();

// Listening to The PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server Started at PORT ${PORT}`.blue);
});
