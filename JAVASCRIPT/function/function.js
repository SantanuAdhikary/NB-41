
// !  1. Named Function 

function add()
{
    console.log("i am add function");
    console.log(20 + 30);
}

add();
add();


// ! Function with parameter

function addition(a, b)
{
  console.log(`the addition of ${a} and ${b} is ${a + b}`)
}

addition(300,100);
addition(87,23);


// ! function with return statement 


function multiply(a,b)
{
   return a * b ;
}

let ans = multiply(3,10)
console.log(ans)

console.log(multiply(4,50))

console.log("-------------------------------------------------")


// ! write a javascript function to check any string is palindrome or not.



function isPalindrome(str)
{
    let rev = ""
   for(let i=str.length-1 ; i>=0 ; i--)
   {
       rev = rev + str.charAt(i);
   }

   return rev == str;
}

 console.log(isPalindrome("hello")) 
 console.log(isPalindrome("madam"))



//  ! 2. Anonymous Function 


// function()
// {
//     console.log("i am anonymous function")
// }

console.log("---------------------------------------------")

// ! 3. function with expression

let division = function()
{
  console.log("i am division function")
}

division()



let findCharacter = function(str)
{
   let ans = ""
   for(let i=0 ; i<str.length ; i++)
   {
       let ch = str.charAt(i);

       if(str.indexOf(ch) == str.lastIndexOf(ch))
       {
          ans = ch;
          break;
       }
   }

   return ans;
}

console.log(findCharacter("abcdab"))


console.log("\t\t Arrow Function \n\n")


// ! 4. Arrow Function 


let sub = (a,b )=>{

    return a - b 
}

console.log(sub(20,3))





let userDetails = (userName , age)=>{

    console.log(`user name is : ${userName}`)
    console.log(`user age is : ${age}`)
}

userDetails("john",21)


// ! 4. nested function 

console.log("\t\t Nested Function \n\n")


let outer = ()=>{

    console.log("i am outer function")
    
    let inner = ()=>{
        console.log("i am inner function")
    }
    inner();
}


outer();


// !  what is lexical scopping ???


let parent = ()=>{

    let bike = "RE"

    let child = ()=>{
        let mobile = "iphone"
        console.log(`bike name is : ${bike}`)
        console.log(`mobile name is : ${mobile}`)
    }

    // console.log(mobile)

    child();
}

parent();