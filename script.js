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
        if (!waitingForSecondOperand) {
            operator = 'add';
            firstOperand = Number.parseInt(textField.value);
            displayField.value = displayField.value + ' + ';
            textField.value = '';
            waitingForSecondOperand = true;
        } else {
            secondOperand = Number.parseInt(textField.value);
            result = add(firstOperand, secondOperand);
            displayField.value = displayField.value + ' + ';
            textField.value = '';
            firstOperand = result;
            secondOperand = '';
        }
    });

    let minus = document.querySelector('.minus');
    minus.addEventListener('click', () => {
        if (!waitingForSecondOperand) {
            operator = 'minus';
            firstOperand = Number.parseInt(textField.value);
            displayField.value = displayField.value + ' - ';
            textField.value = '';
            waitingForSecondOperand = true;
        } else {
            secondOperand = Number.parseInt(textField.value);
            result = subtract(firstOperand, secondOperand);
            displayField.value = displayField.value + ' + ';
            textField.value = '';
            firstOperand = result;
            secondOperand = '';
        }
    });

    let product = document.querySelector('.multiply');
    product.addEventListener('click', () => {
        if (!waitingForSecondOperand) {
            operator = 'multiply';
            firstOperand = Number.parseInt(textField.value);
            displayField.value = displayField.value + ' x ';
            textField.value = '';
            waitingForSecondOperand = true;
        } else {
            secondOperand = Number.parseInt(textField.value);
            result = multiply(firstOperand, secondOperand);
            displayField.value = displayField.value + ' + ';
            textField.value = '';
            firstOperand = result;
            secondOperand = '';
        }
    });

    let divide = document.querySelector(' .divide');
    divide.addEventListener('click', () => {
        if (!waitingForSecondOperand) {
            operator = 'divide';
            firstOperand = Number.parseInt(textField.value);
            displayField.value = displayField.value + ' / ';
            textField.value = '';
            waitingForSecondOperand = true;
        } else {
            secondOperand = Number.parseInt(textField.value);
            result = divide(firstOperand, secondOperand);
            displayField.value = displayField.value + ' + ';
            textField.value = '';
            firstOperand = result;
            secondOperand = null;
        }
    });

    let clear = document.querySelector('.clr');
    clear.addEventListener('click', () => {
        textField.value = '';
        displayField.value = '';
        let firstOperand = '';
        let secondOperand = '';
        waitingForSecondOperand = false;
    });


    let calculate = document.querySelector('.equal');
    calculate.addEventListener('click', () => {
        if (textField.value !== '') {
            switch (operator) {
                case 'add':
                    if (waitingForSecondOperand) {
                        secondOperand = Number.parseInt(textField.value);
                        result = add(firstOperand, secondOperand);
                        firstOperand = result;
                        textField.value = firstOperand;
                    } else {
                    }
                    break;
                case 'minus':
                    if (waitingForSecondOperand) {
                        secondOperand = Number.parseInt(textField.value);
                        result = subtract(firstOperand, secondOperand);
                        firstOperand = result;
                        textField.value = firstOperand;
                    }
                    break;
                case 'multiply':
                    if (waitingForSecondOperand) {
                        secondOperand = Number.parseInt(textField.value);
                        result = multiply(firstOperand, secondOperand);
                        firstOperand = result;
                        textField.value = firstOperand;
                    }
                    break;
                case 'divide':
                    if (waitingForSecondOperand) {
                        secondOperand = Number.parseInt(textField.value);
                        result = divide(firstOperand, secondOperand);
                        firstOperand = result;
                        textField.value = firstOperand;
                    }
                    break;
                default:
                    break;
            }
            waitingForSecondOperand = false;
        } else {
            alert('Make syre you write a correct operation')
        }
    });
}

updateInputField();
operate();