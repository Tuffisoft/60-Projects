

const apikey = "";
const btnEl = document.getElementById("btn");
const apiURL = "https://futdb.app/api/players"
const options = {
    method: "GET",
    headers: {
        "X-AUTH-TOKEN": apikey,
    }
};

async function button () {
    console.log("click")
    const response = await fetch(apiURL, options);
    console.log(response)
    const data = await response.json();
    console.log(data);
}



btnEl.addEventListener("click", button)
