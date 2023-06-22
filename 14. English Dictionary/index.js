const inputEl = document.getElementById("input");
const infoEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio")

async function fetchAPI (word) {

    try {
        infoEl.style.display = "block";
        meaningContainerEl.style.display = "none";
        infoEl.innerText = `Searching the meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        console.log(url)
        const result = await fetch(url).then((res) => res.json());
        if(result.title) {
            titleEl.innerText = word;
        meaningEl.innerText = "N/A"
        audioEl.src.display = "none";
        } else {
        infoEl.style.display = "none";
        meaningContainerEl.style.display = "block";
        audioEl.style.display = "inline-flex";
        titleEl.innerText = result[0].word;
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
        audioEl.src = result[0].phonetics[0].audio
        
        }
    } catch (error) {
        infoEl.innerText = "Something went poo!"
    }
    
}

inputEl.addEventListener("keyup", (e) =>{
    if (e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value)
    }
});