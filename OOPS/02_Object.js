
function createUser(username, password) {
    this.username = username
    this.password = password
}

createUser.prototype.alterPass = function(){
    this.password =  "S@m" + this.password
    console.log(`Password altered successfully to ${this.password}`);
}
createUser.prototype.addEmail = function(){
    this.email = `${this.username}@gmail.com`
    console.log(`Email added successfully!`);
}

let user1 = new createUser("Sam",1234)
user1.alterPass()
user1.addEmail()
console.log(user1);

