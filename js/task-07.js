const refs = {
    sizeControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.sizeControl.addEventListener("input", (event) => {
    console.log(event.currentTarget.value);
    refs.text.style.fontSize=`${event.currentTarget.value}px`;
})