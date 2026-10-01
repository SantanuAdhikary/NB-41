

//! how to store data in localstorage 

localStorage.setItem("subject","javascript")
localStorage.setItem("userName","virat")
localStorage.setItem("userAge",37)

localStorage.setItem("skills",JSON.stringify(["java","python","webtech"]))


// ! how to get the data form localstorage 


console.log(localStorage.getItem("subject"))
console.log(parseInt( localStorage.getItem("userAge")))


console.log( JSON.parse( localStorage.getItem("skills")))



// ! how to delete 

localStorage.removeItem("subject")
localStorage.removeItem("userAge")


// ! all items remove 


localStorage.clear()