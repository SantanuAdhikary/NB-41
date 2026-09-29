

let emp = {
    ename : "miller",
    eid: 101,
    sal : 20000
}

console.log(emp)
console.log(typeof emp)  // object


// ! 1. JSON.stringify()


let emp2 = JSON.stringify(emp)
console.log(emp2)
console.log(typeof emp2)   // string

let arr = [10,20,40]
console.log(arr)
console.log(typeof arr)   // object


let arr2 = JSON.stringify(arr)
console.log(arr2)
console.log(typeof arr2)   // string 


console.log("-----------------------------------------")


// ! 2. JSON.parse()

let emp3 = JSON.parse(emp2)
console.log(emp3)

let arr3 = JSON.parse(arr2)
console.log(arr3)



console.log("---------------------------------------------")


// ! deep copy by using json methods 


let frontend = ["html","css","js"]

let temp = JSON.parse( JSON.stringify(frontend) )

temp.pop()

console.log("temp arr ",temp)
console.log("orginal arr ",frontend)


let stu = {
    sname : "rohit",
    age : 10
}

let stu2 = JSON.parse(   JSON.stringify(stu) );