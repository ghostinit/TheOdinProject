console.log("Welcome to Rock, Paper, Scissors!");

const welcomeDiv = document.querySelector("#welcome");
const startGameButton = document.querySelector("#startGameButton");

const playerChoices = document.querySelector("#playerChoices");
const scoreBoard = document.querySelector("#scoreBoard");

const rockButton = document.querySelector("#buttonRock");
const paperButton = document.querySelector("#buttonPaper");
const scissorButton = document.querySelector("#buttonScissors");

const computerChoiceText = document.querySelector("#computerChoiceText");
const outcomeText = document.querySelector("#outcome");

const playerScoreText = document.querySelector("#playerScoreText");
const computerScoreText = document.querySelector("#computerScoreText");


const options = ["rock", "paper", "scissors"];
const outcomes = ["You Win", "Computer Wins", "Tie"]

const maxScore = 10;

let gameOver = false;

let clickChoice;
let outcome;
let winner;

let playerScore = 0;
let computerScore = 0;

function decideWinner() {
    console.log("User clicked " + clickChoice);

    console.log("Deciding winner");
    let computerChoice = options[Math.floor(Math.random() * 3)];
    computerChoiceText.textContent = "The computer chose: " + computerChoice;
    let intOutcome

    if (computerChoice === clickChoice) {
        intOutcome = 2;
    } else if (computerChoice === "rock") {
        if (clickChoice === "paper") {
            intOutcome = 0; // Player Wins
        } else {
            intOutcome = 1; // Computer Wins
        }
    } else if (computerChoice === "paper") {
        if (clickChoice === "scissors") {
            intOutcome = 0; // Player Wins
        } else {
            intOutcome = 1; // Computer WinsresetButton
        }
    } else if (computerChoice === "scissors") {
        if (clickChoice === "rock") {
            intOutcome = 0; // Player Wins
        } else {
            intOutcome = 1; // Computer Wins
        }
    }

    if (intOutcome === 0) { //Player wins
        playerScore++;
    }
    else if (intOutcome === 1) { // Computer wins
        computerScore++;
    }
    outcome = outcomes[intOutcome];
    outcomeText.textContent = outcome;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;

    if (playerScore === maxScore) {
        winner = "You Won!";
        doGameOver();
    } else if (computerScore === maxScore) {
        winner = "Computer Won!"
        doGameOver();
    }
}

function rockClick() {
    if (!gameOver) {
        clickChoice = options[0];
        decideWinner();
    }
}
rockButton.addEventListener("click", rockClick);

function paperClick() {
    if (!gameOver) {
        clickChoice = options[1];
        decideWinner();
    }
}
paperButton.addEventListener("click", paperClick);

function scissorClick() {
    if (!gameOver) {
        clickChoice = options[2];
        decideWinner();
    }
}
scissorButton.addEventListener("click", scissorClick);

// function resetButtonClick() {
//     if (gameOver) {
//         playerScore = 0;
//         computerScore = 0;
//         gameOver = false;
//         playerScoreText.textContent = playerScore;
//         computerScoreText.textContent = computerScore;
//         finalOutcomeDiv.style.display = "none";
//     }
// }
// resetButton.addEventListener("click", resetButtonClick);

function startGame() {
    welcomeDiv.classList.add("hidden");
    playerChoices.classList.remove("hidden");
    scoreBoard.classList.remove("hidden");
}
startGameButton.addEventListener("click", startGame);

