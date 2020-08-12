
const path = require("path");
const express = require("express");
const app = express(); // create express app

//add middleware to inform express.js to serve all the files from public folder *************
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
