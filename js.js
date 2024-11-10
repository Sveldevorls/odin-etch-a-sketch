let size = 16;
let canvas = document.body.querySelector(".canvas")
let resizeButton = document.body.querySelector("#resize")

draw()

document.body.addEventListener("mouseover", (e) => {
    let currentElement = e.target
    if (currentElement.id && currentElement.id != "resize") {
        currentElement.style.backgroundColor = `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`
        if (currentElement.style.opacity < 1) currentElement.style.opacity = Number(currentElement.style.opacity) + Number(0.1);
    }
})

resizeButton.addEventListener("click", () => {
    size = prompt("Enter new grid size: (1 ~ 100)")
    while (size < 1 || size > 100) {
        size = prompt("Invalid size! Enter new grid size: (1 ~ 100)")
    }
    canvas.innerHTML = ""
    draw()
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
            cell.style.opacity = 0;
            row.appendChild(cell)
        }
        canvas.appendChild(row)
    }
}