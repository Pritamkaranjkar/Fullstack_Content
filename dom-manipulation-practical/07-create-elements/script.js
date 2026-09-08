
/*
 * Creating Elements
 * createElement() creates a DOM node in memory.
 * appendChild() inserts that node into the document.
 */

const input = document.getElementById("itemInput");
const list = document.getElementById("itemList");

document.getElementById("addButton").addEventListener("click", () => {
  const text = input.value.trim();

  if (!text) return;

  const item = document.createElement("li");
  item.textContent = text;
  list.appendChild(item);

  input.value = "";
});
