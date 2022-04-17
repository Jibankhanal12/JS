import { expandSnake, onSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = randomFoodPosition();
const expansionRate = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(expansionRate);
    food = randomFoodPosition();
  }
}
export function draw(gameBoard) {
  const foodElement =
    document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}
function randomFoodPosition() {
  let newFoodPosition;
  if (
    newFoodPosition == null ||
    onSnake(newFoodPosition)
  ) {
    newFoodPosition = randomGridPosition();
    return newFoodPosition;
  }
}
