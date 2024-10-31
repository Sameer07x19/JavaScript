// singleton
// Object.create 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sameer",
    "full name": "Sameer",
    [mySym]: "mykey1",  // using a symbol as a key
    age: 18,
    location: "Mumbai",
    email: "sameer@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  

JsUser.email = "sameer@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sameer@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting()
JsUser.greetingTwo()