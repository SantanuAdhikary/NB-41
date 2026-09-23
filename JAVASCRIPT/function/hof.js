

let abc = (x)=>{

    console.log("i am abc function")
    x();
}

abc(()=>{

    console.log("how are you")
})


// ! calculator 




let add = (a,b)=>{
    console.log(`the addition of ${a} and ${b} is ${a + b}`)
}

let sub = (a,b)=>{
    console.log(`the subtraction of ${a} and ${b} is ${a - b}`)
}

let mul = (a,b)=>{
    console.log(`the multiplication of ${a} and ${b} is ${a * b}`)
}

let div = (a,b)=>{
    console.log(`the division of ${a} and ${b} is ${a / b}`)
}

let calculate = (fun,x,y)=>{

    fun(x,y)
}

calculate(add,10,5);
calculate(sub,100,20);
calculate(mul,9,19);
calculate(div,84,4);




console.log("----------------------------------")



{
    var x = 10 ; 
    let y = 20 ; 
    const z = 30;

    console.log("inside block")
    console.log(x)
    console.log(y)
    console.log(z)
}
console.log("outside block")
console.log(x)
// console.log(y)
// console.log(z)


var example = ()=>{

     if(true)
     {
        var a = 10 ; 
        console.log(a);
        console.log("i am if block")
     }

     console.log(a)

}

example()



for(var i =1 ; i<=5 ; i++)
{
    console.log("hi")
}

console.log(i)


console.log("------------------------------------------")


console.log(myAge)

var myAge  = 19



