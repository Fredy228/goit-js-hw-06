const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

refs.nameInput.addEventListener("input", (event) => {
    refs.nameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value.length === 0) {
        refs.nameOutput.textContent = "Anonymous";
    }
});