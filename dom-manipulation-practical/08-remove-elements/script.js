
/*
 * Removing Elements
 * remove() removes the selected element from its parent in the DOM.
 */

const box = document.getElementById("removeBox");

document.getElementById("removeButton").addEventListener("click", () => {
  box.remove();
});
