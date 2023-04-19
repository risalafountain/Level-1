var numbers = [42, 13, 34, 18, 123]
var turtles = ["Raphael", "Donatello", "Michaelangelo", "Leonardo"]
var users = [
    {
        name: "Joe Schmoe",
        age: 42,
        gender: "Male"
    },
    {
        name: "Jill Schmoe",
        age: 41,
        gender: "Female"
    },
    {
        name: "Jimmy Schmoe",
        age: 9,
        gender: "Male"
    }   
]

var disparateArr = ["Alice", 40, true, [8, 10, 12]]

/**
 * QUIZ:
 * 
 * 1. What is the purpose of arrays? Why do programmers care about them?
 * a great way to collect multiple pieces together. more often than not, arrays tend to hold objects. 
 * 
 * 2. What are some differences between arrays and objects?
 * arrays: a way to collect multiple things 
 * objects: a way to describe one thing in many ways
 * 
 * 3. How would you access the number 34 from the `numbers` array above? 
 * See if you can log it to the console)
 * use the array's name and square brackets to get the array number
 console.log(numbers[2])
 * 
 * 4. What is the length of the `turtles` array? How would you access that length?
 * 4 items since the length is NOT zero indexed. To get the length, you would simple console.log the var and the property to get length is  .length
 * 
 * 5. Is it syntatically correct to have an array like `disparateArr`?
 * The array is ok, it doesn't need to be the same data type as in other language (e.g. only numbers, only strings, only booleans) but in JS you can have data type mixed w/ any other in the same array
 * 
 * 6. What might be a better data structure to use for `disparateArr`?
 * for the most part, if you are trying to save multiple piecces if data that are going to the same thing, it is better to save it into an object. the array isn't very clear as to what the numbers mean 
 * 
 * 
 * 7. How would you log Jill Schmoe's name to the console using the `users` array?
 * since there are 3 objects in the users array, and since it is zero indexed we know that Jill's information is at the index of 1. to access the properties of the object, use dot syntax. It would look like this: 
 * console.log(users[1].name.age[0]) ()
 */