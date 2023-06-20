// A beats C, B beats A, C beats B
const WEAPON_A = "ROCK";
const WEAPON_B = "PAPER";
const WEAPON_C = "SCISSORS";

document.querySelector('.playerSelectionBtn.weapon-a').textContent = WEAPON_A;
document.querySelector('.playerSelectionBtn.weapon-b').textContent = WEAPON_B;
document.querySelector('.playerSelectionBtn.weapon-c').textContent = WEAPON_C;

let playerScore = 0;
let computerScore = 0;

const scoreDiv = document.querySelector('.score');
const roundResultDiv = document.querySelector('.round-result')

function randInt(number) {
    return Math.floor(Math.random() * number);
}

function getComputerChoice() {
    const choices = [WEAPON_A, WEAPON_B, WEAPON_C];
    return choices[randInt(choices.length)];
}

function playRound() {
    const playerSelection = this.textContent;
    const computerSelection = getComputerChoice();
    let roundResult = "";

    if (playerSelection === computerSelection) {
        roundResult = `It's a tie! You both chose ${playerSelection}`;
    }

    else if (
        playerSelection === WEAPON_A && computerSelection === WEAPON_B ||
        playerSelection === WEAPON_B && computerSelection === WEAPON_C ||
        playerSelection === WEAPON_C && computerSelection === WEAPON_A
    ) {
        computerScore++;
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    else if (
        playerSelection === WEAPON_A && computerSelection === WEAPON_C ||
        playerSelection === WEAPON_B && computerSelection === WEAPON_A ||
        playerSelection === WEAPON_C && computerSelection === WEAPON_B
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