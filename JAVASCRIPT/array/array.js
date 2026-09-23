
// ! how to declare array 

let names = ["virat","sachin","dhoni","rohit"]
console.log(names);

// ! how to access array elements 

console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])

// ! how to modify the value of array 

names[1] = "rahul"
console.log(names)

// ! how to know the size of array 

console.log(names.length)

// ! heterogeneous array 

let arr1 = [10,"hi",true,undefined,null , 2n , ["bye","tata"]]
console.log(arr1)


// ! Array Methods 

// ! 1. push()

let fruits = ["apple","banana","orange"]
console.log(fruits)

fruits.push("grapes")
console.log(fruits) // ['apple', 'banana', 'orange', 'grapes']


// ! 2. pop()

let colors = ["blue","green","red"]
console.log(colors)

colors.pop()
console.log(colors)  //  ['blue', 'green']



// ! 3. unshift()

let cities = ["chennai","bangalore","mumbai"]

cities.unshift("kolkata")

console.log(cities)  // ['kolkata', 'chennai', 'bangalore', 'mumbai']


// ! 4. shift()

let movies = ["leo","pushpa","dc"]

movies.shift();
console.log(movies)  // ['pushpa', 'dc']


// ! 5. indexOf()

let ages = [19,20,21,20,18,17]

console.log(ages.indexOf(19));    // 0
console.log(ages.indexOf(20));   // 1
console.log(ages.indexOf(209)); // -1

// ! 6. lastIndexOf()

console.log(ages.lastIndexOf(20));   // 3
console.log(ages.lastIndexOf(21));  // 2


// ! 7. includes()

console.log(ages.includes(19))   // true
console.log(ages.includes(91))  // false


// ! 8. concat()

let frontend = ["html","css","js"]
let backend = ["node","express","mongodb"]

let fullstack = frontend.concat(backend);
console.log(fullstack) // ['html', 'css', 'js', 'node', 'express', 'mongodb']


// ! 9. join()


let charArr = ['s','a','n','t','a','n','u']
console.log(charArr)

let myName = charArr.join("")
console.log(myName)                // santanu

let words = ["we","love","javascript"]

let sentence = words.join(" ")
console.log(sentence)       // we love javascript


// ! 10. reverse()


let subjects = ["html","css","js","react"]

subjects.reverse()

console.log(subjects)  // ['react', 'js', 'css', 'html']



// ! 11. slice()

let numbers = [10,20,30,40,50]

console.log(numbers.slice(1,4))  // [20, 30, 40]


// ! 12. splice()

let arr2 = [10,20,30,40,50]

arr2.splice(1,3)

console.log(arr2) // [10,50]

let arr3 = [10,20,30,40,50]

arr3.splice(1,2,90)
console.log(arr3)    // [10, 90, 40, 50]


let arr4 = [10,20,30,40,50]

arr4.splice(2,0,25)
console.log(arr4)
