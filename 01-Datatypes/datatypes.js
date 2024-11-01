//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

let userEmail;
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // both symbols are different inspite of having same values

const bigNumber = 3456543576654356754n

console.log(typeof anotherId);


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["zoro", "shanks", "thors"];
let myObj = {
    name: "sameer",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}


// https://262.ecma-international.org/5.1/#sec-11.4.3