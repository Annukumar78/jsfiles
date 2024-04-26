// magic of prototype

 function createUser(username, score){
    this.username = username
    this.score = score
 }

 createUser.prototype.incerment = function(){
    this.score++
 }

 createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
 }

 const chai = new createUser("chai", 25)
 const tea = new createUser("tea", 125)


 // --------------prototype--------------------//

 let myHeros = ["thor","spiderman"];

 let heroPower = {
    thor: "hammer",
    spiderman: " sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
 }
 object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
 }
 heroPower.hitesh()

//================== modsarn syntax =========//

object.setPrototypeOf(TechhingSipport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true Length is: ${this.trim().length}`);
}
anotherUsername.trueLength()