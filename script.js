let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const number = Math.random();
    if (number < 0.33) {
        return "Rock"
    } else if (number > .33 && number < .66) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    const choice = prompt("Rock, Paper or Scissor?")
    return choice;

}

function playRound(humanChoice, computerChoice){
    //get comp score, ask human for input, compare inputs but make it make less complex, list winner, give point to winner

if (humanChoice === computerChoice) {
    console.log(`Its A Tie`)
    console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`)
} else if (humanChoice === "Rock" && computerChoice !== "Paper" || humanChoice === "Paper" && computerChoice !== "Scissors" || humanChoice === "Scissors" && computerChoice !== "Rock") {
    console.log(`You Win! ${humanChoice} Beats ${computerChoice}!`)
    humanScore++
    console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`)
} else {
    console.log(`You Lose! ${humanChoice} Loses to ${computerChoice}`) 
        computerScore++
    console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`)
}
}

function playGame() {
    while (humanScore < 3 && computerScore < 3) {
    playRound(getHumanChoice(), getComputerChoice());
}
if (humanScore > computerScore) {
    console.log("Congratulations! YOU WIN THE GAME!")
} else { 

    console.log("Sorry, You lose the game.")
}

}
playGame();


