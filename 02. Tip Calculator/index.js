const billEl = document.getElementById("amount");
const tipEl = document.getElementById("tip");
const calcEl = document.getElementById("calculate");
const totalEl = document.getElementById("total");

function calculation () {
    const amount = billEl.value
    const tip = tipEl.value
    const total = amount * (1 + tip / 100)
    totalEl.innerText = `Total: ${total}`
}

calcEl.addEventListener("click", calculation);

