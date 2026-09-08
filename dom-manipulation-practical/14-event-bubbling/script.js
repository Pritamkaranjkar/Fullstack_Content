
/*
 * Event Bubbling
 * An event normally travels from the target upward through its ancestors.
 * This allows parent elements to observe events from their children.
 */

const outer = document.getElementById("outerBox");
const inner = document.getElementById("innerButton");
const output = document.getElementById("output");

outer.addEventListener("click", () => {
  output.textContent += " Outer received the event.";
});

inner.addEventListener("click", () => {
  output.textContent = "Button received the event.";
});

/*
 * event.stopPropagation() can stop the event from continuing upward.
 */
