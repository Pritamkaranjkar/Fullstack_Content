
/*
 * Mouse Events
 * Mouse events allow the UI to react to pointer interaction.
 * mouseenter and mouseleave fire when the pointer enters or leaves.
 */

const box = document.getElementById("mouseBox");

box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "#86efac";
  box.textContent = "Mouse entered.";
});

box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "#ddd6fe";
  box.textContent = "Mouse left.";
});
