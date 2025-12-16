const choices = ["rock", "paper", "scissors"];
const playerWins = new Map([
    ["rock", "scissors"],
    ["paper","rock"],
    ["scissors", "paper"],
]);
let systemScore = 0;
let playerScore = 0;
let roundNumber = 0;

function getSystemChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length);
    let systemChoice = choices[randomNumber];
    console.log("System's Choice: " + systemChoice); //! Debug Only
    return systemChoice;
}

function getPlayerChoice() {
    document.querySelectorAll(".option").forEach((btn) => btn.addEventListener("click", () => compareChoices(getSystemChoice(), btn.id)))
    document.getElementById("play-again").addEventListener("click", playAgain)
}

function compareChoices(systemChoice, playerChoice) {
    if (systemChoice == playerChoice) {
        console.log("It's a Tie!");
        newRound()
    }
    else if (playerWins.get(playerChoice) == systemChoice) {
        console.log("You win!");
        playerScore++;
        if (playerScore == 1) {
            document.getElementById("player-score-point-1").style.backgroundColor = "green"
        }
        else if (playerScore == 2) {
            document.getElementById("player-score-point-2").style.backgroundColor = "green"
        }
        else if (playerScore == 3) {
            document.getElementById("player-score-point-3").style.backgroundColor = "green"
        }
        checkScores();
    }
    else {
        console.log("You lose!");
        systemScore++;
        if (systemScore == 1) {
            document.getElementById("system-score-point-1").style.backgroundColor = "green"
        }
        else if (systemScore == 2) {
            document.getElementById("system-score-point-2").style.backgroundColor = "green"
        }
        else if (systemScore == 3) {
            document.getElementById("system-score-point-3").style.backgroundColor = "green"
        }
        checkScores();
    }
}

function checkScores() {
    if (systemScore >= 3 ) {
        console.log("The System wins the game!");
        gameOver()
    }
    else if (playerScore >= 3 ) {
        console.log("The Player wins the game!");
        gameOver()
    }
    else {
        newRound()
    }
}

function newRound() {
    roundNumber++;
    document.getElementById("round-counter").innerText = "Round " + roundNumber
}

function gameOver() {
    document.querySelectorAll(".toggle").forEach((element) => element.style.display = "none" )
    document.querySelectorAll(".hidden").forEach((element) => element.style.display = "block" )
    if (playerScore >= 3) {
        document.getElementById("loss-display").style.display = "none"
    }
    else if (systemScore >= 3) {
        document.getElementById("win-display").style.display = "none"
    }
}

function playAgain() {
    systemScore = 0
    playerScore = 0
    roundNumber = 1
    document.querySelectorAll(".toggle").forEach((element) => element.style.display = "block" )
    document.querySelectorAll(".hidden").forEach((element) => element.style.display = "none" )
    document.querySelectorAll(".player-score-point, .system-score-point").forEach((element) => element.style.backgroundColor = "black")
    document.getElementById("round-counter").innerText = "Round " + roundNumber
}

newRound()
getPlayerChoice()