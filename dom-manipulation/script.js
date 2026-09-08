/*
 * DOM Manipulation
 * Find → Read → Modify → Create → Remove → Respond to Events
 */

/* 1. Selecting Elements */

const message = document.getElementById("message");
const selectButton = document.getElementById("selectButton");
const selectOutput = document.getElementById("selectOutput");

const firstCard = document.querySelector(".card");
const allCards = document.querySelectorAll(".card");

console.log("First card:", firstCard);
console.log("Total cards:", allCards.length);

selectButton.addEventListener("click", () => {
  selectOutput.textContent = "Element selected successfully.";
});


/* 2. Changing Content */

const textButton = document.getElementById("textButton");
const htmlButton = document.getElementById("htmlButton");

textButton.addEventListener("click", () => {
  message.textContent = "This content was changed using textContent.";
});

htmlButton.addEventListener("click", () => {
  message.innerHTML = "<strong>Hello Student!</strong> DOM is changing HTML.";
});


/* 3. Reading Input */

const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const greeting = document.getElementById("greeting");

greetButton.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (!name) {
    greeting.textContent = "Please enter your name.";
    return;
  }

  greeting.textContent = `Hello ${name}! Welcome to DOM manipulation.`;
});


/* 4. Changing CSS */

const colorBox = document.getElementById("colorBox");
const colorButton = document.getElementById("colorButton");
const sizeButton = document.getElementById("sizeButton");

colorButton.addEventListener("click", () => {
  colorBox.style.backgroundColor = "lightgreen";
  colorBox.style.color = "darkgreen";
});

sizeButton.addEventListener("click", () => {
  colorBox.style.fontSize = "24px";
  colorBox.style.fontWeight = "bold";
});


/* 5. Working With Classes */

const classBox = document.getElementById("classBox");
const addClassButton = document.getElementById("addClassButton");
const removeClassButton = document.getElementById("removeClassButton");
const toggleClassButton = document.getElementById("toggleClassButton");

addClassButton.addEventListener("click", () => {
  classBox.classList.add("highlight");
});

removeClassButton.addEventListener("click", () => {
  classBox.classList.remove("highlight");
});

toggleClassButton.addEventListener("click", () => {
  classBox.classList.toggle("highlight");
});

console.log(
  "Highlight active:",
  classBox.classList.contains("highlight")
);


/* 6. Working With Attributes */

const websiteLink = document.getElementById("websiteLink");
const changeLinkButton = document.getElementById("changeLinkButton");
const getAttributeButton = document.getElementById("getAttributeButton");
const attributeOutput = document.getElementById("attributeOutput");

getAttributeButton.addEventListener("click", () => {
  const url = websiteLink.getAttribute("href");
  attributeOutput.textContent = `Current URL: ${url}`;
});

changeLinkButton.addEventListener("click", () => {
  websiteLink.setAttribute(
    "href",
    "https://developer.mozilla.org/"
  );

  websiteLink.textContent = "Open MDN";
});


/* 7. Creating Elements */

const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemButton");
const itemList = document.getElementById("itemList");

addItemButton.addEventListener("click", () => {
  const itemText = itemInput.value.trim();

  if (!itemText) {
    alert("Enter an item first.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = itemText;

  itemList.appendChild(listItem);
  itemInput.value = "";
});


/* 8. Removing Elements */

const removeBox = document.getElementById("removeBox");
const removeButton = document.getElementById("removeButton");

removeButton.addEventListener("click", () => {
  removeBox.remove();
});


/* 9. DOM Traversal */

const childParagraph = document.getElementById("childParagraph");
const traversalButton = document.getElementById("traversalButton");
const traversalOutput = document.getElementById("traversalOutput");

traversalButton.addEventListener("click", () => {
  const parent = childParagraph.parentElement;

  parent.style.backgroundColor = "#fde68a";
  traversalOutput.textContent = `Parent element: ${parent.tagName}`;
});


/* 10. Events */

const eventButton = document.getElementById("eventButton");
const eventOutput = document.getElementById("eventOutput");

eventButton.addEventListener("click", (event) => {
  console.log("Event:", event);
  console.log("Target:", event.target);

  eventOutput.textContent = "The button was clicked.";
});


/* 11. Mouse Events */

const mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseenter", () => {
  mouseBox.style.backgroundColor = "#86efac";
  mouseBox.textContent = "Mouse entered.";
});

mouseBox.addEventListener("mouseleave", () => {
  mouseBox.style.backgroundColor = "#ddd6fe";
  mouseBox.textContent = "Mouse left.";
});


/* 12. Keyboard Events */

const keyboardInput = document.getElementById("keyboardInput");
const keyboardOutput = document.getElementById("keyboardOutput");

keyboardInput.addEventListener("input", () => {
  keyboardOutput.textContent = `You typed: ${keyboardInput.value}`;
});

keyboardInput.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});


/* 13. Form Handling */

const studentForm = document.getElementById("studentForm");
const studentName = document.getElementById("studentName");
const studentEmail = document.getElementById("studentEmail");
const formOutput = document.getElementById("formOutput");

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = studentName.value.trim();
  const email = studentEmail.value.trim();

  formOutput.textContent = `Student: ${name}, Email: ${email}`;

  studentForm.reset();
});


/* 14. Event Bubbling */

const outerBox = document.getElementById("outerBox");
const innerButton = document.getElementById("innerButton");
const bubbleOutput = document.getElementById("bubbleOutput");

outerBox.addEventListener("click", () => {
  bubbleOutput.textContent += " Outer element received the event.";
});

innerButton.addEventListener("click", (event) => {
  bubbleOutput.textContent = "Button clicked.";

  /*
   * Events bubble from the target toward its ancestors.
   * Use event.stopPropagation() to stop bubbling when required.
   */

  // event.stopPropagation();
});


/* 15. Event Delegation */

const delegationList = document.getElementById("delegationList");
const delegationOutput = document.getElementById("delegationOutput");

delegationList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    delegationOutput.textContent =
      `You clicked: ${event.target.textContent}`;
  }
});


/* 16. Todo Application */

const todoInput = document.getElementById("todoInput");
const todoButton = document.getElementById("todoButton");
const todoList = document.getElementById("todoList");

function addTodo() {
  const task = todoInput.value.trim();

  if (!task) {
    alert("Please enter a task.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.classList.add("todo-item");

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
    listItem.remove();
  });

  actions.append(completeButton, deleteButton);
  listItem.append(text, actions);
  todoList.appendChild(listItem);

  todoInput.value = "";
}

todoButton.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});