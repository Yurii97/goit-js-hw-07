const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');
const defaultValueName = outputNameRef.textContent

inputNameRef.addEventListener('input', onOutputChange)

function onOutputChange(event) {
if(event.currentTarget.value.length > 0){
    const newOutputName = event.currentTarget.value;
    outputNameRef.textContent = newOutputName;    
}else{
    outputNameRef.textContent = defaultValueName;    
}
}
