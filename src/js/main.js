function sum(a, b) {
    return Number(a) + Number(b);
}

function difference(a, b) {
    return Math.max(a, b) - Math.min(a, b);
}

function multiply(a, b) {
    return a * b;
}

export { sum, difference, multiply };