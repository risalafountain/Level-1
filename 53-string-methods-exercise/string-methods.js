//1. write a function that takes a string as a parameter 
function capilizeAndLowercase (str) {
    return str.toUpperCase() + str.toLowerCase() 
   }
   console.log (capilizeAndLowercase("HelLo")) 

//2. Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down. Hint: You'll need to use Math.floor().
function findMiddleIndex (str) {
    return Math.floor(str.length / 2)
}
console.log (findMiddleIndex("Hello")) // => 2
console.log (findMiddleIndex("Hello World") ) // => 5

// //3. Write a function that uses slice() and the other functions you've written to return the first half of the given string.
function returnFirstHalf (str) {
    return str.slice(0, str.length/2)
}

console.log (returnFirstHalf("Hello")) // =>) "He"
console.log (returnFirstHalf("Hello World")) // => "Hello"

// //4. Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase. Hint: If your string length is odd, use Math.floor() to round down.

function capilizeAndLowercase (str) {
    return str.slice(0,str.length / 2).toUpperCase() + str.slice(str.length / 2).toLowerCase()
}
console.log (capilizeAndLowercase("Hello")) // => "HEllo"
console.log (capilizeAndLowercase("Hello World")) // => "HELLO world"
console.log (capilizeAndLowercase ("Risa La Fountain")) // => 
//remeber that if a slice has only one number in it, then it will automatically stop at the end. 


// //### **Optional Code Challenge**(This one is a step up in difficulty and utilizes the .split() string method and .join() array method): Write a function that takes a string as a parameter and capitalizes any character that follows a space.
// function capitalize (str) {
//     return str.join("-")
// }
// console.log (capitalize("hey friends! practice practice practice!")) 

// -> "Hey Friends! Practice Practice Practice!"


