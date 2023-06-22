// A beats C, B beats A, C beats B
const WEAPON_A = "ROCK";
const WEAPON_B = "PAPER";
const WEAPON_C = "SCISSORS";

const STARTING_HEARTS = 5;
let playerHearts= STARTING_HEARTS;
let computerHearts = STARTING_HEARTS;

const choiceText = document.querySelector('.choice-text');
const roundResultDiv = document.querySelector('.round-result')

const weaponButtons = document.querySelectorAll('.weapon-button');
weaponButtons.forEach((button) => {
    button.addEventListener('click', playRound);
});

document.querySelector('.weapon-button.weapon-a').textContent = WEAPON_A;
document.querySelector('.weapon-button.weapon-b').textContent = WEAPON_B;
document.querySelector('.weapon-button.weapon-c').textContent = WEAPON_C;






function randInt(number) {
    return Math.floor(Math.random() * number);
}

function getComputerChoice() {
    const choices = [WEAPON_A, WEAPON_B, WEAPON_C];
    return choices[randInt(choices.length)];
}

function playRound() {
    choiceText.style.visibility = "hidden";
    const playerSelection = this.textContent;
    console.log(playerSelection);
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
    // scoreDiv.textContent = `${playerScore} - ${computerScore}`;
}



function setHearts(n) {
    const heartsContainers = document.querySelectorAll('.hearts-container');
    heartsContainers.forEach((e) => {
        for (let i = 0; i < STARTING_HEARTS; i++) {
            const HEART_ICON = document.createElement("img");
            HEART_ICON.src = "img/heart.png";
            HEART_ICON.width = "30";
            e.appendChild(HEART_ICON);
        };
    });
}

function restart() {
    setHearts(STARTING_HEARTS);
    choiceText.style.visibility = "visible";
}

restart();
