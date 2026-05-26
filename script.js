let operator = '';
let firstOperand = '';
let secondOperand = '';
let waitingForSecondOperand = false;
const textField = document.querySelector('#fname');
const displayField = document.querySelector('#operation');
let result = 0;

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function updateInputField() {
    const buttonList = document.querySelectorAll('.number');
    let temp;
    buttonList.forEach((btn) => {
        btn.addEventListener('click', () => {
            temp = btn.textContent;
            textField.value = textField.value + temp;
            displayField.value = displayField.value + temp;
        });
    });
}

function operate() {
    let plus = document.querySelector('.plus');
    plus.addEventListener('click', () => {
        operator = 'add';
        if (!waitingForSecondOperand) {
            firstOperand = Number.parseInt(textField.value);
            displayField.value = displayField.value + ' + ';
            textField.value = '';
        }
    });

    let minus = document.querySelector('.minus');
    minus.addEventListener('click', () => {
        operator = 'minus';
        if (!waitingForSecondOperand) {
            firstOperand = Number.parseInt(textField.value);
            displayField.value = displayField.value + ' - ';
            textField.value = '';
        }
    });

    let product = document.querySelector('.multiply');
    product.addEventListener('click', () => {
        operator = 'multiply';
        if (!waitingForSecondOperand) {
            firstOperand = Number.parseInt(textField.value);
            displayField.value = displayField.value + ' x ';
            textField.value = '';
        }
    });

    let divide = document.querySelector(' .divide');
    divide.addEventListener('click', () => {
        operator = 'divide';
        if (!waitingForSecondOperand) {
            firstOperand = Number.parseInt(textField.value);
            displayField.value = displayField.value + ' / ';
            textField.value = '';
        }
    });

    let clear = document.querySelector('.clr');
    clear.addEventListener('click', () => {
        textField.value = '';
        displayField.value = '';
        let firstOperand = '';
        let secondOperand = '';
    });

    let calculate = document.querySelector('.equal');
    calculate.addEventListener('click', () => {
        switch (operator) {
            case 'add':
                secondOperand = Number.parseInt(textField.value);
                textField.value = add(firstOperand, secondOperand);
                break;
            case 'minus':
                secondOperand = Number.parseInt(textField.value);
                textField.value = subtract(firstOperand, secondOperand);
                break;
            case 'multiply':
                secondOperand = Number.parseInt(textField.value);
                textField.value = multiply(firstOperand, secondOperand);
                break;
            case 'divide':
                secondOperand = Number.parseInt(textField.value);
                textField.value = divide(firstOperand, secondOperand);
                break;
            default:
                break;
        }
    });
}

updateInputField();
operate();