const input1 = prompt('Give the first number:\n');
const input2 = prompt('Give the second number:\n');
const input3 = prompt('Give the third number:\n');

const integer1 = parseInt(input1);
const integer2 = parseInt(input2);
const integer3 = parseInt(input3);

const sum = integer1 + integer2 + integer3;
const product = integer1 * integer2 * integer3;
const average = sum / 3;

document.querySelector('#here').innerHTML = 'Sum: ' + sum + ', product: ' +
    product + ', avergae: ' + average;
