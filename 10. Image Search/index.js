const apikey = "TzxzOhpua5-d6oZe2NgIh5gAqb1CL7Ufqr6UNIyZAOM";

const searchInputEl = document.getElementById("search-input");
const formEl = document.querySelector("form");
const searchResultsEl = document.querySelector(".search-results");
const showMoreEl = document.getElementById("show-more")

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apikey}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    if (page === 1){
        searchResultsEl.innerHTML = "";
    }
    const results = data.results

    results.map((result) => {
        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("search-result")
        const image = document.createElement("img")
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement("a")
        imageLink.href = result.links.innerHTML
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResultsEl.appendChild(imageWrapper);
    });

    page++

    if (page > 1) {
        showMoreEl.style.display = "block";
    }
}

    formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages()
});

showMoreEl.addEventListener("click", () => {
    searchImages();
})