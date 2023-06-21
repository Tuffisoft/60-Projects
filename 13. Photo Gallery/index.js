const inputEl = document.getElementById("input");
const btnEl = document.getElementById("btn");
const errorMsg = document.getElementById("error");
const galleryEl = document.getElementById("gallery");
const apikey = "TzxzOhpua5-d6oZe2NgIh5gAqb1CL7Ufqr6UNIyZAOM";



async function getImages () {
    
        const inputValue = inputEl.value

        if (inputValue > 10 || inputValue < 1) {
            errorMsg.style.display = "block";
            return
        }

        let imgs = "";

    try {
        await fetch (`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.floor(Math.random() * 1000)}&client_id=${apikey}`)
        .then((res) => res.json()
        .then((data) => {
            if(data) {
                data.forEach((pic) => {
                    imgs += `<img src=${pic.urls.small} alt="image/>`;
                    galleryEl.innerHTML = imgs;
                });
            }
        }))

        errorMsg.style.display = "none";

    } catch (error) {
        errorMsg.style.display = "block";
        errorMsg.innerText = "Wrong!"
    }
}

btnEl.addEventListener("click", getImages)