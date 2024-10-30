
let string = "Hello"

console.log(string);
console.log(`My name is ${string}`);
console.log(string[4]);
console.log(string.length);

let myName = new String("Sam-eer")

console.log(myName);
console.log(typeof myName);
console.log(myName.charAt(0));
console.log(myName.indexOf('m'));
console.log(myName.substring(0,4)); // substring(startIndex,noOfElements) 
console.log(myName.slice(3)); // slice(indexStart)- it always includes indexStart
console.log(myName.__proto__); // it will give empty object in node but not in the case of browser console
console.log(myName.anchor("sam")); // it returns an anchor element and put the parameter passed into a name attribute
console.log(myName.at(3)); // at(index)- it returns the character at specified index
console.log(myName.slice(2,4)); // slice(indexStart,indexEnd)- it doesn't include the indexEnd
console.log(myName.big()) // big() - it returns a big html element
console.log(myName.replace("a","@"));
console.log(myName.includes("Sam"));
console.log(myName.split("-"));





