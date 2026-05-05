const container = document.querySelector(".grid-container");

function GenerateGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const cell = document.createElement("div");
      container.appendChild(cell);
      cell.textContent = `${i},${j}`
    }
  }
}

GenerateGrid();


const cells = document.querySelectorAll(".grid-container div");

cells.forEach((cell) => {
  cell.addEventListener("mouseover", (event) =>{
     cell.style.backgroundColor ="blue";
  });
});

