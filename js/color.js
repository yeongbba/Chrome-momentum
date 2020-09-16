const background = document.querySelector("body");
const contain = document.createElement("div");
const color = document.createElement("div");

const black = document.createElement("div");
const blue = document.createElement("div");
const red = document.createElement("div");
const yellow = document.createElement("div");
const green = document.createElement("div");
const gray = document.createElement("div");
const pink = document.createElement("div");
const orange = document.createElement("div");
const purple = document.createElement("div");
const white = document.createElement("div");

const clockColor = document.querySelector(".js-clock h1");
const formColor = document.querySelector(".js-form input");
const formTextColor = document.querySelector(".js-form span");
const greetColor = document.querySelector(".js-greetings");
const weatherColor = document.querySelector(".js-weather");
const toDoFormColor = document.querySelector(".js-toDoForm input");
const toDoFormTextColor = document.querySelector(".js-toDoForm span");
const toDoListColor = document.querySelector(".js-toDoList");

function defaultColor() {
  clockColor.classList.add("cwhite");
  formColor.classList.add("cwhite");
  formTextColor.classList.add("cwhite");
  greetColor.classList.add("cwhite");
  weatherColor.classList.add("cwhite");
  toDoFormColor.classList.add("cwhite");
  toDoFormTextColor.classList.add("cwhite");
  toDoListColor.classList.add("cwhite");
}

function pickColor() {
  contain.append(color);
  contain.append(black);
  contain.append(gray);
  contain.append(white);
  contain.append(blue);
  contain.append(red);
  contain.append(yellow);
  contain.append(green);
  contain.append(pink);
  contain.append(orange);
  contain.append(purple);

  background.append(contain);
  contain.classList.add("color");
  color.textContent = "🖌️";
}

function moveColor() {
  black.classList.add("black");
  gray.classList.add("gray");
  white.classList.add("white");
  blue.classList.add("blue");
  red.classList.add("red");
  yellow.classList.add("yellow");
  green.classList.add("green");
  pink.classList.add("pink");
  orange.classList.add("orange");
  purple.classList.add("purple");
}

function changeBlack() {
  clockColor.classList.add("cblack");
  formColor.classList.add("cblack");
  formTextColor.classList.add("cblack");
  greetColor.classList.add("cblack");
  weatherColor.classList.add("cblack");
  toDoFormColor.classList.add("cblack");
  toDoFormTextColor.classList.add("cblack");
  toDoListColor.classList.add("cblack");

  clockColor.classList.remove("cgray");
  formColor.classList.remove("cgray");
  formTextColor.classList.remove("cgray");
  greetColor.classList.remove("cgray");
  weatherColor.classList.remove("cgray");
  toDoFormColor.classList.remove("cgray");
  toDoFormTextColor.classList.remove("cgray");
  toDoListColor.classList.remove("cgray");

  clockColor.classList.remove("cwhite");
  formColor.classList.remove("cwhite");
  formTextColor.classList.remove("cwhite");
  greetColor.classList.remove("cwhite");
  weatherColor.classList.remove("cwhite");
  toDoFormColor.classList.remove("cwhite");
  toDoFormTextColor.classList.remove("cwhite");
  toDoListColor.classList.remove("cwhite");

  clockColor.classList.remove("cblue");
  formColor.classList.remove("cblue");
  formTextColor.classList.remove("cblue");
  greetColor.classList.remove("cblue");
  weatherColor.classList.remove("cblue");
  toDoFormColor.classList.remove("cblue");
  toDoFormTextColor.classList.remove("cblue");
  toDoListColor.classList.remove("cblue");

  clockColor.classList.remove("cred");
  formColor.classList.remove("cred");
  formTextColor.classList.remove("cred");
  greetColor.classList.remove("cred");
  weatherColor.classList.remove("cred");
  toDoFormColor.classList.remove("cred");
  toDoFormTextColor.classList.remove("cred");
  toDoListColor.classList.remove("cred");

  clockColor.classList.remove("cyellow");
  formColor.classList.remove("cyellow");
  formTextColor.classList.remove("cyellow");
  greetColor.classList.remove("cyellow");
  weatherColor.classList.remove("cyellow");
  toDoFormColor.classList.remove("cyellow");
  toDoFormTextColor.classList.remove("cyellow");
  toDoListColor.classList.remove("cyellow");

  clockColor.classList.remove("cgreen");
  formColor.classList.remove("cgreen");
  formTextColor.classList.remove("cgreen");
  greetColor.classList.remove("cgreen");
  weatherColor.classList.remove("cgreen");
  toDoFormColor.classList.remove("cgreen");
  toDoFormTextColor.classList.remove("cgreen");
  toDoListColor.classList.remove("cgreen");

  clockColor.classList.remove("cpink");
  formColor.classList.remove("cpink");
  formTextColor.classList.remove("cpink");
  greetColor.classList.remove("cpink");
  weatherColor.classList.remove("cpink");
  toDoFormColor.classList.remove("cpink");
  toDoFormTextColor.classList.remove("cpink");
  toDoListColor.classList.remove("cpink");

  clockColor.classList.remove("corange");
  formColor.classList.remove("corange");
  formTextColor.classList.remove("corange");
  greetColor.classList.remove("corange");
  weatherColor.classList.remove("corange");
  toDoFormColor.classList.remove("corange");
  toDoFormTextColor.classList.remove("corange");
  toDoListColor.classList.remove("orangee");

  clockColor.classList.remove("cpurple");
  formColor.classList.remove("cpurple");
  formTextColor.classList.remove("cpurple");
  greetColor.classList.remove("cpurple");
  weatherColor.classList.remove("cpurple");
  toDoFormColor.classList.remove("cpurple");
  toDoFormTextColor.classList.remove("cpurple");
  toDoListColor.classList.remove("cpurple");

  black.classList.remove("black");
  gray.classList.remove("gray");
  white.classList.remove("white");
  blue.classList.remove("blue");
  red.classList.remove("red");
  yellow.classList.remove("yellow");
  green.classList.remove("green");
  pink.classList.remove("pink");
  orange.classList.remove("orange");
  purple.classList.remove("purple");
}

function changeGray() {
  clockColor.classList.remove("cblack");
  formColor.classList.remove("cblack");
  formTextColor.classList.remove("cblack");
  greetColor.classList.remove("cblack");
  weatherColor.classList.remove("cblack");
  toDoFormColor.classList.remove("cblack");
  toDoFormTextColor.classList.remove("cblack");
  toDoListColor.classList.remove("cblack");

  clockColor.classList.add("cgray");
  formColor.classList.add("cgray");
  formTextColor.classList.add("cgray");
  greetColor.classList.add("cgray");
  weatherColor.classList.add("cgray");
  toDoFormColor.classList.add("cgray");
  toDoFormTextColor.classList.add("cgray");
  toDoListColor.classList.add("cgray");

  clockColor.classList.remove("cwhite");
  formColor.classList.remove("cwhite");
  formTextColor.classList.remove("cwhite");
  greetColor.classList.remove("cwhite");
  weatherColor.classList.remove("cwhite");
  toDoFormColor.classList.remove("cwhite");
  toDoFormTextColor.classList.remove("cwhite");
  toDoListColor.classList.remove("cwhite");

  clockColor.classList.remove("cblue");
  formColor.classList.remove("cblue");
  formTextColor.classList.remove("cblue");
  greetColor.classList.remove("cblue");
  weatherColor.classList.remove("cblue");
  toDoFormColor.classList.remove("cblue");
  toDoFormTextColor.classList.remove("cblue");
  toDoListColor.classList.remove("cblue");

  clockColor.classList.remove("cred");
  formColor.classList.remove("cred");
  formTextColor.classList.remove("cred");
  greetColor.classList.remove("cred");
  weatherColor.classList.remove("cred");
  toDoFormColor.classList.remove("cred");
  toDoFormTextColor.classList.remove("cred");
  toDoListColor.classList.remove("cred");

  clockColor.classList.remove("cyellow");
  formColor.classList.remove("cyellow");
  formTextColor.classList.remove("cyellow");
  greetColor.classList.remove("cyellow");
  weatherColor.classList.remove("cyellow");
  toDoFormColor.classList.remove("cyellow");
  toDoFormTextColor.classList.remove("cyellow");
  toDoListColor.classList.remove("cyellow");

  clockColor.classList.remove("cgreen");
  formColor.classList.remove("cgreen");
  formTextColor.classList.remove("cgreen");
  greetColor.classList.remove("cgreen");
  weatherColor.classList.remove("cgreen");
  toDoFormColor.classList.remove("cgreen");
  toDoFormTextColor.classList.remove("cgreen");
  toDoListColor.classList.remove("cgreen");

  clockColor.classList.remove("cpink");
  formColor.classList.remove("cpink");
  formTextColor.classList.remove("cpink");
  greetColor.classList.remove("cpink");
  weatherColor.classList.remove("cpink");
  toDoFormColor.classList.remove("cpink");
  toDoFormTextColor.classList.remove("cpink");
  toDoListColor.classList.remove("cpink");

  clockColor.classList.remove("corange");
  formColor.classList.remove("corange");
  formTextColor.classList.remove("corange");
  greetColor.classList.remove("corange");
  weatherColor.classList.remove("corange");
  toDoFormColor.classList.remove("corange");
  toDoFormTextColor.classList.remove("corange");
  toDoListColor.classList.remove("orangee");

  clockColor.classList.remove("cpurple");
  formColor.classList.remove("cpurple");
  formTextColor.classList.remove("cpurple");
  greetColor.classList.remove("cpurple");
  weatherColor.classList.remove("cpurple");
  toDoFormColor.classList.remove("cpurple");
  toDoFormTextColor.classList.remove("cpurple");
  toDoListColor.classList.remove("cpurple");

  black.classList.remove("black");
  gray.classList.remove("gray");
  white.classList.remove("white");
  blue.classList.remove("blue");
  red.classList.remove("red");
  yellow.classList.remove("yellow");
  green.classList.remove("green");
  pink.classList.remove("pink");
  orange.classList.remove("orange");
  purple.classList.remove("purple");
}

function changeWhite() {
  clockColor.classList.remove("cblack");
  formColor.classList.remove("cblack");
  formTextColor.classList.remove("cblack");
  greetColor.classList.remove("cblack");
  weatherColor.classList.remove("cblack");
  toDoFormColor.classList.remove("cblack");
  toDoFormTextColor.classList.remove("cblack");
  toDoListColor.classList.remove("cblack");

  clockColor.classList.remove("cgray");
  formColor.classList.remove("cgray");
  formTextColor.classList.remove("cgray");
  greetColor.classList.remove("cgray");
  weatherColor.classList.remove("cgray");
  toDoFormColor.classList.remove("cgray");
  toDoFormTextColor.classList.remove("cgray");
  toDoListColor.classList.remove("cgray");

  clockColor.classList.add("cwhite");
  formColor.classList.add("cwhite");
  formTextColor.classList.add("cwhite");
  greetColor.classList.add("cwhite");
  weatherColor.classList.add("cwhite");
  toDoFormColor.classList.add("cwhite");
  toDoFormTextColor.classList.add("cwhite");
  toDoListColor.classList.add("cwhite");

  clockColor.classList.remove("cblue");
  formColor.classList.remove("cblue");
  formTextColor.classList.remove("cblue");
  greetColor.classList.remove("cblue");
  weatherColor.classList.remove("cblue");
  toDoFormColor.classList.remove("cblue");
  toDoFormTextColor.classList.remove("cblue");
  toDoListColor.classList.remove("cblue");

  clockColor.classList.remove("cred");
  formColor.classList.remove("cred");
  formTextColor.classList.remove("cred");
  greetColor.classList.remove("cred");
  weatherColor.classList.remove("cred");
  toDoFormColor.classList.remove("cred");
  toDoFormTextColor.classList.remove("cred");
  toDoListColor.classList.remove("cred");

  clockColor.classList.remove("cyellow");
  formColor.classList.remove("cyellow");
  formTextColor.classList.remove("cyellow");
  greetColor.classList.remove("cyellow");
  weatherColor.classList.remove("cyellow");
  toDoFormColor.classList.remove("cyellow");
  toDoFormTextColor.classList.remove("cyellow");
  toDoListColor.classList.remove("cyellow");

  clockColor.classList.remove("cgreen");
  formColor.classList.remove("cgreen");
  formTextColor.classList.remove("cgreen");
  greetColor.classList.remove("cgreen");
  weatherColor.classList.remove("cgreen");
  toDoFormColor.classList.remove("cgreen");
  toDoFormTextColor.classList.remove("cgreen");
  toDoListColor.classList.remove("cgreen");

  clockColor.classList.remove("cpink");
  formColor.classList.remove("cpink");
  formTextColor.classList.remove("cpink");
  greetColor.classList.remove("cpink");
  weatherColor.classList.remove("cpink");
  toDoFormColor.classList.remove("cpink");
  toDoFormTextColor.classList.remove("cpink");
  toDoListColor.classList.remove("cpink");

  clockColor.classList.remove("corange");
  formColor.classList.remove("corange");
  formTextColor.classList.remove("corange");
  greetColor.classList.remove("corange");
  weatherColor.classList.remove("corange");
  toDoFormColor.classList.remove("corange");
  toDoFormTextColor.classList.remove("corange");
  toDoListColor.classList.remove("orangee");

  clockColor.classList.remove("cpurple");
  formColor.classList.remove("cpurple");
  formTextColor.classList.remove("cpurple");
  greetColor.classList.remove("cpurple");
  weatherColor.classList.remove("cpurple");
  toDoFormColor.classList.remove("cpurple");
  toDoFormTextColor.classList.remove("cpurple");
  toDoListColor.classList.remove("cpurple");

  black.classList.remove("black");
  gray.classList.remove("gray");
  white.classList.remove("white");
  blue.classList.remove("blue");
  red.classList.remove("red");
  yellow.classList.remove("yellow");
  green.classList.remove("green");
  pink.classList.remove("pink");
  orange.classList.remove("orange");
  purple.classList.remove("purple");
}
function changeBlue() {
  clockColor.classList.remove("cblack");
  formColor.classList.remove("cblack");
  formTextColor.classList.remove("cblack");
  greetColor.classList.remove("cblack");
  weatherColor.classList.remove("cblack");
  toDoFormColor.classList.remove("cblack");
  toDoFormTextColor.classList.remove("cblack");
  toDoListColor.classList.remove("cblack");

  clockColor.classList.remove("cgray");
  formColor.classList.remove("cgray");
  formTextColor.classList.remove("cgray");
  greetColor.classList.remove("cgray");
  weatherColor.classList.remove("cgray");
  toDoFormColor.classList.remove("cgray");
  toDoFormTextColor.classList.remove("cgray");
  toDoListColor.classList.remove("cgray");

  clockColor.classList.remove("cwhite");
  formColor.classList.remove("cwhite");
  formTextColor.classList.remove("cwhite");
  greetColor.classList.remove("cwhite");
  weatherColor.classList.remove("cwhite");
  toDoFormColor.classList.remove("cwhite");
  toDoFormTextColor.classList.remove("cwhite");
  toDoListColor.classList.remove("cwhite");

  clockColor.classList.add("cblue");
  formColor.classList.add("cblue");
  formTextColor.classList.add("cblue");
  greetColor.classList.add("cblue");
  weatherColor.classList.add("cblue");
  toDoFormColor.classList.add("cblue");
  toDoFormTextColor.classList.add("cblue");
  toDoListColor.classList.add("cblue");

  clockColor.classList.remove("cred");
  formColor.classList.remove("cred");
  formTextColor.classList.remove("cred");
  greetColor.classList.remove("cred");
  weatherColor.classList.remove("cred");
  toDoFormColor.classList.remove("cred");
  toDoFormTextColor.classList.remove("cred");
  toDoListColor.classList.remove("cred");

  clockColor.classList.remove("cyellow");
  formColor.classList.remove("cyellow");
  formTextColor.classList.remove("cyellow");
  greetColor.classList.remove("cyellow");
  weatherColor.classList.remove("cyellow");
  toDoFormColor.classList.remove("cyellow");
  toDoFormTextColor.classList.remove("cyellow");
  toDoListColor.classList.remove("cyellow");

  clockColor.classList.remove("cgreen");
  formColor.classList.remove("cgreen");
  formTextColor.classList.remove("cgreen");
  greetColor.classList.remove("cgreen");
  weatherColor.classList.remove("cgreen");
  toDoFormColor.classList.remove("cgreen");
  toDoFormTextColor.classList.remove("cgreen");
  toDoListColor.classList.remove("cgreen");

  clockColor.classList.remove("cpink");
  formColor.classList.remove("cpink");
  formTextColor.classList.remove("cpink");
  greetColor.classList.remove("cpink");
  weatherColor.classList.remove("cpink");
  toDoFormColor.classList.remove("cpink");
  toDoFormTextColor.classList.remove("cpink");
  toDoListColor.classList.remove("cpink");

  clockColor.classList.remove("corange");
  formColor.classList.remove("corange");
  formTextColor.classList.remove("corange");
  greetColor.classList.remove("corange");
  weatherColor.classList.remove("corange");
  toDoFormColor.classList.remove("corange");
  toDoFormTextColor.classList.remove("corange");
  toDoListColor.classList.remove("orangee");

  clockColor.classList.remove("cpurple");
  formColor.classList.remove("cpurple");
  formTextColor.classList.remove("cpurple");
  greetColor.classList.remove("cpurple");
  weatherColor.classList.remove("cpurple");
  toDoFormColor.classList.remove("cpurple");
  toDoFormTextColor.classList.remove("cpurple");
  toDoListColor.classList.remove("cpurple");

  black.classList.remove("black");
  gray.classList.remove("gray");
  white.classList.remove("white");
  blue.classList.remove("blue");
  red.classList.remove("red");
  yellow.classList.remove("yellow");
  green.classList.remove("green");
  pink.classList.remove("pink");
  orange.classList.remove("orange");
  purple.classList.remove("purple");
}
function changeRed() {
  clockColor.classList.remove("cblack");
  formColor.classList.remove("cblack");
  formTextColor.classList.remove("cblack");
  greetColor.classList.remove("cblack");
  weatherColor.classList.remove("cblack");
  toDoFormColor.classList.remove("cblack");
  toDoFormTextColor.classList.remove("cblack");
  toDoListColor.classList.remove("cblack");

  clockColor.classList.remove("cgray");
  formColor.classList.remove("cgray");
  formTextColor.classList.remove("cgray");
  greetColor.classList.remove("cgray");
  weatherColor.classList.remove("cgray");
  toDoFormColor.classList.remove("cgray");
  toDoFormTextColor.classList.remove("cgray");
  toDoListColor.classList.remove("cgray");

  clockColor.classList.remove("cwhite");
  formColor.classList.remove("cwhite");
  formTextColor.classList.remove("cwhite");
  greetColor.classList.remove("cwhite");
  weatherColor.classList.remove("cwhite");
  toDoFormColor.classList.remove("cwhite");
  toDoFormTextColor.classList.remove("cwhite");
  toDoListColor.classList.remove("cwhite");

  clockColor.classList.remove("cblue");
  formColor.classList.remove("cblue");
  formTextColor.classList.remove("cblue");
  greetColor.classList.remove("cblue");
  weatherColor.classList.remove("cblue");
  toDoFormColor.classList.remove("cblue");
  toDoFormTextColor.classList.remove("cblue");
  toDoListColor.classList.remove("cblue");

  clockColor.classList.add("cred");
  formColor.classList.add("cred");
  formTextColor.classList.add("cred");
  greetColor.classList.add("cred");
  weatherColor.classList.add("cred");
  toDoFormColor.classList.add("cred");
  toDoFormTextColor.classList.add("cred");
  toDoListColor.classList.add("cred");

  clockColor.classList.remove("cyellow");
  formColor.classList.remove("cyellow");
  formTextColor.classList.remove("cyellow");
  greetColor.classList.remove("cyellow");
  weatherColor.classList.remove("cyellow");
  toDoFormColor.classList.remove("cyellow");
  toDoFormTextColor.classList.remove("cyellow");
  toDoListColor.classList.remove("cyellow");

  clockColor.classList.remove("cgreen");
  formColor.classList.remove("cgreen");
  formTextColor.classList.remove("cgreen");
  greetColor.classList.remove("cgreen");
  weatherColor.classList.remove("cgreen");
  toDoFormColor.classList.remove("cgreen");
  toDoFormTextColor.classList.remove("cgreen");
  toDoListColor.classList.remove("cgreen");

  clockColor.classList.remove("cpink");
  formColor.classList.remove("cpink");
  formTextColor.classList.remove("cpink");
  greetColor.classList.remove("cpink");
  weatherColor.classList.remove("cpink");
  toDoFormColor.classList.remove("cpink");
  toDoFormTextColor.classList.remove("cpink");
  toDoListColor.classList.remove("cpink");

  clockColor.classList.remove("corange");
  formColor.classList.remove("corange");
  formTextColor.classList.remove("corange");
  greetColor.classList.remove("corange");
  weatherColor.classList.remove("corange");
  toDoFormColor.classList.remove("corange");
  toDoFormTextColor.classList.remove("corange");
  toDoListColor.classList.remove("orangee");

  clockColor.classList.remove("cpurple");
  formColor.classList.remove("cpurple");
  formTextColor.classList.remove("cpurple");
  greetColor.classList.remove("cpurple");
  weatherColor.classList.remove("cpurple");
  toDoFormColor.classList.remove("cpurple");
  toDoFormTextColor.classList.remove("cpurple");
  toDoListColor.classList.remove("cpurple");

  black.classList.remove("black");
  gray.classList.remove("gray");
  white.classList.remove("white");
  blue.classList.remove("blue");
  red.classList.remove("red");
  yellow.classList.remove("yellow");
  green.classList.remove("green");
  pink.classList.remove("pink");
  orange.classList.remove("orange");
  purple.classList.remove("purple");
}
function changeYellow() {
  clockColor.classList.remove("cblack");
  formColor.classList.remove("cblack");
  formTextColor.classList.remove("cblack");
  greetColor.classList.remove("cblack");
  weatherColor.classList.remove("cblack");
  toDoFormColor.classList.remove("cblack");
  toDoFormTextColor.classList.remove("cblack");
  toDoListColor.classList.remove("cblack");

  clockColor.classList.remove("cgray");
  formColor.classList.remove("cgray");
  formTextColor.classList.remove("cgray");
  greetColor.classList.remove("cgray");
  weatherColor.classList.remove("cgray");
  toDoFormColor.classList.remove("cgray");
  toDoFormTextColor.classList.remove("cgray");
  toDoListColor.classList.remove("cgray");

  clockColor.classList.remove("cwhite");
  formColor.classList.remove("cwhite");
  formTextColor.classList.remove("cwhite");
  greetColor.classList.remove("cwhite");
  weatherColor.classList.remove("cwhite");
  toDoFormColor.classList.remove("cwhite");
  toDoFormTextColor.classList.remove("cwhite");
  toDoListColor.classList.remove("cwhite");

  clockColor.classList.remove("cblue");
  formColor.classList.remove("cblue");
  formTextColor.classList.remove("cblue");
  greetColor.classList.remove("cblue");
  weatherColor.classList.remove("cblue");
  toDoFormColor.classList.remove("cblue");
  toDoFormTextColor.classList.remove("cblue");
  toDoListColor.classList.remove("cblue");

  clockColor.classList.remove("cred");
  formColor.classList.remove("cred");
  formTextColor.classList.remove("cred");
  greetColor.classList.remove("cred");
  weatherColor.classList.remove("cred");
  toDoFormColor.classList.remove("cred");
  toDoFormTextColor.classList.remove("cred");
  toDoListColor.classList.remove("cred");

  clockColor.classList.add("cyellow");
  formColor.classList.add("cyellow");
  formTextColor.classList.add("cyellow");
  greetColor.classList.add("cyellow");
  weatherColor.classList.add("cyellow");
  toDoFormColor.classList.add("cyellow");
  toDoFormTextColor.classList.add("cyellow");
  toDoListColor.classList.add("cyellow");

  clockColor.classList.remove("cgreen");
  formColor.classList.remove("cgreen");
  formTextColor.classList.remove("cgreen");
  greetColor.classList.remove("cgreen");
  weatherColor.classList.remove("cgreen");
  toDoFormColor.classList.remove("cgreen");
  toDoFormTextColor.classList.remove("cgreen");
  toDoListColor.classList.remove("cgreen");

  clockColor.classList.remove("cpink");
  formColor.classList.remove("cpink");
  formTextColor.classList.remove("cpink");
  greetColor.classList.remove("cpink");
  weatherColor.classList.remove("cpink");
  toDoFormColor.classList.remove("cpink");
  toDoFormTextColor.classList.remove("cpink");
  toDoListColor.classList.remove("cpink");

  clockColor.classList.remove("corange");
  formColor.classList.remove("corange");
  formTextColor.classList.remove("corange");
  greetColor.classList.remove("corange");
  weatherColor.classList.remove("corange");
  toDoFormColor.classList.remove("corange");
  toDoFormTextColor.classList.remove("corange");
  toDoListColor.classList.remove("orangee");

  clockColor.classList.remove("cpurple");
  formColor.classList.remove("cpurple");
  formTextColor.classList.remove("cpurple");
  greetColor.classList.remove("cpurple");
  weatherColor.classList.remove("cpurple");
  toDoFormColor.classList.remove("cpurple");
  toDoFormTextColor.classList.remove("cpurple");
  toDoListColor.classList.remove("cpurple");

  black.classList.remove("black");
  gray.classList.remove("gray");
  white.classList.remove("white");
  blue.classList.remove("blue");
  red.classList.remove("red");
  yellow.classList.remove("yellow");
  green.classList.remove("green");
  pink.classList.remove("pink");
  orange.classList.remove("orange");
  purple.classList.remove("purple");
}
function changeGreen() {
  clockColor.classList.remove("cblack");
  formColor.classList.remove("cblack");
  formTextColor.classList.remove("cblack");
  greetColor.classList.remove("cblack");
  weatherColor.classList.remove("cblack");
  toDoFormColor.classList.remove("cblack");
  toDoFormTextColor.classList.remove("cblack");
  toDoListColor.classList.remove("cblack");

  clockColor.classList.remove("cgray");
  formColor.classList.remove("cgray");
  formTextColor.classList.remove("cgray");
  greetColor.classList.remove("cgray");
  weatherColor.classList.remove("cgray");
  toDoFormColor.classList.remove("cgray");
  toDoFormTextColor.classList.remove("cgray");
  toDoListColor.classList.remove("cgray");

  clockColor.classList.remove("cwhite");
  formColor.classList.remove("cwhite");
  formTextColor.classList.remove("cwhite");
  greetColor.classList.remove("cwhite");
  weatherColor.classList.remove("cwhite");
  toDoFormColor.classList.remove("cwhite");
  toDoFormTextColor.classList.remove("cwhite");
  toDoListColor.classList.remove("cwhite");

  clockColor.classList.remove("cblue");
  formColor.classList.remove("cblue");
  formTextColor.classList.remove("cblue");
  greetColor.classList.remove("cblue");
  weatherColor.classList.remove("cblue");
  toDoFormColor.classList.remove("cblue");
  toDoFormTextColor.classList.remove("cblue");
  toDoListColor.classList.remove("cblue");

  clockColor.classList.remove("cred");
  formColor.classList.remove("cred");
  formTextColor.classList.remove("cred");
  greetColor.classList.remove("cred");
  weatherColor.classList.remove("cred");
  toDoFormColor.classList.remove("cred");
  toDoFormTextColor.classList.remove("cred");
  toDoListColor.classList.remove("cred");

  clockColor.classList.remove("cyellow");
  formColor.classList.remove("cyellow");
  formTextColor.classList.remove("cyellow");
  greetColor.classList.remove("cyellow");
  weatherColor.classList.remove("cyellow");
  toDoFormColor.classList.remove("cyellow");
  toDoFormTextColor.classList.remove("cyellow");
  toDoListColor.classList.remove("cyellow");

  clockColor.classList.add("cgreen");
  formColor.classList.add("cgreen");
  formTextColor.classList.add("cgreen");
  greetColor.classList.add("cgreen");
  weatherColor.classList.add("cgreen");
  toDoFormColor.classList.add("cgreen");
  toDoFormTextColor.classList.add("cgreen");
  toDoListColor.classList.add("cgreen");

  clockColor.classList.remove("cpink");
  formColor.classList.remove("cpink");
  formTextColor.classList.remove("cpink");
  greetColor.classList.remove("cpink");
  weatherColor.classList.remove("cpink");
  toDoFormColor.classList.remove("cpink");
  toDoFormTextColor.classList.remove("cpink");
  toDoListColor.classList.remove("cpink");

  clockColor.classList.remove("corange");
  formColor.classList.remove("corange");
  formTextColor.classList.remove("corange");
  greetColor.classList.remove("corange");
  weatherColor.classList.remove("corange");
  toDoFormColor.classList.remove("corange");
  toDoFormTextColor.classList.remove("corange");
  toDoListColor.classList.remove("orangee");

  clockColor.classList.remove("cpurple");
  formColor.classList.remove("cpurple");
  formTextColor.classList.remove("cpurple");
  greetColor.classList.remove("cpurple");
  weatherColor.classList.remove("cpurple");
  toDoFormColor.classList.remove("cpurple");
  toDoFormTextColor.classList.remove("cpurple");
  toDoListColor.classList.remove("cpurple");

  black.classList.remove("black");
  gray.classList.remove("gray");
  white.classList.remove("white");
  blue.classList.remove("blue");
  red.classList.remove("red");
  yellow.classList.remove("yellow");
  green.classList.remove("green");
  pink.classList.remove("pink");
  orange.classList.remove("orange");
  purple.classList.remove("purple");
}
function changePink() {
  clockColor.classList.remove("cblack");
  formColor.classList.remove("cblack");
  formTextColor.classList.remove("cblack");
  greetColor.classList.remove("cblack");
  weatherColor.classList.remove("cblack");
  toDoFormColor.classList.remove("cblack");
  toDoFormTextColor.classList.remove("cblack");
  toDoListColor.classList.remove("cblack");

  clockColor.classList.remove("cgray");
  formColor.classList.remove("cgray");
  formTextColor.classList.remove("cgray");
  greetColor.classList.remove("cgray");
  weatherColor.classList.remove("cgray");
  toDoFormColor.classList.remove("cgray");
  toDoFormTextColor.classList.remove("cgray");
  toDoListColor.classList.remove("cgray");

  clockColor.classList.remove("cwhite");
  formColor.classList.remove("cwhite");
  formTextColor.classList.remove("cwhite");
  greetColor.classList.remove("cwhite");
  weatherColor.classList.remove("cwhite");
  toDoFormColor.classList.remove("cwhite");
  toDoFormTextColor.classList.remove("cwhite");
  toDoListColor.classList.remove("cwhite");

  clockColor.classList.remove("cblue");
  formColor.classList.remove("cblue");
  formTextColor.classList.remove("cblue");
  greetColor.classList.remove("cblue");
  weatherColor.classList.remove("cblue");
  toDoFormColor.classList.remove("cblue");
  toDoFormTextColor.classList.remove("cblue");
  toDoListColor.classList.remove("cblue");

  clockColor.classList.remove("cred");
  formColor.classList.remove("cred");
  formTextColor.classList.remove("cred");
  greetColor.classList.remove("cred");
  weatherColor.classList.remove("cred");
  toDoFormColor.classList.remove("cred");
  toDoFormTextColor.classList.remove("cred");
  toDoListColor.classList.remove("cred");

  clockColor.classList.remove("cyellow");
  formColor.classList.remove("cyellow");
  formTextColor.classList.remove("cyellow");
  greetColor.classList.remove("cyellow");
  weatherColor.classList.remove("cyellow");
  toDoFormColor.classList.remove("cyellow");
  toDoFormTextColor.classList.remove("cyellow");
  toDoListColor.classList.remove("cyellow");

  clockColor.classList.remove("cgreen");
  formColor.classList.remove("cgreen");
  formTextColor.classList.remove("cgreen");
  greetColor.classList.remove("cgreen");
  weatherColor.classList.remove("cgreen");
  toDoFormColor.classList.remove("cgreen");
  toDoFormTextColor.classList.remove("cgreen");
  toDoListColor.classList.remove("cgreen");

  clockColor.classList.add("cpink");
  formColor.classList.add("cpink");
  formTextColor.classList.add("cpink");
  greetColor.classList.add("cpink");
  weatherColor.classList.add("cpink");
  toDoFormColor.classList.add("cpink");
  toDoFormTextColor.classList.add("cpink");
  toDoListColor.classList.add("cpink");

  clockColor.classList.remove("corange");
  formColor.classList.remove("corange");
  formTextColor.classList.remove("corange");
  greetColor.classList.remove("corange");
  weatherColor.classList.remove("corange");
  toDoFormColor.classList.remove("corange");
  toDoFormTextColor.classList.remove("corange");
  toDoListColor.classList.remove("orangee");

  clockColor.classList.remove("cpurple");
  formColor.classList.remove("cpurple");
  formTextColor.classList.remove("cpurple");
  greetColor.classList.remove("cpurple");
  weatherColor.classList.remove("cpurple");
  toDoFormColor.classList.remove("cpurple");
  toDoFormTextColor.classList.remove("cpurple");
  toDoListColor.classList.remove("cpurple");

  black.classList.remove("black");
  gray.classList.remove("gray");
  white.classList.remove("white");
  blue.classList.remove("blue");
  red.classList.remove("red");
  yellow.classList.remove("yellow");
  green.classList.remove("green");
  pink.classList.remove("pink");
  orange.classList.remove("orange");
  purple.classList.remove("purple");
}
function changeOrange() {
  clockColor.classList.remove("cblack");
  formColor.classList.remove("cblack");
  formTextColor.classList.remove("cblack");
  greetColor.classList.remove("cblack");
  weatherColor.classList.remove("cblack");
  toDoFormColor.classList.remove("cblack");
  toDoFormTextColor.classList.remove("cblack");
  toDoListColor.classList.remove("cblack");

  clockColor.classList.remove("cgray");
  formColor.classList.remove("cgray");
  formTextColor.classList.remove("cgray");
  greetColor.classList.remove("cgray");
  weatherColor.classList.remove("cgray");
  toDoFormColor.classList.remove("cgray");
  toDoFormTextColor.classList.remove("cgray");
  toDoListColor.classList.remove("cgray");

  clockColor.classList.remove("cwhite");
  formColor.classList.remove("cwhite");
  formTextColor.classList.remove("cwhite");
  greetColor.classList.remove("cwhite");
  weatherColor.classList.remove("cwhite");
  toDoFormColor.classList.remove("cwhite");
  toDoFormTextColor.classList.remove("cwhite");
  toDoListColor.classList.remove("cwhite");

  clockColor.classList.remove("cblue");
  formColor.classList.remove("cblue");
  formTextColor.classList.remove("cblue");
  greetColor.classList.remove("cblue");
  weatherColor.classList.remove("cblue");
  toDoFormColor.classList.remove("cblue");
  toDoFormTextColor.classList.remove("cblue");
  toDoListColor.classList.remove("cblue");

  clockColor.classList.remove("cred");
  formColor.classList.remove("cred");
  formTextColor.classList.remove("cred");
  greetColor.classList.remove("cred");
  weatherColor.classList.remove("cred");
  toDoFormColor.classList.remove("cred");
  toDoFormTextColor.classList.remove("cred");
  toDoListColor.classList.remove("cred");

  clockColor.classList.remove("cyellow");
  formColor.classList.remove("cyellow");
  formTextColor.classList.remove("cyellow");
  greetColor.classList.remove("cyellow");
  weatherColor.classList.remove("cyellow");
  toDoFormColor.classList.remove("cyellow");
  toDoFormTextColor.classList.remove("cyellow");
  toDoListColor.classList.remove("cyellow");

  clockColor.classList.remove("cgreen");
  formColor.classList.remove("cgreen");
  formTextColor.classList.remove("cgreen");
  greetColor.classList.remove("cgreen");
  weatherColor.classList.remove("cgreen");
  toDoFormColor.classList.remove("cgreen");
  toDoFormTextColor.classList.remove("cgreen");
  toDoListColor.classList.remove("cgreen");

  clockColor.classList.remove("cpink");
  formColor.classList.remove("cpink");
  formTextColor.classList.remove("cpink");
  greetColor.classList.remove("cpink");
  weatherColor.classList.remove("cpink");
  toDoFormColor.classList.remove("cpink");
  toDoFormTextColor.classList.remove("cpink");
  toDoListColor.classList.remove("cpink");

  clockColor.classList.add("corange");
  formColor.classList.add("corange");
  formTextColor.classList.add("corange");
  greetColor.classList.add("corange");
  weatherColor.classList.add("corange");
  toDoFormColor.classList.add("corange");
  toDoFormTextColor.classList.add("corange");
  toDoListColor.classList.add("orangee");

  clockColor.classList.remove("cpurple");
  formColor.classList.remove("cpurple");
  formTextColor.classList.remove("cpurple");
  greetColor.classList.remove("cpurple");
  weatherColor.classList.remove("cpurple");
  toDoFormColor.classList.remove("cpurple");
  toDoFormTextColor.classList.remove("cpurple");
  toDoListColor.classList.remove("cpurple");

  black.classList.remove("black");
  gray.classList.remove("gray");
  white.classList.remove("white");
  blue.classList.remove("blue");
  red.classList.remove("red");
  yellow.classList.remove("yellow");
  green.classList.remove("green");
  pink.classList.remove("pink");
  orange.classList.remove("orange");
  purple.classList.remove("purple");
}
function changePurple() {
  clockColor.classList.remove("cblack");
  formColor.classList.remove("cblack");
  formTextColor.classList.remove("cblack");
  greetColor.classList.remove("cblack");
  weatherColor.classList.remove("cblack");
  toDoFormColor.classList.remove("cblack");
  toDoFormTextColor.classList.remove("cblack");
  toDoListColor.classList.remove("cblack");

  clockColor.classList.remove("cgray");
  formColor.classList.remove("cgray");
  formTextColor.classList.remove("cgray");
  greetColor.classList.remove("cgray");
  weatherColor.classList.remove("cgray");
  toDoFormColor.classList.remove("cgray");
  toDoFormTextColor.classList.remove("cgray");
  toDoListColor.classList.remove("cgray");

  clockColor.classList.remove("cwhite");
  formColor.classList.remove("cwhite");
  formTextColor.classList.remove("cwhite");
  greetColor.classList.remove("cwhite");
  weatherColor.classList.remove("cwhite");
  toDoFormColor.classList.remove("cwhite");
  toDoFormTextColor.classList.remove("cwhite");
  toDoListColor.classList.remove("cwhite");

  clockColor.classList.remove("cblue");
  formColor.classList.remove("cblue");
  formTextColor.classList.remove("cblue");
  greetColor.classList.remove("cblue");
  weatherColor.classList.remove("cblue");
  toDoFormColor.classList.remove("cblue");
  toDoFormTextColor.classList.remove("cblue");
  toDoListColor.classList.remove("cblue");

  clockColor.classList.remove("cred");
  formColor.classList.remove("cred");
  formTextColor.classList.remove("cred");
  greetColor.classList.remove("cred");
  weatherColor.classList.remove("cred");
  toDoFormColor.classList.remove("cred");
  toDoFormTextColor.classList.remove("cred");
  toDoListColor.classList.remove("cred");

  clockColor.classList.remove("cyellow");
  formColor.classList.remove("cyellow");
  formTextColor.classList.remove("cyellow");
  greetColor.classList.remove("cyellow");
  weatherColor.classList.remove("cyellow");
  toDoFormColor.classList.remove("cyellow");
  toDoFormTextColor.classList.remove("cyellow");
  toDoListColor.classList.remove("cyellow");

  clockColor.classList.remove("cgreen");
  formColor.classList.remove("cgreen");
  formTextColor.classList.remove("cgreen");
  greetColor.classList.remove("cgreen");
  weatherColor.classList.remove("cgreen");
  toDoFormColor.classList.remove("cgreen");
  toDoFormTextColor.classList.remove("cgreen");
  toDoListColor.classList.remove("cgreen");

  clockColor.classList.remove("cpink");
  formColor.classList.remove("cpink");
  formTextColor.classList.remove("cpink");
  greetColor.classList.remove("cpink");
  weatherColor.classList.remove("cpink");
  toDoFormColor.classList.remove("cpink");
  toDoFormTextColor.classList.remove("cpink");
  toDoListColor.classList.remove("cpink");

  clockColor.classList.remove("corange");
  formColor.classList.remove("corange");
  formTextColor.classList.remove("corange");
  greetColor.classList.remove("corange");
  weatherColor.classList.remove("corange");
  toDoFormColor.classList.remove("corange");
  toDoFormTextColor.classList.remove("corange");
  toDoListColor.classList.remove("orangee");

  clockColor.classList.add("cpurple");
  formColor.classList.add("cpurple");
  formTextColor.classList.add("cpurple");
  greetColor.classList.add("cpurple");
  weatherColor.classList.add("cpurple");
  toDoFormColor.classList.add("cpurple");
  toDoFormTextColor.classList.add("cpurple");
  toDoListColor.classList.add("cpurple");

  black.classList.remove("black");
  gray.classList.remove("gray");
  white.classList.remove("white");
  blue.classList.remove("blue");
  red.classList.remove("red");
  yellow.classList.remove("yellow");
  green.classList.remove("green");
  pink.classList.remove("pink");
  orange.classList.remove("orange");
  purple.classList.remove("purple");
}
function init() {
  pickColor();
  window.addEventListener("load", defaultColor);
  color.addEventListener("click", moveColor);
  black.addEventListener("click", changeBlack);
  gray.addEventListener("click", changeGray);
  white.addEventListener("click", changeWhite);
  blue.addEventListener("click", changeBlue);
  red.addEventListener("click", changeRed);
  yellow.addEventListener("click", changeYellow);
  green.addEventListener("click", changeGreen);
  pink.addEventListener("click", changePink);
  orange.addEventListener("click", changeOrange);
  purple.addEventListener("click", changePurple);
}

init();
