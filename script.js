const buttonList = document.querySelectorAll('.number');
const textField = document.querySelector('input');
let operation;
let numberOne;
let numberTwo;
let result;

function add(numOne, numTwo) {
    const sumBtn = document.querySelector('.plus');
    sumBtn.addEventListener('click', () => {
        numOne = Number.parseInt(textField.value);
        console.log(numOne);
    });
}
function subtract(numOne, numTwo) {
    const rslt = document.querySelector('.minus');
    rslt.addEventListener('click', () => {
        return numOne - numTwo;
    });
}
function multiply(numOne, numTwo) {
    const rslt = document.querySelector('.multiply');
    rslt.addEventListener('click', () => {
        return numOne * numTwo;
    });
}
function divide(numOne, numTwo) {
    const rslt = document.querySelector('.divide');
    rslt.addEventListener('click', () => {
        return numOne / numTwo;
    });
}

function updateInputField() {
    let temp;
    buttonList.forEach((btn) => {
        btn.addEventListener('click', () => {
            temp = btn.textContent;
            textField.value += temp;
        });
    });
}

function operate(numberOne, numberTwo) {
    add(numberOne, numberTwo);
    subtract(numberOne, numberTwo);
    multiply(numberOne, numberTwo);
    divide(numberOne, numberTwo);
}

updateInputField();
add(numberOne, numberTwo);