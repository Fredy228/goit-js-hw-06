const refs = {
    value: document.querySelector('#value'),
    decrement: document.querySelector(`[data-action="decrement"]`),
    increment: document.querySelector(`[data-action="increment"]`),
}

let counterValue = 0;


refs.decrement.addEventListener("click", decrementValue);
refs.increment.addEventListener("click", incrementValue);

function decrementValue() {
    counterValue -= 1;
    refs.value.textContent = counterValue;
}

function incrementValue() {
    counterValue += 1;
    refs.value.textContent = counterValue;  
}





