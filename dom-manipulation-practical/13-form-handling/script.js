
/*
 * Form Handling
 * The submit event runs when a form is submitted.
 * preventDefault() stops the browser's default page navigation/reload.
 */

const form = document.getElementById("studentForm");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  output.textContent = `Student: ${name}, Email: ${email}`;
  form.reset();
});
