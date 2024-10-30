let score = 100
console.log(score);

let points = new Number(400)
console.log(points);
console.log(points.toString().length);
console.log(points.toFixed(2));
console.log(points.toPrecision(5)); // note : it returns a string 

let balance = 250000
console.log(balance.toLocaleString("en-IN"));

// ----------------------------- Maths --------------------------------------

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
