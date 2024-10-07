// Set up scores
// GET a random result for opponent
// Prompt user for input
// Determine winner
// Add score to winner
// Check if winner has been found
// Repeat

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    while (roundsPlayed < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        roundsPlayed++;
    }
    console.log(
        humanScore > computerScore ? "The player wins!" : "The computer wins!"
    );


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