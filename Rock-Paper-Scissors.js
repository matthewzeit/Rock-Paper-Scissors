function Choice() {
    let userChoice = prompt("Please enter your choice 'Rock', 'Paper' or 'Scissors'.", "Rock");
    return userChoice;
}

let userChoice = Choice();
userChoice = userChoice.toLowerCase();

console.log(userChoice)