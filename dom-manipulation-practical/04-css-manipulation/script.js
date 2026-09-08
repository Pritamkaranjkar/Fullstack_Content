
/*
 * CSS Manipulation
 * The style property changes inline CSS for a specific element.
 * For larger UI changes, classList is usually easier to maintain.
 */

const box = document.getElementById("colorBox");

document.getElementById("colorButton").addEventListener("click", () => {
  box.style.backgroundColor = "lightgreen";
  box.style.color = "darkgreen";
});

document.getElementById("sizeButton").addEventListener("click", () => {
  box.style.fontSize = "24px";
  box.style.fontWeight = "bold";
});
