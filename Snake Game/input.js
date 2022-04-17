let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", e => {
  switch (e.key) {
    // Switch case is used to check the keybord key pressed
    case "ArrowUp":
      // the direction of the snake is not reverse to its own axis that why if condition checks the direction
      if (inputDirection.y != 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (inputDirection.y != 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (inputDirection.x != 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (inputDirection.x != 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});
export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
