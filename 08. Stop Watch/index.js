const timerEL = document.querySelector(".timer");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

function startTimer () {
    startTime = Date.now() - elaspedTime

    timerInterval = setInterval(() =>{
        elaspedTime = Date.now() - startTime
        startTime
        timerEL.textContent = formatTime(elaspedTime)
    }, 10)
}

function formatTime (elaspedTime) {
    const miliseconds = Math.floor(elaspedTime % 1000) / 10
    const seconds = Math.floor((elaspedTime % (1000 * 60)) / 1000)
    return (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." + 
    (miliseconds > 9 ? miliseconds : "0" + miliseconds)
}

function stopBtnTimer () {
    
}

function resetTimer () {
    
}
  
let startTime = 0
let elaspedTime = 0
let timerInterval; 

startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click", stopTimer)
resetBtn.addEventListener("click", resetTimer)
