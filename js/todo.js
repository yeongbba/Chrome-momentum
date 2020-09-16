const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoSpan = toDoForm.querySelector("span"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter((toDoObj) => {
    return toDoObj.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.textContent = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoobj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoobj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
  toDoSpan.classList.remove("todo");
}

function loadTodos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((todo) => {
      paintToDo(todo.text);
    });
  }
}
function showText() {
  toDoSpan.classList.add("todo");
}

function textReshow() {
  toDoSpan.classList.remove("todo");
  toDoInput.value = "";
}
function init() {
  loadTodos();
  toDoForm.addEventListener("submit", handleSubmit);
  toDoInput.addEventListener("keydown", showText);
  toDoInput.addEventListener("blur", textReshow);
}

init();
