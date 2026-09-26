// ! for in loop

console.log("\n\n\t\t array \n");

// array

let arr = [10, 20, 30, 40, 50];

for (let i in arr) {
  console.log(i, arr[i]);
}

console.log("\n\n\t\t string \n");

// string

let str = "hello";

for (let i in str) {
  console.log(i, str[i]);
}

console.log("\n\n\t\t object \n");

// object

let ob = {
  name: "pen",
  price: 100,
  color: "red",
  brand: "camlin",
};

for (let key in ob) {
  console.log(key, ob[key]);
}

console.log("\n\n\t\t for of loop \n\n");

console.log("\n\n\t array \n\n");

// array

for (let ele of arr) {
  console.log(ele);
}

console.log("\n\n\t string \n\n");

// string

for (let ch of str) {
  console.log(ch);
}

console.log("\n\n\t object \n\n");

// object

// for (let x of ob) {
//   console.log(x);
// }

console.log("\n\n\t array of objects \n\n");


let students = [
    { 
        sid : 1,
        sname : "rahul",
        age : 9
    },
    {
        sid : 2,
        sname : "rohit",
        age : 12
    },
    {
         sid : 3,
         sname : "virat",
         age : 10
    }
]

students.map((ele)=>{

    console.log( `sname is ${ele.sname}`)
    console.log( `id is ${ele.sid}`)
    console.log( `age is ${ele.age}`)
    console.log("------------------------")

})


