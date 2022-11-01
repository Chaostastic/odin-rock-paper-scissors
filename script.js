
let wins;
let losses;
let draws;

function playRound(playerSelection, computerSelection) {
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

function game() {
    let playerSelection;
    let computerSelection;
    let result;
    wins = 0;
    losses = 0;
    draws = 0;
    for (let i = 1; i <= 5; i++) {
        playerSelection = prompt("Round " + i + " - Choose [Rock|Paper|Scissors] : ").toLowerCase();
        computerSelection = getComputerChoice();
        result = (playRound(playerSelection, computerSelection))
        if (result === undefined) {
            alert("Invalid input, try again.");
            i--;
            continue;
        }
        console.log("You play " + playerSelection + ", computer plays " + computerSelection + ". " + result);
    }
    console.log(getGameResult() + " Wins: " + wins + " Losses: " + losses + " Draws: " + draws);
}

game();