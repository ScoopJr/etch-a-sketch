// 5 mins 20 seconds

let pad = document.querySelector(".pad");
pad.style.gridTemplateColumns = "repeat(16 , 1fr)"; //16 columns
pad.style.gridTemplateRows = "repeat(16 , 1fr)"; //16 rows

for(let i = 0; i < 256; i++) { //16 x 16 - 256
    let grid = document.createElement("div");
    grid.style.backgroundColor = "blue";
    pad.insertAdjacentElement("beforeend", grid);
}