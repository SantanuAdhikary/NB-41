
// ! IIFE (immediate invoke function expression)

(function()
{
    let a = 10 ;
    let b = 20 ; 
    console.log(a+b);
})();


(
    function()
    {
        console.log("i am iife function")
    }
)();


// ! IIFE with parameters 


(
    function(ename , age)
    {
        console.log(`emp name is : ${ename}`)
        console.log(`emp age is : ${age}`)
    }
    
)("miller",45);