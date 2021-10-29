//references
let header = document.getElementById("header");
let items = document.getElementById("items");
let content = document.getElementsByClassName("content");

//initial transition in
init();
function init() {
	for(let i = 0; i < content.length; i++) {
		TweenMax.from(content[i], 
			{ duration: .7, alpha: 0, y: 30} 
		);
	}
    TweenMax.from(header,
         { duration: .7, alpha: 0, y: 30 }
    );
    TweenMax.from(title,
        { duration: .7, alpha: 0, y: 30 }
   );
}

//makes the div dissapear
for(let i = 0; i < content.length; i++) {
    content[i].addEventListener("click", function(){
        TweenMax.to(event.target, { duration: 0.6 , alpha: 0 });
        console.log("clicked");   
        (event.target).style.backgroundColor = "white";  
    });
    // (event.target).style.display = "none";   
}

//make the divs react to mouseover
for(let i = 0; i < content.length; i++) {
    content[i].addEventListener("mouseover", function(){
        TweenMax.to(event.target, { duration: 0.4 , alpha: 0.5 });
    });
    content[i].addEventListener("mouseout", function(){
        TweenMax.to(event.target, { duration: 0.4 , alpha: 1 });
    });      

}












// class Tile {
//     tileX = 25;
//     tileY = 25;
//     tileWidth = 350;
//     tileHeight = 200;
//     tileColor = "#5e34eb";

//     draw() {
//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 2; j++) {
//                 let newTile = document.createElementNS("http://www.w3.org/2000/svg", "rect");

//                 //set the attributes of the tile(s)
                
//                 //sets x to increase by a rate of 400 * i + the tileX
//                 newTile.setAttribute("x", this.tileX + i * 400);
                                
//                 //sets y to increase by a rate of 240 * j + the tileY
//                 newTile.setAttribute("y", this.tileY + j * 240);

//                 //sets width, height, and color
//                 newTile.setAttribute("width", this.tileWidth);
//                 newTile.setAttribute("height", this.tileHeight);
//                 newTile.setAttribute("fill", this.tileColor);

//                 //appends newTile to the <svg>
//                 mainArea.appendChild(newTile);
//             }
//         }
//     }
// }

// class Banner {
//     bannerX = 0;
//     bannerY = 80;
//     bannerWidth = 1200;
//     bannerHeight = 160;
//     bannerColor = "#0004fc";

//     draw() {
//         let newBanner = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//         newBanner.setAttribute("x", this.bannerX);
//         newBanner.setAttribute("y", this.bannerY);

//         newBanner.setAttribute("width", this.bannerWidth);
//         newBanner.setAttribute("height", this.bannerHeight);
//         newBanner.setAttribute("fill", this.bannerColor);

//         topArea.appendChild(newBanner)
//     }
// }


// let newTile = new Tile;
// newTile.draw();

// let newBanner = new Banner;
// newBanner.draw();

// var navItems = document.getElementsByClassName("fullPage");



// content.addEventListener("click", () => { console.log("clicked"); } );

// if(document.getElementById('mainArea').clicked == true)
// {
//     console.log("hello");
// }
