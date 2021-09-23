/* The basic functions for each operation. May later need to take an array as a parameter? */

add = (a, b) => a + b;
substract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

/* Function that takes an operator, and according to it calls a matching function from before. */

function operate(op, a, b) {
    if (op === "+") {
        return add(a, b);
    } else if (op === "-") {
        return substract(a, b);
    } else if (op === "*") {
        return multiply(a, b);
    } else {
        return divide(a, b);
    }
}

console.log(operate("*", 6, 3));

/* FYI This is the time to create the layout. */

/* Create FUNCTION for the calculator's display screen. When clicking the buttons (refer to the 
RPS UI project!), it should store the "display value" in to a variable. */

/* Actual functionality. Store the first input (into an array?) when user presses an operator, 
also save which operator was used. Run OPERATE() when = is pressed.

-We already have the code for display. When OPERATE(), just update the display with the
solution to the operation.*/