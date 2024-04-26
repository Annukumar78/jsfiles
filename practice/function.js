// create a function method 1
function user(){

}

// create a function of method two
const user = function(){

}

// arrow function
 creater =()=> {





}

 function addTwoNumber(num1, num2){

    let result = num1 + num2;
    return result;
 }

//  const result = addTwoNumber(4, 5);

function  loginUserMessage(username){

   //return alert("are u logedin");
   return `${username} just loged in`
}

console.log(loginUserMessage("annu"));

// if user note pass the any value 

function userLogedIn(usermessage){
    if(!usermessage){
        console.log("please loged in")
        return;
    }
    return `${usermessage} used passed in`
}

console.log(userLogedIn("kumsar"));

// create a object and pass the function

const user = {
    name: " anuu ahirwar",
    enail: "@gmail.com",
    contact:"565567554535",
}

// 1 types- create a function are and parameters are passed object

function creater(anyobject){
   console.log(`username is ${anyobject.name} and email is ${anyobject.enail}`)
}

// second method to create a object in side the function

 handleuser({  
    name: " anuu ahirwar",
    enail: "@gmail.com",
    contact:"565567554535",
})


// arrow function and this method 
//this method only work  in the objects
// this method are not work in the function
// this method are the referse the current context;
// objects and function
user = () =>{

}

// implecet return function
//{} write a expressen in curlibracess using the return 
//() peranthics are note write the return 
const addNumber = (num1, num2) =>  num1 + num2

// iife ->immediate invoked function expresseion

(function chai(){
    // THIS IS NAME IIFE
    console.log("DATABASE ARE NOT CONNECTED")
})();

( ()=>{
    // THIS IS UNNAME IIFE
     console.log("DATABASE ARE THE COONECTED ")
})();

// apply the conditon of  the array
const newNums = [];
newNums.forEach((nums) =>{
    if (num > 4) {
        newNums.push(num);
    }
})

// write the condition using filter method

newNums.filter((num)=>{
    return num > 5
})

// how to filtering the databse data using filter method

const database = [
    {
        name:"ayushkumar",
        email:"@gmail.com",
        password: "@#@#7869"
    },
    {
        name:"ayushkumar",
        email:"@gmail.com",
        password: "@#@#7869"
    },
    {
        name:"ayushkumar",
        email:"@gmail.com",
        password: "@#@#7869"
    },
    {
        name:"ayushkumar",
        email:"@gmail.com",
        password: "@#@#7869"
    },
    {
        name:"ayushkumar",
        email:"@gmail.com",
        password: "@#@#7869"
    },
]

const newuser = database.filter((bk)=>{
  return bk.email =="@gmail.com"
})

console.log(newuser)

//reducer 

const newNunbers = [1,3,2,4];

const totalNuber = newNunbers.reduce(function(acc, curr){
    return acc+ curr;
}, 0)

console.log(totalNumbers);


const totalNumbers = newNunbers
                     .reduce((acc, curr) => acc + curr, 0)
 console.lof(totalNumbers);

 const hello = () =>{

 }
 hello.length();
