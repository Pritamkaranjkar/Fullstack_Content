
/*
 * DOM Traversal
 * Traversal lets us move through relationships in the DOM tree.
 * parentElement moves upward; children moves downward.
 */

const child = document.getElementById("child");
const output = document.getElementById("output");

document.getElementById("traverseButton").addEventListener("click", () => {
  const parent = child.parentElement;
  parent.style.backgroundColor = "#fde68a";
  output.textContent = `Parent element: ${parent.tagName}`;
});
