// let area = document.getElementById('washMachine');
// let doorArea = document.getElementById('washDoor');

// class washMachine {
//     //class properties
//     baseColor = "#3464eb";
//     baseWidth = 50;
//     baseHeight = 70;
//     baseX = 100;
//     baseY = 200;

//     doorX = 200
//     doorY = 200
//     doorRadius = 60
//     doorColor = "#eb348f";

//     dialX = 200
//     dialY = 200
//     dialRadius = 20
//     dialColor = "#f5ad42";

//     draw() {
//         let newBase = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//         newBase.setAttribute("fill", this.baseColor)

//         //make the body of the washer
//         newBase.setAttribute("width", 150);
//         newBase.setAttribute("height", 250);

//         //new door
//         let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//         newCirc.setAttribute("fill", this.doorColor)
//         newCirc.setAttribute("cx", 50 + Math.random() * 50);
//         newCirc.setAttribute("cy", 80 + Math.random() * 100);
//         newCirc.setAttribute("r", this.doorRadius);

//         //new dial
//         let newCirc2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//         newCirc2.setAttribute("fill", this.dialColor);
//         newCirc2.setAttribute("cx", 30 + Math.random() * 100);
//         newCirc2.setAttribute("cy", 40 + Math.random() * 20);
//         newCirc2.setAttribute("r", this.dialRadius);

//         //append them kids
//         area.appendChild(newBase);
//         area.appendChild(newCirc);
//         area.appendChild(newCirc2);
//     }
// }

// class Manager {

//     draw() {
//         for(let i = 0; i < 10; i++) {
//             washerCount = [];
//             this.washerCount = new washMachine;

//             let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//             newCirc.setAttribute("fill", this.doorColor)
//             newCirc.setAttribute("cx", 50 + Math.random() * 50 + i);
//             newCirc.setAttribute("cy", 80 + Math.random() * 100 + i);
//             newCirc.setAttribute("r", this.doorRadius);


//         }
//     }
// }

// //new instance of the washMachine object
// let newWash = new washMachine;
// newWash.draw();

