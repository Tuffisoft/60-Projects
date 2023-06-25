const celInput = document.getElementById("cel-input");
const fahrInput = document.getElementById("fahr-input");
const kelInput = document.getElementById("kel-input");

function computeTemp(event) {
    const currentValue = +event.target.value

    switch (event.target.name) {
        case "celsius":
            kelInput.value = (currentValue + 273.32).toFixed(2)
            fahrInput.value = (currentValue * 1.8 + 32).toFixed(2)
            break;
        case "fahrenheit":
            celInput.value = ((currentValue - 32) / 1.8).toFixed(2)
            kelInput.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2)
            break;
        case "kelvin":
            celInput.value = (currentValue - 273.32).toFixed(2)
            fahrInput.value = ((currentValue -273.32) * 1.8 + 32).toFixed(2)
            break;   
        default:
            break;
    }
}