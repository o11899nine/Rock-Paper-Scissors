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

    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}`;
    }

    else if (
        playerSelection === "ROCK" && computerSelection === "PAPER" ||
        playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
        playerSelection === "SCISSORS" && computerSelection === "ROCK"
    ) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }

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

    const playerSelection = this.value;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`${playerScore} - ${computerScore}`);

}

const buttons = document.querySelectorAll('.playerSelectionBtn');
buttons.forEach((button) => {
    button.addEventListener('click', game);
});