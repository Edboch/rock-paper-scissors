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
            choice = 'Rock';
    }
    return choice;
}

console.log(getComputerChoice());

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
            choice = prompt('What would you like to play? ( Rock | Paper | Scissors ): ').toUpperCase();
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

console.log(getHumanChoice());

/* Play one round
takes in the human and computer choice as parameters
*/

let humanScore = 0;
let computerScore = 0;
