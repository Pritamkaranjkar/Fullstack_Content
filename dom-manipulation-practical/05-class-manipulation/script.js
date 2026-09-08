
/*
 * Class Manipulation
 * classList provides methods for adding, removing, toggling,
 * and checking CSS classes without replacing the full class attribute.
 */

const box = document.getElementById("box");

document.getElementById("addButton").addEventListener("click", () => {
  box.classList.add("highlight");
});

document.getElementById("removeButton").addEventListener("click", () => {
  box.classList.remove("highlight");
});

document.getElementById("toggleButton").addEventListener("click", () => {
  box.classList.toggle("highlight");
});
