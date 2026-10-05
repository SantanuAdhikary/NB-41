
let displayTime = ()=>{
    
    let date = new Date();

    let time = document.getElementById("time")
    console.log(time)

    time.innerText = date.toLocaleTimeString()

    let todayDate = document.getElementById("todayDate")
    console.log(todayDate)

    todayDate.innerText = date.toLocaleDateString()
   
}
displayTime()


setInterval(displayTime,1000)