const playerScoreBoard = document.querySelector(".player-score");
const computerScoreBoard = document.querySelector(".computer-score");
const resultDisplay = document.querySelector(".result-display");

const selectionButtons = document.querySelectorAll(".player-selection");
selectionButtons.forEach(button => button.addEventListener('click', e => {
    playRound(e.target.textContent, getComputerChoice());
}));

let playerScore = 0;
let computerScore = 0;

let isGameFinished = false;

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

function getRoundResult(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

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

    return result;
}

function updateScore(roundResult) {
    roundResult = toTitleCase(roundResult);

    if (roundResult === "Won") {
        playerScore++;
    } else if (roundResult === "Lost") {
        computerScore++;
    }

    playerScoreBoard.textContent = `Player: ${playerScore}`;
    computerScoreBoard.textContent = `Computer: ${computerScore}`;
}

function getResultDisplayText(playerSelection, computerSelection, roundResult) {
    if (playerScore === 5) {
        return `You have won the game with the score ${playerScore} to ${computerScore}!`;
    } else if (computerScore === 5) {
        return `You have lost the game with the score ${playerScore} to ${computerScore}!`
    }

    roundResult = toTitleCase(roundResult);
    let resultVerbForm = playerSelection === "SCISSORS" ? "beat" : "beats";

    let roundResultDisplayText;
    let fullResultText;
    switch (roundResult) {
        case "Won":
            roundResultDisplayText = "Round won!";
            fullResultText = `${roundResultDisplayText} ${toTitleCase(playerSelection)} ${resultVerbForm} ${toTitleCase(computerSelection)}`;
            break;
        case "Draw":
            roundResultDisplayText = "Round drawn!"
            fullResultText = `${roundResultDisplayText} Both opponents have chosen ${toTitleCase(playerSelection)}`;
            break;
        case "Lost":
            roundResultDisplayText = "Round lost!"
            fullResultText = `${roundResultDisplayText} ${toTitleCase(computerSelection)} ${resultVerbForm} ${toTitleCase(playerSelection)}`;
            break;
    }

    return fullResultText;
}

function setResultDisplay(playerSelection, computerSelection, roundResult) {
    resultDisplay.textContent = getResultDisplayText(playerSelection, computerSelection, roundResult);
    resultDisplay.style.visibility = "visible";
}

function playRound(playerSelection, computerSelection) {
    if (computerScore === 5 || playerScore === 5) {
        computerScore = 0;
        playerScore = 0;
    }

    let result = getRoundResult(playerSelection, computerSelection);

    updateScore(result);
    setResultDisplay(playerSelection, computerSelection, result);
}