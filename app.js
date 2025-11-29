const choices = ["rock", "paper", "scissors"];

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

// The gameplay loop
getSystemChoice();
getPlayerChoice();