function playGame() {
    
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
        return humanChoice;
    }

    function playRound() {
        let userChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice().toLowerCase();
        if (userChoice == computerChoice) {
            alert(`The computer chose ${computerChoice} and you chose ${userChoice} the result is a tie!`);
        } else if (userChoice == 'rock' && computerChoice == 'paper') {
            alert(`The computer chose ${computerChoice} and you chose ${userChoice} the computer won!`);
            computerScore++;
        } else if (userChoice == 'rock' && computerChoice == 'scissors') {
            alert(`The computer chose ${computerChoice} and you chose ${userChoice} you have won!`);
            humanScore++;
        } else if (userChoice == 'paper' && computerChoice == 'rock') {
            alert(`The computer chose ${computerChoice} and you chose ${userChoice} you have won!`);
            humanScore++;
        } else if (userChoice == 'paper' && computerChoice == 'scissors') {
            alert(`The computer chose ${computerChoice} and you chose ${userChoice} the computer won!`);
            computerScore++;
        } else if (userChoice == 'scissors' && computerChoice == 'paper') {
            alert(`The computer chose ${computerChoice} and you chose ${userChoice} you have won!`);
             humanScore++
        } else if (userChoice == 'scissors' && computerChoice == 'rock') {
            alert(`The computer chose ${computerChoice} and you chose ${userChoice} the computer won!`);
            computerScore++;
        }
    }

    for (let i = 5; (i > humanScore) && (i > computerScore); i * 1) {
        playRound();
    }
}

playGame();