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

function getHumanChoice() {
    let invalidChoice = false;
    while (true) {
        let userPrompt = invalidChoice
            ? "Please pick a valid entry:\n1. Rock\n2. Paper\n3. Scissors"
            : "Pick one:\n1. Rock\n2. Paper\n3. Scissors";

        let userInput = prompt(userPrompt);
        invalidChoice = false;
        switch (userInput.toLowerCase()) {
            case "1":
            case "rock":
                return "rock";
            case "2":
            case "paper":
                return "paper";
            case "3":
            case "scissors":
                return "scissors";
            default:
                invalidChoice = true;
        }
    }
}
