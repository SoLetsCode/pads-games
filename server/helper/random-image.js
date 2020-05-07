const fs = require("fs");
const path = __dirname + "/../assets/photos";
const files = fs.readdirSync(path);

function randomImage() {
  let randomNum = Math.floor(Math.random() * files.length);
  if (randomNum === 0) {
    randomNum++;
  }
  return files[randomNum];
}

module.exports = randomImage;
