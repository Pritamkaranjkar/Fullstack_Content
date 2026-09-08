
/*
 * Events
 * addEventListener() connects an event type to a callback.
 * The Event object contains information about what happened.
 */

const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", (event) => {
  console.log("Event type:", event.type);
  console.log("Event target:", event.target);
  output.textContent = "The button was clicked.";
});
