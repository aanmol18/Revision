// const { use } = require("react");

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }

// const chai = new User("chai", "chai@mail.com", "123");

// console.log(chai.encryptPassword());


// Dynamic Keys 

const base = "foo";
const index = 1;

const obj = {
    [`${base}${index}`]:43,
    [`${base}${index+1}`]:45,
    [`"user- "` +  Date().toLocaleString()]:"created",
    prop:123
}


console.log(obj.foo1)
console.log(obj)

// Delete 
console.log("Deleted the prop")
delete obj[`${base}${index}`]


console.log(obj)