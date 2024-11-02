const user = {
    username: "sameer",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function chai(){
    let username = "sameer"
    console.log(this.username); // here this refers to global obj (context), so the it will print undefined as the username is not defined in the global object or global context (the function scope doesn't act as a context for "this" keyword)
}

// chai()

const chai = function () {
    let username = "sameer"
    console.log(this.username);
}

const chai =  () => {
    let username = "sameer"
    console.log(this);  // we can use "this" keyword in arrow function 
}


// chai()

// Explicit return arrow function 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return arrow function ( need for using return keyword )
// const addTwo = (num1, num2) =>  num1 + num2                              
// const addTwo = (num1, num2) => ( num1 + num2 )

// In implicit, it's compulsory to wrap an returning obj in parentheses in a arrow fucntion 
const addTwo = (num1, num2) => ({username: "sameer"})


console.log(addTwo(3, 4)) 


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()    // extra part clarified in loops section 