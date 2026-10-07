

//! we have to fetch api data 


let getProducts = async()=>{

    try{
        let res =   await  fetch("https://fakestoreapi.com/products")
        let data  = await res.json()
        // console.log(data)
        displayProducts(data)
    }
    catch(err)
    {
        console.log(err)
    }
}

getProducts()

let main = document.querySelector("main")

displayProducts = (products)=>{

    // console.log(products)

    products.map((product)=>{
        
        console.log(product)
        let div = document.createElement("div")


        div.innerHTML = `
                            <img src=${product.image}>
                            <p>${product.title}</p>
                            <p>${product.price} Rs. </p>
                            <p>${product.rating.rate}  </p>
                            <button>add to cart</button>
                        `

        div.classList.add("card")

        main.append(div)
    })
}




// https://api.github.com/users