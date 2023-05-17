// fully understand the problem: 
//     figure out if two nums are divisible by each other
// 1. create a function 
// 2. use for 'of'
// 3. conditional statment 
// 4. return t/f if number is divisible 

function isDivisible(num1, num2){
    //console.log(num1 / num2)
    if (num1 % num2 === 0){
        return("true")
    } else {
        return("false")
    }
}
    


// test data
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false
console.log(isDivisible(24, 8))
console.log(isDivisible(65, 89))

console.log(isDivisible(7, 10))