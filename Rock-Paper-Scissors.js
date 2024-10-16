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

let userChoice = getHumanChoice();
if (userChoice == undefined) {
    userChoice = tryAgain();
}

console.log(userChoice);