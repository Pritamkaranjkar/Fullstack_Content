
/*
 * Element Selection
 * We select existing HTML elements before manipulating them.
 * getElementById() targets one unique ID.
 * querySelector() uses CSS selectors and returns the first match.
 * querySelectorAll() returns all matching elements.
 */

const message = document.getElementById("message");
const output = document.getElementById("output");
const button = document.querySelector("#runButton");
const cards = document.querySelectorAll(".card");

button.addEventListener("click", () => {
  output.textContent = `Selected "${message.textContent}". Total cards: ${cards.length}.`;
  console.log(message, cards);
});
