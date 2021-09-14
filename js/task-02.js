const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  
const ingredientRf = document.querySelector('#ingredients')
  
const createEl = (el) => {
  const ingredientListEl = document.createElement('li');
  ingredientListEl.textContent = el;
  return ingredientListEl
}

const element = ingredients.map(createEl)
    
ingredientRf.append(...element)