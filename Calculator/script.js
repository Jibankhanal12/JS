class Calculator {
  constructor(historyButton, currentButton) {
    this.historyButton = historyButton;
    this.currentButton = currentButton;
    this.clear();
  }
  clear() {
    this.currentOperation = ' ';
    this.previousOperation = ' ';
    this.operand = '';
  }
  delete() {
    this.currentOperation = this.currentOperation.toString().slice(0, -1);
  }

  
  appendNumbers(number) {
    if (number === "." && this.currentOperation.includes(".")) return;
    this.currentOperation = this.currentOperation + number;
  }
  chooseOperation(oprend) {
    if (this.currentOperation == "") return;
    if (this.previousOperation !== "") {
      this.compute();
    }
    this.operand = oprend;
    this.previousOperation = this.currentOperation;
    this.currentOperation = "";
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperation);
    const current = parseFloat(this.currentOperation);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operand) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperation = computation;
    this.previousOperation = '';
    this.operand = undefined;
  }
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }
  updateDisplay() {
    this.currentButton.innerText = this.getDisplayNumber(this.currentOperation);
    if(this.operand!=null){
    this.historyButton.innerText = `${ this.getDisplayNumber(this.previousOperation)} ${this.operand}`
    }
    else {
        this.previousOperation.innerText='';
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operandButtons = document.querySelectorAll("[data-operand]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const historyButton = document.querySelector("[data-history]");
const currentButton = document.querySelector("[data-current]");

const calculator = new Calculator(historyButton, currentButton);
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumbers(button.innerText);
    calculator.updateDisplay();
  });
});
operandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});
equalsButton.addEventListener("click", (_button) => {
  calculator.compute();
  calculator.updateDisplay();
});
allClearButton.addEventListener("click", (_button) => {
    calculator.clear();
    calculator.updateDisplay();
  });
  deleteButton.addEventListener("click", (_button) => {
    calculator.delete();
    calculator.updateDisplay();
  })
