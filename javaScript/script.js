// fetch korbo
const mealslist = document.querySelector(".meals-area");
const recipesModal = document.querySelector(".recipesmodal-area");

async function getMeals() {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const response = await fetch(url);
  const data = await response.json();
  data.meals
    .map((foods) => {
      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipes");
      recipeDiv.innerHTML = `<img src="${foods.strMealThumb}" alt="">
      <h2>${foods.strMeal}</h2> 
      <p>${foods.strInstructions}</p>
      <button>View Details</button>`;
      const button = recipeDiv.querySelector("button");
      button.addEventListener("click", (e) => {
        const modalPoupRecipes = document.createElement("div");
        modalPoupRecipes.classList.add("recipesDetails");
        modalPoupRecipes.innerHTML = `
        <img src="${foods.strMealThumb}" alt="">
        <h2>${foods.strMeal}</h2> 
        <p>${foods.strInstructions}</p>
        <button class="closeBtn">Close</button>
      `;
        const closeBtn = modalPoupRecipes.querySelector(".closeBtn");
        closeBtn.addEventListener("click", () => {
          recipesModal.style.display = "none";
        });
        recipesModal.innerHTML = "";
        recipesModal.style.display = "block";
        recipesModal.append(modalPoupRecipes);
      });
      mealslist.append(recipeDiv);
    })
    .join("");
}
getMeals();

async function foodname() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`"
  );
  const data = await response.json();
}
foodname();

async function invalidId() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`"
  );
  const data = await response.json();
}
invalidId();
