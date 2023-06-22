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
const WEAPON_A = "rock";
const WEAPON_B = "paper";
const WEAPON_C = "scissors";
const STARTING_HEARTS = 5;

// Starting variables
let playerHealth = STARTING_HEARTS;
let computerHealth = STARTING_HEARTS;

weaponADiv.value = WEAPON_A;
weaponBDiv.value = WEAPON_B;
weaponCDiv.value = WEAPON_C;

weaponADiv.addEventListener("click", playRound);
weaponBDiv.addEventListener("click", playRound);
weaponCDiv.addEventListener("click", playRound);




function randInt(number) {
    return Math.floor(Math.random() * number);
}

function getComputerSelection() {
    const choices = [WEAPON_A, WEAPON_B, WEAPON_C];
    return choices[randInt(choices.length)];
}

function playRound() {
    const playerSelection = this.value;
    playerSelectionDiv.innerHTML = `<img src="img/${playerSelection}_hand.png">`;  

    const computerSelection = getComputerSelection();
    computerSelectionDiv.innerHTML = `<img src="img/${computerSelection}_hand.png">`;

    if (playerSelection === computerSelection) {
        gameTextDiv.textContent = "It's a tie!";
    }

    else if (
        playerSelection === WEAPON_A && computerSelection === WEAPON_B ||
        playerSelection === WEAPON_B && computerSelection === WEAPON_C ||
        playerSelection === WEAPON_C && computerSelection === WEAPON_A
    ) {
        gameTextDiv.textContent = "You lose!";
        playerHealth--;
        playerHeartsDiv.removeChild(playerHeartsDiv.firstElementChild);
    }

    else if (
        playerSelection === WEAPON_A && computerSelection === WEAPON_C ||
        playerSelection === WEAPON_B && computerSelection === WEAPON_A ||
        playerSelection === WEAPON_C && computerSelection === WEAPON_B
    ) {
        gameTextDiv.textContent = "You win!";
        computerHealth--;
        computerHeartsDiv.removeChild(computerHeartsDiv.firstElementChild);
    }

    if (playerHealth < 1 || computerHealth < 1) {
        gameTextDiv.textContent = "Game over!";
    }

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


restart();
