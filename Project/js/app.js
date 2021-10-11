//REFERENCES
let startScreen = document.getElementsByClassName("startScreen");
let tiles = document.getElementsByClassName("tile");

// board = new Board();

class Board {
    element = document.getElementById("board");

    boardSetup() {
        for(i = 0; i < 10; i++) {
            tileArray[i] = new Tile();
            Tile.draw();
        }
    }
}

class Tile {
    x = 40;
    y = 40;
    width = 80;
    height = 80;
    color = "#3eb0bd";

    draw() {
        let newTile = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        // newTile.classList.add("gameCirc");
        newTile.setAttribute("x", 40);
        newTile.setAttribute("y", 40);
        newTile.setAttribute("width", 400);
        newTile.setAttribute("height", 400);

        this.boardContainer.appendChild(newTile);
    }
}

//variables
let choice1 = [];
let choice2 = [];
let timeUp = false;

function match() {
    let sample1 = event.target.getAttribute("data-id"); //get the data associated with each tile
    choice1.push(sample1); //add the sample that you clicked to an array
    console.log(choice1); //log that choice to the console

    x = setTimeout(timeCheck, 2000);
}

function timeCheck() {
    timeUp = true;
    console.log("time is up: " + timeUp);
    // alert('Time is up');
}

// let newTile = new Tile();
// console.log(newTile.positions[0][0]);
// console.log(newTile.arr[0]);

let tile1 = new Tile();
tile1.draw();