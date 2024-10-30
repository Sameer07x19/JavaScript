function setUsername (username) {
    this.username = username
}

let userDetails = function(username,password){
    // setUsername(username) // This function doesn't have the context for setting the value.
    setUsername.call(this,username) // That's why, we use call for giving access to the current context.
    this.password = password
}

let user = new userDetails("Sam",1234)
 
console.log(user);
