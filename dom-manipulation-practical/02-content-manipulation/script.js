
/*
 * Content Manipulation
 * textContent changes plain text.
 * innerHTML parses the assigned string as HTML.
 * Prefer textContent for untrusted/user-provided text.
 */

const message = document.getElementById("message");

document.getElementById("textButton").addEventListener("click", () => {
  message.textContent = "Content changed with textContent.";
});

document.getElementById("htmlButton").addEventListener("click", () => {
  message.innerHTML = "<strong>Content changed with innerHTML.</strong>";
});
