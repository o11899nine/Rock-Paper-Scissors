// HTML element variables
const playerHeartsDiv = document.querySelector("#player-health .hearts")
const computerHeartsDiv = document.querySelector("#computer-health .hearts")
const playerSelectionDiv = document.getElementById("player-selection")
const computerSelectionDiv = document.getElementById("computer-selection");
const messageDiv = document.getElementById("message");
const restartButton = document.getElementById("restart-button");
const fightersContainerDiv = document.getElementById("fighters-container")
const horseDiv = document.getElementById("horse-button");
const spearmanDiv = document.getElementById("spearman-button");
const archerDiv = document.getElementById("archer-button");

// Constants
const HORSE = "horse";
const spearman = "spearman";
const ARCHER = "archer";
const STARTING_HEALTH = 5;

// Starting variables
let playerHealth = STARTING_HEALTH;
let computerHealth = STARTING_HEALTH;

restartButton.addEventListener('click', function () { location.reload() });
horseDiv.addEventListener("click", playRound);
spearmanDiv.addEventListener("click", playRound);
archerDiv.addEventListener("click", playRound);


function gameOver() {
    restartButton.style.display = "block";
    fightersContainerDiv.style.visibility = "hidden";
}

function randInt(number) {
    return Math.floor(Math.random() * number);
}

function getComputerSelection() {
    const choices = [HORSE, spearman, ARCHER];
    return choices[randInt(choices.length)];
}

function playRound() {
    const playerSelection = this.value;
    playerSelectionDiv.innerHTML = `<img src="img/${playerSelection}.png">`;  

    const computerSelection = getComputerSelection();
    computerSelectionDiv.innerHTML = `<img src="img/${computerSelection}.png">`;

    if (playerSelection === computerSelection) {
        messageDiv.innerHTML = `<h1>IT'S A TIE</h1><h3>This will not end the war</h3>`;
    }

    else if (
        playerSelection === HORSE && computerSelection === spearman ||
        playerSelection === spearman && computerSelection === ARCHER ||
        playerSelection === ARCHER && computerSelection === HORSE
    ) {
        messageDiv.innerHTML = `<h1>YOU LOSE</h1><h3>The enemy's ${computerSelection} beats your ${playerSelection}</h3>`;
        playerHealth--;
        playerHeartsDiv.removeChild(playerHeartsDiv.firstElementChild);
    }

    else if (
        playerSelection === HORSE && computerSelection === ARCHER ||
        playerSelection === spearman && computerSelection === HORSE ||
        playerSelection === ARCHER && computerSelection === spearman
    ) {
        messageDiv.innerHTML = `<h1>YOU WIN</h1><h3>Your ${playerSelection} beats the enemy's ${computerSelection}</h3>`;
        computerHealth--;
        computerHeartsDiv.removeChild(computerHeartsDiv.firstElementChild);
    }

    if (playerHealth < 1) {
        gameOver();
        messageDiv.innerHTML = "<h1>YOU HAVE BEEN DEFEATED!</h1>";
        
    } else if (computerHealth < 1) {
        gameOver();
        messageDiv.innerHTML = "<h1>YOU ARE VICTORIOUS!</h1>";
        
    }

}



function setHearts(n) {
    const heartsContainers = document.querySelectorAll(".hearts");
    heartsContainers.forEach((e) => {
        e.innerHTML = "";
        for (let i = 0; i < STARTING_HEALTH; i++) {
            const HEART_ICON = document.createElement("img");
            HEART_ICON.src = "img/heart.png";
            HEART_ICON.width = "30";
            e.appendChild(HEART_ICON);
        };
    });
}

function newGame() {
    setHearts(STARTING_HEALTH);
}


newGame();
