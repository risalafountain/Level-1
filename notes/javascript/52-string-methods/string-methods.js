// JS String Methods

// Methods are Functions. Will not execute without the parenthesis 
// String Methods are pre-built by Javascript, so all you have to do is use them!
// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_string.asp

var names = "luke"

// toUpperCase & toLowerCase 
console.log(names.toUpperCase()) // LUKE
//or in order to save the new name create a var
var uppercasedLuke = names.toUpperCase ()
console.log(uppercasedLuke) //LUKE (data is still safe)

var lowercasedLuke = uppercasedLuke.toLowerCase()
console.log(lowercasedLuke) //luke

// concat (instead of the plus sign) you can still use the + 

var s = "s"
var newName= names.concat(s) 
    console.log(newName) //lukes 

// split: change string to array 
var animal = "tiger" 
var characterArr = animal.split("")
console.log(characterArr) // ["t", "i", "g", "e", "r"]

//if using split () clg will be ["tiger"] because you didn't specify. to separate by character use ("") to split at specific character specify within string e.g (split "g") wil clg ["ti", "er"]

// slice => cut up a string into parts; our var don't effect the data--the original phoneNumber
var phoneNumber = "4096172988" //output phone number  that's (xxx-xxx-xxxx)
var first3 = phoneNumber.slice(0, 3) //takes two numbers (start @ index, stop @ index)
var next3 = phoneNumber.slice(3, 6)
var last4 = phoneNumber.slice (6, 10) //it will automatically stop if you don't put in the second argument. 
var phoneNumWithDashes = first3 + "-" + next3 + "-" + last4
console.log(phoneNumWithDashes) //409-617-2988 

// indexOf: finds the first appearance of whatever is in the string including spaces. 
var city = "New York City"
var indexOfC = city.indexOf("C")
console.log(indexOfC) // 9

//if whatever you're looking for doesn't exist then indexOf will return a -1

//