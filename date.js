// date in javascript

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(mydate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date("01-23-2024")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// date is aobject

let Date = new Date(); // this is provide the date

let days = Date.getDay()
let months = Date.getMonth()+1
let years = Date.getFullYear()

let timeStamp = Date.now()
(  Date/1000)// this is convert the milisecond to second


let myDates = new Date();
let yearss = myDate.getFullYear()