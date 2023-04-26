// ES6 part 2

//PREVIOUS WAYS OF DECLARING FUNCTIONS: 
//FUNCTION DECLARATION uses keyword and we assign name 
function someFunc() {
    console.log("cool!")
}

someFunc()

//FUNCTION EXPRESSION we declare a variable give it a name and equals a function or a function saved in a variable 

const sum2 = function () {
    console.log("wow!")
}
sum2 ()

//A DIFF SYNTAX FOR FUNCTION EXPRESSIONS 
// fat arrow functions:

const sum2ES6 = () => {
    console.log(`ES6 is ${word}!`)
}


//when we only have one argument we can get rid of the (). it also has implicit return statement meaning that if function only needs to return one thing, we can get rid of curly brackets 
const oneArg = word => console.log(`ES6 is ${word}!`)

//when we add eventlisteners, we can use es6 fat arrow syntax
//addEventListener("click", ()=> "one thing") //this isn't working on my console.log

// object literals
const blue ="blue"
const green = "green"
const red = "red"

const colors = { 
    red : red, 
    green: green 
} //doing this for all the key value pairs isn't DRY, it's redundant; but object literals says to just give me comma separated values, I will create the key value pair for you 
//SYNTAX: 
const colors2 = {red, green, blue}
console.log(colors2) // =>{ red: 'red', green: 'green', blue: 'blue' }


// object destructuring sample of long way 
const user = {
    username: "joe123",
    age: 20,
    _id: "fdjaslikjfdoiajurifdo"
}
// `Welcome ${user.username}`
// console.log (user.age) 
// console.log (user._id)
//can get redundant. 

//OBJECT DESTRUCTURING allows us to pull the data without referencing user. everytimg, remember objects don't have an order, arrays do! 
//SYNTAX 
const {username, _id, age} = user
console.log(username) //joe 123
console.log(_id) //fdjaslikjfdoiajurifdo

//this also works for arrays! 

const names = ["john", "betty", "nick"]
//instead of saying: names[0], names[1], names[2] we can instead do array destructuring 

const [item1, item2, item3] = names
//array destructuring gets rid of the index????? 
console.log(item2) //betty

// default parameters: they're for functions allows us to prefill default parameters in the event that there are missing parameters or the user didn't provide any 

function sum(a,b) {
    return a+b 
}

console.log (sum(7)) //returns null or NaN because there are missing parameters. 
//but if we use default parameters it would restructure the function to look like this: 

function sum (a = 5, b = 10) {
    return a+b 
}

console.log(sum(7)) //17
console.log(sum (7, 3)) //10