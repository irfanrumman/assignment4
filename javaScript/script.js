// fetch korbo

async function getMeals() {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  document.querySelector("#foods").innerHTML = data.meals
    .map((foods) => `<div>${foods.idMeal} ${foods.strMeal}</div>`)
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
