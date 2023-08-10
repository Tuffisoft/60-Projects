const formEl = document.querySelector(".form");
const inputEl = document.getElementById("task-text");
const listEl = document.getElementById("list");

let list = JSON.parse(localStorage.getItem("list"));

list.forEach((task) => {
  toDoList(task);
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  toDoList();
});

function toDoList(task) {
  let newTask = inputEl.value;
  if (task) {
    newTask = task.name;
  }
  const listItemEL = document.createElement("li");
  if (task && task.checked) {
    listItemEL.classList.add("checked");
  }
  listItemEL.innerText = newTask;
  listEl.appendChild(listItemEL);
  inputEl.value = "";
  const checkBoxEl = document.createElement("div");
  const trashBoxEl = document.createElement("div");
  checkBoxEl.innerHTML = `<i class="fa-regular fa-square-check"></i>`;
  trashBoxEl.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  listItemEL.appendChild(checkBoxEl);
  listItemEL.appendChild(trashBoxEl);

  checkBoxEl.addEventListener("click", () => {
    listItemEL.classList.toggle("checked");
    updateLocalStorage();
  });

  trashBoxEl.addEventListener("click", () => {
    listItemEL.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
  const listItemEls = document.querySelectorAll("li");
  list = [];
  listItemEls.forEach((listItemEl) => {
    list.push({
      name: listItemEl.innerText,
      checked: listItemEl.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}
