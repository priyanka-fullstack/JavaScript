const score = 500;
console.log(score)

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 458.6576;
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));

//******************************************** Math*/

console.log(Math.abs(4));
console.log(Math.round(4.8766));
console.log(Math.ceil(4.2));
console.log(Math.floor(7.8));
console.log(Math.min(4,7,9,0,1));
console.log(Math.max(4,8,5,2,4));

console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
