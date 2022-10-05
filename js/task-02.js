const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const itemIngredients = document.createElement('li');

  itemIngredients.textContent = ingredient;
  listIngredients.appendChild(itemIngredients);
};





