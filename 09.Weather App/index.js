const apikey = "994c91cb9942a06284707076f64e4ec6";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");




formEl.addEventListener("submit", (event)=> {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${apikey}&units=metric`)
        if(!response.ok) {
            throw new Error("Network response failed!")
        }

        const data = await response.json();

        console.log(data)

        const temperature = Math.round(data.list[0].main.temp);

        const description = data.list[0].weather[0].description;

        const icon = data.list[0].weather[0].icon;

        const details = [
            `Feels like: ${Math.floor(data.list[0].main.feels_like)}°C`,
            `Humidity: ${data.list[0].main.humidity}%`,
            `Wind speed: ${data.list[0].wind.speed}m/s`,
        ];

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
        weatherDataEl.querySelector(".description").textContent = `${description}`;
        weatherDataEl.querySelector(".details").innerHTML = details.map((detail)=>
        `<div>${detail}</div>`).join("");

    } catch (error) {
        weatherDataEl.querySelector(".icon").innerHTML = "";
        weatherDataEl.querySelector(".temperature").textContent = "";
        weatherDataEl.querySelector(".description").textContent = "Flip! Something went oopsie!";
        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}