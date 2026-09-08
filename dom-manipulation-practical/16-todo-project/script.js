
/*
 * Todo Project
 * This combines the main DOM techniques into one small application.
 * Each task is created dynamically and receives its own controls.
 */

const todoInput = document.getElementById("todoInput");
const todoButton = document.getElementById("todoButton");
const todoList = document.getElementById("todoList");

function addTodo() {
  const task = todoInput.value.trim();

  if (!task) return;

  const item = document.createElement("li");
  item.classList.add("todo-item");

  const text = document.createElement("span");
  text.textContent = task;

  const actions = document.createElement("div");

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";

  completeButton.addEventListener("click", () => {
    text.classList.toggle("completed");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
    item.remove();
  });

  actions.append(completeButton, deleteButton);
  item.append(text, actions);
  todoList.appendChild(item);

  todoInput.value = "";
}

todoButton.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
