class Game {
    board = new Board();
    pair = []; //array to hold clicked elements
    matches = 0;

    playagain = document.getElementById("btn").addEventListener("click", () => {
        location.reload();
    })

    start() {
        this.board.boardSetup();
        let tileArrayLocal = this.board.tileArray; //pulls in array for tiles
        // console.log(tileArrayLocal)
        console.log(tileArrayLocal);
        for (let i = 0; i < tileArrayLocal.length; i++) {
            tileArrayLocal[i].newTile.addEventListener("click", this.click.bind(this)); //set eventListener for click
        }
    }

    checkWin() {
        if(this.matches === 4) {
            console.log(this.matches);
            document.getElementById("win").style.display = "flex";
        }
    }
    click() { //runs whenever a user clicks
        let tiles = document.querySelectorAll("rect");
        // console.log(tiles);
        let color = event.target.dataset.color;
        let id = event.target.dataset.id;
        // console.log(tiles, colors);

        //change the color of the tile (clicked)
        // for (let i = 0; i < tiles.length; i++) {
            event.target.style.fill = color;
        // }

        this.pair.push(event.target); //adds clicked tile to array
        // for(let i = 0; i < this.pair.length; i++) {
        //     this.pair[i].setAttribute("data-null", "null");
        // }
      
        console.log(this.pair);

        //if the array has a length of two check for a match
        if (this.pair.length == 2) {
            this.checkMatch(this.pair);
            this.pair = [];
        }
        // console.log(id + " flipped");
    }

    checkMatch(tiles) {
    if (tiles[0].dataset.color === tiles[1].dataset.color) {
            console.log("MATCH");
            for (let i = 0; i < 2; i++) {
                console.log(tiles[i]);
                // tiles[i].remove();
                tiles[i].classList.add("tileMatch");
            }
            this.matches++;
            this.checkWin();
            console.log(this.matches);
        }
        else {
            console.log("NOT A MATCH");
            setTimeout(() => {
                for (let i = 0; i < 2; i++) {
                    tiles[i].style.fill = "#000000";
                }
            }, 500);

        }
    }
}

class Board {
    element = document.getElementById("board");
    tileArray = [];
    colors = ["#ff575f", "#ff575f", "#03fc88", "#03fc88", "#177efc", "#177efc", "#ffe733", "#ffe733"];
    colorsShuffled = this.colors.sort((a, b) => 0.5 - Math.random());

    boardSetup() { //generates tiles to the board
        for (let i = 0; i < 8; i++) {
            this.tileArray[i] = new Tile;
            
            if (i < 4) {
                this.tileArray[i].draw((i + 1), 40, i, this.colorsShuffled[i]);

            }
            else {
                this.tileArray[i].draw((i - 3), 320, i, this.colorsShuffled[i]);
            }
        }
        // console.log(this.tileArray);
    }
}

class Tile {
    x = 40;
    y = 40;
    width = 150;
    height = 240;
    color = "#000000";
    newTile = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    draw(xInd, yInd, id, newColor) {

        this.x = this.x * xInd + (150 * (xInd - 1));
        this.y = yInd;

        this.newTile.setAttribute("x", this.x); //set the tile x position to the intital x + increment on z
        this.newTile.setAttribute("y", this.y); //set the tile y position 
        this.newTile.setAttribute("width", this.width); //set width
        this.newTile.setAttribute("height", this.height); //set height
        this.newTile.setAttribute("fill", this.color); //set color
        this.newTile.setAttribute("data-color", newColor);
        this.newTile.setAttribute("data-id", id);
        // this.newTile.setAttribute("data-null", "");

        board.appendChild(this.newTile); //append the new tile to the screen board
    }
}

let game = new Game();
game.start();