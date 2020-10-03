import { sum, substract, multiply } from './main.js'

let sumResult = document.getElementById('sum');
let substractResult = document.getElementById('substract');
let multiplyResult = document.getElementById('multiply');
let firstNumber = document.getElementById('number-1');
let secondNumber = document.getElementById('number-2')

sumResult.onclick = function sumNumbers() {
    console.log(sum(no1.value))
}

console.log(firstNumber.value)