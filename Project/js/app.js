//REFERENCES
// let board = document.getElementById("board");

let compareArr = []; //an empty array to hold the properties of clicked elements

class Board {
    element = document.getElementById("board");
    tileArray = [];

    boardSetup() { //generates tiles to the board
        for (let i = 0; i < 4; i++) {
            this.tileArray[i] = new Tile;
            this.tileArray[i].draw(i * 100);
        }
        console.log(this.tileArray);
    }
}

class Tile {
    x = 12;
    y = 12;
    width = 70;
    height = 70;
    color = "#3eb0bd";
    clicks = 0;

    draw(z) {
        //create a tile
        let newTile = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        let totalClicks = 0;
        let dataArr = ["1", "1", "2", "2"]

        for (let i = 0; i < 3; i++) {
            newTile.setAttribute("x", this.x + z); //set the tile x position to the intital x + increment on z
            newTile.setAttribute("y", this.y); //set the tile y position 
            newTile.setAttribute("width", this.width); //set width
            newTile.setAttribute("height", this.height); //set height
            newTile.setAttribute("fill", this.color); //set color
            newTile.addEventListener("click", handleClick); //set eventListener for click
            newTile.setAttribute("data-index", z/100 + 1); //set an event listener iterating by one for every tile
        }

        //function to handle a click event
        function handleClick(event) {

            totalClicks ++;

            let player1 = new Player();
  
            compareArr.push(event.target.getAttribute("data-index"));
            console.log(compareArr);
            
            if(compareArr[0] == 1 && compareArr[1] == 2 || compareArr[0] == 2 && compareArr[1] == 1) {
                console.log("MATCH");
                compareArr = [];
                newTile.setAttribute("fill", "#7080fa");
            }
        }
        board.appendChild(newTile); //append the new tile to the screen board
    }
}

class Player {
    choices = [];
    score = 0;

    getChoice(c1, c2) {
        this.choices.push(c1, c2);
        console.log(this.choice1);
    }
}

let board1 = new Board();
board1.boardSetup();





        // } else if (totalClicks > 2) {
        //     totalClicks = 0;
        //     console.log("NO MORE");
        // }




            // if(totalClicks < 2) {
            //     compareArr.push(event.target.getAttribute("data-index"));
            //     console.log(compareArr);
            //     // player1.getChoice(event.target.getAttribute("data-index"));
            //     // console.log(player1);
            // }
            // else {
            //     console.log("NO MORE");
            //     compareArr.pop();
            // }

            
            // if(totalClicks > 1) {
            //     player1.getChoice2(event.target.getAttribute("data-index"));
            // }
    

            // compareArr.push(event.target); //add a clicked element to the array
            // console.log(compareArr);

            // if(compareArr[0].getAttribute("data-index") == 1) {
            //     console.log("1st click captured, its index is: " + compareArr[0].getAttribute("data-index"));
            // }


// function checkMatch(x) {
//                 if(compareArr[0].getAttribute("data-index") == 1 && compareArr[1].getAttribute("data-index") == 3) {
//                     console.log("MATCH MATCH");
//                 }

//             }
            // if(totalClicks > 1) { //how can I use this to compare values instead
            //     totalClicks = 0;
            //     console.log("RESET, totalClicks = " + totalClicks);
            // }

            // console.log("data-index: " + newTile.getAttribute("data-index"));
            // console.log("total clicks: " + totalClicks)
            // newTile.getAttribute("data-index");