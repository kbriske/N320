//references
let topArea = document.getElementById("topArea");
let mainArea = document.getElementById("mainArea");

class Tile {
    tileX = 40;
    tileY = 40;
    tileWidth = 350;
    tileHeight = 200;
    tileColor = "#5e34eb";

    draw() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 2; j++) {
                let newTile = document.createElementNS("http://www.w3.org/2000/svg", "rect");

                //set the attributes of the tile(s)
                
                //sets x to increase by a rate of 400 * i + the tileX
                newTile.setAttribute("x", this.tileX + i * 400);
                                
                //sets y to increase by a rate of 240 * j + the tileY
                newTile.setAttribute("y", this.tileY + j * 240);

                //sets width, height, and color
                newTile.setAttribute("width", this.tileWidth);
                newTile.setAttribute("height", this.tileHeight);
                newTile.setAttribute("fill", this.tileColor);

                //appends newTile to the <svg>
                mainArea.appendChild(newTile);
            }
        }
    }
}

// class Banner {
//     bannerX = 0;
//     bannerY 
// }


let newTile = new Tile;
newTile.draw();

