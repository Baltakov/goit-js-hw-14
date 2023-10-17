const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// инициализация элемента image
let image = images[0];
const gallery = document.querySelector("ul.gallery");

const template = `
  <li class="image">
    <img src="${image.url}" alt="${image.alt}" />
  </li>
`;

// Создаем элементы <img>
const imagesElements = images.reduce((acc, image) => {
  acc.push({
    tag: `<img src="${image.url}" alt="${image.alt}" />`,
  });
  return acc;
}, []);

// Додаём елементи <img> в список
gallery.innerHTML = imagesElements.map((image) => image.tag).join("");

// Додаём минимальное оформление галереи
gallery.classList.add("flex");
gallery.querySelectorAll(".image").forEach((image) => {
  image.classList.add("w-25");
});
