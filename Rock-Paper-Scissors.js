let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 100);
    if (computerChoice <= 33) {
        computerChoice = 'Rock';
    } else if (computerChoice <= 66) {
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissors'
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice 'Rock', 'Paper' or 'Scissors'.", "Rock");
    if (humanChoice == "Rock" || humanChoice == "Paper" || humanChoice == "Scissors" || humanChoice == "scissors" || humanChoice == "rock" || humanChoice == "paper") {
        return humanChoice;
    } else {
        alert("Your choice was invalid");
    }
}

function tryAgain() {
    let tryAgainChoice = prompt("Would you like to try again? (Yes or No)", "Yes");
    if (tryAgainChoice == "Yes" || tryAgainChoice == "yes") {
        tryAgainChoice = getHumanChoice();
        return tryAgainChoice;
    }
}

function playRound() {
    let userChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (userChoice == computerChoice) {
        alert(`The computer chose ${computerChoice} and you chose ${userChoice} the result is a tie!`);
    } else if (userChoice == 'Rock' && computerChoice == 'Paper') {
        alert(`The computer chose ${computerChoice} and you chose ${userChoice} the computer won!`);
        computerScore++;
    } else if (userChoice == 'Rock' && computerChoice == 'Scissors') {
        alert(`The computer chose ${computerChoice} and you chose ${userChoice} you have won!`);
        humanScore++;
    } else if (userChoice == 'Paper' && computerChoice == 'Rock') {
        alert(`The computer chose ${computerChoice} and you chose ${userChoice} you have won!`);
        humanScore++;
    } else if (userChoice == 'Paper' && computerChoice == 'Scissors') {
        alert(`The computer chose ${computerChoice} and you chose ${userChoice} the computer won!`);
        computerScore++;
    } else if (userChoice == 'Scissors' && computerChoice == 'Paper') {
        alert(`The computer chose ${computerChoice} and you chose ${userChoice} you have won!`);
         humanScore++
    } else if (userChoice == 'Scissors' && computerChoice == 'Rock') {
        alert(`The computer chose ${computerChoice} and you chose ${userChoice} the computer won!`);
        computerScore++;
    }
}

playRound();



console.log(humanScore);
console.log(computerScore);