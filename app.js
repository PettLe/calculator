/* The basic functions for each operation. */

add = (a, b) => a + b;
substract = (a, b) => a - b;
multiply = (a, b) => a * b;
function divide(a, b) {
    if (b === "0") {
        return numStr = "Wohhoo, nope. Don't do this.";
    }
    return (a / b);
}

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
    } 
}


/* Using FOR loop for the buttons, we take their values and print it on to display.
Simultaneously we add the values in to an array for later use. */


const nums = document.getElementsByClassName("nums");
let display = document.querySelector(".display");
let numStr = "";
let displayValues = [];


for (i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", function() {
        if (numStr.length < 10) {
        numStr += this.value;
        display.textContent += this.value;
    }/* else if (numStr.length > 9) {
        let max = document.createElement("p");
        display.appendChild(max);
        max.setAttribute("style", "text-align: right");       //FIX THIS!!!!!
        max.textContent = "(MAX)";
    }*/
    });
    }


/* Actual functionality comes from here. Making the buttons commit the actual function of
showing the result on screen. Also saving everything in array.*/


let op = "";
const operator = document.getElementsByClassName("operator");

for (i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function() {  
       if (numStr !== "") {
        displayValues.push(numStr);}
        if (displayValues.length > 1) {
            calcResult();
        }
        op = this.value;
        display.textContent += this.value;
        numStr = "";
    })
}

const result = document.querySelector(".result");
result.addEventListener("click", calcResult)

function calcResult() {
    displayValues.push(numStr);
    numStr = "";
    display.textContent = operate(op, displayValues);
    displayValues = [display.textContent];
 
}

// RESET BUTTON

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", function() {
    display.textContent = "";
    numStr = "";
    displayValues = [];
});
