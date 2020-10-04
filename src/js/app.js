import { sum, difference, multiply } from './main.js'

let sumResult = document.getElementById('sum');
let differenceResult = document.getElementById('substract');
let multiplyResult = document.getElementById('multiply');
let firstNumber = document.getElementById('number-1');
let secondNumber = document.getElementById('number-2')

sumResult.onclick = function sumNumbers() {
    let result = sum(firstNumber.value, secondNumber.value);
    document.getElementById('sum-result').innerText = `The result is ${result}`;
}

differenceResult.onclick = function findTheDifference() {
    let result = difference(firstNumber.value, secondNumber.value);
    document.getElementById('substract-result').innerText = `The result is ${result}`;
}