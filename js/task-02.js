const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const addAllIngradients = ingredients.reduce((acc, ingredient) => {
  const addLi = document.createElement("li");
  addLi.textContent = ingredient;
  addLi.classList.add("item");
  acc.push(addLi);
  return acc;
}, []);

ingredientsList.append(...addAllIngradients);
