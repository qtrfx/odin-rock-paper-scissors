// Set up scores
// GET a random result for opponent
// Prompt user for input
// Determine winner
// Add score to winner
// Check if winner has been found
// Repeat

function getComputerChoice() {
    const randomRoll = Math.floor(Math.random() * 3);

    if (randomRoll === 0) return "rock";
    else if (randomRoll === 1) return "paper";
    else if (randomRoll === 2) return "scissors";
}

