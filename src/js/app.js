import { sum, substract, multiply } from './main.js'

let sumResult = document.getElementById('sum');
let substractResult = document.getElementById('substract');
let multiplyResult = document.getElementById('multiply');
let firstNumber = document.getElementById('number-1');
let secondNumber = document.getElementById('number-2')

sumResult.onclick = function sumNumbers() {
    let result = sum(firstNumber.value, secondNumber.value);
    document.getElementById('sum-result').innerHTML = `The result is ${sum(firstNumber.value, secondNumber.value)}`;
}

console.log(firstNumber.value)