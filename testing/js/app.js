// //CLASSES

// class Guardian {
//     constructor(subclass, race) {
//         this.subclass = subclass;
//         this.race = race;
//     }
// }

// class Titan extends Guardian {
//     constructor(subclass, race){
//         super(subclass, race);
//         this.kind = "Titan";
//     }
//     announce() {
//         console.log("This " + this.kind + " is using the " + this.subclass + " subclass, and is " + this.race + ".");
//     }
// }

// let g1 = new Titan("Void", "Awoken");
// g1.announce();
// console.log(Titan);

//P5

class Circle {
    constructor(circleX, circleY, radius, color) {
        this.x = circleX;
        this.y = circleY;
        this.radius = radius;
        this.color = color;
        this.speed = 1 + Math.random() * 2;
    }
    update() {
        this.y +=this.speed;
        this.speed = this.speed + .1;
        fill(this.color);
        circle(this.x,this.y, this.radius);
    }
}

let myCircles = [];
myCircles[0] = new Circle(100,50,30,[10, 82, 250])
myCircles[1] = new Circle(300,50,30,[102, 148, 255])


function setup() {
    createCanvas(400,400);
}

function draw() {
    background(0,0,0);

    myCircles[0].update();
    myCircles[1].update();
}


