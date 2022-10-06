function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  valueColor: document.querySelector('.color'),
  btnChangeColor: document.querySelector('.change-color'),
};

refs.btnChangeColor.addEventListener("click", () => {
  document.body.style.backgroundColor=getRandomHexColor();
  refs.valueColor.textContent = getRandomHexColor();
});