// If in nested function outer function is executed, then also inner function can access all the properties of outer function.

let outer = ()=>{

    let count = 0 ; 
    let inner = ()=>{

        console.log(count)
        count++;
    }
    return inner ;
}

let res = outer();
res()
res()
res()
res()


