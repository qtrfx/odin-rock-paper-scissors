// Set up scores
// GET a random result for opponent
// Prompt user for input
// Determine winner
// Add score to winner
// Check if winner has been found
// Repeat

const currentResult = document.querySelector(".current-result");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const roundsPlayedDisplay = document.querySelector(".rounds-played");
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            currentResult.textContent = "It's a draw!";
        } else if (computerChoice === "paper") {
            currentResult.textContent = "You lose! Paper beats Rock!";
            computerScore++;
        } else {
            currentResult.textContent = "You win! Rock beats Scissors!";
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            currentResult.textContent = "You win! Paper beats Rock!";
            humanScore++;
        } else if (computerChoice === "paper") {
            currentResult.textContent = "It's a draw!";
        } else if (computerChoice === "scissors") {
            currentResult.textContent = "You lose! Scissors beat Paper!";
            computerScore++;
        }
    } else {
        if (computerChoice === "rock") {
            currentResult.textContent = "You lose! Rock beats Scissors!";
            computerScore++;
        } else if (computerChoice === "paper") {
            currentResult.textContent = "You win! Scissors beat Paper!";
            humanScore++;
        } else if (computerChoice === "scissors") {
            currentResult.textContent = "It's a draw!";
        }
    }
    roundsPlayed++;
    humanScoreDisplay.textContent = `Player: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    roundsPlayedDisplay.textContent = `Rounds played: ${roundsPlayed}`;
    
    checkWinner();
}

function getComputerChoice() {
    const randomRoll = Math.floor(Math.random() * 3);


function checkWinner() {
    if (roundsPlayed === 5) {
        if (humanScore > computerScore) {
            currentResult.textContent = 
            `Player wins with a score of ${humanScore} to ${computerScore}!`;
        } 
        else if (computerScore > humanScore) {
            currentResult.textContent = 
            `Computer wins with a score of ${computerScore} to ${humanScore}!`;
        }
        else {
            currentResult.textContent =
            `It's a draw with a score of ${humanScore} to ${computerScore}`
        }
        resetGameState();
    }
}

function resetGameState() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    humanScoreDisplay.textContent = `Player: 0`;
    computerScoreDisplay.textContent = `Computer: 0`;
    hu
}

    }
});
