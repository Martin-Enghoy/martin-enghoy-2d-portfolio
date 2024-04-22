import kaboom from "kaboom";

// Global Kaboom export
export const k = kaboom({
  global: false,
  touchToMouse: true, // Includes phone touchscreen
  canvas: document.getElementById("game"),
});
