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
document.getElementById('name').innerHTML = digigotchi.name


document.getElementById('start').addEventListener("click", function() {
    let name1 = prompt('Please name your pet!', "dog");

    document.getElementById('name').innerHTML = name1;

        setInterval(function () {
            if(document.getElementById('stat4').innerHTML = digigotchi.age < 60){
              document.getElementById('stat4').innerHTML = digigotchi.age++;  
            } else return alert("You have won the game and kept your pet alive!")
        }, 1000);

        // setInterval(function () {
        //     if(document.getElementById('stat4').innerHTML = digigotchi.age == 30){  
        //       alert("Your pet has morphed!");
        //       document.getElementById('pet-img').src = "png-augumon.png"
        //     } else return
        // }, 1000);

        setInterval(function () {
            if(document.getElementById('stat1').innerHTML = digigotchi.hunger > 0){
                document.getElementById('stat1').innerHTML = digigotchi.hunger--;
            } else return alert("you have starved your pet to death! Game Over!")
        }, 2000);

        setInterval(function () {
            if(document.getElementById('stat2').innerHTML = digigotchi.sleepiness > 0){
                document.getElementById('stat2').innerHTML = digigotchi.sleepiness--;
            } else return alert("you have deprived your pet of too much sleep! Game Over!")
        }, 5000);

        setInterval(function () {
            if(document.getElementById('stat3').innerHTML = digigotchi.boredom > 0){
               document.getElementById('stat3').innerHTML = digigotchi.boredom--; 
            } else return alert("you have bored your pet to death! Game Over!") 
        }, 3000);

  })


document.getElementById('feed').addEventListener("click", function() {
    if (document.getElementById('stat1').innerHTML = digigotchi.hunger < 10){
    document.getElementById('stat1').innerHTML = digigotchi.hunger++
    } else return document.getElementById('stat1').innerHTML = digigotchi.hunger
  })

document.getElementById('sleep').addEventListener("click", function() {
    document.getElementById()
    if(document.getElementById('stat2').innerHTML = digigotchi.sleepiness < 10){
      document.getElementById('stat2').innerHTML = digigotchi.sleepiness++  
    } else return document.getElementById('stat2').innerHTML = digigotchi.sleepiness
  });

document.getElementById('bored').addEventListener("click", function() {
    if(document.getElementById('stat3').innerHTML = digigotchi.boredom < 10){
     document.getElementById('stat3').innerHTML = digigotchi.boredom++   
    } else return document.getElementById('stat3').innerHTML = digigotchi.boredom
  })




