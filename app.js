const choices = ["rock", "paper", "scissors"];
const playerWins = new Map([
    ["rock", "scissors"],
    ["paper","rock"],
    ["scissors", "paper"],
]);

function getSystemChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length);
    let systemChoice = choices[randomNumber];
    console.log("System's Choice: " + systemChoice); //! Debug Only
    return systemChoice;
}

function getPlayerChoice() {
    let promptedChoice = prompt("Choose one (Rock, Paper, Scissors)");
    let playerChoice = promptedChoice.trim().toLowerCase();
    if (!choices.includes(playerChoice)) {
        getPlayerChoice();
    }
    else {
        console.log(playerChoice); //! Debug Only
        return playerChoice;
    }
}

function compareChoices(systemChoice, playerChoice) {
    if (systemChoice == playerChoice) {
        console.log("It's a Tie!")
    }
    else if (playerWins.get(playerChoice) == systemChoice) {
        console.log("You win!")
    }
    else {
        console.log("You lose!")
    }
}

// The gameplay loop
compareChoices(getSystemChoice(),getPlayerChoice())