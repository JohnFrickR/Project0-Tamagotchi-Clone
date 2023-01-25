//INITIAL PSEUDOCODE 
// 1. Format the HTML to have a main background that is static
// 2. make a footer that will contain the buttons the user will use to "interact"
// 3. find an image for the tomagatchi and center it on the background
// 4. give the appropriate class names to the HTML to be able to add JS methods/functions to manipulate them
// 5. Manipulate the CSS to get the pet to do something on the page 
// 6. Style the page using CSS and make it look formatted well 
// 7. add the visual value trackers to the page as well, (hunger, boredmom, tiredness). 

// FUNCTIONS PSEUDOCODE 
// 1. I need there to be a set timer running in the background
// 2. I will need to make the age of the pet equal to the timer 
// 3. I will need to create three visual values 
// 4. these values will need to decrement at a set time frame
// 5. The timer will end the game at 1 minute and 30 seconds
// 6. I will need to the tomagachi to change at 50 seconds 

// class Tomagachi {

//     constructor(name, hunger, sleepiness, boredom, age){
//         this.name = name;
//         this.hunger = 10;
//         this.sleepiness = 10;
//         this.boredom = 10;
//         this.age = 0;
//     }

// }

let digigotchi = {
    name : "",
    hunger: 10,
    sleepiness: 10,
    boredom: 10,
    age: 0
}

document.getElementById('stat1').innerHTML = digigotchi.hunger
document.getElementById('stat2').innerHTML = digigotchi.sleepiness
document.getElementById('stat3').innerHTML = digigotchi.boredom
document.getElementById('stat4').innerHTML = digigotchi.age

//digigotchi.name = prompt('Please name your pet!', "dog")

document.getElementById('feed').addEventListener("click", function() {
    document.getElementById('stat1').innerHTML = digigotchi.hunger++
  })

document.getElementById('sleep').addEventListener("click", function() {
    document.getElementById('stat2').innerHTML = digigotchi.sleepiness++
  })

document.getElementById('bored').addEventListener("click", function() {
    document.getElementById('stat3').innerHTML = digigotchi.boredom++
  })
// let rules = ruleList(){

// alert("Welcome to the game of digigotchi!");

// alert("The rules are simple, keep your pet's hunger, boredom, and sleep stats above zero.");

// alert("To do this, hit the buttons corresponding to each need. You win when your digigotchi is 50!");
// }



