//Write a function that takes an array of words and a character and returns each word that has that character present.
//1. function 
//2.  if statement character present return that element
//3.


function lettersWithStrings(array, specChar) {
    const specWords = []
  for (const word of array) {
    if (word.includes(specChar) ) {
        specWords.push(word)
    }
} 
return specWords
}



console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")) // => ["$hello!", "test!"]
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []