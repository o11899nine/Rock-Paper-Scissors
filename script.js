// HTML element variables
const playerHeartsDiv = document.querySelector(".player-health .hearts")
const computerHeartsDiv = document.querySelector(".computer-health .hearts")
const playerSelectionDiv = document.querySelector(".player-selection")
const computerSelectionDiv = document.querySelector(".computer-selection");
const gameTextDiv = document.querySelector(".game-text");
const weaponADiv = document.querySelector(".weapon-button.weapon-a");
const weaponBDiv = document.querySelector(".weapon-button.weapon-b");
const weaponCDiv = document.querySelector(".weapon-button.weapon-c");

// Constants
const WEAPON_A = "ROCK";
const WEAPON_B = "PAPER";
const WEAPON_C = "SCISSORS";
const STARTING_HEARTS = 5;

// Starting variables
let playerHealth = STARTING_HEARTS;
let computerHealth = STARTING_HEARTS;

weaponADiv.textContent = WEAPON_A;
weaponBDiv.textContent = WEAPON_B;
weaponCDiv.textContent = WEAPON_C;







function randInt(number) {
    return Math.floor(Math.random() * number);
}

function getComputerChoice() {
    const choices = [WEAPON_A, WEAPON_B, WEAPON_C];
    return choices[randInt(choices.length)];
}

function playRound() {
    // choiceText.style.visibility = "hidden";
    const playerSelection = this.textContent;
    const computerSelection = getComputerChoice();
    let roundResult = "";

    if (playerSelection === computerSelection) {
        roundResult = `It"s a tie! You both chose ${playerSelection}`;
    }

    else if (
        playerSelection === WEAPON_A && computerSelection === WEAPON_B ||
        playerSelection === WEAPON_B && computerSelection === WEAPON_C ||
        playerSelection === WEAPON_C && computerSelection === WEAPON_A
    ) {
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
        playerHealth--;
        playerHearts.removeChild(playerHearts.firstElementChild);
    }

    else if (
        playerSelection === WEAPON_A && computerSelection === WEAPON_C ||
        playerSelection === WEAPON_B && computerSelection === WEAPON_A ||
        playerSelection === WEAPON_C && computerSelection === WEAPON_B
    ) {
        roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
        computerHealth--;
        computerHearts.removeChild(computerHearts.firstElementChild);
    }

    roundResultDiv.textContent = roundResult;
    // scoreDiv.textContent = `${playerScore} - ${computerScore}`;
}



function setHearts(n) {
    const heartsContainers = document.querySelectorAll(".hearts");
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
}

const weaponButtons = document.querySelectorAll(".weapon-button");
weaponButtons.forEach((button) => {
    button.addEventListener("click", playRound);
});

restart();
