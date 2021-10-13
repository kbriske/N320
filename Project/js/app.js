//REFERENCES
let board = document.getElementById("board");


class Board {
    element = document.getElementById("board");
    tileArray = [];

    boardSetup() {
        for(let i = 0; i < 10; i++) {
            this.tileArray[i] = new Tile;
            this.tileArray[i].draw();
        }
    }
}


class Tile {
    x = 20;
    y = 20;
    width = 50;
    height = 50;
    color = "#3eb0bd"
    clicks = 0;

    draw() {
        //create a tile
        let newTile = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        
        //push the tile into an array
        // tileArray.push(newTile);
        // console.log(tireArray);
    
    for(let i = 0; i < 10; i++) {
        newTile.setAttribute("x", this.x * i + 10);
        newTile.setAttribute("y", this.y);
        newTile.setAttribute("width", this.width);
        newTile.setAttribute("height", this.height);
        newTile.setAttribute("fill", this.color);
}
 
            
        // newTile.addEventListener("click", (event) => {
        //     if(event.target == this.searchColor) { //this should be when equal to the index of another square
        //         event.target.remove();

        //         //store how many have been clicked
        //         this.clicks++;
        //     }
            board.appendChild(newTile);
        // })
    }
}

// let tile1 = new Tile();
// tile1.makeTiles();

let board1 = new Board();
board1.boardSetup();

















// //REFERENCES
// let startScreen = document.getElementsByClassName("startScreen");
// let tiles = document.getElementsByClassName("tile");

// //variables
// let choice1 = [];
// let choice2 = [];



// class Tile {
//     x = 40;
//     y = 40;
//     width = 80;
//     height = 80;
//     color = "#3eb0bd";

//     draw() {
//         let newTile = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//         // newTile.classList.add("gameCirc");
//         newTile.setAttribute("x", 40);
//         newTile.setAttribute("y", 40);
//         newTile.setAttribute("width", 400);
//         newTile.setAttribute("height", 400);

//         this.boardContainer.appendChild(newTile);
//     }
// }

// class Player {
//     score = 0;
// }

// function match() {
//     let sample1 = event.target.getAttribute("data-id"); //get the data associated with each tile
//     choice1.push(sample1); //add the sample that you clicked to an array
//     console.log(choice1); //log that choice to the console

//     x = setTimeout(timeCheck, 2000);
// }

// function timeCheck() { //change this to a match function
//     timeUp = true;
//     console.log("time is up: " + timeUp);
//     // alert('Time is up');
// }

// // let newTile = new Tile();
// // console.log(newTile.positions[0][0]);
// // console.log(newTile.arr[0]);

// let tile1 = new Tile();
// tile1.draw();
