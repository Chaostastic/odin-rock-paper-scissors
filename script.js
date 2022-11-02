let gameOver = false;
let wins = 0;
let losses = 0;
let draws = 0;

const buttons = document.querySelectorAll(".choice-button");
buttons.forEach((button => button.addEventListener("click", playRound)));

function playRound(e) {
    if (gameOver) return;
    const playerSelection = this.id;
    evaluate(playerSelection, getComputerChoice());
    updateCounters();
    if (wins >= 5 || losses >= 5) {
        endGame();
    }
}

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function evaluate(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            draws++;
            break;
        case playerSelection === "rock" && computerSelection === "paper":
        case playerSelection === "paper" && computerSelection === "scissors":
        case playerSelection === "scissors" && computerSelection === "rock":
            losses++;
            break;
        case playerSelection === "rock" && computerSelection === "scissors":
        case playerSelection === "paper" && computerSelection === "rock":
        case playerSelection === "scissors" && computerSelection === "paper":
            wins++;
    }
}

function updateCounters() {
    document.querySelector(".wins").textContent = wins;
    document.querySelector(".losses").textContent = losses;
    document.querySelector(".draws").textContent = draws;
}

const gameResultContainer = document.querySelector(".game-result-container");
const gameResults = document.createElement("div");
gameResults.classList.add("game-result");

const resetButtonContainer = document.querySelector(".reset-button-container");
const resetButton = document.createElement("button");
resetButton.classList.add("reset-button");
resetButton.textContent = "Reset Game";
resetButton.addEventListener("click", resetGame)

function endGame() {
    gameOver = true;
    gameResults.textContent = getGameResult();
    gameResultContainer.appendChild(gameResults);
    resetButtonContainer.appendChild(resetButton);
}

function resetGame() {
    wins = 0;
    losses = 0;
    draws = 0;
    updateCounters();
    gameResultContainer.removeChild(gameResults);
    resetButtonContainer.removeChild(resetButton);
    gameOver = false;
}

function getGameResult() {
    switch (true) {
        case wins > losses: return "You win!";
        case wins < losses: return "Computer wins!";
        case wins === losses: return "Draw!";
    }
}