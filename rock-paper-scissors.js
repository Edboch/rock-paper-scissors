let roundTitle = document.querySelector('#round');
let hScoreDisplay = document.querySelector('#human-score');
let cScoreDisplay = document.querySelector('#computer-score');
let roundResult = document.querySelector('#result');
const choiceButtons = document.querySelector('#choices');
const resetButton = document.querySelector('#reset');

let currentRound = 1;
let humanScore = 0;
let computerScore = 0;

choiceButtons.addEventListener('click', (e) => {
    let target = e.target;
    if (humanScore >= 5 || computerScore >= 5) {
        return
    } else {
        playGame(target.id);
    }
})

resetButton.addEventListener('click',() => {
    currentRound = 1;
    humanScore = 0;
    computerScore = 0;
    hScoreDisplay.textContent = `Human Score: ${humanScore}`;
    cScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    roundTitle.textContent = `Round ${currentRound}!`;
})

function getComputerChoice() {
    let randNum = Math.floor(Math.random()*3);
    let choice;
    switch (randNum) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break
        default:
            console.warn('Computer Choice not in expected scope');
            choice = 'rock';
    }
    return choice;
}

function playRound(humanChoice,computerChoice) {
    let winner;
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        roundResult.textContent = 'You lose! paper beats rock';
        winner = 'Computer'
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        roundResult.textContent ='You lose! paper beats rock';
        winner = 'Computer'
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        roundResult.textContent ='You lose! scissors beats paper';
        winner = 'Computer'
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        roundResult.textContent ='You win! rock beats Sciccors';
        winner = 'Human'
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        roundResult.textContent ='You win! paper beats rock';
        winner = 'Human'
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        roundResult.textContent ='You win! scissors beats paper';
        winner = 'Human'
    } else {
        result.textContent =`You drew! both of you picked ${humanChoice}`;
    }
    return winner
}

function displayWinner(humanScore,computerScore) {
    if (humanScore>=5) {
        roundTitle.textContent = 'WINNER!';
        alert(`Human wins! ${humanScore} to ${computerScore}`);
    } else if (computerScore>=5) {
        roundTitle.textContent = 'LOSER!';
        alert(`Computer wins! ${computerScore} to ${humanScore}`);
    } else {
        return;
    }
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    let roundWinner = playRound(playerSelection,computerSelection);
    switch (roundWinner) {
        case 'Human':
            humanScore++;
            hScoreDisplay.textContent = `Human Score: ${humanScore}`;
            break
        case 'Computer':
            computerScore++;
            cScoreDisplay.textContent = `Computer Score: ${computerScore}`;
            break
    }
    currentRound++
    roundTitle.textContent = `Round ${currentRound}!`;
    displayWinner(humanScore,computerScore);
}