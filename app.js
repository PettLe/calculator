/* The basic functions for each operation. May later need to take an array as a parameter? */

add = (a, b) => a + b;
substract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

/* Function that takes an operator, and according to it calls a matching function from before. */

function operate(op, displayValues) {
    if (op === "+") {
        return add(+displayValues[0], +displayValues[1]);
    } else if (op === "-") {
        return substract(displayValues[0], displayValues[1]);
    } else if (op === "*") {
        return multiply(displayValues[0], displayValues[1]);
    } else if (op === "/") {
        return divide(displayValues[0], displayValues[1]);
    } else {
        console.log("Operator ei found")
        console.log("operator is, btw, " + op);
    }
}


/* Using FOR loop for the buttons, we take their values and print it on to display.
Simultaneously we add the values in to an array for later use. */

const button = document.getElementsByClassName("button");
let display = document.querySelector(".display");
let numStr = "";

for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        display.textContent += this.value;
        numStr += this.value;
        console.log(displayValues);
    });
    }


/* Actual functionality comes from here. Making the buttons commit the actual function of
showing the result on screen. Also saving everything in array.*/

let displayValues = [];
let op = "";
const operator = document.getElementsByClassName("operator");

for (i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function() {
        op = this.value;
        displayValues.push(numStr.slice(0, -1));
        numStr = "";
    })
}

const result = document.querySelector(".result");
result.addEventListener("click", function() {
    displayValues.push(numStr.slice(0, -1));
    display.textContent = operate(op, displayValues);
    displayValues = [display.textContent];
    console.log(displayValues);
 
})


const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", function() {
    display.textContent = "";
    numStr = "";
    displayValues = [];
    console.log(displayValues);
});

