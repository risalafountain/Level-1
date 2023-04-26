// Mutability and Types


// Mutable -can be changed (containers) => passed by reference 
    //array: the original array has been changed because of the addition of the [0] = 8
    var arr = [1, 2, 3, 4, 5]
    arr [0] = 8
    console.log (arr) //=> [8, 1, 2, 3, 4, 5]
    
    //object : in the ex. below we can see that the object has been changed with the introduction of person.hasWand = true 
    var person = {
        name: "harry",
        age: 12 
    }
    person.hasWand = true 
    console.log(person) // => { name: 'harry', age: 12, hasWand: true }

    var newPerson = person //this should not confuse us! it is the same thing, not a new thing

    // Immutable -cannot be changed => passed by value (the value is passed to the other var and it cannot be changed) 

    //strings: the var is assigned and in order to change it, you need a new var 
    
    var age = 10
    var otherAge = age // shows that they are the same thing so you can clg both otherAge and age and get the same result 
    console.log(age) //=> 10 
    
    otherAge = 12 //if it is changed, then it will change the var 
    console.log(age) // => 10
    console.log (otherAge) // => 12
    
    //numbers: the number 2 can never be 3 

    //booleans: true is always true false is always false 

// typeof (built in operator) returns the type of the data immediately to its right 
    console.log(typeof person) // => object
    console.log(typeof "Rick") // => string 