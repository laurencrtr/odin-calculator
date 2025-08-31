let number1 = ''
let number2 = ''
let currentOperator = ''
let currentFunction  = ''
let currentNumber = ''

function add(a, b) {
    result = a + b
    return result
}

function subtract(a, b) {
    result = a - b
    return result
}

function multiply(a, b) {
    result = a * b
    return result
}

function divide(a, b) {
    if (b == 0) {
        return 'You cannot divide by 0! Your calculator has been reset!'
    }
    result = a / b
    return result
}

function addToNumber(str) {
    currentNumber = currentNumber + str
    updateScreen(currentNumber)
}

function addDecimal(str) {
    if (currentNumber.includes('.')) {
        return str
    } else {
        currentNumber = currentNumber + str
    }
    updateScreen(currentNumber)
}

function backspace() {
    if (currentNumber !== '') {
        currentNumber = currentNumber.slice(0, -1)
        updateScreen(currentNumber) 
    }
}

function operatorClicked() {
    if (number1 !== '' && operator !== '' && currentNumber !== ''){
        calculate()
    }
    
    if (number1 === '') {
        number1 = currentNumber
    } else {
        number2 = currentNumber
    }
    currentNumber = ''
}

function changeOperator(operator) {
    if (operator === '+') {
        currentFunction = add
    } else if (operator === '-') {
        currentFunction = subtract
    } else if (operator === 'x') {
        currentFunction = multiply
    } else if (operator === '/') {
        currentFunction = divide
    }
}


function calculate() {
    number2 = currentNumber
    
    number1 = +number1
    number2 = +number2


    result = currentFunction(number1, number2)
    if (isNaN(result)) {
        updateScreen(result)
        number1 = ''
        number2 = ''
        currentOperator = ''
        currentFunction  = ''
        currentNumber = ''
    } else {
        updateScreen(result)
        number1 = result
        number2 = ''
        currentNumber = ''
        return result
    }
}

function reset() {
    number1 = ''
    number2 = ''
    currentOperator = ''
    currentFunction  = ''
    currentNumber = ''
    screenTopText.textContent = ''
    updateScreen(currentNumber)
}

function updateScreen(showNumber) {
    screenText.textContent = showNumber

    if (number1 !== '' && number2 !== '') {
        topString = number1 + ' ' + operator + " " + currentNumber
        screenTopText.textContent = topString
    }
}


const screenText = document.querySelector('#screen')
const screenTopText = document.querySelector('#screenTop')

const numberButtons = document.querySelectorAll('.numberButtons')
numberButtons.forEach((btn) =>
    btn.addEventListener('click', () => addToNumber(btn.textContent))
)

const decButton = document.querySelector('.decimalButton');
decButton.addEventListener("click", () => addDecimal('.'))

const opButtons = document.querySelectorAll('.operatorButton')
opButtons.forEach((btn) => 
    btn.addEventListener('click', () => {
        operator = btn.textContent
        changeOperator(operator)
        operatorClicked()
    })
)

const equalButton = document.querySelector('#equalButton')
equalButton.addEventListener('click', () => calculate())


const clearButton = document.querySelector('#clearButton')
clearButton.addEventListener('click', () => reset())

const backButton = document.querySelector('#backButton')
backButton.addEventListener('click', () => backspace())