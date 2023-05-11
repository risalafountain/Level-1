//Write a function that takes an array of numbers and returns the largest (without using `Math.max()`)
//1. name a var 
//2. write a function
//3. write a for loop to loop through array 
//3. find the largest number (how?)


//2 ways to solve 

//#1 is how I learned 

// function largest(array){
//     let largestNum = 0
//     for (var i = 0; i <array.length; i++) {
//         // console.log(array[i])
//         if (array[i] > largestNum) {
//             largestNum = array[i]
//             // console.log("largest number:" + largestNum)
//         }
//     }
// return largestNum    
// }

//#2 is how Adeeb showed me 

function largest(array) {
    let largestNum = 0
    for (const num of array) {
      //  console.log(num)
        if (num > largestNum) {
            largestNum = num
        }
    }
return largestNum
}

console.log(largest([6, 13, 250, 3])) // => 250
console.log(largest([3, 5, 2, 8, 1])) // => 8
console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40
