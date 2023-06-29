const apikey = "235e04b55e84f17cdf1977a8b536994e46e6affa";

const btnEl = document.getElementById("btn");
const nameEl = document.getElementById("name");

const emoji = [];

async function getEmoji () {
    const response = await fetch (`https://emoji-api.com/emojis?access_key=${apikey}`);
    const data = await response.json();
    for (let i=0; i<1500; i++) {
        emoji.push({
            emojiImg: data[i].character,
            emojiName: data[i].unicodeName
        })
    }
}

getEmoji();

btnEl.addEventListener("click", ()=>{
    const randomNum = Math.floor(Math.random())
    btnEl.
    nameEl.innerText =
});
