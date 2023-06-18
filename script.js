const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {

    // TIE
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}`;
    }

    // PLAYER LOSE
    else if (
        playerSelection === "ROCK" && computerSelection === "PAPER" ||
        playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
        playerSelection === "SCISSORS" && computerSelection === "ROCK"
    ) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
        
    // PLAYER WIN
    else if (
        playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER"
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

for (let round = 1; round < 6; round++) {

    // Player chooses weapon
    let playerSelection = "";
    do {
        playerSelection = prompt("Choose ROCK / PAPER / SCISSORS.").toUpperCase();
    }
    while (!choices.includes(playerSelection));
    
    // Computer chooses weapon
    let computerSelection = getComputerChoice();

    // Round is played
    console.log(playRound(playerSelection, computerSelection));
    console.log(`${playerScore} - ${computerScore}`);
}

