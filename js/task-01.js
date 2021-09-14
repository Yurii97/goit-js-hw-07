const categoriesEl = document.querySelector('#categories');

const allCategoriesEl = document.querySelectorAll('.item');

const totalCategoriesEl =allCategoriesEl.length


console.log(`В списку ${totalCategoriesEl} категорії`);


[...allCategoriesEl].forEach(categorie => {
    const nameCategorieRf = categorie.querySelector('h2').textContent;    
    const totalElOfCategorieRf = categorie.querySelectorAll('li').length;
    
    console.log(`Категорія: ${nameCategorieRf}`);
    console.log(`Кількість елементів: ${totalElOfCategorieRf}`);
});

