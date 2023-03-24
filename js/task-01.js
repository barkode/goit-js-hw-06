const categoriesList = document.querySelector("#categories");
const allItems = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${allItems.length}\n\n`);

allItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const count = item.querySelectorAll("li").length;
  console.log(`Category: ${title}\nElements: ${count}\n\n`);
});
