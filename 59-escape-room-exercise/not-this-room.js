// //Introduction
// const readline = require ("readline-sync")
// const userName = readline.question ("What is your name?");
// console.log(`Welcome, ${userName}, to either the best or worse time of your life! Your only goal is to escape unscathed. Do you think you can do it? Press 1 to start and Good Luck!`)

// const intro = readline.question ("Do you want to play a game?")
// // if yes if no "too bad...you'll never get out if you don't" re-ask the question
// //."If you can guess the correct number between 1 and 10, I will give you clue. " correct if 3.
// // else "Oops, sorry that's not it! Why don't you try again?" 
// //clue will be "That's Correct! Here is your clue: There is only one way to escape and it isn't going to be easy. To escape you have to stay grounded, stay alert, and use your brain!"

// //First, let's take in your surroundings. It's pretty bare except for a desk, a cushioned chair, and a mysterious box in the middle of the floor. What would you like to do? 
// //1 search the desk 2sit in the chair 3 look in the box
// //desk = you found a key! Wonder what it goes to? Do you want to try the box or the chair (seriously? try again) ? 
// //chair= ARE YOU CRAZY?! Don't you want to get out of here?! Get up! go back to prev option
// //box = it's locked! We must find a key! go back to prev option

// //once box is unlocked, two envelopes inside one purple one black. which will you open? 
// //Purple = clue "Roses are red, Hooray you're not dead! Be like the moth at night and lean into the light." You notice a light switch that you hadn't seen before. Press 1 to turn off the light. Press 2 to open the black envelope. (see result of black envelope)
// //black= OH NO! YOU'VE BEEN INFECTED WITH THE GIGGLES!  You're dead, but at least you died happy! I win. 

// //once light is turned off you notice a faint light streaming in from behind the desk! You move the desk and see a tiny hole in the drywall. Press 1 to punch through the drywall, press 2 to open the black envelope. (see result of black envelope) if 1 "Hooray! You punched through the paper thin walls and find yourself outside! Congratulations! You have escaped!"

//My peer's code (Michael Charlie )
const readline = require("readline-sync");
const instructions = readline.question("Hello and welcome to the 'Escape Room Game.' Hit enter to continue, and when a question is asked, type in your answer and hit enter.");
const start = readline.question("You wake up in a locked room and don't remember how you got here.");
const user = readline.question("What is your name? ");
const greeting = readline.question(`Hello ${user}.`);
let isAlive = true
let hasEscaped = false
const options1 = ["Check drawer", "Check mattress", "Check flower pot"]
const message1 = readline.keyInSelect(options1, "One of these options will allow you to move foward. The wrong choice is game over. Choose wisely.")
function firstMsg(){
    if (options1[message1] === "Check flower pot"){
        readline.question("You find a key and move on to the next room")
        isAlive = true
        secondMsg()
    }
    else if (options1[message1] === "Check drawer"){
        readline.question("Something grabs your hand and you find yourself in a yellow, dimly lit room with many hallways")
        hasEscaped = false
    }
    else if (options1[message1] === "Check mattress"){
        readline.question("You find a pit of venemous snakes and are bitten")
        hasEscaped = false
    }
}
firstMsg()
function secondMsg(){
    const options2 = ["Enter red portal", "Enter blue portal", "Enter green portal"]
    const message2 = readline.keyInSelect(options2, "Congratulations. You've gotten passed phase 1. Choose a portal to continue your escape attempt.")
    if (options2[message2] === "Enter red portal"){
    readline.question("You step over the red portal and begin falling. You land in the Sahara desert. Game over.")
    hasEscaped = false
    }
    else if (options2[message2] === "Enter blue portal"){
        readline.question("You step over the red portal and sink. You are in the middle of the ocean. Game over.")
        hasEscaped = false
    }
    else if (options2[message2] === "Enter green portal"){
        readline.question("You blink and find yourself in a room with only a table. You see three items on the table.")
        isAlive = true
        thirdMsg()
    }
}
function thirdMsg(){
    options3 = ["Squeak Toy", "Steak Fillet", "Laser Beam"]
    const message3 = readline.keyInSelect(options3, "If you wish to leave unharmed, you must do no harm. One of these options will allow you to get past the monster ahead without harming it, or getting harmed yourself.")
    if (options3[message3] === "Squeak Toy"){
        readline.question("You proceed with the squeak toy in hand. You hear a growl at the end of ther room. The toy squeaks and a Sphinx pounces to get the toy, killing you instantly in the act.")
        hasEscaped = false
    }
    else if (options3[message3] === "Steak Fillet"){
        readline.question("You proceed with the steak fillet in hand. You hear a growl at the end of the room. A large three-headed dog notices the steak. As you try to feed it, the dog takes your whole arm with the steak. You bleed out.")
        hasEscaped = false
    }
    else if (options3[message3] === "Laser Beam"){
        readline.question("You proceed with the laser beam in hand. You hear a growl at the end of the room. It's a giant Sphinx. Thinking quickly, you shine the laser beam to the wall at the other side of the room. The Sphinx is distracted and you've escaped the room.")
        isAlive = true
    }
}   