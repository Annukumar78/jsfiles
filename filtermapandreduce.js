
const myNums = [1,2,3,4,5,6,7,8,9,10] 

const newNums = myNums.filter((nums) => {
     return nums>4
})
console.log(newNums);

// --------------using data base and filter data value---//

const userBooks = books.filtr((bk) => bk.genre === 'Histry')
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "Histry"
})
console.log(userBooks);

// -------using the map ------------//

const myNums1 = [1,2,3,4,5,6,7,8,9,10] 

const newNums1=myNums1.map((num) => num+10)
console.log(newNums1);

// ----------chaning---------------//
const newNums2 = myNums2
                    .map((num)=> num * 10)
                    .map((num)=> nums /10 )
                    .filter((num) => num >= 40)

// ---------------Reduce methods---------------//      

const myNums3 = [1,2,3,4,5,6,7,8,9,10] 

const mtTotal = myNums3.reduce(function(acc, currentval) {
    console.log(`acc: ${acc} and currentval: ${currentval}`)  
    return acc + carrentval

},0)
console.log(myTotal);

// short from of reduce 
const totalNum = myNum3.reduce((acc, curr)=> acc+curr,0)
console.log(totalNum)