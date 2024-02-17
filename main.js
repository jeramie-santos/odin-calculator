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
let check;
let op = true;


function getSum(num1,num2){
    input.textContent = num1 + num2;
    displayValue = input.textContent;
    op = true;
}

function getDifference(num1,num2){
    input.textContent = num1 - num2;
    displayValue = input.textContent;
    op = true;
}

function getProduct(num1,num2){
    input.textContent = num1 * num2;
    displayValue = input.textContent;
    op = true;
}

function getQuotient(num1,num2){
    let quot = num1 / num2;
    let quotient = quot.toFixed(2);
    if (num2 == 0){
        input.textContent = "ERROR";
        displayValue = "ERROR";
    } else {
        input.textContent = quotient;
        displayValue = quotient;
    }
    op = true;
}

function operate(){
    const operation = displayValue.split(" ");

    firstNum = Number(operation[0]);
    operator = operation[1];
    secondNum = Number(operation[2]);

    if (operator == null || secondNum == 0){
        event.preventDefault();
    } else if (operator === "-"){
        getDifference(firstNum,secondNum);
    } else if (operator === "*"){
        getProduct(firstNum,secondNum);
    } else if (operator === "/"){
        getQuotient(firstNum,secondNum);
    } else if (operator === '+'){
        getSum(firstNum,secondNum);
    }
}

function checkOperation(){
    const operation = displayValue.split(" ");
    if (operation.length == 3){
        return true;
    }
}


equal.addEventListener('click', operate);

del.addEventListener('click', () => {
    input.textContent = "";
    displayValue = "";
    check = false;
});

zero.addEventListener('click', () =>{
    if (check == true) {
        input.textContent = " ";
        check = false;
    }
    input.textContent += "0";
    displayValue += "0";
    console.log(displayValue);
});

one.addEventListener('click', () =>{
    if (check == true){
        input.textContent = " ";
        check = false;
    }
    input.textContent += "1";
    displayValue += "1";
    console.log(displayValue);
});

two.addEventListener('click', () =>{
    if (check == true) {
        input.textContent = " ";
        check = false;
    }
    input.textContent += "2";
    displayValue += "2";
    console.log(displayValue);
});

three.addEventListener('click', () =>{
    if (check == true) {
        input.textContent = " ";
        check = false;
    }
    input.textContent += "3";
    displayValue += "3";
    console.log(displayValue);
});

four.addEventListener('click', () =>{
    if (check == true) {
        input.textContent = " ";
        check = false;
    }
    input.textContent += "4";
    displayValue += "4";
    console.log(displayValue);
});

five.addEventListener('click', () =>{
    if (check == true) {
        input.textContent = " ";
        check = false;
    }
    input.textContent += "5";
    displayValue += "5";
    console.log(displayValue);
});

six.addEventListener('click', () =>{
    if (check == true) {
        input.textContent = " ";
        check = false;
    }
    input.textContent += "6";
    displayValue += "6";
    console.log(displayValue);
});

seven.addEventListener('click', () =>{
    if (check == true) {
        input.textContent = " ";
        check = false;
    }
    input.textContent += "7";
    displayValue += "7";
    console.log(displayValue);
});

eight.addEventListener('click', () =>{
    if (check == true) {
        input.textContent = " ";
        check = false;
    }
    input.textContent += "8";
    displayValue += "8";
    console.log(displayValue);
});

nine.addEventListener('click', () =>{
    if (check == true) {
        input.textContent = " ";
        check = false;
    }
    input.textContent += "9";
    displayValue += "9";
    console.log(displayValue);
});

decimal.addEventListener('click', () =>{
    if (check == true) {
        input.textContent = " ";
        check = false;
    }
    input.textContent += ".";
    displayValue += ".";
    console.log(displayValue);
});





add.addEventListener('click', () => {
    if (checkOperation()){
        operate();
    }
    if (op){
        displayValue += " + ";
        console.log(displayValue);
        check = true;
        op = false;
    }
    
});

minus.addEventListener('click', () => {
    if (checkOperation()){
        operate();
   }
   if (op){
        displayValue += " - ";
        console.log(displayValue);
        check = true;
        op = false;
    }
});

multiply.addEventListener('click', () => {
    if (checkOperation()){
        operate();
   }
   if (op){
    displayValue += " * ";
    console.log(displayValue);
    check = true;
    op = false;
    }
});

divide.addEventListener('click', () => {
    if (checkOperation()){
        operate();
   }
   if (op){
    displayValue += " / ";
    console.log(displayValue);
    check = true;
    op = false;
    }  
});





