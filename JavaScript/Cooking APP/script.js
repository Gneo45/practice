// lien API https://www.themealdb.com/api/json/v1/1/search.php?s=tomato

const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");
let meals = [];

//faire un fetch de l'api // await qu'il soit terminer // passer les elemennt dans meals
async function fetchMeals(search) {

    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => (meals = data.meals));

    console.log(meals);
}

//AFFICHER LE RESULTAT DANS LA PAGE
function mealsDisplay() {
    if (meals === null) {
        result.innerHTML = "<h2>Aucun résultats</h2>"
    } else {
        meals.length = 12;

        result.innerHTML = meals
            .map(
                (meal) => {
                    let ingredients = [];


                    //tester la liste des ingredients
                    for (i = 1; i < 21; i++) {
                        if (meal[`strIngredient${i}`]) {
                            let ingredient = meal[`strIngredient${i}`];
                            let measure = meal[`strMeasure${i}`];

                            ingredients.push(`<li>${ingredient} -${measure}</li>`);
                        }
                    }

                    console.log(ingredients);

                    return `
                <li class="card">
                    <h2>${meal.strMeal}</h2>
                    <p>${meal.strArea}</p>
                    <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">
                <ul>${ingredients.join('')}</ul>
                </li>
                `
                }
            ).join("");
    }
}

//EVENT LISTENER
input.addEventListener('input', (e) => {
    fetchMeals(e.target.value);
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    mealsDisplay();
});