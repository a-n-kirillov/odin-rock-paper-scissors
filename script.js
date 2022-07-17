function getComputerChoice() {
    choices = ["ROCK", "PAPER", "SCISSORS"];
    let randomChoiceIndex = Math.floor(Math.random() * 100) % 3;
    return choices[randomChoiceIndex];
}

function toTitleCase(string) {
    string = string.toLowerCase();
    string = string[0].toUpperCase() + string.slice(1);
    return string;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    let result;
    let winnerDeclaration;

    if (playerSelection === "ROCK") {
        switch(computerSelection) {
            case "ROCK":
                result = "Draw";
                break;
            case "PAPER":
                result = "Lost";
                break;
            case "SCISSORS":
                result = "Won";
                break;
        }
    }

    if (playerSelection === "PAPER") {
        switch(computerSelection) {
            case "ROCK":
                result = "Won";
                break;
            case "PAPER":
                result = "Draw";
                break;
            case "SCISSORS":
                result = "Lost";
                break;
        }
    }

    if (playerSelection === "SCISSORS") {
        switch(computerSelection) {
            case "ROCK":
                result = "Lost";
                break;
            case "PAPER":
                result = "Won";
                break;
            case "SCISSORS":
                result = "Draw";
                break;
        }
    }

    switch(result) {
        case "Won":
            winnerDeclaration = `You ${result}! ${toTitleCase(playerSelection)} beats ${toTitleCase(computerSelection)}`;
            break;
        case "Lost":
            winnerDeclaration = `You ${result}! ${toTitleCase(computerSelection)} beats ${toTitleCase(playerSelection)}`
            break;
        case "Draw":
            winnerDeclaration = `It's a draw! Both opponents have chosen ${toTitleCase(playerSelection)}`;
            break;
    }

    return winnerDeclaration;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));