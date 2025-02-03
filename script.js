const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply  = (num1, num2) => num1 * num2;
const divide = (num1, num2) => (num2 !== 0 ? num1 / num2 : "ERROR do not THE 0");

let num1 = "";
let num2 = "";
let operator = "";
let display = document.querySelector("#display");
let numberButtons = document.querySelectorAll(".operand");
let clearButton = document.querySelector(".clear");
let operatorButtons = document.querySelectorAll(".operator");
let equals = document.querySelector(".equals");

const operate = function(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "ERROR";
    }
};

numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.textContent;
       
        if (!operator) {
            num1 += value;
            display.textContent = num1;
        } else {
            num2 += value;
            display.textContent = num2;
        }
        
    })
});

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (num1 === "") return;

        if (num2 !== "") {
            num1 = operate(num1, num2, operator);
            num2 = "";
            display.textContent = num1;
        }

        operator = e.target.textContent;

    })
});

equals.addEventListener("click", () => {
    if (num1 === "" || num2 === "") return;

    let result = operate(num1, num2, operator);
    display.textContent = result;
    num1 = result;
    num2 = "";
    operator = "";
});

clearButton.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    display.textContent = "";
});