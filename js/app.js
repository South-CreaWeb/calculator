// let a;
// let b;
const operators = {
    '+': function() {addition()},
    '-': function() {subtract()},
    '*': function() {multiply()},
    '/': function() {divide()}
};

/**
 * Test if the paramater is a number and Addition two numbers
 * @param {Number} a 
 * @param {number} b 
 * @returns 
 */
function addition(a, b) {

    if(typeof a !== 'number')  a = parseInt(a);
    if(typeof b !== 'number')  b = parseInt(b);

    return a + b;

};

/**
 * Test if the paramater is a number and Subtract two numbers
 * @param {Number} a 
 * @param {Number} b 
 * @returns 
 */
function subtract(a, b) {

    if(typeof a !== 'number') a = parseInt(a);
    if (typeof b !== 'number') b = parseInt(b);

    return a - b;
};

/**
 * Test if the paramater is a number and Multiply two numbers
 * @param {Number} a 
 * @param {Number} b 
 * @returns 
 */
function multiply(a, b) {

    if(typeof a !== 'number') a = parseInt(a);
    if (typeof b !== 'number') b = parseInt(b);

    return a * b;
};

/**
 * Test if the paramater is a number and Divide two numbers
 * @param {Number} a 
 * @param {Number} b 
 * @returns 
 */
function divide(a, b) {

    if(typeof a !== 'number') a = parseInt(a);
    if (typeof b !== 'number') b = parseInt(b);

    let result = a / b;
    return Number(result.toFixed(2));
};

/**
 * Add the correct operator and call the good function
 * @param {Number} a 
 * @param {Number} b 
 * @param {String} sign 
 */
function operate (a, b, sign) {

    for (prop in operators) {
        if(sign === '+') {
           return addition(a, b);
        } else if(sign === '-'){
           return subtract(a, b);
        } else if(sign === '*') {
            return multiply(a, b);
        } else {
            return divide(a, b);
        }
    }
};


console.log('Addition:', addition(4,'18'));
console.log('Subtraction:',subtract(4, '18'));
console.log('Multiplication:', multiply(4, '18'));
console.log('Division:', divide(4, '18'));

console.log(operate(7, 2, '+'));
console.log(operate(7, 2, '-'));
console.log(operate(7, 2, '*'));
console.log(operate(7, 2, '/'));



console.log(operate(2000, 67, '+'));