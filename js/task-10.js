function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refss = {
  btnCreate: document.querySelector('[data-create]'),
  btnDetroy: document.querySelector('[data-destroy]'),
  valueInput: document.querySelector('#controls').firstElementChild,
  divBoxes: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  const arrayBoxes = [];
  for (let i = 30; i < amount*10+30; i += 10) {
     function createBox() {
      const box = `<div style="width: ${i}px; height: ${i}px; background-color: ${getRandomHexColor()}"></div>`;
      return box;
    }
    arrayBoxes.push(createBox())
  };

  refss.divBoxes.insertAdjacentHTML("afterbegin", arrayBoxes.join(""));
};

function destroyBoxes() {
  while (refss.divBoxes.firstChild) {
    refss.divBoxes.removeChild(refss.divBoxes.firstChild);
  };
  refss.valueInput.value = "";
};

refss.btnCreate.addEventListener("click", () => {
  createBoxes(refss.valueInput.value);
})

refss.btnDetroy.addEventListener("click", destroyBoxes);