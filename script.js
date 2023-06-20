let playerScore = 0;
let computerScore = 0;

const scoreDiv = document.querySelector('.score');
const roundResultDiv = document.querySelector('.round-result')

function randInt(number) {
    return Math.floor(Math.random() * number);
}

function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[randInt(choices.length)];
}

function playRound() {
    const playerSelection = this.value;
    const computerSelection = getComputerChoice();
    let roundResult = "";

    if (playerSelection === computerSelection) {
        roundResult = `It's a tie! You both chose ${playerSelection}`;
    }

    else if (
        playerSelection === "ROCK" && computerSelection === "PAPER" ||
        playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
        playerSelection === "SCISSORS" && computerSelection === "ROCK"
    ) {
        computerScore++;
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    else if (
        playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER"
    ) {
        playerScore++;
        roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
    }

    roundResultDiv.textContent = roundResult;
    scoreDiv.textContent = `${playerScore} - ${computerScore}`;
}

const buttons = document.querySelectorAll('.playerSelectionBtn');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});