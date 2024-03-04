const container = document.querySelector("#gridContainer");
const button = document.querySelector("#numberSquares");
const DIVCONTAINERCLASSNAME = "rowContainer";
const DIVCLASSNAME = "gridSquare";

let numberSquares = 16;

function makeDivs(target, number, nameClass) {
  for (let i = 0; i < +number; i++) {
    const div = document.createElement("div");
    div.classList.add(nameClass);
    target.appendChild(div);
  }
}

function getRainbowColor() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function setCorrectSize(number) {
  const grid = document.querySelectorAll(`.${DIVCLASSNAME}`);

  let size = Math.min(container.offsetHeight, container.offsetWidth) / +number;
  grid.forEach((element) => {
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.addEventListener("mouseleave", () => {
      element.style.backgroundColor = getRainbowColor();
      console.log(element.style.backgroundColor);
    });
  });
}

button.addEventListener("click", (event) => {
  numberSquares = prompt("Please enter the amount of  squares per side", 16);

  container.innerHTML = "";
  makeDivs(container, numberSquares, DIVCONTAINERCLASSNAME);
  const largedivCollection = document.querySelectorAll(
    `.${DIVCONTAINERCLASSNAME}`
  );
  largedivCollection.forEach((element) => {
    makeDivs(element, numberSquares, DIVCLASSNAME);
  });
  setCorrectSize(numberSquares);
});
