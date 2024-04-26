// string decelaration
// ***********************************//

const name = "hitesh"
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// second type of string decelaration

const gameName = new String('kumarbrother') 

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length());// find the length of the string
console.log(ganeName.toupperCase()); // convert string in uppercase
console.log(gameName.charAt(2));// finde character index
console.log(ganeName.indexof('t'))// find the index number


const newString = gameName.substring(0, 4) // find substring
console.log(newString)

const anotherString = gameName.slice(0, 4)// find string
console.log(anotherString);

const newStringOne ="  hitesh  "
console.log(newStringOne)
console.log(newStringOne.trim())// trim are remove the spaces

// remove the url to anypart
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

// print the two or more string in one line are used alwayas backtrics `${}`

console.log(`hello dare i am annu ahirwar from haridwar ${name}`)