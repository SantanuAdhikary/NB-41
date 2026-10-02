

let products = fetch("https://fakestoreapi.com/products")
console.log(products)  // promise

products
.then((data)=>{
    console.log(data)  // response 

    //todo: convert the response into json 

    let jsonData = data.json();
    console.log(jsonData)  // promise 

    jsonData.then((data)=>{
        console.log(data)   // original data 
    })
    .catch((err)=>{
        console.log(err)
    })
})
.catch((err)=>{
    console.log(err)
})


// ! fetch by using async and await


let getData = async ()=>{
    try{

        let res = await fetch("https://fakestoreapi.com/products")
        console.log(res)
        let data = await res.json();
        console.log(data)
        display(data)
    }
    catch(err)
    {
        console.log(err)
    }
}
getData();

let display = (data)=>{

    data.map((ele)=>{
        console.log(`product name is : ${ele.title}`)
        console.log(`product price is : ${ele.price}`)
        console.log(`product rating is : ${ele.rating.rate}`)
        console.log("---------------------------------------------")
    })
}