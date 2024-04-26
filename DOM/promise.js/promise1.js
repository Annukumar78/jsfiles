// creation of promise 
// promise are used async task
// Db calls, cryptography, network

const promiseOne = new promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async task is compeleted')
        resolve();
    }, 2000);
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new promise(function(resolve, reject){
    setTimeout(function(){
    console.log("Async task ?");
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const PromiseThird = new promise(function(resolve, reject){
setTimeout(function(){
    console.log("Hello dear")
    resolve({username: "Chai", email: "achaiaorcode@gkv.ac.in"})
},2000)
}).then(function(user){
    console.log(user);
})

const promiseForth = new promise(function(resolve, reject){
  setTimeout(function(){
    let error = true;
    if(!error){
        resolve({username:"hitesh", passord:"1234"})
    }else{
        reject('ERROR: Something went wrong')
    }
  },3000)
})
promiseForth.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("promise either resolve or rejected")
})

const promiseFive = new Promise(function(){
  setTimeout(function(){
  let error  = true
  if(!error){
    resolve({username: "javascript", password:"1234"})
  }else{
    reject('ERROR: JS went wrong')
  }
  },2000)
})

async function promiseFive(){
     const responce = await promiseFive
     console.log(responce);
}

async function  getAllUsers(){
    try{
       const responce = await fetch('url putt')
       const data = responce.json();
       console.log(data)
    }catch(error){
      console.log("E", error)
    }
}