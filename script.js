
const buttons = document.querySelectorAll("button")
let wins = 0;
let losses = 0;
let draws = 0;

function evaluate(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            wins++;
            return "Draw";
        case playerSelection === "rock" && computerSelection === "paper":
        case playerSelection === "paper" && computerSelection === "scissors":
        case playerSelection === "scissors" && computerSelection === "rock":
            losses++;
            return "Computer wins";
        case playerSelection === "rock" && computerSelection === "scissors":
        case playerSelection === "paper" && computerSelection === "rock":
        case playerSelection === "scissors" && computerSelection === "paper":
            draws++;
            return "You win";
    }
}

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function getGameResult() {
    switch (true) {
        case wins > losses: return "You win!";
        case wins < losses: return "Computer wins!";
        case wins === losses: return "Draw!";
    }
}

function playRound(e) {
    const playerSelection = this.id;
    const computerSelection = getComputerChoice();
    const result = (evaluate(playerSelection, computerSelection))
    if (result === undefined) {
        alert("Invalid input, try again.");
    }
    console.log("You play " + playerSelection + ", computer plays " + computerSelection + ". " + result);
    if (wins >= 5 || losses >= 5) {
        console.log(getGameResult() + " Wins: " + wins + " Losses: " + losses + " Draws: " + draws);
    }
}

buttons.forEach((button => button.addEventListener("click", playRound)))


