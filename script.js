let x = null;
let selectedOperator = '';
let y = null;
const numberButtons = document.querySelectorAll(".number");
const screenP = document.querySelector("div.screen > p");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clearScreen = document.querySelector(".clearScreen");
let screenText = '';

function operate(x, selectedOperator, y) {
    x = Number(x);
    y = Number(y);
    switch (selectedOperator) {
        case '+':
            return Math.round(x+y);
            break;
        case '-':
            return Math.round(x-y);
            break;
        case '×':
            return Math.round(x*y);
            break;
        case '÷':
            if (y === 0) {return "Danger, division by zero."}
            return Math.round(x/y);
            break;
    }
}

function writeToScreen(numberButton) {
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

// get clicked number
numberButtons.forEach(function(numberButton) {
    numberButton.addEventListener("click", function () {
    if (screenP.textContent === '0') {
        screenP.textContent = '';
        screenText = '';
    }

    if (screenP.textContent.length < 10) {
        writeToScreen(numberButton);
    } else if (screenP.textContent == "Danger, division by zero." || screenP.textContent == "Too big. Start again.") {
        screenP.textContent = '';
        x = null;
        selectedOperator = '';
        y = null;
        writeToScreen(numberButton);
    }
    })
})

// operator buttons
operators.forEach(function(operatorButton) {
    operatorButton.addEventListener("click", function () {
        if (x && !y) {
            selectedOperator = operatorButton.textContent;
        } else if (selectedOperator && x && y) {
            result = operate(x, selectedOperator, y);
            if (result.toString().length < 10) {
                screenP.textContent = result;
                x = result;
                y = null;
                selectedOperator = operatorButton.textContent;
            } else {
                screenP.textContent = "Too big. Start again.";
                selectedOperator = '';
                y = null;
            }
        }
    })
})

// equals
equals.addEventListener("click", function() {
    result = operate(x, selectedOperator, y);
    if (result.toString().length < 10) {
        screenP.textContent = result;
    } else {
        screenP.textContent = "Too big. Start again.";
    }
    x = null;
    y = null;
    selectedOperator = '';
})

// clear screen
clearScreen.addEventListener("click", function () {
    screenP.textContent = '';
    x = null;
    selectedOperator = '';
    y = null;
})