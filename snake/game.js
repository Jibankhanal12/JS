import { snakeSpeed } from "./snake.js";
let lastRenderTime = 0;
function main(currentime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender =
    (currentime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snakeSpeed)
    return;
  console.log("render");
  lastRenderTime = currentime;
  update();
  draw();
}
window.requestAnimationFrame(main);
function update() {}
