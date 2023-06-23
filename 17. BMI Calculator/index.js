const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const conditionEl = document.getElementById("condition");
const bmiEl = document.getElementById("bmi-input") 
const btnEl = document.getElementById("btn");

function calcBMI () {
    const heightValue = heightInput.value / 100;
    const weightValue = weightInput.value;

    const bmiValue = Math.floor(weightValue / (heightValue * heightValue));
    
    bmiEl.value = bmiValue

    if (bmiValue < 18.5) {
        conditionEl.innerText = "You be too skinny! Eat more!"
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9){
        conditionEl.innerText = "Stay as you are, that's good!"
    } else if (bmiValue >= 25 && bmiValue <= 29,9) {
        conditionEl.innerText = "You are overweight!"
    }   else if (bmiValue > 30) {
            conditionEl.innerText = "Fatty boom boom!"
        }
    }

btnEl.addEventListener("click", calcBMI)