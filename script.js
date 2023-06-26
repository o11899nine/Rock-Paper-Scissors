// Divs
const healthBarsDiv = document.querySelector(".health-bars");
const playerHeartsDiv = document.querySelector(".player-health .hearts");
const computerHeartsDiv = document.querySelector(".computer-health .hearts");
const heartsContainersDiv = document.querySelectorAll(".hearts");
const howToPlayDiv = document.querySelector(".how-to-play");
const playerSelectionDiv = document.querySelector(".player-selection");
const computerSelectionDiv = document.querySelector(".computer-selection");
const messageDiv = document.querySelector(".message");
const fightersContainerDiv = document.querySelector(".fighters-container");

// Buttons
const newGameBtn = document.querySelector(".new-game-button");
const howToPlayBtn = document.querySelector(".how-to-play-button");
const horseBtn = document.querySelector(".horse-button");
const spearmanBtn = document.querySelector(".spearman-button");
const archerBtn = document.querySelector(".archer-button");

// Constants
const HORSE = "horse";
const SPEARMAN = "spearman";
const ARCHER = "archer";
const STARTING_HEALTH = 5;

// Health variables
let playerHealth;
let computerHealth;

// EventListeners
newGameBtn.addEventListener('click', newGame);
howToPlayBtn.addEventListener('click', howToPlay);
horseBtn.addEventListener("click", playRound);
spearmanBtn.addEventListener("click", playRound);
archerBtn.addEventListener("click", playRound);

// CSS Helper functions
function clearInnerHTML(arrayOfElements) {
	arrayOfElements.forEach((element) => {
		element.innerHTML = "";
	});
}

function setVisible(arrayOfElements) {
	arrayOfElements.forEach((element) => {
		element.style.visibility = "visible";
	});
}

function setHidden(arrayOfElements) {
	arrayOfElements.forEach((element) => {
		element.style.visibility = "hidden";
	});
}

function setDisplayNone(arrayOfElements) {
	arrayOfElements.forEach((element) => {
		element.style.display = "none";
	});
}

function setDisplayFlex(arrayOfElements) {
	arrayOfElements.forEach((element) => {
		element.style.display = "flex";
	});
}

// Game helper functions
function randInt(number) {
	return Math.floor(Math.random() * number);
}

function getComputerSelection() {
	const choices = [HORSE, SPEARMAN, ARCHER];
	return choices[randInt(choices.length)];
}

function setHearts(n) {
	heartsContainersDiv.forEach((heartsContainer) => {
		clearInnerHTML(heartsContainer);
		for (let i = 0; i < STARTING_HEALTH; i++) {
			const HEART_ICON = document.createElement("img");
			HEART_ICON.src = "img/heart.png";
			HEART_ICON.width = "30";
			heartsContainer.appendChild(HEART_ICON);
		};
	});
}

// Main functions
function newGame() {
	clearInnerHTML([playerSelectionDiv, computerSelectionDiv]);
	setDisplayNone([newGameBtn, howToPlayBtn, howToPlayDiv]);
	setDisplayFlex([messageDiv]);
	setHearts(STARTING_HEALTH);
	setVisible([healthBarsDiv, fightersContainerDiv]);
	playerHealth = STARTING_HEALTH;
	computerHealth = STARTING_HEALTH;
	messageDiv.innerHTML = `<div class="txt1">Choose your fighter!</div>`;
}

function howToPlay() {
	clearInnerHTML([playerSelectionDiv, computerSelectionDiv]);
	setDisplayNone([messageDiv, howToPlayBtn]);
	setDisplayFlex([newGameBtn, howToPlayDiv]);
	setHidden([healthBarsDiv]);
}

function gameOver(playerHealth, computerHealth) {
	setDisplayFlex([newGameBtn, howToPlayBtn]);
	setHidden([fightersContainerDiv]);

	if (playerHealth > computerHealth) {
		messageDiv.innerHTML = `<div class="txt1">YOU ARE VICTORIOUS!</div>`;
	} else {
		messageDiv.innerHTML = `<div class="txt1">YOU HAVE BEEN DEFEATED!</div>`;
	}
}

function playRound() {

	const playerSelection = this.value;
	const computerSelection = getComputerSelection();

	playerSelectionDiv.innerHTML = `<img src="img/${playerSelection}.png">`;
	computerSelectionDiv.innerHTML = `<img src="img/${computerSelection}.png">`;


	if (playerSelection === computerSelection) {
		messageDiv.innerHTML =
			`<div class="txt1">IT'S A TIE</div>
			<div class="txt2">This will not end the war</div>`;
	}

	else if (
		playerSelection === HORSE && computerSelection === SPEARMAN ||
		playerSelection === SPEARMAN && computerSelection === ARCHER ||
		playerSelection === ARCHER && computerSelection === HORSE
	) {
		messageDiv.innerHTML =
			`<div class="txt1">YOU LOSE</div>
			<div class="txt2">The enemy's ${computerSelection} beats 
			your ${playerSelection}</div>`;
		playerHealth--;
		playerHeartsDiv.removeChild(playerHeartsDiv.firstElementChild);
	}

	else if (
		playerSelection === HORSE && computerSelection === ARCHER ||
		playerSelection === SPEARMAN && computerSelection === HORSE ||
		playerSelection === ARCHER && computerSelection === SPEARMAN
	) {
		messageDiv.innerHTML = `<div class="txt1">YOU WIN</div>
		<div class="txt2">Your ${playerSelection} beats 
		the enemy's ${computerSelection}</div>`;
		computerHealth--;
		computerHeartsDiv.removeChild(computerHeartsDiv.firstElementChild);
	}

	if (playerHealth < 1 || computerHealth < 1) {
		gameOver(playerHealth, computerHealth);
	}

}