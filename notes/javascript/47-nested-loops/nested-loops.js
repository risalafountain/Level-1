/* While we can set up a for loop for each array, how would we write a for loop to print each number in each array? 
1. set up a for loop and console.log arrayOfArrays at index of [i]. This will console log everything.  
2. to separate the numbers our of the arrays, start another for loop. cannot use [i] since it's already taken. choose [j] and call it to loop through the arrayOfArrays at index of wherever [i] is at.  

we can console log as such: (arrayOfArrays[i][j]). this will console log all the numbers individually 

to get a specific number at a specific location, just change the brackets to reference the correct indexed number (see notes inline).

another name for an array of arrays is matrix or grid 
*/

var arrayOfArrays = [
    [1, 2, 3], //[i]= 0 each number within is the [j] variable 
    [4, 5, 6],// [i] = 1; [j]= [0, 1, 2]
    [7, 8, 9] //[i] = 2; this is the best way to reference it
]

//this will console log all the numbers
for (var i = 0; i < arrayOfArrays.length; i++) { //how many times will this loop run? (3)
    for (var j = 0; j < arrayOfArrays[i].length; j++) { //how many times will this loop run (9)
        console.log (arrayOfArrays[i][j])
    }
}

//console log the number 6
console.log (arrayOfArrays[1][2])

//console log the number 1
console.log (arrayOfArrays[0][0])

//console log the number 9 
console.log (arrayOfArrays[2][2])


