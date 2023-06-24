const btnEl = document.getElementById("btn");
const quoteArea = document.getElementById("quote-area");
const authorArea = document.getElementById("author-area");
const apikey = "ZqyMAAGoIlAwZscSF4P3yg==H5QBczW9DsiAkbjD";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    }
};

const apiURL = "https://api.api-ninjas.com/v1/quotes?limit=1";

async function getQuote() {
    const response = await fetch (apiURL, options);
    const data = await response.json();
    quoteArea.innerText = data[0].quote;
    authorArea.innerText = data[0].author;
}

btnEl.addEventListener("click", getQuote);