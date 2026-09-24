
// ! Higherorder Array Methods 



// ! 1. map() 

let prices = [100,200,350,50,95]

prices.map((ele, index, array)=>{

    console.log(ele,index, array)
})


let updatedPrice = prices.map((ele)=>{
   return ele + 20;
})

console.log(updatedPrice)
console.log(prices)

let users = ["john","david","smith","blake"]

let updatedUsers = users.map((ele)=>{
  return ele.toUpperCase();
})

console.log(updatedUsers)
console.log(users)



let products = ["laptop","mobile","watch","tv"]


let updatedProducts = products.map((product)=>{

    return product.concat(" latest")
})

console.log(updatedProducts)


//! filter method 

console.log("\n\t\t filter method \n\n")


let filteredPrice = prices.filter((price)=>{
    
    return price > 100
})

console.log(filteredPrice)




// ! 3. forEach()

console.log("\n\n\t\t forEach \n\n")


let ratings = [4.5, 3.1, 3.9, 4.6, 2.3]


let updatedRatings = ratings.forEach((rating)=>{

    console.log(rating - 1)

    return rating - 1 ;  // this will not return 
})


console.log(updatedRatings)  // undefined 



// ! 4. sort()

console.log("\n\t\t sort method \n\n")

let unsorted1 = [5,2,1,4,3]

unsorted1.sort((a,b)=>{
    return a - b ; 
})

console.log(unsorted1)

let unsorted2 = [5,2,1,4,3]

unsorted2.sort((a,b)=>{
  return b - a ;
})

console.log(unsorted2)

