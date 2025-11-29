const choices = ["rock", "paper", "scissors"];

function getSystemChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length);
    let systemChoice = choices[randomNumber];
    console.log("System's Choice: " + systemChoice); //! Debug Only
}

// The gameplay loop
getSystemChoice();