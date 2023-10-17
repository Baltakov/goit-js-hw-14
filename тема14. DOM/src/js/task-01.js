const categories = document.querySelector("#categories");

// подсчёт количества категорий
const categoriesCount = categories.querySelectorAll(".item").length;
console.log("Number of categories:", categoriesCount);

// перебор категорий
categories.querySelectorAll(".item").forEach((category) => {
  // поиск текста заголовка категории
  const categoryTitle = category.querySelector("h2").textContent;

  // подсчёт количества элементов в категории
  const elementsCount = category.querySelectorAll("li").length;

  // вывод в консоль информацию о категории
  console.log(`Category: ${categoryTitle}
Elements: ${elementsCount}`);
});
