const timerEL = document.getElementById("timer");
const startEl = document.getElementById("start");
const pauseEl = document.getElementById("pause");
const resetEl = document.getElementById("reset");
const audioEl = document.getElementById("feel")


let interval;
let timeLeft = 10;

function updateTimer () {
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

    timerEL.innerHTML = formattedTime
}

function startTimer () {
    interval = setInterval(()=> {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval)
            audioEl.play()
            timeLeft = 1500
            updateTimer()
        }
    }, 1000)
}

function pauseTimer () {
    clearInterval(interval);
}

function resetTimer () {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}


startEl.addEventListener("click", startTimer)
pauseEl.addEventListener("click", pauseTimer)
resetEl.addEventListener("click", resetTimer)