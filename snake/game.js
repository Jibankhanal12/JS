import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed,
} from "./snake.js";
let lastRenderTime = 0;
const gameBoard =
  document.getElementById("game-board");
function main(currentime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender =
    (currentime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snakeSpeed)
    return;
  // console.log("render");
  lastRenderTime = currentime;
  update();
  draw();
}
window.requestAnimationFrame(main);
function update() {
  updateSnake();
}
function draw() {
  drawSnake(gameBoard);
}
