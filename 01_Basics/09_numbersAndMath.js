const score = 400;

const balance = new Number(100);

console.log(balance);
console.log(balance.toString().length);

console.log(balance.toFixed(2)); //prescision to 2 digits

const otherNumber = 122.96666666666;

console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(5));

const hundreds = 1000000000;

console.log(hundreds.toExponential());
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));

//Number methods : console on dev tools type Number , max_value max_safe_integer

// Maths Library

console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.random() * 10 + 1); // other than zero random

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

