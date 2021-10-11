//REFERENCES
let tiles = document.getElementsByClassName("tile");

//variables
let choice1 = [];
let choice2 = [];
let timeUp = false;

//classes
class Tile {
    width = 50;
    height = 50
}

class Player {
    name = "";
    score = 0;
    
}


// function checkData() {
//     let sample1 = event.target.getAttribute("data-id");
//     console.log(sample1);

// }

function match() {
    let sample1 = event.target.getAttribute("data-id"); //get the data associated with each tile
    choice1.push(sample1); //add the sample that you clicked to an array
    console.log(choice1); //log that choice to the console

    x = setTimeout(timeCheck, 2000);
    score ++;
    checkScore();
}

function timeCheck() {
    timeUp = true;
    console.log(timeUp);
    alert('Time is up');
}


// tiles.innerHTML = "Hello";

// for(i = 0; i < 8; i++) {
//     let newTiles = document.createElement("div");
//     newTiles.id = "tile"; 
//     document.body.appendChild(newTiles);
// }


// ------------------------------------------------
let player1 = new Player();

function checkScore(score) {
    this.score = score;
    console.log(player1.score);
}
