

let p1 = new Promise((resolve,reject)=>{

    resolve("resolve 1")
    // reject("reject 1")

})

let p2 = new Promise((resolve,reject)=>{

    resolve("resolve 2")
    // reject("reject 2")
})

let p3 = new Promise((resolve,reject)=>{

    // resolve("resolve 3")
    reject("reject 3")
})

let p4 = new Promise((resolve,reject)=>{

    // resolve("resolve 4")
    reject("reject 4")
})


// ! 1. Promise.any()

Promise.any([p1,p2,p3,p4])
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})


// ! 2. Promise.all()

Promise.all([p1,p2,p3,p4])
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})


// ! 3. Promise.race()

Promise.race([p1,p2,p3,p4])
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

// ! 4. Promise.allSettled()


Promise.allSettled([p1,p2,p3,p4])
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
