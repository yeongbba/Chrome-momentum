const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  span = form.querySelector("span"),
  greeting = document.querySelector(".js-greetings"),
  weathers = document.querySelector(".js-weather"),
  refreshs = document.createElement("div");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  greeting.classList.add(SHOWING_CN);
  form.classList.remove(SHOWING_CN);
  weathers.classList.add(SHOWING_CN);
  let hour = new Date().getHours();
  if (hour > 4 && hour < 12) {
    greeting.textContent = `Good Morning, ${text}`;
  } else if (hour === 12) {
    greeting.textContent = `It's lunch time, ${text}`;
  } else if (hour > 12 && hour < 18) {
    greeting.textContent = `Good afternoon, ${text}`;
  } else if (hour >= 18 && hour < 22) {
    greeting.textContent = `Good evening, ${text}`;
  } else {
    greeting.textContent = `Good night, ${text}`;
  }
}

function loadName() {
  greeting.classList.remove(SHOWING_CN);
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function textErase() {
  span.classList.add("name");
}

function textReturn() {
  span.classList.remove("name");
  input.value = "";
}

function refresh() {
  let back = document.querySelector("body");
  refreshs.textContent = "🌀";
  refreshs.classList.add("refresh");
  back.append(refreshs);
}

function refreshUser() {
  localStorage.removeItem(USER_LS);
  localStorage.removeItem("coords");
  window.location.reload();
}

function init() {
  loadName();
  refresh();
  input.addEventListener("keydown", textErase);
  input.addEventListener("blur", textReturn);
  refreshs.addEventListener("click", refreshUser);
}

init();
