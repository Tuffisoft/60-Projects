const btnEl = document.getElementById("btn");
const animeContainer = document.querySelector(".anime-container")
const imgArea = document.getElementById("anime-img");
const infoName = document.getElementById("info-name");
const infoLink = document.getElementById("info-link");

async function getImage () {
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        infoName.innerText = "Updating...";
        imgArea.src = "./images/loader.svg";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeContainer.style.display = "flex";
        imgArea.src = data.url;
        const name = data.artist;
        const link = data.artist_url;
        infoName.innerText = `Artist: ${name}`;
        if (link) {
            infoLink.innerHTML = `Link: <a href=${link} target="_blank" rel="noopener noreferrer">${name}</a>`;
        } else  {
            infoLink.style.display = "none";
        } 
    } catch (error) {
        infoName.innerText = "Flip! Something went wrong!"
    }
    
    
};


btnEl.addEventListener("click", getImage);