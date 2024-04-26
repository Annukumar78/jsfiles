let a = 10;
const b = 21;
var c = 27;

// arrow function  
// this are used to current contect
// this only used the objects 
// this not used in the function

//this is a objects 
const user={
    username:"hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}
console.log();

// create a function
function chai(){
    console.log(this)
}

const chai= () => {
    usrnamr:"hitesh"
console.log(this.username)
}

// this is a simple to create arrow function
//multiline create a function are used curly brases{} and used return 
const twoNumber =(num1, num2)=>{
    return num1+num2
    console.log();
}

// singal line to create arrow function are used peranthesis() not used return 
// it is colled implycity return 
const twoNumber1 =(num1, num2)=>(num1+num2)

// explaycity return 
const TwoNumber2 = (num1, num2) =>({username: "hitesh"})

//---- immediately invoked function expresion(iift)----//
()()// first peranthis is the function defination and the seccond peranthis is the function acjecution

(function chai(){
   console.log(`DB is connected`)
})();

(() =>{
    console.log(`DB CONNECTED`)
})();

((name) =>{
    console.log(`DB CONNECTED ${name}`)
})("hitesh");