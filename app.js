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
    //console.log("System's Choice: " + systemChoice); //! Debug Only
    return systemChoice;
}

function getPlayerChoice() {
    let keepGoing = true
    while (keepGoing) {
        let promptedChoice = prompt("Choose one (Rock, Paper, Scissors)");
        let playerChoice = promptedChoice.trim().toLowerCase();
        if (choices.includes(playerChoice)) {
            keepGoing = false
            //console.log("Player's Choice: " + playerChoice); //! Debug Only
            return playerChoice;
        }
    }
}

function compareChoices(systemChoice, playerChoice) {
    if (systemChoice == playerChoice) {
        console.log("It's a Tie!");
        //console.log("Player's Score: " + playerScore); //! Debug Only
        //console.log("System's Score: " + systemScore); //! Debug Only
        newRound();
    }
    else if (playerWins.get(playerChoice) == systemChoice) {
        console.log("You win!");
        playerScore++;
        //console.log("Player's Score: " + playerScore); //! Debug Only
        //console.log("System's Score: " + systemScore); //! Debug Only
        checkScores();
    }
    else {
        console.log("You lose!");
        systemScore++;
        //console.log("Player's Score: " + playerScore); //! Debug Only
        //console.log("System's Score: " + systemScore); //! Debug Only
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
        newRound();
    }
}

function newRound() {
    roundNumber++;
    console.log("Round " + roundNumber);
    compareChoices(getSystemChoice(),getPlayerChoice());
}

newRound();