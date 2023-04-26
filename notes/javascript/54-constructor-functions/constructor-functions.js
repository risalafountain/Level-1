//Constructor Functions--they build objects; it's the blueprint for what we are outputting
//"new" - instantiates (making an instance of something) the object 
//all functions will begin with a capitalized letter 
//important word is "THIS". it refers to itself when it is called 

function Car ( make, model, year){
    this.make = make 
    this.model = model 
    this.year = year 
}

// REMEMBER: new is the keyword it tells JS that we are instantiating an object through a constructor function. we need to also pass it the properties 
var jeep = new Car("Jeep", "Patriot", 1995) 
console.log(jeep) //=> Car { make: 'Jeep', model: 'Patriot', year: 1995 } 

var mazda = new Car ("Mazda", "3 Hatchback", 2015)
console.log(mazda.model)  //=> 3 Hatchback


