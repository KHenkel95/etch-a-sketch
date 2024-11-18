const containerSize = 600;
const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", () => {
    let newGridSize = prompt('Please enter the size for your new grid. Max: 100');
    while (newGridSize < 1 || newGridSize > 100){
        newGridSize = prompt(`You entered ${newGridSize}. Please enter a number between 1 and 100`);
    }
    let squares = getSquares();
    squares.forEach((square) => {
        container.removeChild(square);
    }); 
    createGrid(newGridSize);
    colorSquares();
})

function createGrid(gridSize = 16){
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