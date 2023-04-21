//#1 Loop through the following array and count how many "computer"s there are. Log the final count 

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var itemCount = 0

for (var i = 0; i < officeItems.length; i++) {
   if (officeItems[i] === "computer") {
       itemCount++
    } 
}
console.log (itemCount)

//#2 Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i ++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "IS old enough to see Mad Max Fury Road")
    }
    else {
        console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is NOT old enough to see Mad Max Fury Road")
    }
}


/*### **Optional bonus challenges for this problem**

**#1**

Log to the console a personalized message like:

`Mike is not old enough to see Mad Max`

or

`Madeline is old enough to see Mad Max.`

**#2**

Check to see if the movie goer is a male or female for an even more personalized message.

`Mike is not old enough to see Mad Max Fury Road, don't let HIM in.`

or

`Madeline is old enough. SHE'S good to see Mad Max Fury Road.` */

/*### **Optional Bonus challenge**

Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array `[2, 3, 2]` would toggle the button 7 times.

The light is off to start with. Log to the console whether or not the light is on at the end.

Sample Arrays:

```jsx
[2, 5, 435, 4, 3] // "The light is on"
[1, 1, 1, 1, 3]   // "The light is on"
[9, 3, 4, 2]      // "The light is off"

```

### **A bigger picture:**

Your friends list, ingredients on a cooking website, posts on a feed, and just about every list is an array.

You will want to be able to "iterate" over these arrays to inspect them, paint them to the DOM, or automate tedious processes.

Look forward to Level 2, where you'll learn about iterator methods like `.map()` and `.filter()`. These array methods will run for loops for you. That's if you give them a callback function as an argument. This function will run for every item in the array.

`.map()` will run a for loop that will help you create all your news feeds, lists, and anything online that's plural in React.

### **If you get stuck:**

Come back here after you've approached these requirements with the 4 steps of the problem solving in mind.

A common pattern in code challenges will be to define a variable and assign it an "empty" value before your for loop. You then use the for loop to control it and then log or return the variable after you've looped through your array.

let count = 0

const codes = []

Take an hour to focus on just this assignment! */

