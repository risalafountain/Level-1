const readline = require("readline-sync")
console.log("hello")

const num1 = readline.question('Please enter your first number ')

const num2 = readline.question('Please enter your second number ')

const operator = readline.keyIn("Do you want to (a)dd, (s)ubract, (d)ivide, or (m)ultiply? ", {limit: "asdm"})
console.log(typeof parseInt(num1), "test")

if (operator === "a"){
    console.log("The result is: " + (parseInt(num1) + parseInt(num2)))
} else if (operator === "s") {
    console.log("The result is: " + (parseInt(num1) - parseInt(num2)))
} else if (operator === "d") {
    console.log("The result is: " + (parseInt(num1) / parseInt(num2)))
} else if (operator === "m") {
    console.log("The result is:" + (parseInt(num1) * parseInt(num2)))
}
