

import add from './calculate.js'
import {sub} from './calculate.js'
import isPrime, { reverseString } from './isPrime.js'

console.log("i am app file")

add()
sub()
console.log(isPrime(8)) 
console.log(isPrime(7)) 

reverseString("javascript")