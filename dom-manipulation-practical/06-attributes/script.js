
/*
 * Attributes
 * getAttribute() reads an attribute.
 * setAttribute() creates or updates an attribute.
 * removeAttribute() deletes an attribute.
 */

const link = document.getElementById("link");
const output = document.getElementById("output");

document.getElementById("readButton").addEventListener("click", () => {
  output.textContent = `Current href: ${link.getAttribute("href")}`;
});

document.getElementById("changeButton").addEventListener("click", () => {
  link.setAttribute("href", "https://developer.mozilla.org/");
  link.textContent = "Open MDN";
});
