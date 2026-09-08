
/*
 * Keyboard Events
 * keydown fires when a key is pressed.
 * input fires when the value of a text control changes.
 */

const input = document.getElementById("keyboardInput");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  output.textContent = `You typed: ${input.value}`;
});

input.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});
