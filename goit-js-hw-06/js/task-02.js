const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const selectorEl = document.querySelector('#ingredients');

ingredients.map(element => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = element;
  console.log(listEl.textContent);
  selectorEl.appendChild(listEl);
});


