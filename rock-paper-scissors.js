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
            choice = 'Rock';
            break;
        case 1:
            choice = 'Paper';
            break;
        case 2:
            choice = 'Scissors';
            break
        default:
            console.warn('Computer Choice not in expected scope');
            choice = 'Rock';
    }
    return choice;
}

console.log(getComputerChoice());

