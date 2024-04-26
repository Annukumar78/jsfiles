// ----------objects in javaScript --------------//
//  objects singleton
// example-> objects.create


// objects literals

const mySym = Symbol("key1")
const jsUser = {
    name: "Hitesh",
    age: 18,
    location: "jaipur",
    email:"annuahirwar@gmal.com",
    isloggedin: false,
    LastLoginDays: ["Monday", "Saturday"],
    [mySym]: "myKey1",
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[mySym])

// update the email value

jsUser.email = "hitesh@chatgpt.com"
objects.freeze(jsUser)// that can use freeze not change the value of that perticular objects

jsUser.greeting  = function(){
    console.log("Hello JS Users ")
}
jsUser.greetingTwo  = function(){
    console.log("Hello JS Users${this.name} ")
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
console.log(jsUser.location())

// ----------objects lectore 2 -----------//
//const tinderUser = new Object() // this is singalton objects
const tinderUser = {
}
tinderUser.id = "3424ad"
tinderUser.name = "Annu"
tinderUser.isLoggendIn = false

//console.log(tinderUser)

const regulatUser = {
    email:"annuahirwar8964@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
console.log(regulatUser.fullname.userfullname.firstname)

// conect the two or more objects 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = object.assign({}, obj1, obj2)
console.log(obj3)

console.log(object.key(tinderUser))
console.log(object.value(tinderUser))
console.log(object.entries(tinderUser))

// objects lectore 3
const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor

// data destructuring{}
const {courseInstructor: Instructor}= course
console.log(Instructor);

// API

