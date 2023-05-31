const API_KEY = "593f531d2ec24a5c969870c1d76b3764"

async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const data = await response.json()
    return data.recipes
}

async function init () {
    const recipes = await getRecipes()
    console.log(recipes)
}

init()