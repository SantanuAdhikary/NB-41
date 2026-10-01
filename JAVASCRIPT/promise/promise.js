

let p1 = new Promise((resolve,reject)=>{
  
})
console.log(p1)  // pending state 


let p2 = new Promise((resolve,reject)=>{

    resolve("today is 10th october, we came to give the mock")
})
console.log(p2)

let p3 = new Promise((resolve, reject)=>{

    reject("sorry, I can't give the mock")
})

console.log(p3)




p2
.then((data)=>{

    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(
    console.log("i am p2 promise")
)


p3
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
  console.log(err)
})
.finally(
    console.log("i am p3 promise")
)


p1
.then((data)=>{

 console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(
    console.log("i am p1 promise")
)


let myPromise = new Promise((resolve , reject)=>{

      let flag = true ; 

      if(flag)
        resolve("we will study")
     else 
        reject("we will not study, what you want to do... you do..")

})

myPromise.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(
    console.log("I made my promise")
)