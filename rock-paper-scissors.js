/* Computer Choice 
Generate a random number between 1 and 3
check the number 
if number is 0 then choose rock
if number is 1 then choose paper
if number is 2 then choose scissors
return respective action
*/
function getComputerChoice() {
    let randNum = Math.floor(Math.random()*3);
    let choice;
    switch (randNum) {
        case 0:
            choice = 'ROCK';
            break;
        case 1:
            choice = 'PAPER';
            break;
        case 2:
            choice = 'SCISSORS';
            break
        default:
            console.warn('Computer Choice not in expected scope');
            choice = 'ROCK';
    }
    return choice;
}

/* Human Choice
ask user what they would like to pick between rock paper and scissors
choice is recorded
check if the choice is a valid response
if so then the choice is returned
if not then ask again
*/

function getHumanChoice() {
    let choice;
    let valid;
    while (!valid) {
        try {
            choice = prompt('What would you like to play? ( ROCK | PAPER | SCISSORS ): ').toUpperCase();
            switch (choice) {
                case 'ROCK':
                case 'PAPER':
                case 'SCISSORS':
                    valid = true;
                    break
                default:
                    throw new Error('Option not an available choice!');
            }
        } catch (e) {
            console.warn(e);
        }
    }
    return choice;
}

/* Play one round
takes in the human and computer choice as parameters
compare the human and computer choice
display a winner message if human beats computer
otherwise display a loser message
*/

function playRound(humanChoice,computerChoice) {
    let winner;
    if (humanChoice === 'ROCK' && computerChoice === 'PAPER') {
        console.log('You lose! PAPER beats ROCK');
        winner = 'Computer'
    } else if (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        console.log('You lose! PAPER beats ROCK');
        winner = 'Computer'
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'ROCK') {
        console.log('You lose! SCISSORS beats PAPER');
        winner = 'Computer'
    } else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        console.log('You win! ROCK beats Sciccors');
        winner = 'Human'
    } else if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
        console.log('You win! PAPER beats ROCK');
        winner = 'Human'
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        console.log('You win! SCISSORS beats PAPER');
        winner = 'Human'
    } else {
        console.log(`You drew! both of you picked ${humanChoice}`);
    }
    return winner
}

/* Play game
Plays 5 rounds of rock paper scissors
each round gets a new choice from human and computer
plays round and allocates point to the winner
after five rounds, player with higher score wins */

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundWinner;

    for (let round = 1; round < 6; round++) {
        console.log(`Round ${round}`);
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();    
        roundWinner = playRound(humanSelection,computerSelection);
        switch (roundWinner) {
            case 'Human':
                humanScore++
                break
            case 'Computer':
                computerScore++
                break
        }
    }
    if (humanScore === computerScore) {
        console.log(`It's a Draw! both players are tied with ${humanScore} points each`);
    } else if (humanScore>computerScore) {
        console.log(`Human wins! ${humanScore} wins out of 5`);
    } else {
        console.log(`Computer wins! ${computerScore} wins out of 5`);
    }
}

playGame();