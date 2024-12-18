function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "sam") { //default value is given 
  if (!username) {
    console.log("Please enter a username");    
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("Sameer"))
// console.log(loginUserMessage())

// rest operator - we can pass multiple extra args and it will pack it in an array 
function calculateCartPrice(val1, val2, ...num1) { 
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  // 500 and 2000 are extra arguments 

const user = {
  username: "sameer",
  price: 199,
};

function handleObject(anyobject) { 
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)  // passing object as an input
handleObject({         
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
