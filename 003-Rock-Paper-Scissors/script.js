console.log("Welcome to Rock, Paper, Scissors!");

const rockButton = document.querySelector(".buttonRock");
const paperButton = document.querySelector(".buttonPaper");
const scissorButton = document.querySelector(".buttonScissors");

const computerChoiceText = document.querySelector(".computerChoiceText");
const outcomeText = document.querySelector(".outcome");

const options = ["rock", "paper", "scissors"];
const outcomes = ["You Win", "Computer Wins", "Tie"]

let clickChoice;
let outcome;

let playerScore = 0;
let computerScore = 0;

function decideWinner() {
    console.log("User clicked " + clickChoice);
    
    console.log("Deciding winner");
    let computerChoice = options[Math.floor(Math.random() * 3)];
    computerChoiceText.textContent = "The computer chose: " + computerChoice;

    if (computerChoice === clickChoice) {
        outcome = outcomes[2];
    } else if (computerChoice === "rock") {
        if (clickChoice === "paper") {
            outcome = outcomes[0];
        } else {
            outcome = outcomes[1];
        }
    } else if (computerChoice === "paper") {
        if (clickChoice === "scissors") {
            outcome = outcomes[0];
        } else {
            outcome = outcomes[1];
        }
    } else if (computerChoice === "scissors") {
        if (clickChoice === "rock"){
            outcome = outcomes[0];
        } else {
            outcome = outcomes[1];
        }
    }
    outcomeText.textContent = outcome;
}

function rockClick() {
    clickChoice = options[0];
    decideWinner();
}
rockButton.addEventListener("click", rockClick);

function paperClick() {
    clickChoice = options[1];
    decideWinner();
}
paperButton.addEventListener("click", paperClick);

function scissorClick() {
    clickChoice = options[2];
    decideWinner();
}
scissorButton.addEventListener("click", scissorClick);