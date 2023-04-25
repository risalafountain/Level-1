// JS Array Methods

// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_array.asp (printed )

var arrOfFood = ["pancake", "egg", "ice cream", "pizza", "hamburger"]

// push - adds item(s) to the end of the array
    arrOfFood.push("cereal")
    console.log(arrOfFood)
// pop - removes item from the end of the array
    arrOfFood.pop()
    console.log(arrOfFood)
// unshift - adds item(s) to the beginning of the array
    arrOfFood.unshift("cereal")
    console.log(arrOfFood)
// shift - removes item from the beginning of the array
    arrOfFood.shift()
    console.log(arrOfFood)
// concat
    var colors1 = ["blue", "green"]
    var colors2 = ["purple", "red"]
    var newArray = colors1.concat(colors2) 
    console.log(newArray)
// indexOf
    var pizzaIndex = arrOfFood.indexOf("pizza")
    console.log(pizzaIndex)
// slice to make a new array and leaves the old one alone 
    var newArr = arrOfFood.slice (1,3)
    console.log(newArray)
// join-turns an array into a string 
    var name = "steve"
    var splitName = name.split(" ")
    console.log(splitName) //["s","t", "e", "v", "e"]
    var joinedName = splitName.join("-") //s-t-e-v-e
// reverse-
    var name1 = "rick" //to yield kcir
    var splitName1= name1.split("") //turns string into an array 
    var reversedArr = splitName.reverse ()
    console.log(reversedArr) // ["k", "c", "i", "r"]
    
    var reversedName = reversedArr.join("")//to put it back into a string
    console.log(reversedName) //"kcir"

    var allAtOnce = name.split("").reverse().join() //this is a way to chain them together all at once instead of doing it multiple steps as above 
    console.log(allAtOnce) //"kcir"

// splice-changes the original array, cut out parts of the array, an
    arrOfFood.splice (2, 2, "bacon", "ice cream") // (argument 1,argument 2, etc... SEE NOTE BELOW)
    console.log(arrOfFood) // ["pancake", "egg", "hamburger"]
    



    //the first argument tells when to start cutting in the index
    //the second argument tells how many to cut out. 
    //subsequent arguments tell what to replace the indexes with 
    //You can also save the splice in a new var named result. As such:  var result =arrOfFood.splice (2,2) and then console.log(result). This will show what was taken out. in this case it would console log ["ice cream", "pizza"] this is not a necessary step, but is helpful to check what you have done. 



