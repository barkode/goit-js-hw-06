function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");

btnColor.addEventListener("click", changeColor);

function changeColor() {
  const rndmColor = getRandomHexColor();
  document.body.style.backgroundColor = rndmColor;
  spanColor.textContent = rndmColor;
}
