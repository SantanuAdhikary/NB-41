

let appendNumber = (number)=>{

    console.log(number)
    let input = document.querySelector("input")
    input.value += number
}

let clearInput =()=>{
    document.querySelector("input").value = ""
}

let appendOperator =(operator)=>{

    let input = document.querySelector("input")
    input.value += operator
}

let calculate =()=>{
    let input = document.querySelector("input")

    let expression = input.value ;
    
    let res = eval(expression)
    console.log(res)

    input.value = res
}


let backSpace = ()=>{

    let input = document.querySelector("input")

    let value = input.value;

    let newValue = value.slice(0,-1)

    input.value = newValue 
}