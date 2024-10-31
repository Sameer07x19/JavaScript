
// const tinderUser = new Object()  // declared as a singleton object (as an instance)
const tinderUser = {}  // normal object declaration

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sameer",
            lastname: "Sayyed"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // not recommended to use syntax like this to copy objects 

// Object.assign() method works like some sort of spread operator with an extra "target" functionality :-

// const obj3 = Object.assign({}, obj1, obj2, obj4)  // Object.assign(target,source) - we use empty object as a target 
// const obj3 = Object.assign(obj1, obj2, obj4)  // if we declare some predefined object as a target object it will alter the real object
// console.log(obj3); 
// console.log(obj1); // as we can see here all values are copied from other given objects

// spread operator - for copying objects into an object ( better approach ) :-

const obj3 = {...obj1, ...obj2} 
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email  // accessing objects from an array 
// console.log(tinderUser);



// console.log(Object.keys(tinderUser));    // return value datatype is an array 
// console.log(Object.values(tinderUser));  // return value datatype is an array 
// console.log(Object.entries(tinderUser)); // return value datatype is an array 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "javascript",
    price: "free",
}

// course.price

// const {price: fees} = course

// console.log(price);
// console.log(fees);

// {
//     "name": "Sameer",
//     "coursename": "javascript",       // this is a json 
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]