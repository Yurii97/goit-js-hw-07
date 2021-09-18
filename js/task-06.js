const inpurRef = document.querySelector('[data-length="6"]')


function onValidInput(event) {
    const inpEl = event.currentTarget;
    inpEl.classList = '';
    inpEl.value.length === 6 ?
        inpEl.classList.add('valid') :
        inpEl.classList.add('invalid')
};
inpurRef.addEventListener('blur', onValidInput)