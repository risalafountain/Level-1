//Preliminaries 

//1.Write a for loop that prints to the console the numbers 0 through 9.
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]

for (var i=0; i < num.length; i ++){ 
    console.log (num [i])
}

//2. Write a for loop that prints to the console 9 through 0.

for (var i= num.length -1; i >= 0; i --){ 
    console.log (num [i])
}

//3. Write a for loop that prints these fruits to the console.

const fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i ++) {
    console.log (fruit [i])
}

//Bronze Medal 

//1. write a for loop that will push the numbers 0 through 9 to an array. 
var numbers = []

for (var i = 0; i <= 9  ; i ++) 
    numbers.push(i)
    console.log (numbers) 

//2. Write a for loop that prints to the console only even numbers 0 through 100. [left it commented out so that it doesn't crowd the terminal]

// for (var i = 0; i <= 100; i ++) {
//    if (i % 2 === 0) {
//        console.log (i);
//    } 
// }

// 3. Write a for loop that will push every other fruit to an array.

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var evenFruit = []

for (var i = 0; i < fruits.length; i ++) { 
    if ([i] % 2 === 0) {
        evenFruit.push(fruits [i]);
    }
}
console.log(evenFruit) 

/*NOTE TO SELF
it wasn't enough just to put it in an array with evenFruit.push, I needed to be able to SEE it in the terminal w/ console log. Furthermore, the console log needed to be situated OUTSIDE of the for loop or it would console log everything each time the for loop ran instead of just the one time. e.g. [banana]; [banana, apple]; [banana, apple, pear] */