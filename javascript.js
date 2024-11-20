const gridContainerSize = 500;
const gridContainer = document.querySelector(".grid-container");
const buttonMenu = document.querySelector(".button-menu");

buttonMenu.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.className){
        case 'reset-button':
            resetGrid();
            break;
        case 'erase-button':
            colorSquares('white');
            break;
        case 'draw-button':
            colorSquares('black');
            break;
        case 'rainbow-button':
            rainbowColor();
            break;
    }
});

function randomColor(){
    return 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}

function createGrid(gridSize = 16){
    let squareSize = gridContainerSize/gridSize;
    for(let i = 0; i < (gridSize**2); i++){
        const square = document.createElement("div");
        square.classList.add("squares");
        square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px`);
        gridContainer.appendChild(square);
    }
}

function resetGrid(){
    let newGridSize = prompt('Please enter the size for your new grid. Max: 100');
            while (newGridSize < 1 || newGridSize > 100){
                newGridSize = prompt(`You entered ${newGridSize}. Please enter a number between 1 and 100`);
            }
            let squares = document.querySelectorAll(".squares");
            squares.forEach((square) => {
                gridContainer.removeChild(square);
            }); 
            createGrid(newGridSize);
            colorSquares();
}

function rainbowColor(){
    let squares = document.querySelectorAll(".squares");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = randomColor();
        });
    });
}

function colorSquares(color = 'black'){    
    let squares = document.querySelectorAll(".squares");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = color;
        });
    });
}

createGrid();
colorSquares();