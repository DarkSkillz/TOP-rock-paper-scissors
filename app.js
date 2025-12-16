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
    const button = document.querySelectorAll(".option")
    button.forEach((btn) => btn.addEventListener("click", () => compareChoices(getSystemChoice(), btn.id)))
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
    }
    else if (playerScore >= 3 ) {
        console.log("The Player wins the game!");
    }
    else {
        newRound()
    }
}

function newRound() {
    roundNumber++;
    document.getElementById("round-counter").innerText = "Round " + roundNumber
}

newRound()
getPlayerChoice()