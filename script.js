let gameOver = false
let wins = 0
let losses = 0
let draws = 0

const CHOICES = ["rock", "paper", "scissors"]

const buttons = document.querySelectorAll(".choice-button")
const gameResults = document.querySelector(".game-result")
const resetButton = document.querySelector(".reset-button")

function playRound(event) {
    if (gameOver) return
    const playerSelection = event.target.id
    const computerSelection = CHOICES[(Math.floor(Math.random() * 3))]
    evaluate(playerSelection, computerSelection)
    updateCounters()
    if (wins >= 5 || losses >= 5) {
        endGame()
    }
}

function evaluate(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            draws++
            break
        case playerSelection === "rock" && computerSelection === "paper":
        case playerSelection === "paper" && computerSelection === "scissors":
        case playerSelection === "scissors" && computerSelection === "rock":
            losses++
            break
        case playerSelection === "rock" && computerSelection === "scissors":
        case playerSelection === "paper" && computerSelection === "rock":
        case playerSelection === "scissors" && computerSelection === "paper":
            wins++
    }
}

function updateCounters() {
    document.querySelector(".wins").textContent = wins
    document.querySelector(".losses").textContent = losses
    document.querySelector(".draws").textContent = draws
}

function endGame() {
    gameOver = true;
    [gameResults.textContent, gameResults.style.color] = getGameResult()
    gameResults.classList.remove("none")
    resetButton.classList.remove("none")
}

function resetGame() {
    wins = 0
    losses = 0
    draws = 0
    updateCounters()
    gameResults.classList.add("none")
    resetButton.classList.add("none")
    gameOver = false
}

function getGameResult() {
    switch (true) {
        case wins > losses: return ["You win!", "green"]
        case wins < losses: return ["Computer wins!", "red"]
        // case wins === losses: return ["Draw!", "orange"]
    }
}

buttons.forEach((button => button.addEventListener("click", playRound)))
resetButton.addEventListener("click", resetGame)