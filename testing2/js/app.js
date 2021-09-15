// var navItems = document.getElementsByClassName("navitem");
// init();

// function init() {
// 	for(let i = 0; i < navItems.length; i++) {
// 		TweenMax.from(navItems[i], 
// 			{ duration: .7, delay: i, alpha: 0, x: -10 } 
// 		);
// 	}
// }

let area = document.getElementById('washMachine');
// let doorArea = document.getElementById('washDoor');

class washMachine {
    //class properties
    baseColor = "#3464eb";
	baseWidth = 150;
	baseHeight = 170;
	baseX = 100;
	baseY = 200;

    doorX = 200
    doorY = 200
	doorRadius = 90
    doorColor = "#eb348f";

	dialX = 200
	dialY = 200
	dialRadius = 40
	dialColor = "#f5ad42";

    draw() {
       let newBase = document.createElementNS("http://www.w3.org/2000/svg", "rect");
       newBase.setAttribute("fill", this.baseColor)

    //    newBase.setAttribute("x", Math.random() * 300);
    //    newBase.setAttribute("y", Math.random() * 300);
       
    //make the body of the washer
       newBase.setAttribute("width", 250 + Math.random() * 250);
       newBase.setAttribute("height", 250 + Math.random() * 250);

//new Door
       let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
       newCirc.setAttribute("fill", this.doorColor)
       
       //make the door
        newCirc.setAttribute("cx", 100 + Math.random() * 150);
        newCirc.setAttribute("cy", 100 + Math.random() * 150);
        newCirc.setAttribute("r", this.doorRadius);

//new Door
let newCirc2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
newCirc2.setAttribute("fill", this.doorColor);

//make the door
 newCirc2.setAttribute("cx", 100 + Math.random() * 150);
 newCirc2.setAttribute("cy", 100 + Math.random() * 150);
 newCirc2.setAttribute("r", this.doorRadius);
 
    area.appendChild(newBase);
    area.appendChild(newCirc);
    area.appendChild(newCirc2);
    }
}

let newWash = new washMachine;
newWash.draw();