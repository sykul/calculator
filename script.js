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

function getClickedNumber(numberButton) {
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
}

function getClickedOperator(operatorButton) {
    if (x && !y || x == 0 && !y) {
        selectedOperator = operatorButton.textContent;
    } else if (selectedOperator && (x || x == 0) && (y || y == 0)) {
        result = operate(x, selectedOperator, y);
        if (result == "Danger, division by zero.") {
            screenP.textContent = result;
            x = result;
            y = null;
            selectedOperator = '';
        } else if (result.toString().length < 10) {
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
}

// get clicked number
numberButtons.forEach(function(numberButton) {
    numberButton.addEventListener("click", function () {
        getClickedNumber(numberButton);
    })
})

// operator buttons
operators.forEach(function(operatorButton) {
    operatorButton.addEventListener("click", function () {
        getClickedOperator(operatorButton);
    })
})

// equals
equals.addEventListener("click", function() {
    result = operate(x, selectedOperator, y);
    if (result == "Danger, division by zero.") {
        screenP.textContent = result;
        x = null;
    } else if (result.toString().length < 10) {
        screenP.textContent = result;
        x = result;
    } else if (result.toString().length >= 10) {
        screenP.textContent = "Too big. Start again.";
    } else {
        screenP.textContent = "uh oh";
    }
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