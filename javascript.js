function createGrid(){
    const container = document.querySelector(".container");
    let containerSize = 600;
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
    const squares = document.querySelectorAll(".squares");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
    });
}

createGrid();
colorSquares();