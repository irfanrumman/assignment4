// fetching variables
const mealslist = document.querySelector(".meals-area");
const spinner = document.getElementById("spinner");
const recipesModal = document.querySelector(".recipesmodal-area");

// search box variables
const inputBox = document.querySelector(".form-control");
const searchBtn = document.querySelector(".searchbtn");

// backToTopArrow variable
const backToTopArrow = document.querySelector(".backtotopbtn-area");

// fetching funtion
async function getMeals(inputValue = "") {
  spinner.style.display = "block";
  mealslist.innerHTML = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  const response = await fetch(url);
  const data = await response.json();

  spinner.style.display = "none";

  if (!data.meals) {
    mealslist.innerHTML = `<p class="nodataFound">No meals found! Try another search...</p>`;
    return;
  }

  data.meals.forEach((foods) => {
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
    mealslist.appendChild(recipeDiv);
  });
}
getMeals();

// search addEvent
searchBtn.addEventListener("click", (e) => {
  e.preventDefault;
  const inputValue = inputBox.value.trim();
  getMeals(inputValue);
});

// Enter key press addEvent
inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault;
    const inputValue = inputBox.value.trim();
    getMeals(inputValue);
  }
});

// backToTopArrow addEvent
window.addEventListener("scroll", (e) => {
  console.log(e);
  if (window.scrollY > 250) {
    backToTopArrow.style.display = "flex";
  } else {
    backToTopArrow.style.display = "none";
  }
});
// click to top scroll
backToTopArrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
