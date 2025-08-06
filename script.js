let humanScore = 0;
let computerScore = 0;

//Define DOM Elements
const human_score_dom = document.querySelector('#human_score')
const computer_score_dom = document.querySelector('#computer_score')
const notificationUpdates = document.querySelector('#notifications')
const choiceInput = document.querySelector('#choice')
const playButton = document.querySelector('button')


const isGameOver = () => {
    if ((computerScore + humanScore) < 5) {
        return false
    } else {
        return true
    }
}

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


playButton.addEventListener("click", playGame)

function getHumanChoice() {
    const choice = choiceInput.value
    choiceInput.value = "";
    return choice;

}

function updateDomScores() {
    human_score_dom.textContent = humanScore
    computer_score_dom.textContent = computerScore
}

function playRound(humanChoice, computerChoice){
    //get comp score, ask human for input, compare inputs but make it make less complex, list winner, give point to winner

if (humanChoice === computerChoice) {
    notificationUpdates.textContent = `Its A Tie`;
    computerScore++
    humanScore++
 
    
} else if (humanChoice === "Rock" && computerChoice !== "Paper" || humanChoice === "Paper" && computerChoice !== "Scissors" || humanChoice === "Scissors" && computerChoice !== "Rock") {
     notificationUpdates.textContent = `You Win This Round! "${humanChoice}" Beats ${computerChoice}!`;
    humanScore++

} else {
     notificationUpdates.textContent = `You Lose This Round. "${humanChoice}" Loses to ${computerChoice}`;
    computerScore++
}
}


function playGame() {
    if (!isGameOver()){
             playRound(getHumanChoice(), getComputerChoice());
    }

    if (isGameOver()) {
        if (humanScore > computerScore) {
             notificationUpdates.textContent = 'Congratulations! YOU WIN THE GAME!';
            } else { 
            notificationUpdates.textContent = "Sorry, You lose the game.";
}
    }
    updateDomScores()

}


updateDomScores()

// click button 

    //play game { check player scores}
    // get and store computer score
    // get player score 
            // if player score is higher give 1 point to player
            // update gui and norifications, clear player choice input
            