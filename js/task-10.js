function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controls: document.querySelector("#controls"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  const boxSize = 30;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

refs.createBtn.addEventListener("click");

refs.destroyBtn.addEventListener("click", destroyBoxes);
