let x = null;
let selectedOperator = '';
let y = null;
const numberButtons = document.querySelectorAll(".number");
const screenDiv = document.querySelector("body > div > div.screen");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clearScreen = document.querySelector(".clearScreen");
let screenText = '';
let result;


function operate(x, selectedOperator, y) {
    x = Number(x);
    y = Number(y);
    switch (selectedOperator) {
        case '+':
            return Math.round((x+y)*100)/100;
            break;
        case '-':
            return Math.round((x-y)*100)/100;
            break;
        case '×':
            return Math.round((x*y)*100)/100;
            break;
        case '÷':
            if (y === 0) {return "Danger, division by zero."}
            return Math.round((x/y)*100)/100;
            break;
    }
}

function writeToScreen(numberButton) {
    if (selectedOperator == '') {
        if ( x == null || equalsClicked) {
            screenText = numberButton.textContent;
            x = numberButton.textContent;
            equalsClicked = false;
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
    screenDiv.textContent = screenText;
}

function getClickedNumber(numberButton) {
    if (screenDiv.textContent === '0') {
        screenDiv.textContent = '';
        screenText = '';
    }

    if (screenDiv.textContent.length < 10) {
        writeToScreen(numberButton);
    } else if (screenDiv.textContent == "Danger, division by zero." || screenDiv.textContent == "Too big. Start again.") {
        screenDiv.textContent = '';
        x = null;
        selectedOperator = '';
        y = null;
        writeToScreen(numberButton);
    }
}

// number buttons
numberButtons.forEach(function(numberButton) {
    numberButton.addEventListener("click", function() {
        getClickedNumber(numberButton);
    })
})

// operator buttons
operators.forEach(function(operatorButton) {
    operatorButton.addEventListener("click", function () {
        if (x && !y) {
            selectedOperator = operatorButton.textContent;
        } else if (selectedOperator && x && y) {
            result = operate(x, selectedOperator, y);
            if (result == "Danger, division by zero.") {
                screenDiv.textContent = result;
                x = result;
                y = null;
                selectedOperator = '';
            } else if (result.toString().length < 10) {
                screenDiv.textContent = result;
                x = result;
                y = null;
                selectedOperator = operatorButton.textContent;
            } else {
                screenDiv.textContent = "Too big. Start again.";
                selectedOperator = '';
                y = null;
            }
        }
    })
})

// equals
equals.addEventListener("click", function() {
    result = operate(x, selectedOperator, y);
    if (result == "Danger, division by zero.") {
        screenDiv.textContent = result;
        x = null;
    } else if (result.toString().length < 10) {
        screenDiv.textContent = result;
        x = result;
    } else {
        screenDiv.textContent = "Too big. Start again.";
    }
    y = null;
    selectedOperator = '';
    screenText = '';
    equalsClicked = true;
})

// clear screen
clearScreen.addEventListener("click", function () {
    screenDiv.textContent = '';
    x = null;
    selectedOperator = '';
    y = null;
})