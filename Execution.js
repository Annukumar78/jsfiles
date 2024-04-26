/* 
control flow 
*/
// if statement 
// true or false condition 
// true condition execute
// false condition are not execute 

if(condition){
    
}
/* compare operater
< greater than operater
> less then operater
<= greater then  equal operater
>= less then equal operater
!= not equal to operater
== equal equal to
=== treaple eqals too 
!== not equal equal to

 */
// if else condition

const balance = 1000;
if(balance>500){
    console.log("greater then 500")

}else if(balance<750){
   console.log("Less then 750")

}else if(balance<900){
      console.log("less the 900")

}else{
    console.log("less then 1200")
}

// real life probles 

const userLoggedIn = true;
const dabaitCard = true;

if( userLoggedIn && dabitCard && 2==2){
    console.log("Allow to buy course")
}


//-------------- switch case statement -------------//

switch(key){
    case value:
        break;
    case value:
        break;
    default:
        break;
}

//------------//-----------switch case probles-----//----------//

const month = 3;

switch(month){
    case 1:
        console.log("Jaunary");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("Not any value are matched");
        break;
}

/* false falue 
   false, 
   0, -0, BigInt 0n , "", null, undefined 

   true value 
   "0", 'false', " ", [], {}, function(){}, 

*/

const emptyobj = {}

if(Object.key(emptyobj).length === 0){
    console.log("Objeccts is empty")
}

// Nullish Coaleshing Operater(??) null undefind
let val1;
val1=5 ?? 10
val1= null ?? 15
val1 = undifined ?? 20

console.log(val1);

// ternary operater
condition ? true : false

const IceTeaPrice= 100;
IceTeaPrice <= 80 ? console.log("less then 80") : console.log("more than 80")