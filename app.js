const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const container = document.querySelector(".grid-container");

const slider = document.querySelector(".slider");

const sliderText = document.querySelector(".slider-value");

const clearButton = document.querySelector("#clear");
const eraserButton = document.querySelector("#eraser");
const rainbowButton = document.querySelector("#rainbow");
const colorButton = document.querySelector("#color");

const buttonList = document.querySelectorAll("button");

const colorInput = document.querySelector("#brush-color");

let currentMode = "rainbow";

let x = 16,
  y = 16;

function generateGrid(x, y) {
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      const cell = document.createElement("div");
      cell.style.width = `${100 / x}%`;
      cell.style.height = `${100 / y}%`;
      container.appendChild(cell);
    }
  }
}

function clearColors() {
  const cells = document.querySelectorAll(".grid-container div");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
}

function setMode(mode) {
  currentMode = mode;
}

function setActiveButton(activebutton) {
  buttonList.forEach((button) => {
    button.classList.remove("active");
  });

  activebutton.classList.add("active");
}

generateGrid(x, y);
setActiveButton(rainbowButton);

function clearGrid() {
  const cells = document.querySelectorAll(".grid-container div");
  cells.forEach((cell) => {
    cell.remove();
  });
}

function colorCell(target) {
  if (currentMode === "rainbow") {
    target.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  } else if (currentMode === "color") {
    target.style.backgroundColor = colorInput.value;
  } else if (currentMode === "eraser") {
    target.style.backgroundColor = "";
  }
}

container.addEventListener("mouseover", (event) => {
  let target = event.target;

  if (!target.matches(".grid-container div")) return;
  if (event.buttons === 1) {
    colorCell(target);
  }
});

container.addEventListener("mousedown", (event) => {
  let target = event.target;

  if (!target.matches(".grid-container div")) return;

  colorCell(target);
});

slider.addEventListener("change", function () {
  //displays string not int
  sliderText.textContent = slider.value + " x " + slider.value;
  clearGrid();
  generateGrid(slider.value, slider.value);
});

clearButton.addEventListener("click", () => {
  clearColors();
});

eraserButton.addEventListener("click", () => {
  setMode("eraser");
  setActiveButton(eraserButton);
});

rainbowButton.addEventListener("click", () => {
  setMode("rainbow");
  setActiveButton(rainbowButton);
});

colorButton.addEventListener("click", () => {
  setMode("color");
  setActiveButton(colorButton);
});
