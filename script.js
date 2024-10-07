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

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                console.log("It's a draw!");
            } else if (computerChoice === "paper") {
                console.log(`You lose! Paper beats Rock!`);
                computerScore++;
            } else {
                console.log("You win! Rock beats Scissors!");
                humanScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock!");
                humanScore++;
            } else if (computerChoice === "paper") {
                console.log("It's a draw!");
            } else if (computerChoice === "scissors") {
                console.log("You lose! Scissors beat Paper!");
                computerScore++;
            }
        } else {
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors!");
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log("You win! Scissors beat Paper!");
                humanScore++;
            } else if (computerChoice === "scissors") {
                console.log("It's a draw!");
            }
        }
    }
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
}