let x = null;
let selectedOperator = '';
let y = null;
const numberButtons = document.querySelectorAll(".number");
const screenP = document.querySelector("div.screen > p");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("equals");
const clearScreen = document.querySelector(".clearScreen");
let screenText = '';

function operate(x, operator, y) {
    switch (operator) {
        case add:
            return x+y;
            break;
        case subtract:
            return x-y;
            break;
        case multiply:
            return x*y;
            break;
        case divide:
            return x/y;
            break;
    }
}

// get clicked number
numberButtons.forEach(function(numberButton) {
    numberButton.addEventListener("click", function () {


        if (screenP.textContent.length < 10) {
            if (selectedOperator == '') {
                if ( x == null ) {
                    screenText = numberButton.textContent;
                    x = numberButton.textContent;
                }
                else {
                    screenText += numberButton.textContent;
                    x += numberButton.textContent;
                }
            } else {
                if ( y == null ) {
                    screenText = numberButton.textContent;
                    y = numberButton.textContent;
                }
                else {
                    screenText += numberButton.textContent;
                    y += numberButton.textContent;
                }
            }
            screenP.textContent = screenText;
        }
    })
})

operators.forEach(function(operatorButton) {
    operatorButton.addEventListener("click", function () {
        if (selectedOperator != '') {
            operate(x, selectedOperator, y);
        } else {
            selectedOperator = operatorButton.textContent;
        }
    })
})

/* equals.addEventListener("click", function() {
    operate();
}) */

clearScreen.addEventListener("click", function () {
    screenP.textContent = '';
    x = null;
    operator = '';
    y = null;
})