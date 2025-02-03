const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply  = (num1, num2) => num1 * num2;
const divide = (num1, num2) => (num2 !== 0 ? num1 / num2 : "NO NO ZERO!");

let num1 = "";
let num2 = "";
let operator = "";
let display = document.querySelector("#display");
let numberButtons = document.querySelectorAll(".operand");
let clearButton = document.querySelector(".clear");
let operatorButtons = document.querySelectorAll(".operator");
let equals = document.querySelector(".equals");
let decimalButton = document.querySelector(".decimal");

const operate = function(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let result;
    switch (operator) {
        case "+":
            result =  add(num1, num2);
            break;
        case "-":
            result =  subtract(num1, num2);
            break;
        case "*":
            result =  multiply(num1, num2);
            break;
        case "/":
            result =  divide(num1, num2);
            break;
        default:
            return "ERROR";
    }

    return formatResult(result);
};

const formatResult = (result) => {
    let stringResult = result.toString();

    if (stringResult.includes(".")) {
        return stringResult.slice(0, 13);
    }

    return stringResult.length > 13 ? stringResult.slice(0, 13) : stringResult;
};

numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.textContent;
       
        if (!operator) {
            if (num1.length < 13) {
                num1 += value;
                display.textContent = num1;
            }
        } else {
            if (num2.length < 15) {
                num2 += value;
                display.textContent = num2;
            }
        }
        
    })
});

decimalButton.addEventListener("click", () => {
    if (!operator) {
        if (!num1.includes(".")) {
            num1 = num1 === "" ? "0." : num1 + ".";
            display.textContent = num1;
        }
    } else {
        if (!num2.includes(".")) {
            num2 = num2 === "" ? "0." : num2 + ".";
            display.textContent = num2;
        }
    }
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