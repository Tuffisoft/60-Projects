const buttons = document.querySelectorAll('button');

const resultEl = document.getElementById("result")

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const playerScoreEl = document.getElementById("your-score")
const computerScoreEl = document.getElementById("computer-score")
const drawEl = document.getElementById ("draw-score")


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result
    })
})

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * options.length);
    return options[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        drawScore++
        drawEl.textContent = drawScore
        return "Idiots think alike!"
    } else if (
        (playerSelection === 'rock' 
        && computerSelection === 'paper') || 
        (playerSelection === 'paper' 
        && computerSelection === 'rock') || 
        (playerSelection === 'scissors' 
        && computerSelection === 'paper')) {
            playerScore++
            playerScoreEl.textContent = playerScore
        return "You win dude! " + playerSelection + " kicks " + computerSelection + " ass."
    }   else {
        computerScore++
        computerScoreEl.textContent = computerScore
        return "You lose! " + computerSelection + " beats " + playerSelection + "."
    }
}
