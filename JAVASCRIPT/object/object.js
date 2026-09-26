

// ! how to create object 

let student = {
    sname : "rahul",
    sage : 10 , 
    isPlayer : true
}

console.log(student)

let emp = {
    ename : "miller",
    eid : 209,
    isMarried : true,
    skills : ["frontend","backend","testing"],
    play : ()=>{
        console.log("likes to play cricket")
    },
    address : {
        city : "chennai",
        pin : 123654
    }
}

console.log(emp)

// ! how to access Object property

// objectname.key

console.log(emp.ename)
console.log(emp.eid)
console.log(emp.address.city)
emp.play()


// objectname["key"]

console.log(emp["skills"])
console.log(emp["isMarried"])


// ! how to modify any object property 

// object.key = value

emp.eid = 210
console.log(emp)


//! how to add property in object 


student.phNo = 9876543211

console.log(student)

// ! how to delete 

delete student.isPlayer

console.log(student)



// ! Object Methods 


let pen = {
    price : 30,
    color : "blue",
    brand : "camlin"
}

// ! 1. Object.keys()


let keys = Object.keys(pen)
console.log(keys)    // ['price', 'color', 'brand']


// ! 2. Object.values()

let values = Object.values(pen)
console.log(values)  // [30, 'blue', 'camlin']


// ! 3. Object.entries()

let key_value = Object.entries(pen)
console.log(key_value) // [['price',30], ['color','blue'], ['brand','camlin']]


//! 4. Object.freeze()


let ob1 = {
    name : "watch",
    price : 1000
}

console.log("\n\t\t before freeze\n\n")
console.log(ob1)

Object.freeze(ob1)

ob1.color = "black"  // we can't add
ob1.price = 2000   // we can't modify
delete ob1.price  // we can't delete

console.log("\n\t\t after freeze\n\n")

console.log(ob1)


// ! 5. Object.isFrozen()

console.log(Object.isFrozen(ob1))
console.log(Object.isFrozen(student))



// ! 6. Object.seal()

let ob2 = {
    name : "laptop",
    price : 60000
}

console.log("\n\t\t before seal \n\n")

console.log(ob2);

Object.seal(ob2)

ob2.color = "black"  // we can't add 
delete ob2.price    // we can't delete 
ob2.price = 90000  // modification we can do 

console.log("\n\t\t after seal \n\n")
console.log(ob2);

// ! 7. Object.isSealed()

console.log(Object.isSealed(ob2))
console.log(Object.isSealed(emp))
console.log(Object.isSealed(ob1))

// ! 8. Object.assign()


let ob3 = {
    name : "pen",
    price : 60
}

let ob4 ={
   color : "red",
   brand : "camlin"
}

let combined = Object.assign({},ob3,ob4)

console.log(combined)

console.log(ob4)
console.log(ob3)        


// object with same key 

let bike = {
    name : "RE",
    price : 123456
}

let watch = {
    name : "rolex",
    price : 654321
}

let combined2 = Object.assign({},watch,bike)
console.log(combined2)


// ! 9. hasOwnProperty()

console.log(watch.hasOwnProperty("price"))  // true
console.log(watch.hasOwnProperty("color")) // false 



// ! how to create object by using class


class Student{
   
    sname ; 
    sid ; 

    constructor(sname , sid)
    {
       this.sname = sname ; 
       this.sid = sid; 
    }

    stuDetails()
    {
        console.log(`student name is ${this.sname}`)
        console.log(`student id is ${this.sid}`)
    }
}

let stu1 = new Student("rahul",1)
console.log(stu1)
stu1.stuDetails();

console.log("------------------------------")
let stu2 = new Student("rohit",2)
console.log(stu2)
stu2.stuDetails();