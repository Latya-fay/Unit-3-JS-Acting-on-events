// Your code here
// Grab the dodger element
const dodger = document.getElementById("dodger");

// Function to move the dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Prevent the dodger from going past the left edge (0px)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const gameWidth = 400;
  const dodgerWidth = 40;

  // Prevent the dodger from going past the right edge
  if (left < gameWidth - dodgerWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}

// Event listener to handle key presses
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
