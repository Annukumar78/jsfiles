
const creater = {
    name: "annu Ahirwar",
    class: "B.tech",
    subject: "mathmatices",
    id_ : "63542e424e2e42",
}

creater.class = function(){
    console.log("hello js user ")
}
console.log(creater.name);

// freeze the object value
//object.freeze(creater);

// create a nested objects 

const youtube = {
    user:"annu",
    user_id:" 232432231",
    email:"kumar@gmail.com",
    fullname:{
          useryoutube:{
             firstName:"kumarvishwash",
             lastName:"ahirwar",

          }
    }
}

console.log(youtube.fullname.useryoutube.firstName);

console.log(object.key(youtube));
console.log(object.value(youtube));

// combaining of the two objects 

const obj1 = {
    1:" ann",
    2: "tdd",
}
const obj2 = {
    1:" ann",
    2: "tdd",
}

const obj3 = object.assign({}, obj1, obj2);
const obj4 = {...obj1, ...obj2} 

console.log(obj3);

// are come the value in data bases in array format

const user = [
    {
        id: "7e3rftr3",
        email: "@gmail.com",
    },
    {
        id: "7e3rftr3",
        email: "@gmail.com",
    },
    {
        id: "7e3rftr3",
        email: "@gmail.com",
    },
]

// asiss the value of array object
user[1].email



