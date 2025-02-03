const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply  = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let num1 = 0;
let num2 = 0;
let operator = "";

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

console.log(operate(10, 5, "*"));