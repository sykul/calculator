let x = 1;
let operator = "";
let y = 1;
const numberButtons = document.querySelectorAll(".number");
const screenP = document.querySelector("div.screen > p");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("equals");
const clearScreen = document.querySelector(".clearScreen");
let displayValue = ``;

function add(x,y) {
    return x+y;
}

function subtract(x,y) {
    return x-y;
}

function multiply(x,y) {
    return x*y;
}

function divide(x,y) {
    return x/y;
}

function operate(x, operator, y) {
    switch (operator) {
        case add:
            return add(x,y);
            break;
        case subtract:
            return subtract(x,y);
            break;
        case multiply:
            return multiply(x,y);
            break;
        case divide:
            return divide(x,y);
            break;
    }
}


// put numbers on screen
function numberOnScreen(number) {
    if (screenP.textContent.length < 10 ) {
        screenP.textContent += number;
    };
}

// get clicked number
numberButtons.forEach(function(numberButton) {
    numberButton.addEventListener("click", function () {
        let number = numberButton.textContent;
        numberOnScreen(number);
    })
})

operators.forEach(function(operatorButton) {
    operatorButton.addEventListener("click", function () {
    x = screenP.textContent;
    let selectedOperator = operatorButton.textContent;
    })
})

/* equals.addEventListener("click", function() {
    operate();
}) */

clearScreen.addEventListener("click", function () {
    screenP.textContent = '';
    x = 1;
    operator = "";
    y = 1;
})