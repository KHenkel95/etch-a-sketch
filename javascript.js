const container = document.querySelector(".container");

let containerSize = 600;
let gridSize = 16;
let squareSize = containerSize/gridSize;

for(let i = 0; i < (16*16); i++){
    const square = document.createElement("div");
    square.classList.add("squares");
    square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px`);
    container.appendChild(square);
}