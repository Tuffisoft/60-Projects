const diceEl = document.getElementById("dice");
const btnEl = document. getElementById("roll-button");
const historyEl = document.getElementById("roll-history");

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace();
}

function getDiceFace() {
    switch(rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
    }
}

btnEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(()=> {
        diceEl.classList.remove("roll-animation");
        rollDice();
    }, 1000);
})