function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    let randomChoiceIndex = Math.floor(Math.random() * 100) % 3;
    return choices[randomChoiceIndex];
}

console.log(getComputerChoice());