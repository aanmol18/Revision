const { use } = require("react");

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const chai = new User("chai", "chai@mail.com", "123");

console.log(chai.encryptPassword());



