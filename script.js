const container = document.querySelector("#container");
const button = document.querySelector('#resize');
let isMouseDown = false;

container.addEventListener("mousedown", () => {
    isMouseDown = true;
});
document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

for (let i = 1; i <= 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");

    grid.addEventListener("mouseover", () => {
        if (isMouseDown) {
            grid.classList.add("black");
        }
    });

    grid.addEventListener("mousedown", () => {
        grid.classList.add("black");
    });

    grid.style.height = "6.25%";
    grid.style.width = "6.25%";

    container.appendChild(grid);
}

button.addEventListener("click", () => {

    let gridSize = parseInt(prompt("How many squares per side do you wish? Limit:100"));

    container.textContent = '';

    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {

        let gridDimension = 700 / gridSize; 

        for (let i = 0; i < gridSize * gridSize; i++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.width = `${gridDimension}px`;
            grid.style.height = `${gridDimension}px`;


            grid.addEventListener("mouseover", () => {
                if (isMouseDown) {
                    grid.classList.add("black");
                }
            });
        
            grid.addEventListener("mousedown", () => {
                grid.classList.add("black");
            });
        

            container.appendChild(grid);
        }
    } else {
        alert("Please, enter a valid number.");
    }
});