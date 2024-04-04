var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var NumberOfDice1 = "Dice" + " " + randomNumber1 + ".png";
var newImage1 = document.querySelectorAll("img")[0];
var imageOfDice = "./images/" + NumberOfDice1;
newImage1.setAttribute("src" , imageOfDice);

var randomNumber2 = (Math.floor(Math.random() * 6) + 1);
var numberOfDice2 = "Dice" + " " + randomNumber2 + ".png";
var imageOfDice2= "./images/" + numberOfDice2;
var newImage2 = document.querySelectorAll("img")[1]; 
newImage2.setAttribute("src" , imageOfDice2);   

// conditionals
if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "🚩Player 1 Wins this challenge😊"; 
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML = "Player 2 Wins this challenge🚩";
}
else{
    document.querySelector("h2").innerHTML = "There is a draw, try again😊";
}