const score = 400;
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length());
console.log(balance.toFixed(1));

const otherNumber = 123.7635
console.log(otherNumber.toPrecision());

const hundrads = 1000000
console.log(hundrads.toLocaleString())

// ---------------Maths-----------------//

console.log(maths)
console.log(Math.abs(-4));
console.log(Math.round(4,6));
console.log(Math.ceil(2,4));
console.log(Math.floor(4,9));
console.log(Math.min(3,5,4,5));
console.log(Math.max(3,4,5,6));
console.log((Math.random()*10)+1)// always value 0-1 range

const min = 10;
const max = 20;

console.log((Math.floor(Math.random() * (max - min +1 )) + min))