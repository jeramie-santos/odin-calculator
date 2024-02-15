const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const divide = document.querySelector('#divide');
const add = document.querySelector('#add');
const multiply = document.querySelector('#multiply');
const minus = document.querySelector('#minus');
const equal = document.querySelector('#equal');
const del = document.querySelector('#delete');
const decimal = document.querySelector('#decimal');
const input = document.querySelector('#input-number');


let firstNum = "";
let operator = "";
let secondNum = "";
let displayValue = "";


function getSum(num1,num2){
    input.textContent = num1 + num2;
    displayValue = input.textContent;
}

function getDifference(num1,num2){
    input.textContent = num1 - num2;
    displayValue = input.textContent;
}

function getProduct(num1,num2){
    input.textContent = num1 * num2;
    displayValue = input.textContent;
}

function getQuotient(num1,num2){
    input.textContent = num1 / num2;
    displayValue = input.textContent;
}

function operate(){
    const operation = displayValue.split(" ");

    firstNum = Number(operation[0]);
    operator = operation[1];
    secondNum = Number(operation[2]);

    if (operator === "+"){
        getSum(firstNum,secondNum);
    } else if (operator === "-"){
        getDifference(firstNum,secondNum);
    } else if (operator === "*"){
        getProduct(firstNum,secondNum);
    } else if (operator === "/"){
        getQuotient(firstNum,secondNum);
    }
}


equal.addEventListener('click', operate);

del.addEventListener('click', () => {
    input.textContent = "";
    displayValue = "";
});

zero.addEventListener('click', () =>{
    input.textContent += "0";
    displayValue += "0";
    console.log(displayValue);
});

one.addEventListener('click', () =>{
    input.textContent += "1";
    displayValue += "1";
    console.log(displayValue);
});

two.addEventListener('click', () =>{
    input.textContent += "2";
    displayValue += "2";
    console.log(displayValue);
});

three.addEventListener('click', () =>{
    input.textContent += "3";
    displayValue += "3";
    console.log(displayValue);
});

four.addEventListener('click', () =>{
    input.textContent += "4";
    displayValue += "4";
    console.log(displayValue);
});

five.addEventListener('click', () =>{
    input.textContent += "5";
    displayValue += "5";
    console.log(displayValue);
});

six.addEventListener('click', () =>{
    input.textContent += "6";
    displayValue += "6";
    console.log(displayValue);
});

seven.addEventListener('click', () =>{
    input.textContent += "7";
    displayValue += "7";
    console.log(displayValue);
});

eight.addEventListener('click', () =>{
    input.textContent += "8";
    displayValue += "8";
    console.log(displayValue);
});

nine.addEventListener('click', () =>{
    input.textContent += "9";
    displayValue += "9";
    console.log(displayValue);
});

decimal.addEventListener('click', () =>{
    input.textContent += ".";
    displayValue += ".";
    console.log(displayValue);
});



add.addEventListener('click', () => {
    displayValue += " + ";
    console.log(displayValue);
    input.textContent = " ";
});

minus.addEventListener('click', () => {
    displayValue += " - ";
    console.log(displayValue);
    input.textContent = " ";
});

multiply.addEventListener('click', () => {
    displayValue += " * ";
    console.log(displayValue);
    input.textContent = " ";
});

divide.addEventListener('click', () => {
    displayValue += " / ";
    console.log(displayValue);
    input.textContent = " ";
});





