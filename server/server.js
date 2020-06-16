//hide passwords and database ifno
require("dotenv").config();

const express = require("express");
const app = express();

const path = require("path");
const PORT = 5000;

//helpers
const randomImage = require("./helper/random-image");

//middleware - this gets run on each call
app.use(express.json()); // this is so we can access req.body

//routes
const database = require("./routes/api/database.js");

//URLs to access each API
app.use("/api/db", database);

//reminder to modulize this
app.get("/api/image", (req, res) => {
  let imagePath = randomImage();
  res.sendFile(`${__dirname}/assets/photos/${imagePath}`);
  // res.send(
  //   `<img src=./assets/photos/BiscuitDefault.jpg alt="random dog image"/>`
  // );
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
