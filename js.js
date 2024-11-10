let size = 16;
let canvas = document.body.querySelector(".canvas")

draw()

document.body.addEventListener("mouseover", (e) => {
    let currentElement = e.target
    if (currentElement.id) {
        currentElement.style.backgroundColor = `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`
    }
})



function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function draw(){
    for (let i = 0; i < size; i++){
        let row = document.createElement("div");
        row.setAttribute("class", "row")
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.setAttribute("class", "cell")
            cell.setAttribute("id", i*size+j);
            row.appendChild(cell)
        }
        canvas.appendChild(row)
    }
}