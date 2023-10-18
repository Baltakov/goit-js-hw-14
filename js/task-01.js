const categories = document.querySelector("#categories");
const categoryCount = categories.querySelectorAll(".item").length;

console.log(`Number of categories: ${categoryCount}`);

categories.querySelectorAll(".item").forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;

  const categoryElementsCount = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementsCount}`);

  const parentNode = category.parentNode;

  console.log(`Parent node: ${parentNode}`);
});
