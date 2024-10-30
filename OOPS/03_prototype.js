let animeCharacters = ["Roronoa Zoro","Thorfin","Johan Leibart"]

Array.prototype.NoOfCharacters = function(){
    console.log(`There are ${this.length} anime characters.`);
}
animeCharacters.NoOfCharacters()



let string = "Shinchan   "

String.prototype.trueLength = function(){
    console.log(`The true of the string is ${this.trim().length}`);
}
string.trueLength()



let userDetails = {
    name: "Sam",
    username: "sam07",
    password: "S@m777",
    profession: "Hacker",
    email: "sam1234@gmail.com",
    country: "Russia",
    age: 21
}

// This method will be universal 
Object.prototype.greet = function(){
    console.log(`Welcome, ${this.name}`);
}
userDetails.greet()


