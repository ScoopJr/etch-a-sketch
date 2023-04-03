//9min 53

function padSize(number) { // function to set the size of the sketch pad
    let pad = document.querySelector(".pad");
    let grids = pad.querySelectorAll('div');
    grids.forEach((div) => div.remove());
    pad.style.gridTemplateColumns = `repeat(${number} , 1fr)`; //set number of columns
    pad.style.gridTemplateRows = `repeat(${number} , 1fr)`; //set number of  rows

    let size = number * number; //columns x rows = sketch pad size
    for(let i = 0; i < size; i++) { 
        let grid = document.createElement("div");
        //grid.addEventListener("mouseover", rainbowGrid);        
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "black";
        });
        grid.style.backgroundColor = "blue";
        pad.insertAdjacentElement("beforeend", grid);
    }
}

padSize(16);

function changePadSize(input) { // function to change the size of the sketch pad
    if (input >= 1 || input <= 100) { // user can input between 1 and 100 only /////////NEED TO RESOLVE ISSUE/////////
        padSize(input);
    } else {
        console.log("Please chose a size between 1 and 100.");
    }
}