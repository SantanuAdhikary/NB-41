

// Date Object in javascript 


let date = new Date();

console.log(date)

// ! methods 

// ! 1. getHour()

console.log("hour is ",date.getHours())

// ! 2. getMinutes()

console.log("minutes is ",date.getMinutes())

// ! 3. getSeconds()

console.log("seconds is ",date.getSeconds())

// ! 4. getMilliseconds()

console.log("miliseconds is ",date.getMilliseconds())

// ! 5. getDate()

console.log("today date is ",date.getDate())

// ! 6. getFullYear()

console.log("today year is ",date.getFullYear())

// ! 7. getMonth()

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log("month is ",date.getMonth())
console.log(months[ date.getMonth() ])


// ! 8. getDay()

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("today day is ",date.getDay())

console.log(days[ date.getDay() ])



console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())


// todo : 


console.log(Date.now())

