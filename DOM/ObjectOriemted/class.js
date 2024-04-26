class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

changeUsername(){
    return `${this.username.toUpperCase()}`
}

const chai = new User("chai","@gmail.com","1234");
console.log(chai.changeUsername())

//------------Inheritance --------------//

class user{
    constructor(username){
       this.username = username
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCource(){
        console.log(`a new course was added by ${this.username}`);
    }
     static logMe(){
        console.log("hello dear")
    }
}
const chaii = new Teacher("chai", "chai@teacher.com", "1234")
chaii.addCource()