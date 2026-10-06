

let nav = document.querySelector("nav")
console.log(nav)


let logo = document.querySelector("#logo")
console.log(logo)


let main = document.querySelector(".main")
console.log(main )


let li = document.querySelector('li')
console.log(li)

let login = document.querySelector("button")
console.log(login)

let firstCard = document.querySelector(".card")
console.log(firstCard)


let cards = document.querySelectorAll(".card")
console.log(cards)

let lists = document.querySelectorAll("li")
console.log(lists)

lists.forEach((list)=>{
     list.style.textTransform = "uppercase"
    list.style.color = "red"
})


// ! how to know about class 

console.log(nav.classList)
console.log(firstCard.classList)

// how to add class

nav.classList.add("dark")
nav.classList.add("san")
console.log(nav.classList)

// how to remove class 

nav.classList.remove("san")


// ! how to create element 

let div = document.createElement("div")
div.innerHTML = `<h2>hello</h2>`


// ! how to display the element 

main.append(div)
// main.prepend(div)
// main.before(div)
// main.after(div)




let names = ["rahul","rohit","virat","dhoni"]

let ol = document.querySelector("ol")
console.log(ol)

names.map((ele)=>{
    let li = document.createElement("li")

    li.innerText = ele

    ol.append(li)
})


let products = [
    {
    title : "laptop",
    price : 50000,
    rating : 4.5
  },
  {
    title : "mobile",
    price : 30000,
    rating : 3.8
  }
  ,{
    title : "watch",
    price : 10000,
    rating : 4.7
  }
]

let section = document.querySelector("section")

products.map((ele)=>{
    let div = document.createElement("div")

    div.classList.add("productCard")

    div.innerHTML = ` <h1> ${ele.title}</h1>
                      <h2>${ele.price}</h2>
                      <h3>${ele.rating}</h3>`


    section.append(div)
})