/*

Challenge: 

Add an event listener to the button so that 
when the button is clicked, the heading text
color changes to blue. 

Use ONLY Javascript to complete this challenge

You may edit the index.html file where needed

step 1: create an id in html for the button & h1
step 2: create var for html elements (grab from DOM)
step 3: set up event listener on button
step 4: change color of h1
step 5: toogle between black and blue 
*/

var header = document.getElementById("header")
var button = document.getElementById("button")

console.log (header, button)

button.addEventListener("click", () => {
  console.log ("button was pressed")
  if (header.style.color === "blue") {
    header.style.color = "black" 
  } else {
    header.style.color = "blue"
  }

})

//this was by far the easiest way that I have seen how to do it. 