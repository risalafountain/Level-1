// ES6 Part 1


// const and let: should be used instead of `var` in MOST 

//const should never change since it is CONSTANT
    const firstName = "joe"

//let something that can be changed used in for loops 
    let age = 12

// GLOBAL SCOPE is anything outside of a function/object/datatype
// LOCAL SCOPE is anything within a function 
    function sum(a,b) {
        return a + b 
    }
    //console.log (a) //=> Reference Error: a is not defined because it is outside of the function

    function someFunc () {
        if (2 === 2) {
            var a = "hello"
        }
        console.log(a)
    }
    someFunc() //=> hello but if var is changed to const here, it will return not defined because let and const introduce a diff. type of scoping called 'bracket scoping'

//BRACKET SCOPE  
    //this would work better because it is before the if statement and inside the brackets ?? WHAT? 
    function someFunc () {
        let a 
        if (2 ===2) {
            a = "hello" 
        }
        console.log (a)
    }
    
// spread and rest (gathers)

    //syntax: `...` when this is within a function it is the rest operator. Anywhere else, it is the spread operator 
//REST OPERATOR (gathers content for functions) 
function maxNumber (...nums) {
    console.log(nums) //=> [ 0, 3, 58, 55 ] it saves it as an array. regardless of what I put into the maxNumber (#s) below, it will be called into the function because  the rest operator (...nums)  gathered the data 
}
maxNumber(0, 3, 58, 55)

//SPREAD OPERATOR (spreads the contents) used on objects and arrays (takes the content of one and puts into a new one )
const colors1 = ["red", "blue"]
const colors2 = ["yellow", "purple"]
//if we want to put them together into a new array we can create a new array
const allColors = [...colors1, ...colors2] //this reads all colors from colors1 all colors from colors2; it won't change the original array 
console.log(allColors) //=> [ 'red', 'blue', 'yellow', 'purple' ]

const person = {
    name: "rick",
    age: 50 
}

const personCopy = {... person} //this reads I have a new object {}, give me all the content `...` from the person object above 

console.log(personCopy) //=>{ name: 'rick', age: 50 }


// template literals
//the back tick `` is a new way to make a string so instead of using "string" or 'string' we can use `string`
const herName ="xena"
//concatenate this way with a plus sign 
"hi" + herName 

//w/ template literals we could instead use. it's the same effect but no `+`, no breaking the string. 
const greeting = `hi, ${herName}`//${} signifies a variable 
console.log(greeting) //=> hi, xena

// import & export (high level overview--we won't use it yet. Node uses diff words than this)
