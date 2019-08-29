var p1score = 0;
var p2score = 0;
var currentScore = 0;
var currentScore2 = 0;
var currentPlayer = "playerone"; 
var dice; 
var btnRoll = document.querySelector(".roll");
var playAgain = document.getElementById("newGame");
var holdBtn = document.getElementById('hold');

holdBtn.addEventListener("click", function() {
    hold()
})

function rollDice() {

btnRoll.addEventListener("click", function() {
    let dice = Math.ceil(Math.random() * 6);
    let dicePic = document.getElementById("dicepic");
    dicePic.src =`img/${dice}.png`;
    
    if (dice !==1 && currentPlayer == "playerone") {
    currentScore += dice;
    document.getElementById("playeronecurrentscore").textContent = currentScore;
    checkScore()
}
    else if (dice !==1 && currentPlayer == "playertwo") {
    currentScore2 += dice;
    document.getElementById("playertwocurrentscore").textContent = currentScore2;
    checkScore()
    }

    else {
    alert("You rolled a 1")
    currentScore = 0;
    currentScore2 = 0; 
    hold()

    playAgain.addEventListener("click", function() {
        location.reload()
    })
}
})}

function checkScore() {
    if (p1score + currentScore >= 20) {
    alert ("YOU WIN!");
    }
    else if
    (p2score + currentScore2 >= 20) {
     alert ("YOU WIN!");
    }
    playAgain.addEventListener("click", function() {
        location.reload()
    })
}

function hold() {
    if (currentPlayer == "playerone") {
        currentPlayer = "playertwo"
        p1score += currentScore;
        document.getElementById("score").textContent = p1score;
        currentScore = 0;
        document.getElementById("playeronecurrentscore").textContent = currentScore;
    }
    else {
        currentPlayer = "playerone"
        p2score += currentScore2;
        document.getElementById("score2").textContent = p2score;
        currentScore2 = 0;
        document.getElementById("playertwocurrentscore").textContent = currentScore2;
}
}

rollDice()
