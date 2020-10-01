import { sum, substract, multiply } from './main.js'

let sum = document.getElementById('sum');
let substract = document.getElementById('substract');
let multiply = document.getElementById('multiply');
let no1 = document.getElementById('number-1');
let no2 = document.getElementById('number-2')

sum.onclick = sum(no1.value, no2.value);