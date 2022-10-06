function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const refs = {
  valueColor: document.querySelector('.color'),
  btnChangeColor: document.querySelector('.change-color'),
};

refs.btnChangeColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor=randomColor;
  refs.valueColor.textContent = randomColor;
});