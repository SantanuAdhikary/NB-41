
let emp = {
    ename : "miller",
    eid : 101,
    skills : ["frontend","backend","testing"]
}

console.log(emp.ename)
console.log(emp.eid)
console.log(emp.skills)

//! object destructure 

let {skills,ename,eid} = emp

console.log(ename)
console.log(skills)
console.log(eid)


// ! array destructure 

let subjects = ["sql","java","python","html","css","js","react"]


let [sub1, sub2 , sub3,...webtech] = subjects

console.log(sub1)       // sql
console.log(sub2)      // java
console.log(sub3)     // python
console.log(webtech) // ['html', 'css', 'js', 'react']


// ! spread operator (...)


let arr = [10,20,30,40,50]

console.log(arr)
console.log(...arr)


let frontend = ["html","css","js"]
let backend = ["node","express","mongodb"]

let fullstack = [...frontend,...backend]
console.log(fullstack)

let user = {
    userName : "allen",
    userAge : 31
}

let address = {
    city : "bangalore",
    pin : 123456
}

let employee = {...user,...address}
console.log(employee)


// ! shallow copy and deep copy 


let names = ["miller","allen","blake","scott"]

// let copy = names ;  // shallow copy
let copy = [...names]; 

copy.push("king")
names.shift()


console.log("copy array ",copy)
console.log("names array ",names)