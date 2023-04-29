// Review - Arrays and Loops




/* QUIZ
1. What part of the for loop will allow you to access each individual item in an array?

for (var i = 0;)
numbersArr[i]; instead of putting a specific number, if you want to access all of the items in the array use /i/ instead

2. What part of the for loop will need the array's length in order to run the correct amount of iterations?

for (var i=0; i < `name of var goes here`.length) 

this means that regardless if things are added at a later time to the array, so long as there isn't a number here and .length instead, there won't be any issues. This also allows us to forego hard coding anything 

*/

/*question 3 Using the pets array, how would you write a for loop to console.log all of the pets with an "s" added to the end? Your console log's should be ( cats, dogs, birds, snakes, rabbits ) 
to add the letter /s/ you need to concantenate it */
var petsArr = ["cat", "dog", "bird", "snake", "rabbit"]

for (var i = 0; i < petsArr.length; i ++) {
    console.log(petsArr[i] + "s")
}

//question 4 Using the numbers array, how would you write a for loop to console log only the odd numbers? the if statement reads: if a number divided by 2 is does not return 0; then it is not an odd number

var numbersArr = [23, 64, 20, 33, 40, 100, 30, 50, 2]

for (var i = 0; i < numbersArr.length; i ++) {
    if (numbersArr[i] % 2 !== 0) 
    {console.log(numbersArr[i])
    }
}

//question 5 Using the users array, how would you write a for loop that would console log the following sentence for each user in the array. ("Hi, I am joe and I am 30 years old")

var users = [
    {
        name: "joe",
        age: 30,
    },
    {
        name: "steve",
        age: 23
    },
    {
        name: "sarah",
        age: 39
    },
    {
        name: "lisa",
        age: 27
    }
]

for (var i =0; i < users.length; i ++) {
    console.log("Hi, I am " + users[i].name + "and I am " + users[i].age + " years old.")
}

/*question 6 Using the pets array, how would you write a for loop that would console.log all the pets in
reverse order?

usually we say (var i = 0) because 'cat' is at 0, but rabbit is indexed at 4. What if there are other pets added to this? just like we set the stopping point to the array's length we gotta do the same for the starting point as well since we are gonna start from the end so that it is DYNAMIC (it will change and adapt if the array changes). 

The first variable--the iterator-- is the petsArr.length minus 1 because length is always 1 greater than the amount of indexes. 

To determine when we want it to stop, we identify that cat is at [0]. The sentence reads: while i is greater than or equal to 0, keep going. 

Since we want to go backwards we want to use i -- instead of i ++ which indicates we are going up.

console.log to check your work 
*/

var petsArr = ["cat", "dog", "bird", "snake", "rabbit"]

for (var i = petsArr.length - 1; i >= 0; i --) {
    console.log(petsArr[i])
}



