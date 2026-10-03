

let isPrime =(num)=>{

    let count = 0 ; 

    for(let i=2; i<= Math.floor(num/2) ; i++)
    {
        if(num % i == 0)
            return false;
    }
    return true; 
}


export let reverseString = (str)=>{

    let rev = ""
    for(let i=str.length-1 ; i>=0 ; i--)
    {
        rev = rev + str[i]
    }

    console.log(rev)
}

export default isPrime