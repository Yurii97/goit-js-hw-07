const butDecremenrRf = document.querySelector('[data-action="decrement"]');
const butbutIncremenrRf = document.querySelector('[data-action="increment"]');
const valueConterRf = document.querySelector('#value');

let currentValurOfCounter = Number(valueConterRf.textContent);

function decrementValue (){
    currentValurOfCounter += 1;
    valueConterRf.textContent = currentValurOfCounter ;
}
function incrementValue (){
    currentValurOfCounter -= 1;
    valueConterRf.textContent = currentValurOfCounter;
}

butDecremenrRf.addEventListener('click', incrementValue)
butbutIncremenrRf.addEventListener('click', decrementValue)