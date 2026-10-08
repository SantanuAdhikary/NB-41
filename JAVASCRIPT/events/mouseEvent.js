

let add =()=>{
    console.log("this is add method")
}

let sub = (a,b)=>{
    alert(a - b )
}

let hideText =()=>{
    let myName = document.getElementById("myName")
    myName.style.visibility = "hidden"
    console.log("hiding")
}

let showText =()=>{
    let myName = document.getElementById("myName")
    myName.style.visibility="visible"
    console.log("showing")
}

let changeColor = (color)=>{
    console.log(color)
    document.body.style.backgroundColor = color
}


let changeBg=()=>{
    let section = document.querySelector("section")
    section.style.backgroundColor = "pink"
}

let changeBg2=()=>{
    let section = document.querySelector("section")
    section.style.backgroundColor = "white"
}


let count = 0 ;
let increaseNumber =()=>{

    count = count + 1 ; 
    let article = document.querySelector("article")

    article.innerHTML = `<h2>${count}</h2>`

}