const buttons = document.querySelectorAll('button');




buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    })
})

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * options.length);
    return options[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return; "You schlingel"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return; "You lose! Paper beats Rock"
    }   else if (playerSelection === 'rock' && computerSelection === 'scissors') {


