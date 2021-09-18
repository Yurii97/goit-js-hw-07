const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.min = 10;
inputRef.value = 16;
// inputRef.max = 50;

// console.dir(inputRef);
// console.log(textRef);

inputRef.addEventListener('input', ofChangeFontSize)

function ofChangeFontSize(event) {
    textRef.style.fontSize = `${event.target.value}px`
}