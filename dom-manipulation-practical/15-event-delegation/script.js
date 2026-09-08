
/*
 * Event Delegation
 * One listener is attached to the parent instead of every child.
 * event.target identifies the element that originally triggered the event.
 * This is especially useful for dynamically created elements.
 */

const list = document.getElementById("list");
const output = document.getElementById("output");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    output.textContent = `Clicked: ${event.target.textContent}`;
  }
});
