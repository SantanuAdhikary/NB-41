

let ename = "miller"


let gender = 'm'
let about = `he
is 
a 
good
employee`

console.log(ename)
console.log(gender)
console.log(about)


// how to know the length 


console.log(ename.length)
console.log(gender.length)
console.log(about.length)

// ! methods of string


// ! 1. toUpperCase()

let msg = 'How are You'

let upper = msg.toUpperCase()

console.log(upper)
console.log(msg)


// ! 2. toLowerCase()

let small = msg.toLowerCase();
console.log(small)
console.log(msg)

// ! 3. charAt()

console.log(msg.charAt(0))
console.log(msg.charAt(1))

// ! 4. indexOf()

let str = "hello ladies"

console.log(str.indexOf("h"))   // 0
console.log(str.indexOf('l'))  // 2
console.log(str.indexOf('b')) // -1

// ! 5. lastIndexOf()

console.log(str.lastIndexOf('l'))  // 6
console.log(str.lastIndexOf('h'))  // 0

// ! 6. inclues()

console.log(str.includes("hello"))  // true
console.log(str.includes("hi"))  // false 


// ! template literals / string interpolation

let  a = 10 
let b = 20 

// the addition of 10 and 20 is 30 

console.log(`the addition of ${a} and ${b} is ${a+b}`)

let sname = "ROHIT"
console.log(`the student name is ${sname}`)


// ! 7. concat()

let firstName = "santanu"
let lastName = "adhikary"

let fullname = firstName.concat(" ",lastName," I am a webtech trainer")
console.log(fullname)

// ! 8. trim()

let brandName = " hp "
console.log(brandName)
console.log(brandName.length)
console.log(brandName.trim())

// ! 9. split()

let sentence = "we love javascript"

console.log(sentence)

let charArr = sentence.split("")
console.log(charArr)

let words = sentence.split(" ")
console.log(words)

console.log(sentence.split())


// ! 10. slice()

let subject = "javascript"

console.log(subject.slice(0,4)) // java
console.log(subject.slice(4)) // script
console.log(subject.slice(-6)) // script
console.log(subject.slice(4,0)) // empty

console.log(subject.slice(0,-1))
console.log('----------------------------------------------')

// ! 11. substring()

console.log(subject.substring(0,4))    // java
console.log(subject.substring(4))     // script
console.log(subject.substring(-6))   // javascript
console.log(subject.substring(4,0)) // java