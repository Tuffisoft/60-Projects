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
    const data = await response.json;
    console.log(data)
}


formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    searchImages()
});