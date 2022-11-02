
const buttons = document.querySelectorAll("button")
let wins = 0;
let losses = 0;
let draws = 0;

function playRound(e) {
    const playerSelection = this.id;
    evaluate(playerSelection, getComputerChoice());
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
            console.log("You play " + playerSelection + ", computer plays " + computerSelection + ". Draw");
            break;
        case playerSelection === "rock" && computerSelection === "paper":
        case playerSelection === "paper" && computerSelection === "scissors":
        case playerSelection === "scissors" && computerSelection === "rock":
            losses++;
            console.log("You play " + playerSelection + ", computer plays " + computerSelection + ". Computer wins");
            break;
        case playerSelection === "rock" && computerSelection === "scissors":
        case playerSelection === "paper" && computerSelection === "rock":
        case playerSelection === "scissors" && computerSelection === "paper":
            wins++;
            console.log("You play " + playerSelection + ", computer plays " + computerSelection + ". You win");
    }
}

function endGame() {
    console.log(getGameResult() + " Wins: " + wins + " Losses: " + losses + " Draws: " + draws);
    wins = 0;
    losses = 0;
    draws = 0;
}

function getGameResult() {
    switch (true) {
        case wins > losses: return "You win!";
        case wins < losses: return "Computer wins!";
        case wins === losses: return "Draw!";
    }
}

buttons.forEach((button => button.addEventListener("click", playRound)));