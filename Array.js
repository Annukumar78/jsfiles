// Arrays in javascript

const myarray = [1,2,3,4,5]
const myHeros = ["ayush", "ashoka"]
console.log(myarray[0]);

// arrays methodas 

myarray.push(6)
myarray.pop()

myarray.unshift()
myarray.shift()
// slice - this are print the perticilar range the number 
//slice- are not include the last index of serching array
//splice - this are change the oragenal arrays values

console.log(myarray.includes(9));
console.log(myarray.indexOf(9));
console.log(myarray);

//----------arrays second lectur------------//

const marval_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flace","batman" ]

// concat- to combain to or more arrays in new arrays

const all_heros = marval_heros.concat(dc_heros)
console.log(all_heros);

// new method to combain the arrays

const all_new_heros = [...marval_heros, ...dc_heros]
console.log(all_new_heros)