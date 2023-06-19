// Global variables
const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;

function randInt(number) {
    return Math.floor(Math.random() * number);
}

function getComputerChoice() {
    return choices[randInt(choices.length)];
}

function playRound(playerSelection, computerSelection) {

    // Check for tie
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}`;
    }

    // Check for player loss
    else if (
        playerSelection === "ROCK" && computerSelection === "PAPER" ||
        playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
        playerSelection === "SCISSORS" && computerSelection === "ROCK"
    ) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
        
    // Check for player win
    else if (
        playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER"
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

function game() {

    for (let round = 1; round < 6; round++) {

        // Player chooses weapon
        let playerSelection = "";
        do {
            playerSelection = prompt("Choose ROCK / PAPER / SCISSORS.").toUpperCase();
        }
        while (!choices.includes(playerSelection));
        
        // Computer chooses weapon
        let computerSelection = getComputerChoice();

        // Play round
        console.log(playRound(playerSelection, computerSelection));

        // Show current score
        console.log(`${playerScore} - ${computerScore}`);
    }
}



game();