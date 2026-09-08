
/*
 * Input Values
 * Input elements expose the user's current value through .value.
 * trim() removes leading and trailing whitespace before validation.
 */

const input = document.getElementById("nameInput");
const output = document.getElementById("output");

document.getElementById("greetButton").addEventListener("click", () => {
  const name = input.value.trim();

  output.textContent = name
    ? `Hello ${name}!`
    : "Please enter your name.";
});
