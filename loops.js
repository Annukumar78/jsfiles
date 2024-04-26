/*<<------------ for loops-------------------->>
1. for loops , while loops do while loops 

*/
for(let index=0; index<Array.length; index++){
    const element = index ;
    console.log(element)
}

const myArray = ["flash", "batman", "superman"]

for(let index = 0; index<myArray.length; index++){
    const element = myArray[index];
    console.log(element);
}

// break and continue
//break -> break are stop the condition 

/*for(let i=0; i<n; i++){
   
    if(i == 5){
      console.log(`Deleted 5`);
      break;
    }
    console.log(`value of i is ${i}`);
}*/

// continue -> are used to one times skip ans then continue ant condition
for(let i=0; i<n; i++){
   
    if(i == 5){
      console.log(`Deleted 5`);
      break;
    }
    console.log(`value of i is ${i}`);

}

// --------------While and Do While loops ----------//
let index =0;
while(index <= 10){
  console.log(`value of index is ${index}`);
  index = index + 2
}

let myArray1 =["flash", "marican", "coffee"]

let arr = 0;
while(arr<myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr =arr + 1;
}

//------------Do while loops----------------//

let Score1= 1;

do{
    console.log(`Score is ${Score1}`);
    Score++
}
while(Score<=10){
   console.log(``)
}

//------------Higher order loops ------------//

// for of loops 
const myArrray2 = [1,2,3,4,5]

for (const num of myArray2) {
     console.log(num);
}

const greeting ="Hello Dear";
for (const greet of greetings) {
    console.log( `Each char is ${greet}`)
}

// maps 
const map = new map()
map.set('a', 4)
map.set('usa',"united stated of america")
map.set('Fr', "france emanual macron")

console.log(map);

for (const [key, value] of map) {
   console.log(key, ':-', value);
}

// implement of (for in) loops in objects
// for in loops are used the objects in javascripts

const myObjects ={
    'game1': 'NFS',
    'game2': 'spiderman',
    'cpp' : 'c++',
    'js' : 'javascript'
}

for (const key in myObject) {
    console.log(`${key} shortcut if for ${myObjects[key]}`);
}

const programing = ["java","cpp","js","php"]

for (const key in programing) {
    console.log(`${key} value is ${programing}`)
}

//---------- for each loops----------//
const codding = ["java","cpp","js","php"]

codding.forEach(function (val){
    console.log(val)
})

// use the arrow function in for each loops
codding.forEach( (val)=>{
    console.log(val);
})

function ayush(item, index, array){
    console.log(item, index, array)
}
codding.forEach(ayush)

// creating a objects 

const myCodding =[
    {
    language: "javascript",
    languageFileName: "js"
    },
    {
    language: "python",
    languageFileName: "py"
    },
    {
    language: "c++",
    languageFileName: "cpp"
    }
]

myCodding.forEach((item)=>{
  console.log(item.languageFileName)
})