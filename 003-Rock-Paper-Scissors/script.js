console.log("Welcome to Rock, Paper, Scissors!");

const welcomeDiv = document.querySelector("#welcome");
const startGameButton = document.querySelector("#startGameButton");

const playerChoices = document.querySelector("#playerChoices");
const scoreBoard = document.querySelector("#scoreBoard");
const scoreTitle = document.querySelector("#scoreTitle");
const gameOverMessage = document.querySelector("#gameOver");
const finalScore = document.querySelector("#finalScore");
const resetButton = document.querySelector("#resetGameButton");

const rockButton = document.querySelector("#buttonRock");
const paperButton = document.querySelector("#buttonPaper");
const scissorButton = document.querySelector("#buttonScissors");

const computerChoiceText = document.querySelector("#computerChoiceText");
const outcomeText = document.querySelector("#outcome");

const playerScoreText = document.querySelector("#playerScoreText");
const computerScoreText = document.querySelector("#computerScoreText");

const roundResults = document.querySelector("#roundResults");
const playerImage = document.querySelector("#playerChoiceImage");
const computerImage = document.querySelector("#computerChoiceImage");

const playerDisplay = document.querySelector("#playerChoiceDisplay");
const computerDisplay = document.querySelector("#computerChoiceDisplay");


const options = ["rock", "paper", "scissors"];
const outcomes = ["You Win", "Computer Wins", "Tie"]

const maxScore = 5;

let gameOver = false;

let clickChoice;
let outcome;
let winner;

let playerScore = 0;
let computerScore = 0;

function doGameOver() {
    gameOver = true;
    scoreTitle.classList.add("hidden");
    gameOverMessage.classList.remove("hidden");
    finalScore.classList.remove("hidden");
    resetButton.classList.remove("hidden");
    playerChoices.classList.add("hidden");
    roundResults.classList.add("hidden");
}

function decideWinner() {
    console.log("User clicked " + clickChoice);

    console.log("Deciding winner");
    let computerChoice = options[Math.floor(Math.random() * 3)];

    if (computerChoice === "rock") {
        computerImage.src = "images/rock.jpg";
    } else if (computerChoice === "paper") {
        computerImage.src = "images/paper.png";
    } else if (computerChoice === "scissors") {
        computerImage.src = "images/scissors.png";
    }

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
        playerDisplay.style.borderColor = "green";
        computerDisplay.style.borderColor = "red";
    }
    else if (intOutcome === 1) { // Computer wins
        computerScore++;
        playerDisplay.style.borderColor = "red";
        computerDisplay.style.borderColor = "green";
    } else if (intOutcome === 2) {

        playerDisplay.style.borderColor = "white";
        computerDisplay.style.borderColor = "white";
    }
    roundResults.classList.remove("hidden");
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
        playerImage.src = "images/rock.jpg";
        clickChoice = options[0];
        decideWinner();
    }
}
rockButton.addEventListener("click", rockClick);

function paperClick() {
    if (!gameOver) {
        playerImage.src = "images/paper.png";
        clickChoice = options[1];
        decideWinner();
    }
}
paperButton.addEventListener("click", paperClick);

function scissorClick() {
    if (!gameOver) {
        playerImage.src = "images/scissors.png";
        clickChoice = options[2];
        decideWinner();
    }
}
scissorButton.addEventListener("click", scissorClick);

function resetButtonClick() {
    if (gameOver) {
        playerScore = 0;
        computerScore = 0;
        gameOver = false;
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        scoreTitle.classList.remove("hidden");
        gameOverMessage.classList.add("hidden");
        finalScore.classList.add("hidden");
        resetButton.classList.add("hidden");
        playerChoices.classList.remove("hidden");
    }
}
resetButton.addEventListener("click", resetButtonClick);

function startGame() {
    welcomeDiv.classList.add("hidden");
    playerChoices.classList.remove("hidden");
    scoreBoard.classList.remove("hidden");
}
startGameButton.addEventListener("click", startGame);

