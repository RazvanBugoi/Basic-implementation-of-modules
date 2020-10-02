import { sum, substract, multiply } from './main.js'

let sumResult = document.getElementById('sum');
let substractResult = document.getElementById('substract');
let multiplyResult = document.getElementById('multiply');
let no1 = document.getElementById('number-1');
let no2 = document.getElementById('number-2')

sumResult.onclick = sum;