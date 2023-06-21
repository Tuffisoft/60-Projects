const jokeArea = document.getElementById("joke");
const jokeBtn = document.getElementById("btn");
const apikey = "ZqyMAAGoIlAwZscSF4P3yg==H5QBczW9DsiAkbjD";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    };
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function tellMeAJoke () {

    try {
        jokeArea.innerText = "thinking.....";
        jokeBtn.disabled = true;
        jokeBtn.innerText = "He is thinking!"
        const response = await fetch (apiURL, options)
        const data = await response.json()

        jokeBtn.disabled = false;
        jokeBtn.innerText = "Tell me a joke!"

        jokeArea.innerText = data[0].joke
        
    } catch (error) {
        jokeArea.innerText = "No internet"
    };
};

jokeBtn.addEventListener ("click", tellMeAJoke);