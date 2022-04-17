import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed,
  getSnakeHead,
  snakeIntersect,
} from "./snake.js";

import {
  update as updateFood,
  draw as drawFood,
} from "./food.js";
import { outsideGrid } from "./grid.js";
let lastRenderTime = 0;
let gameOver = false;
const gameBoard =
  document.getElementById("game-board");
function main(currentime) {
  if (gameOver) {
    if (confirm("you lost do you want to restart the game?")) {
      window.location.reload();
    }
    return;
  }
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
  updateFood();
  checkDeath();
}
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
function checkDeath() {
  gameOver =
    outsideGrid(getSnakeHead()) ||
    snakeIntersect();
}
