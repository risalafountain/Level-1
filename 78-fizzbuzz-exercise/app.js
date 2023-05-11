/*
1: print numbers 1-100
    for loop 
2: if multiple of 3 print "Fizz"
3: if multiple of 5 print "Buzz"
4: if multiple of 3 and 5 print "FizzBuzz" */

var count = {
    Fizz: 0,
    Buzz: 0,
    FizzBuzz: 0
}

//console.log(count.Fizz,count.Buzz, count.FizzBuzz)

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
        count.FizzBuzz++
    } else if (i % 3 === 0) {
        console.log("Fizz") 
        count.Fizz++
    } else if (i % 5 === 0) {
        console.log("Buzz")
        count.Buzz++
    } else {
        console.log(i)
    } 
}

console.log(count)

