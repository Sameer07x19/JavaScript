//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "sameer"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "sameer"
    if (username === "sameer") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addOne(5)) // this won't give any error due hoisting 

function addOne(num){  // normal declaration of a function
    return num + 1
}



addTwo(5) // this will throw error bcoz hoisting won't work here 
const addTwo = function(num){  // bcoz we are declaring a function and holding it in a variable 
    return num + 2
}