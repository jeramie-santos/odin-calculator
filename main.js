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

let firstNum;
let operator;
let lastNum;

function getSum(num1,num2){
   input.value = num1 + num2;
}

function getDifference(num1,num2){
   input.value = num1 - num2;
}

function getProduct(num1,num2){
   input.value = num1 * num2;
}

function getQuotient(num1,num2){
    input.value = num1 / num2;
}

function operate(){
    let displayValue = input.value;
    const operation = displayValue.split(" ");

    firstNum = Number(operation[0]);
    operator = operation[1];
    lastNum = Number(operation[2]);

    if (operator === "+"){
        getSum(firstNum,lastNum);
    } else if (operator === "-"){
        getDifference(firstNum,lastNum);
    } else if (operator === "*"){
        getProduct(firstNum,lastNum);
    } else if (operator === "/"){
        getQuotient(firstNum,lastNum);
    }

}


equal.addEventListener('click', operate);

del.addEventListener('click', () => {
    input.value = "";
});

zero.addEventListener('click', () =>{
    input.value += "0";
});

one.addEventListener('click', () =>{
    input.value += "1";
});

two.addEventListener('click', () =>{
    input.value += "2";
});

three.addEventListener('click', () =>{
    input.value += "3";
});

four.addEventListener('click', () =>{
    input.value += "4";
});

five.addEventListener('click', () =>{
    input.value += "5";
});

six.addEventListener('click', () =>{
    input.value += "6";
});

seven.addEventListener('click', () =>{
    input.value += "7";
});

eight.addEventListener('click', () =>{
    input.value += "8";
});

nine.addEventListener('click', () =>{
    input.value += "9";
});

decimal.addEventListener('click', () =>{
    input.value += ".";
});



add.addEventListener('click', () => {
    input.value += " + ";
});

minus.addEventListener('click', () => {
    input.value += " - ";
});

multiply.addEventListener('click', () => {
    input.value += " * ";
});

divide.addEventListener('click', () => {
    input.value += " / ";
});





