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
