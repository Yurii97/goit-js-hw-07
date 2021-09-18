const ref = {
    input: document.querySelector('#controls input'),    
    btnToCreate: document.querySelector('[data-action="render"]'),
    btnToClean: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
    allBox: boxes.querySelectorAll('div'),
}

ref.btnToCreate.addEventListener('click', createBoxes);
ref.btnToClean.addEventListener('click', destoryBoxes);

let sizeBox = 30;


function createBoxes(amount) {
    amount = ref.input.value;    
    const newAllBoxes = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        const newOneBox = document.createElement('div');
        
        newOneBox.style.backgroundColor = `${randomColor}`;
        newOneBox.style.width = `${sizeBox}px`;
        newOneBox.style.height = `${sizeBox}px`;
        newAllBoxes.append(newOneBox);
        // console.log(newOneBox);
        sizeBox += 10;
    }
    ref.boxes.append(newAllBoxes);
    ref.input.value = '';
}

function destoryBoxes() {
    ref.boxes.innerHTML = '';
    sizeBox = 30;
}
