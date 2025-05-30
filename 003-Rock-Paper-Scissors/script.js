console.log("Welcome to Rock, Paper, Scissors!");

const rockButton = document.querySelector(".buttonRock");
const paperButton = document.querySelector(".buttonPaper");
const scissorButton = document.querySelector(".buttonScissors");

const options = ["rock", "paper", "scissors"];

let clickChoice;

function decideWinner() {
    console.log("User clicked " + clickChoice);
    
    console.log("Deciding winner");
    let computerChoice = options[Math.floor(Math.random() * 3)];
}

function rockClick() {
    clickChoice = options[0];
    decideWinner();
}
rockButton.addEventListener("click", rockClick);

function paperClick() {
    clickChoice = options[1];
    decideWinner()
}
paperButton.addEventListener("click", paperClick);

function scissorClick() {
    clickChoice = options[2];
    decideWinner();
}
scissorButton.addEventListener("click", scissorButton);