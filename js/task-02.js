const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
const arrayIngredients = [];

for (const ingredient of ingredients) {
  arrayIngredients.push(`<li class="item">${ingredient}</li>`);
};

listIngredients.insertAdjacentHTML("afterbegin", arrayIngredients.join(""));
