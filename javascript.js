const containerSize = 600;
const container = document.querySelector(".container");

function createGrid(){
    let gridSize = 50;
    let squareSize = containerSize/gridSize;
    for(let i = 0; i < (gridSize**2); i++){
        const square = document.createElement("div");
        square.classList.add("squares");
        square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px`);
        container.appendChild(square);
    }
}

function colorSquares(){    
    let squares = getSquares();
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });
    });
}

function getSquares(){
    return document.querySelectorAll(".squares");
}

createGrid();
colorSquares();