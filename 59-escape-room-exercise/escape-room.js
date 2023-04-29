//Introduction
const readline = require ("readline-sync")
const userName = readline.question ("What is your name?  ");

//Boolean functions 
let isAlive = true; 
// let hasKey = true; 


console.log(`Welcome, ${userName}, to either the best or worst time of your life! Your only goal is to find the key to escape the room. Do you think you can do it?`) 

const pressStart = readline.keyIn (`Press (y) to start and Good Luck!  `, {limit: "y"})


console.log ("First, let's take in your surroundings! There is a desk, a hole in the wall big enough to fit your hand, and a padlocked door. What would you like to do?") 


while (isAlive === true) {
    const choice = readline.keyIn (`   Press (h) to put your hand in the hole.\n   Press (s) to search the desk.\n   Press (b) to try to break the door down. `, {limit: "shb"})
    
    console.log("-------------------")

    if (choice === "b") {
        console.log("That was dumb. Try something else.");
        // isAlive = true
        // hasKey = false 
    } else if (choice === "h") {
        console.log("OH NO! You are met with excruciating pain as your hand is severed by an unseen blade! You proceed to bleed out. Curiosity killed you. I win!");
        isAlive = false //gg 
    } else if (choice === "s") {
        console.log("Ooh! Good Guess! You have found the key! You Win!");
        // hasKey = true
        break
    }
}
    
    
  

    // console.log("There's nothing else in the desk! Go Away!")
    //         isAlive === true
    //         hasKey === true
    //     }
        
        //continued search of the desk reveals a small lever hidden underneath the desk! To pull = press 1, hand = press 2 door = press 3
            

// while (isAlive === true && hasKey === false) {

// const choice = readline.keyIn (`Press (h) to put your hand in the hole.\nPress (s) to search the desk.\nPress (b) to try to break the door down. `, {limit: "shb"})};

// if (choice === h) {
//     console.log("DEAD GAME OVER")
//     isAlive === false
// } 
// else if (choice === s) {
//     if(hasKey === true) {
//         console.log("Nothing else in the desk")
//     } else if ( hasKey ===false) {
//         console.log("good job")
//         hasKey === true
//     }
// } 
// else if (choice === b) { 
//     if (hasKey === false) { 
//         console.log("you're an idiot")}
//     else if (hasKey === true) { 
//         console.log("good job")
//     }
//     }

    //if 1= 











