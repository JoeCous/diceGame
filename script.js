var roundScore = 0;
var dice; 
var btnRoll = document.querySelector(".roll");
var btnRoll2 = document.querySelector(".roll2")
var playAgain = document.getElementById("newGame");

function rollDice() {

btnRoll.addEventListener("click", function() {
    let dice = Math.ceil(Math.random() * 6);
    let dicePic = document.getElementById("dicepic");
    dicePic.src =`img/${dice}.png`;
    
    if (dice !==1) {
    roundScore += dice;
    document.getElementById("score").textContent = roundScore
    checkScore()
}
    else {
    alert("You rolled a 1 - Game Over")
    var box = document.getElementById("dice");
    let newButton = document.createElement("BUTTON");
    newButton.id = "newGame"

    let text= document.createTextNode("Play Again");
    newButton.appendChild(text)
    box.appendChild(newButton);
    
    newButton.addEventListener("click", function() {
        location.reload()
    })
}
})}


function checkScore() {
    if (roundScore > 20) {
    alert ("YOU WIN!");
    var box = document.getElementById("dice");
    let newButton = document.createElement("BUTTON");
    newButton.id = "newGame"

    let text= document.createTextNode("Play Again");
    newButton.appendChild(text)
    box.appendChild(newButton);
    
    newButton.addEventListener("click", function() {
        location.reload()
    })
}}

rollDice()