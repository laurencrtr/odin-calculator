let number1
let number2
let currentFunction = getFirstNumber

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
        return 'you cannot divide by 0'
    }
    
    result = a / b
    return result
}

function getFirstNumber() {

}

function getOperator() {

}

function getSecondNumber() {

}


function calculate() {
    result = currentFunction(number1, number2)
    number1 = result
    return result
}

function reset() {
    let number1
    let number2
    let currentFunction = getFirstNumber
}


number1 = 1
number2 = 3
x = add(number1, number2)
console.log(x)
x = subtract(number1, number2)
console.log(x)
x = multiply(number1, number2)
console.log(x)
x = divide(number1, number2)
console.log(x)
x = divide(number1, 0)
console.log(x)
