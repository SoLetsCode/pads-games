const express = require("express");
const app = express();

const path = require("path");

//helpers
const randomImage = require("./helper/random-image");

//middleware - this gets run on each call
app.use(express.json()); // this is so we can access req.body

//routes
const sample = require("./routes/api/sample.js");

//URLs to access each API
app.use("/api/sample", sample);

app.get("/api/image", (req, res) => {
  let imagePath = randomImage();
  res.sendFile(`${__dirname}/assets/photos/${imagePath}`);
  // res.send(
  //   `<img src=./assets/photos/BiscuitDefault.jpg alt="random dog image"/>`
  // );
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
