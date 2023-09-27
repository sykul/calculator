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

const x = 1;
const operator = "";
const y = 1;

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

const numberButtons = document.querySelectorAll(".number");
const screenP = document.querySelector("div.screen > p");

// put numbers on screen
function numberOnScreen(number) {
    screenP.textContent += number;
}

// get cicked number
numberButtons.forEach(function(numberButton) {
    numberButton.addEventListener("click", function () {
        let number = numberButton.textContent;
        numberOnScreen(number);

    })
})

