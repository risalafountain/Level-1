//RPG Project
const readline = require ("readline-sync")
let inCombat = true 
let enemyAlive = true
//let inventory = [] no longer need this because I got rid of the inventory Constructor Function 
let isPlaying = true
let hasWalked = false
let inBattle = ""

//Create an object for the player's information or do I need a CONSTRUCTOR FUNCTION to be able to print stats later?? 
const player = {
    name: "", 
    health: 100,  
    itemsOwned: [],
    enemiesDefeated: 0
}

//print stats
function displayStats () {
    console.log(`\nName: ${userName}\nHealth: ${player.health} \nInventory: ${player.itemsOwned}  `)
    if (inBattle === "enemyAppeared") {
        enemyAppeared()    
    } else if (inBattle === "enemyAttack") {
        enemyAttack()  
    } 
}


//Create constructor function for the monsters w/ their information
const enemies = []

function Enemy (name, description, health, item, itemDescription) {
    this.name = name
    this.description = description
    this.health = health
    this.item = item
    this.itemDescription = itemDescription
}
const beserker = new Enemy("Beserker","Where there's one there's sure to be more! This agent of Chaos is looking for some fun.", 50, " Amulet of Zoomies ", "  This item makes you run real fast!")

const dragon = new Enemy("Baby Dragon", "Alas! A worthy, albeit tiny, opponent!", 45, " Laser Pointer ", " This item is a great tool of distraction, deception, and aggravation!")

const cucumber = new Enemy("Cucumber", "Your companion seems really uncomfortable right now....not sure what's going on!", 35, " Ball of Yarn ", " This item is made of Beskar--it sharpens claws and strengthens paws!")

const velociraptor = new Enemy ("Velociraptor", "You've seen too many Jurassic Park movies to not take this one seriously!", 70, " Collar ", " This item protects against fleas and ticks for 30 days! Oh, it also wards off evil spirits NBD.")

const vacuum = new Enemy ("Vacuum", "The Greatest of all the monsters! For you it means chores---for your companion it means war!", 100, " Shawl of Protection ", " Your Mommy made this--exclusively of mithiril ore! ")

enemies.push(beserker,dragon,cucumber,velociraptor,vacuum)
//console.log(enemies)

//generate random enemy (blank variable ok) 
let randomEnemy

//Greeting + Console Must Ask for the Player's Name and Store it //if player doesn't write anything then it will remain blank
const userName = readline.question ("My name is Puma Furman and I welcome you to the Land of Fancy Feast! \nPlease state your name, brave adventurer!     ");

//Choose companion
const companionChoice = readline.keyIn (`\nHello noble and valiant ${userName}!\nThe Land of Fancy Feast was once a thriving home for all, however, this land has become overrun by terrible evils! \nListen closely ${userName}, it is not safe to explore on your own! We have three furry friends to choose as your companion on this ardurous journey! 
\nXena:\nA sleepy druid whose love of catnip drives her. A lover of the simple things in life like cuddles or a sunny day--one who will always stop to smell the po-tay-toes. 
\nZelda:\nA beautiful but fierce ranger whose expertise in the wild was instilled at a very young age. Always watching, always alert, always on her toes--her only weakness is her quesy stomach.  
\nGoku:\nA gluttonous bard always ready to lay on the charm or, if need be, defend the helpless. One who loves the pretty women, outdoors,  and singing the song of his people to anyone who approaches. \n\nChoose your Companion! \n(X)ena\n(Z)elda\n(G)oku   `, {limit: "gxz"})

//this is showing just the letter inputted how do i show the full name? RESOLVED
if (companionChoice === "x" || companionChoice === "X") {
    console.log(`\nGreat Choice, ${userName}! Looks like you and Xena are ready for your adventure!`) 
    } else if (companionChoice === "z" || companionChoice === "Z") {
        console.log(`\nGreat Choice, ${userName}! Looks like you and Zelda are ready for your adventure!`)
    } else if (companionChoice === "g" || companionChoice === "G") {
        console.log(`\nGreat Choice, ${userName}! Looks like you and Goku are ready for your adventure!`)
    }

//Use w to walk
while(isPlaying === true && player.enemiesDefeated <= 2) {
    if (hasWalked) {
        const walkCmnd = readline.keyIn (`Press (w) to continue exploring Press (i) to check inventory `, {limit: "wi"})        
        if(walkCmnd === "w"){
            walk()
    } else if (walkCmnd === "i") {
        displayStats()
    }
    } else {
        const beginGame = readline.keyIn (`\nGood Luck on your adventure and may the odds be ever in your furver! \nPress (b) to begin exploring the Land of Fancy Feast!  `, {limit: "b"})
        if(beginGame === "b"){
            hasWalked =  true
            walk()}
    }
}


if (player.enemiesDefeated >= 3) {
    console.log(`Congrats ${userName}! \nYou have made the Land of Fancy Feast safe for all the critters! \nYou are truly a hero among us!  GG`)
    displayStats()
    isPlaying = false
}

function walk() {
    //random algorithm to determine if enemy appeared
    const randomAppearance = Math.floor(Math.random() * 100)
    if (randomAppearance <= 25) {
        console.log("\nUh-Oh! Do you hear that?")
        enemyAppeared() //enemy appeared function will be called here
    }else if(randomAppearance > 25) {
        console.log("\nYAY! No threat has been detected!")
       }
}

function enemyAppeared() {
    //choose what to do (fight or run)
    randomEnemy = enemies [Math.floor(Math.random() * enemies.length)]
    // let fightChoices = ["Fight","Run"]
    console.log(`You've encountered a ${randomEnemy.name}! ${randomEnemy.description}`)
    const fightOrFlight = readline.keyIn(`What would you like to do? \n(F)ight \n(R)un  `, {limit: "fr"})
    if (fightOrFlight === "f" || fightOrFlight === "F") {
        console.log("You have chosen to fight!")
        inCombat = true
        battle() 
    } else if (fightOrFlight === "r" || fightOrFlight === "R") {
        console.log("You have chosen to run!")
        inCombat = false
        run() //create function to show 50% chance of escaping 
    } 
    }

function battle () {
    while (inCombat) {
        console.log(`${userName}'s Health: ${player.health}\n${randomEnemy.name}'s Health: ${randomEnemy.health}`)
        readline.keyIn (`\nPress (a) to attack your foe!  ` , {limit: "a"})
        playerAttack()
    }
}

function playerAttack() {
    const playerDamage = Math.floor(Math.random() * 50)
    randomEnemy.health = randomEnemy.health - playerDamage
    enemyHealth() //assess enemy damage  
}

function enemyAttack (){
    const enemyDamage = Math.floor(Math.random () * 25)
    player.health = player.health - enemyDamage
    if (player.health <= 0) {
        console.log("You've got to be kitten me right meow! You've ceased to exist in the Land of Fancy Feast! I really had high hopes for you!")
        isPlaying = false
        inCombat = false
     } else {
        console.log("You've taken some damage, but you're still standing!")
     }
}

function enemyHealth() {
    if (randomEnemy.health <= 0) {
        console.log(`YOU DID IT! You have destroyed the ${randomEnemy.name}! \n  Your health has increased by 20! \n  You have gained the mythical ${randomEnemy.item} \n ${randomEnemy.itemDescription}! `)
        player.itemsOwned.push(randomEnemy.item)
        player.enemiesDefeated = player.enemiesDefeated + 1
        player.health = player.health + 20
        enemyAlive = false
        inCombat = false
        for (let i = 0; i < enemies.length; i++) {
            const element = enemies[i];
            if (element.health <= 0) {
                enemies.splice (i, 1) 
                //   console.log(enemies, "enemies array")
            }
            // console.log(player.itemsOwned, "player items array")
        } 
    } else {
        console.log(`\nThe ${randomEnemy.name} has taken some damage & has decided to retaliate!\n~~~~~~~~~~~~~`)
        enemyAttack()
    }
}
    
function run () {
    const escapeChance = Math.floor(Math.random() * 100)
    if (escapeChance <= 50) {
        console.log("Oh wow! You run really fast and have avoided battle....this time!")
    } else {
        console.log(`Oh No! The ${randomEnemy.name} has caught up to you!`)
        inCombat = true 
        battle ()
    }
}