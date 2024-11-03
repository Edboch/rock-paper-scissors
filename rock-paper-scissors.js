/* game
round start
ask player for their choice
get computer choice
compare results
display winner
round end
start next round
*/

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
    if (humanChoice === 'ROCK' && computerChoice === 'PAPER') {
        console.log('You lose! PAPER beats ROCK');
        compupterScore++;
    } else if (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        console.log('You lose! PAPER beats ROCK');
        computerScore++;
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'ROCK') {
        console.log('You lose! SCISSORS beats PAPER');
        computerScore++;
    } else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        console.log('You win! ROCK beats Sciccors');
        humanScore++;
    } else if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
        console.log('You win! PAPER beats ROCK');
        humanScore++;
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        console.log('You win! SCISSORS beats PAPER');
        humanScore++;
    } else {
        console.log(`You drew! both of you picked ${humanChoice}`);
    }
}

let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(),getComputerChoice());
console.log(humanScore);
console.log(computerScore);