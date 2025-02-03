const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply  = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let num1 = "";
let num2 = "";
let operator = "";
let computation = "";
let display = document.querySelector("#display");
let numberButtons = document.querySelectorAll(".operand");


let operate = function(num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    } else {
        alert("ERROR. Incorrect input found!");
    }
};

numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.value;
        let checkDisplay = document.querySelector("#display").textContent;

        if (checkDisplay.length >= 11) {
            return;
        } else {
            if (checkDisplay === "") {
                num1 = value;
                display.textContent = value;
            } else {
                num1 =+ value;
                display.textContent += value;
            }
        }
    })
})