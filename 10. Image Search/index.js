const apikey = "TzxzOhpua5-d6oZe2NgIh5gAqb1CL7Ufqr6UNIyZAOM";

const searchFieldEl = document.getElementById("search-field");
const formEl = document.querySelector("form");
const searchResultsEl = document.getElementById("search-results");
const showMoreEl = document.getElementById("show-more")

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = searchFieldEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apikey}`
    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchResultsEl.innerHTML = "";
    }

    const results = data.results

    const imageWrapper = document.createElement("div")
    imageWrapper.classList.add("search-result")
    const image = document.createElement("img")
    image.src = result.urls.small
    image.alt = result.alt_description
    const imageLink = document.createElement("a")
    imageLink.href = result.links.innerHTML
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description

    if (page > 1) {
        showMoreEl.style.display = block;
    }
}


formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages()
});