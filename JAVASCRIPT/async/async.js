

let p1 = new Promise((resolve , reject)=>{

     let flag = false 

     if(flag)
        resolve("I am resolved")
    else
        reject("i am reject")
})


let handlePromise = async ()=>{

    try{
        console.log("i will handle promise")
        let data = await p1 
        console.log(data)
    }
    catch(err)
    {
        console.log(err)
    }
}

handlePromise()