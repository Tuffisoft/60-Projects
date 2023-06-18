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

    startBtn.disabled = true
    stopBtn.disabled = false
}

function formatTime (elaspedTime) {
    const miliseconds = Math.floor(elaspedTime % 1000) / 10
    const seconds = Math.floor((elaspedTime % (1000 * 60)) / 1000)
    const minutes = Math.floor((elaspedTime % (1000 * 60 * 60)) / (1000 * 60))
    const hours = Math.floor(elaspedTime / (1000 * 60 * 60))
    return (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." + 
    (miliseconds > 9 ? miliseconds : "0" + miliseconds)
}

function stopTimer () {
    clearInterval(timerInterval)
    startBtn.disabled = false
    stopBtn.disabled = true
}

function resetTimer () {
    clearInterval(timerInterval)

    elaspedTime = 0
    timerEL.textContent = "00:00:00.00"
    startBtn.disabled = false
    stopBtn.disabled = true
}
  
let startTime = 0
let elaspedTime = 0
let timerInterval; 

startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click", stopTimer)
resetBtn.addEventListener("click", resetTimer)
