const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const container = document.querySelector(".grid-container");

const slider = document.querySelector(".slider");

const sliderText = document.querySelector(".slider-value");

const clearButton = document.querySelector("#clear");

let x = 16, y = 16;

function generateGrid(x, y) {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const cell = document.createElement("div");
      container.appendChild(cell);
    }
  }
}

function clearGrid() {
  cells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
}

generateGrid(x, y);

const cells = document.querySelectorAll(".grid-container div");

cells.forEach((cell) => {
  cell.addEventListener("mouseover", (event) => {
    cell.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  });
});

slider.addEventListener("input", function () {
  //displays string not int
  sliderText.textContent = slider.value + " x " + slider.value;
});

clearButton.addEventListener("click", () => {
  clearGrid();
});
