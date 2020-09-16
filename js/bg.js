const body = document.querySelector("body");

const IMG_NUMBER = 5;

function printImage(imgnum) {
  const image = new Image();
  image.src = `images/${imgnum + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  printImage(randomNumber);
}

init();
