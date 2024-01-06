const output = document.querySelector(".calculator-header");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const pointButton = document.getElementById("point");
const clearButton = document.getElementById("ac");
const backspaceButton = document.getElementById("backspace");

let outputString = "";
let expression = "";

for(let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", () => {
        outputString += numberButtons[i].textContent;
        output.innerHTML = outputString;
    });
}

pointButton.addEventListener("click", () => {
    outputString += '.';
    output.innerHTML = outputString;
});

clearButton.addEventListener("click", () => {
    expression = "";
    outputString = "";
    output.innerHTML = "";
});

backspaceButton.addEventListener("click", () => {})

operatorButtons[0].addEventListener("click", () => {
    expression += `${outputString} / `;
    outputString = ""; output.innerHTML = outputString;


    console.log(expression);
});

operatorButtons[1].addEventListener("click", () => {
    expression += `${outputString} * `;
    outputString = ""; output.innerHTML = outputString;


    console.log(expression);
});

operatorButtons[2].addEventListener("click", () => {
    expression += `${outputString} + `;
    outputString = ""; output.innerHTML = outputString;


    console.log(expression);
});

operatorButtons[3].addEventListener("click", () => {
    expression += `${outputString} - `;
    outputString = ""; output.innerHTML = outputString;


    console.log(expression);
});

operatorButtons[4].addEventListener("click", () => {
    expression += `${outputString}`;
    outputString = "";
    console.log(expression);

    let fixedExpression = expression.split(" ").map( item => !isNaN(item) ? parseFloat(item) : item);

    if(isNaN(fixedExpression[0])) {fixedExpression.shift(); fixedExpression.unshift(0);}
    if(isNaN(fixedExpression[fixedExpression.length - 1])) fixedExpression.splice(fixedExpression.length - 2); 
    console.log(fixedExpression);
    
    fixedExpression = multiplicationAndDivision(fixedExpression);
    fixedExpression = additionAndSubtraction(fixedExpression);

    console.log(fixedExpression);

    expression = "";
    outputString = fixedExpression[0];
    output.innerHTML = outputString;
});

const multiplicationAndDivision = (numberArray) => {
    for(let i = 0; i < numberArray.length; i++) {
        
        if(numberArray[i] === '*') {
            let result = numberArray[i - 1] * numberArray[i + 1]; 
            numberArray.splice(i - 1, 3, result);
            i--;
        } else if(numberArray[i] === '/') {
            let result = numberArray[i - 1] / numberArray[i + 1]; 
            numberArray.splice(i - 1, 3, result);
            i--;
        }
    }

    return numberArray;
};

const additionAndSubtraction = (numberArray) => {
    for(let i = 0; i < numberArray.length; i++) {
        if(numberArray[i] === '+') {
            let result = numberArray[i - 1] + numberArray[i + 1]; 
            numberArray.splice(i - 1, 3, result);
            i--;
        } else if(numberArray[i] === '-') {
            let result = numberArray[i - 1] - numberArray[i + 1]; 
            numberArray.splice(i - 1, 3, result);
            i--;
        }
    }

    return numberArray;
};

console.log(isNaN('-'));