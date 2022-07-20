const display = document.querySelector()

function getComputerChoice() {
    choices = ["ROCK", "PAPER", "SCISSORS"];
    let randomChoiceIndex = Math.floor(Math.random() * 100) % 3;
    return choices[randomChoiceIndex];
}

function getPlayerChoice() {
    return prompt("Pick 'Rock', 'Paper' or 'Scissors'");
}

function toTitleCase(string) {
    string = string.toLowerCase();
    string = string[0].toUpperCase() + string.slice(1);
    return string;
}

function validatePlayerChoice(playerChoice) {
    playerChoice = playerChoice.toUpperCase();

    if (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS") {
        console.log("Invalid choice, please try again");
        return false;
    }

    return true;
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

    console.log(winnerDeclaration);
    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerChoice;
    let computerChoice;
    let currentRoundResult;


    for (let i = 0; i < 5; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        currentRoundResult = playRound(playerChoice, computerChoice);

        switch(currentRoundResult) {
            case "Won":
                playerScore++;
                break;
            case "Draw":
                playerScore++;
                computerScore++;
                break;
            case "Lost":
                computerScore++;
                break;
        }
    }

    let scoreDifference = playerScore - computerScore;
    let gameResult;

    switch(true) {
        case scoreDifference > 0:
            gameResult = "You have won!";
            break;
        case scoreDifference === 0:
            gameResult = "It's a draw!";
            break;
        case scoreDifference < 0:
            gameResult = "You have lost!";
            break;
    }

    return gameResult;
}

console.log(game());