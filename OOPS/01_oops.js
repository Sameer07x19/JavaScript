// Object literal

let objectLiteral = {
    username: "Sam",
    password: 1234,
    isLoggedIn: true,

    greet: function () {
        console.log(`${this.username}, you are logged in.`);
        console.log(this);
        
    }
}
objectLiteral.greet()

function user (username, password, isLoggedIn) {
    this.username = username
    this.password = password
    this.isLoggedIn = isLoggedIn

    return this
}

let user1 = new user("user1","7860",true)
let user2 = new user("user2","123456",false)
console.log(user1);
console.log(user2);
