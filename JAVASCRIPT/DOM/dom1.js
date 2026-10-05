// 1. How to target any element 
// 2. how to write any content inside element 
// 3. how to apply css 
// 4. how to apply class / any other attribute
// 5. how to create element 



// ! How to Target Element 

//? target element by id

let topic = document.getElementById("topic")
console.log(topic)

// ! How to apply CSS

topic.style.color = "red"
topic.style.textAlign = "center"
topic.style.textTransform = "uppercase"


//? targetting by tagname

let listItems = document.getElementsByTagName("li")
console.log(listItems)

listItems[0].style.color = "green"
listItems[1].style.color = "red"
listItems[2].style.color = "blue"


let nav = document.getElementsByTagName("nav")
console.log(nav)
nav[0].style.height = "100px"
nav[0].style.backgroundColor = "green"


// ? target by the class 

let para = document.getElementsByClassName("para")
console.log(para)


// ! How to write content from javascript 

para[0].innerText = `i am para from js file`
para[1].innerHTML = `my name is <b>santanu</b>`


let box1 = document.getElementsByClassName("box1")
console.log(box1[0])

box1[0].innerHTML = `<h2>i'm box1 from js</h2> 
                    <p>how are you</p>
                    <button>start</button>`


let section = document.getElementsByTagName("section")
console.log(section[0])

console.log(section[0].innerText)
console.log(section[0].innerHTML)


let article = document.getElementsByTagName("article")
console.log(article)

article[0].innerHTML = `<h2>this is article tag</h2>
                        <button>start</button>
                        <a href="">go to facebook</a>`

