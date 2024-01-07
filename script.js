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

const enterKey = (number) => {
    outputString += String(number);
    output.innerHTML = outputString;
};

const point = () => {
    outputString += '.';
    output.innerHTML = outputString;
};

const clear = () => {
    expression = "";
    outputString = "";
    output.innerHTML = "";
};

const backspaceDelte = () => {   outputString = outputString.slice(0, outputString.length - 1);
    output.innerHTML = outputString;
};

const division = () => {
    expression += `${outputString} / `;
    outputString = ""; output.innerHTML = outputString;


    console.log(expression);
};

const multiplication = () => {
    expression += `${outputString} * `;
    outputString = ""; output.innerHTML = outputString;


    console.log(expression);
};

const addition = () => {
        expression += `${outputString} + `;
    outputString = ""; output.innerHTML = outputString;


    console.log(expression);
};

const subtraction = () => {
    expression += `${outputString} - `;
    outputString = ""; output.innerHTML = outputString;


    console.log(expression);
};

const equal = () => {
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
};

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



pointButton.addEventListener("click", point);

clearButton.addEventListener("click", clear);

backspaceButton.addEventListener("click", backspaceDelte);

operatorButtons[0].addEventListener("click", division);

operatorButtons[1].addEventListener("click", multiplication);

operatorButtons[2].addEventListener("click", addition);

operatorButtons[3].addEventListener("click", subtraction);

operatorButtons[4].addEventListener("click", equal);

window.addEventListener("keydown", (ev) => {
    switch(ev.code) {
        case 'Digit0':
        case 'Numpad0':
            enterKey(0);
            break;
        case 'Digit1':
        case 'Numpad1':
            enterKey(1);
            break;
        case 'Digit2':
        case 'Numpad2':
            enterKey(2);
            break; 
        case 'Digit3':
        case 'Numpad3':
            enterKey(3);
            break;
        case 'Digit4':
        case 'Numpad4':
            enterKey(4);
            break;
        case 'Digit5':
        case 'Numpad5':
            enterKey(5);
            break;
        case 'Digit6':    
        case 'Numpad6':
            enterKey(6);
            break;
        case 'Digit7':
        case 'Numpad7':
            enterKey(7);
            break; 
        case 'Digit8':
        case 'Numpad8':
            enterKey(8);
            break;
        case 'Digit9':
        case 'Numpad9':
            enterKey(9);
            break;
        case 'NumpadDecimal':
            point();
            break;
        case 'NumpadAdd':
            addition();
            break; 
        case 'NumpadSubtract':
            subtraction();
            break;
        case 'NumpadMultiply':
            multiplication();
            break;
        case 'NumpadDivide':
            division();
            break;
        case 'Escape':
            clear();
            break;
        case 'NumpadEnter':
        case "Enter":
            equal();
            break; 
        case 'Backspace':
            backspaceDelte();
            break; 
    }
});