// получаем ссылку на елементы DOM
const counter = document.getElementById("counter");
const valueSpan = document.getElementById("value");

// переменная для сохранения текущего значения счётчика
let counterValue = 0;

// получаем кнопки с дата-атрибутами
const incrementButton = counter.querySelector("[data-action='increment']");
const decrementButton = counter.querySelector("[data-action='decrement']");

// добавляем слушателей кликов
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});
