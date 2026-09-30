

console.log("timing function")

// !  1. setTimeout()


setTimeout(()=>{
    console.log("how are you")
},4000)


let add = ()=>{
    console.log("this is addition function")
}

setTimeout(add,3000)




// ! 2. setInterval()

 setInterval(()=>{
    console.log("i am interval")
},5000)



// ! 3. clearInterval()

let t1 = setInterval(()=>{
    console.log("i will stop")
},1000)

clearInterval(t1)

// ! 4. clearTimeout()

let t2 = setTimeout(() => { 
    console.log("i am settimeout")
}, 2000);

clearTimeout(t2)



