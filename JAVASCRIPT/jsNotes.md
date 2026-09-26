
# JAVASCRIPT


## What is Javascript ?

* javascript is one programming language used to add functinalities to the application created by html and css.

* we can use this language both in client and server side.

## How many ways we can write javascipt code ?

* we can write js code in two ways .

 **1. internal javascript**
 **2. external javascript**

### Internal Javascript

 * it is the process of writing the js code inside same html file.
 * for that we need `<script> </script>` tag.
 * this tag should be added inside the `body tag` at the end.

```html
   
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>introduction</title>
    
</head>
<body>
    <h1>javascript introduction</h1>
    
    <script>
        console.log("welcome to internal js code");
     </script>

    <script src="./intro.js"></script>

</body>
</html>
```

### External Javascript

* this is process of creating one separate javascript file by using `.js` extension and then link the javascript and html file by using `<script></script>` tag.

* in `src` attribute we have to provide the path of the javascript file.


## Printing Statement 

* in javascript for printing the output we can use `console.log()`

```js
  console.log("my name is santanu");
```


## how to declare variable

* `variable` is a container where we can store the data.
* in javascript we can declare variable by using `let`, `var` and `const` keyword.


### var keyword 

* here we can `declare` the variable and next line we can `initialize` that.

```js
         var a ; 
         a = 10 ;
```

* we can do both `declaration` and `initialization` in same line.

```js
     var b = 20 ; 
```

* we can `modify / re-initialize` the variable value.

```js
        b = 200 ; 
        a = 300;
```

**we can redeclare the variable by using var keyword**

```js
       var ename = "miller";
       var ename = "scott";
```


### let keyword

 * `let` keyword is also used to declare the variable same like `var` keyword but here we can't *re-declare* any variable.

 ```js
           let eid = 101 ; 
           let eid ; // not possible ❌
 ```

 ### const keyword 

 * it is used to make any varialbe constant. 
 * here we can not change the value of the variable.

 **note**  
  * declaration and initialization we have to do at a time.

  ```js
        const pi = 3.14 ; 

        pi = 4.5 ; // not possible 

        const x ; // not possible
  ```


## DATA TYPE

* it is used to know the type of data is assigned in any variable.
* there are two types of data type in javascript. 

**1. Primitive Datatype** 
**2. NonPrimitive Datatype** 

### what is typeof 

* `typeof` operator is used to know the datatype of any variable.

*syntax*
    typeof varaiablename


### Primitive Datatype


#### 1. number datatype 

* in javascript both decimal and non-decimal numbers belong to number datatype.

```js
    let age = 10
    console.log(age)

    let height = 4.1
    console.log(height)

    console.log(typeof age)     // number
    console.log(typeof height)  // number
```

#### 2. string datatype 

* string is single or collection of characters enclosed with double quotes( " ") / single quote  (' ') / backticks (` `). 

```js
        let ename = "rohit"
        let gender = 'male'
        let about = `he is a player`

        console.log(ename, typeof ename)  // rohit string
        console.log(gender, typeof gender) // male string
        console.log(about, typeof about) // he is a player string
``` 

#### 3. boolean 

* this datatype can accecpt either `true` or `false` value.

```js
        let isStudent = true 
        let isStudying = false 

        console.log(typeof isStudent)   //boolean
        console.log(typeof isStudying) // boolean
```

#### 4. undefined

*  any varialbe is declared but not initialized, is called as `undefined`.
*  the `typeof` and undefined variable is **undefined**

```js

        let eid ; 

        console.log(eid);         // undefined
        console.log(typeof eid); // undefined
```

#### 5. null 

* any varialbe that is intialized with null intentionally by the user .
* the typeof null is **object**.

```js
        let sal = null; 

        console.log(sal);
        console.log(typeof sal);  // object
```

#### 6. bigint 

* when we want to store one large integer number / high range integer number we can use bigint.
* we have to use `n` as a suffix to make any number as bigint. 

```js
    let largeNumber = 98765432123456789123456789n
    console.log(largeNumber)
    console.log(typeof largeNumber)
```

### Non-Primitive Datatype 

 **1. function**
 **2. array**
 **3. object**


### difference b/w == and === (strictly equal)

* `==` operator is used to check only the value it will not check the datatype but `===` operator will check the value and the datatype.

```js
        let a  = 10 ; 
        let b = "10" ; 

        console.log(a == b);   // true 
        console.log(a === b); // false
```


## String 

* String is single or collection of characters enclosed with single quote/double quote / backticks.

eg:

```js

      let str1 = 'hi'
      let str2 = "hi"
      let str3 = `hello
      how 
      are 
      you`
```

**note:** 
         if we want to take multiline string then we can enclosed the string by using backtick.

### String Interpolation / Template Literals

* accessing the variable inside string is called template literals.
* for this string should be enclosed with backtick and the variable we want to access should be written inside ${}

eg: 

```js

        let a = 10 ; 
        let b = 20 ;
        let myName = "santanu"

        console.log(`the addition of ${a} and ${b} is : ${a+b}`)

        console.log(`my name is : ${myName}`)
```


**lenth property**

 * it is used to know the length of any string.

```js
      let msg = "how are you"
      console.log(msg.length);   // 11
```

### String Methods 

**1. toUpperCase()**
    
   * this method is used to convert the string into uppercase and it will return one new string.

   * it will not change the original string.

  ```js
          let str4 = "Hello"

          let upper = str4.toUpperCase();
          console.log(upper)                    // HELLO

          console.log(str4.toUpperCase())      // HELLO

          console.log(str4)         // Hello
  ```


**2. toLowerCase()**
    
   * this method is used to convert the string into lowercase and it will return one new string.

   * it will not change the original string.

**3. trim()**

  * this method is used to remove space from both the sides of the string. 
eg: 
  ```js
          let str6 = "  hi  "
          let str7 = str6.trim();

        console.log(str6.length)    // 6
        console.log(str7.length)   // 2
  ```

**4. indexOf()**

 * it is used to know the index of the given character.

 * it will take the first occurance of the character.

 * if the character is not present, it will return -1.

 ```js
      let str8 = "hello how are you"
      console.log(str8.indexOf('o'))   // 4
      console.log(str8.indexOf('l'))  // 2
      console.log(str8.indexOf('z')) // -1
 ```

 
**5. lastIndexOf()**

 * it will take the last occurance index of the character.

 * if the character is not present, it will return -1.

 ```js
        console.log(str8.lastIndexOf('o'))  // 15
      console.log(str8.lastIndexOf('l'))   // 3
      console.log(str8.lastIndexOf('z'))  // -1
 ```

 **6. charAt()**

  * this method is used to know which character is present at the given index.

  ```js
          console.log(str8.charAt(1))  // e
  ```

  **7. concat()**

  * this method is used to combine / merge two or more than two strings and it will return one new string.

  ```js
          console.log(str7.concat(" ",str8)) // hi hello how are you
  ```

  **8. includes()**

  * it is used to know the given string is present or not. 

  * if it is present it will return true otherwise it will return false.

  ```js
     
      console.log(str8.includes("me"))     // false
      console.log(str8.includes("you"))   // true 
  ```


  **9. replace()**

  * this method is used to replace one string with another string.
  * it will replace only the first one.

  ```js
    let sentence = `I am from bangalore, I love bangalore`

    console.log(sentence.replace("bangalore","chennai"))  

    // I am from chennai, I love bangalore.
  ```

  **10. replaceAll()**

  * this method is used to replace all the string.

  ```js
     console.log(sentence.replaceAll("bangalore","chennai"))  

    // I am from chennai, I love chennai.
  ```

  **11. split()**

  * this method is used to convert string into array.

  ```js
     let greet =  "how are you"

    console.log(greet.split(" "))  // ["how","are","you"]
    console.log(greet.split(""))  // ['h', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u']
    console.log(greet.split())   // ['how are you']
  ```


  **12. slice()**

  * this method is used to extract some part of another string.

  * it takes two parameters. (startIndex, endIndex) , it does not include endIndex value.

  * slice() can take negative indexing also.

  * endIndex value should be greater than startIndex.


  **13. substring()**

  * this method is also used to extract some part of another string.

  * it takes two parameters. (startIndex, endIndex) , it does not include endIndex value.

  * here we can't provide negative value. if we are using that will be considered as 0.

  * here if we are giving endIndex value smaller than startIndex , it will swap the values and provide the output.


## Function in Javascript

* function is one block of code performing some specific task.

* function is used for code reusability.

### Named Function 

* function having name , is called **Named Function.**

*syntax*

function functionname()
{

}

functionname()

* for executing the function we should call the function by the functionname.

**function with parameters**
```js

    function add(a, b)
    {
        console.log(a + b)
    }

    add(2,8)
    add(25,80)

```

**function with return statement**

```js
      function sub(a,b)
      {
          return a - b ;
      }

      let res = sub(40,10)
      console.log(res)
```





### Anonymous Function 

* any function that does not have name is called as *anonymous function*

*syntax*

function()
{

}

* here we can't execute the function because this function does not have any name.

### Function with Expression 

*syntax*: 

   variable = function()
              {
                  
              }

  *example*

  ```js

            let add = function()
                     {
                          console.log(10 + 5);
                     }

              add();
  ```

**write one js program to check number is prime or not by using function**


### Arrow Function 

*syntax*

variable = ()=>{

}

*example*

```js
          let add =(a,b)=>{
            console.log(a+b);
          }
          add();
```

**Note: in arrow function if there is only one statement that time no need to use return keyword and { }**


```js

     let multiply = (a,b)=> a * b ;

     console.log(multiply(2,8));
     
```


**write a js program to find the numbe is armstrong or not**


### Nested Function

* creating one function inside another function is called as nested function.

*eg*
```js
      let outer = ()=>{
          console.log("i am outer function")

          let inner= ()=>{
              console.log("i am inner function")
          }
          inner();
      }
      outer();
```

#### what is Lexical Scooping

* in nested function inner function can access the properties of outer function but the outer function can't access the properties of inner function is called as *Lexical Scooping*

```js
        let parent = ()=>{

        let bike = "RE"

        let child = ()=>{
                let mobile = "iphone"
                console.log(`bike name is : ${bike}`)
                console.log(`mobile name is : ${mobile}`)
        }

        // console.log(mobile)  not possible

        child();
        }

        parent();
```

### Higher Order Function and Callback Function 

**HigherOrderFunction**

* any function that takes/accepts any other function as parameter/argument is called as *HigherOrder function*

**callback function**

* the function we are sending as a argument to the higher order function, is called as *callback function*


```js
        let abc = (x)=>{

        console.log("i am abc function")
        x();
        }

        abc(()=>{

        console.log("how are you")
        })
```

### IIFE (Immediate Invoke Function Expression)

* this funcion executes only once.
*eg:*
```js
         (
            function()
            {
              console.log("database connected")
            }
         )();

      // iife function with parameter

      (
        function(port)
        {
            console.log("server is running on port number ",port)
        }
      )(3000);
```




## Difference b/w var and let*

1. in `let` keyword re-declaration is not possible , but in `var` keyword re-declartion is possible.

*eg:*
```js 
      var a = 10 ; 
      var a ; ✅

      let b = 90 ; 
      let b ;  ❌
```

2. `let` keyword having *block scope* but `var` keyword having `functional scope` and `global scope`

eg:

```js
          {
             var x = 10 ; 
             let y = 20 ; 
             const z = 30 ; 

             console.log(x);  // 10
             console.log(y);  // 20
             console.log(z);  // 30
          }
             console.log(x);  // 10  ✅
             console.log(y);  ❌
             console.log(z);  ❌


      function scope()
      {
          for(var i=1 ; i<=5 ;i++)
          {

          }

          console.log(i); // 6 
      }

      scope()
```

3. **variable hoisting** is possible in `var` keyword but in `let` not possible.


### what is Variable Hoisting

* if we declared any variable by using `var` keyword and we access it before its declartion.
the declaration will move to top and it will give the output as `undefined`.
this process is called *variable hoisting*.

eg: 

```js

              console.log(x);   // undefined
              var x ; 


              console.log(y);   // undefined
              var y = 20 ;
```



## Array 

* Array is one linear data-structure where we can store multiple values in continuous manner.

* in javascript we can store both homogeneous and heterogeneous data inside array.

* array index starts from 0.

**How to declare Array**
```js
       let arr = [10,20,30]
       console.log(arr);
```

**How to access Array elements**

```js
       console.log(arr[0])
       console.log(arr[1])
```

**How to modify array element**

```js
          arr[2] = 300;
```

### Array Methods 


**1. push()**

* this method is used to add element at the end of array.

```js
        let marks = [75,80,95,65]
        marks.push(90)
        console.log(marks)          //  [75, 80, 95, 65, 90]
```

**2. pop()**

* used to remove the last element of the array.

```js
        let food = ["biriyani","maggie","fried rice","umpa"]

        food.pop();
        console.log(food)   // ['biriyani', 'maggie', 'fried rice']
```

**3. shift()**

* used to remove the element from the start.

```js
        let movies = ["leo","master","beast","jananayagan"]

        movies.shift()

        console.log(movies)   //   ['master', 'beast', 'jananayagan']
```


**4. unshift()**

* used to add element at the start.

```js
        let series = ["dark","12 monkeys","f.r.i.e.n.d.s"]

        series.unshift("money heist")

   console.log(series) //  ['money heist','dark','12 monkeys','f.r.i.e.n.d.s']
```

**5. indexOf()**

 *  this method is used to know the first occurance index of any given element of the array.

**6. lastIndexOf()**

 *  this method is used to know the last occurance index of any given element of the array.

 ```js
        let numbers = [50,10,20,40,30,10]

        console.log(numbers.indexOf(10))        // 1
        console.log(numbers.indexOf(15))       // -1

        console.log(numbers.lastIndexOf(10))   // 5

 ```

 **7. includes()**

 * used to check element is present or not in the array. 
 * it returns boolean (true/false)

 ```js
      console.log(numbers.includes(100))   // false
      console.log(numbers.includes(30))   // true
 ```

 **8. concat()**

 * used to combine/merge two or more than two arrays and it will return one new array.

 ```js
 
        let frontend = ["html","css","react"]
        let backend = ["node","express","mongodb"]

        let fullstack =  frontend.concat(backend)

        console.log(fullstack)  // ['html', 'css', 'react', 'node', 'express', 'mongodb']
 ```

 **9. join()**

 * used to convert any array into string.

 ```js
      let charArr = ['h','e','l','l','o']

      let str = charArr.join("")

      console.log(str)    // hello

      let words = ["we","love","javascript"]

       let sentence = words.join(" ")
       console.log(sentence)       // we love javascript
 ```

 **10. reverse()**

 * used to reverse the original array.

 ```js
        let arr3 = [1,2,3,4,5]

        arr3.reverse()

        console.log(arr3)   // [5,4,3,2,1]
 ```



**11. splice() method**

* this method is used to modify/change the original array.

* by using this method we can remove , replace and add the element in array.

* it can take 3 parameters (startIndex, deleteCount , replacementValue)

*eg : 1*
```js

   let arr4 = [10,20,30,40,50,60]

   arr4.splice(1,2)

  console.log(arr4)     // [10, 40, 50, 60]
```

*eg : 2*
```js

  let arr5 = [100,200,300,400,500,600]

  arr5.splice(2,2,700) 

  console.log(arr5)    // [100, 200, 700, 500, 600]
```

*eg : 3*
```js

    let arr6 = ["java","node","express","python"]

    arr6.splice(2,0,"javascript")

    console.log(arr6)  // ['java', 'node', 'javascript', 'express', 'python']
```

**12. slice()**

* it is used to extract some part of array. 
* it will not modify the original array. 
* it takes two parameters(startIndex, endIndex) but it does not include endIndex value.

```js
        let numbers = [10,20,30,40,50]

        console.log(numbers.slice(1,4))  // [20, 30, 40]
```

### Higher Order Array Methods 

**1. map()**

* map() is one higher order array method used to traverse the array and we can perform some operation with all the array elements.

* map() method will return one new array, it does not modify the original array. 

* this method takes 3 parameters. 
  first parameter identify as element 
  second parameter identify as index 
  third parameter identify as array


*syntax*

   arrayname.map((ele,index,array)=>{

   })


```js


      let price = [1000,750,250,500]

      let updatedPrice = price.map((ele)=>{
        return ele + 200;
      })

      console.log(updatedPrice)  // [ 1200, 950, 450, 700 ]
      console.log(price)



      let subjects = ['sql','java','node','python']


      let upperArr = subjects.map((ele)=>{
          return ele.toUpperCase(); 
      })

      console.log(upperArr)  // [ 'SQL', 'JAVA', 'NODE', 'PYTHON' ]
```

**2. filter()**

* filter() is one higherorder array method used to traverse the array and it checks the condition.

* it returns one new array , there the element will be stored which are matching with the condition.

* filter() method also can take 3 parameters, (element,index,array)

```js
      let marks = [56,75,59,80,65,90,45,88,70]

      let highest= marks.filter((ele)=>{
              return ele >= 70
      })
      console.log(highest)  // [ 75, 80, 90, 88, 70 ]
```

* this method will not change the original array, it will return one new array.


**3. forEach()**

* this is also one higher order array method and it is used to traverse the array.

* it can take 3 parameters (element,index,array)

* the main difference b/w map() and forEach(), forEach method can't return any value.


**4. reduce()**

* reduce() method is one higher order array method , it can take 4 parameters (accumulator , element , index , array)

* it is used to make the array into single value.

* by default accumulator value will be first element value.

* when we want to add , multiply all the elements we can use reduce method.

```js

    let nums = [1,2,3,4,5]

    let sum = nums.reduce((acc,ele)=>{
      return acc + ele;
    },0)

    console.log(sum)          // 15

    let multiply = nums.reduce((acc,ele)=>{
      return acc * ele;
    },1)

    console.log(multiply)     // 120
```

**5. sort()**

* sort() method is used to sort the array both in ascending and descending order.

* this method will change the original array.

* it can take 2 parameters. 
  if we are return first - second parameter it will give ascending order 
  if we are return second - first parameter it will give descending order 

```js

      let unsorted = [5,1,4,3,2]

      let asc = unsorted.sort((a,b)=>{
        return a - b;
      })

      console.log(unsorted)
      console.log(asc)

      let dsc = unsorted.sort((a,b)=>{
        return b - a; 
      })

```

## Object

* anything that have physical existence is called as Object.

* in javascript Object is key and value pairs enclosed with curly braces {}.

* these key-value pairs are called properties, all the properties will be separated by comma ( , )

* all the key-value will be separated by colon (:)

* key should be unique, value can be duplicate.

* we can give any datatype as value (primitive , non-primitive)

* we can create object in 3 ways in javascript.
  * by using object literals 
  * by using class 
  * by using functional constructor


### Object by using literals


```js
let student = {
    sname : "miller",
    sid : 101,
    isStudying : false,
    skills : ["sql","java","python","webtech"],
    address : {
                city:"chennai",
                pin:543216
             },
    work : function()
            {
                console.log("love to sleep")
            }
}

console.log(student)

```


**How to Access Property**

*syntax*
        objectname.key

```js
        console.log(student.sname); //  miller
```

**How to modify**

*syntax*
          objectname.key = value ;

 ```js
          student.sid = 210;
 ``` 

 **How to add new property**

 * adding new property and modifying the old property syntax is same.
 * if the key is present then it will modify, if the key is not present then it will add the property.

 ```js
           student.phNo = 9876543210;
 ```

 **How to delete any Object property**

 *syntax*
          delete objectname.key

  ```js
           delete student.isStudying;
  ```


  **Accessing Object by using [] square bracket**

  *syntax*
                objectname["key"]
        
  ```js
           console.log(student["sname"]); // miller 
           console.log(student[sname]);  // error 
  ```


### Object Methods 

**1. Object.keys()**

 * this method is used to get all the keys in the form of array.

 ```js
        let marker = {
            brand : "camlin",
            price : 50,
            color : "blue",
            canWrite : true
        }

        let keys = Object.keys(marker)
        console.log(keys)        // [ 'brand', 'price', 'color', 'canWrite' ]
 ```

 **2. Object.values()**

 * it is used to return all the values of object in the form of array.

 ```js
      let values = Object.values(marker)
      console.log(values)    // [ 'camlin', 50, 'blue', true ]
 ```

 **3. Object.entries()**

 * it will return one nested array where all the key-value pairs will be stored each one arrays.

 ```js
      let keyvalue = Object.entries(marker)
      console.log(keyvalue)
      /*
           [
              [ 'brand', 'camlin' ],
              [ 'price', 50 ],
              [ 'color', 'blue' ],
              [ 'canWrite', true ]
           ]
     */
 ```

 **4. Object.freeze()**

 * this method is used to make the object frozen.
 * we can't perform any CRUD operation (add,modify,delete) with the object.

 **5. Object.isFrozen()**

 * it is used to check object is frozen or not. 
 * it will return boolean value.

 ```js
        
        let ob1 = {
            obName : "laptop",
            price : 65000,
            color:"black"
        }

        console.log("before freeze")
        console.log(ob1)

        Object.freeze(ob1);

        console.log("after freeze")

        ob1.color = "blue"     // we can't modify
        ob1.brand = "hp"      // we can't add 
        delete ob1.price;    // we can't delete 

        console.log(ob1)


        // ! Object.isFrozen()

        console.log(Object.isFrozen(ob1))        // true
        console.log(Object.isFrozen(marker))    // false 
 ```
 

 **6. Object.seal()**

 * this method is similar to `Object.freeze()` here also we can't add or delte any property but here we can modify the property.

 **7. Object.isSealed()**

 * this method is used to check object is sealed or not.
 * it will return boolean value.


 ```js
        
        let ob2 ={
            obName : "projector",
            brand : "epson",
            price : 75000
        }


        console.log("before seal")
        console.log(ob2)

        Object.seal(ob2)

        console.log("after seal")
        ob2.roomNO = 401                // we can't add
        delete ob2.price               // we can't delete
        ob2.price = 65000             // modification is possible

        console.log(ob2)


        // ! 7. Object.isSealed()

        console.log(Object.isSealed(ob2))  // true
        console.log(Object.isSealed(marker))  // false
        console.log(Object.isSealed(ob1))   // true
 ```

 **8. Object.assign()**

 * this method is used to combine two or more than two objects and it returns one new object.

 *syntax*
           Object.assign(target,source1,source2,...... source3)

```js          
      let ob3 = {
          name : "raja"
      }
      let ob4 = {
          gf : "rani"
      }
      let mergedOb = Object.assign({},ob3,ob4)
      console.log(mergedOb)  // { name: 'raja', gf: 'rani' }
      
```


**9. hasOwnProperty()**

* this method is used to know any property (key) is present or not inside the object.

* it will return boolean.

```js
      let stu ={
          sname : "rahul",
          age : 10 
      }

      console.log(stu.hasOwnProperty("sname"))  // true
      console.log(stu.hasOwnProperty("height")) // false
```


### class and Object in js

```js
      class student{

          sname ; 
          sid ; 
          sage ; 

          constructor(sname , sid , sage)
          {
                this.sname = sname ; 
                this.sid = sid ; 
                this.sage = sage;
          }
      }

      let stu1 = new student("dhoni",7,10);
      let stu2 = new student("rohit",45,8);
      let stu3 = new student("virat",18,6);

      console.log(stu1)
      console.log(stu2)
      console.log(stu3)

```
