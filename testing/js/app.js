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

// class Circle {
//     constructor(circleX, circleY, radius, color) {
//         this.x = circleX;
//         this.y = circleY;
//         this.radius = radius;
//         this.color = color;
//         this.speed = 1 + Math.random() * 2;
//     }
//     update() {
//         this.y +=this.speed;
//         this.speed = this.speed + .1;
//         fill(this.color);
//         circle(this.x,this.y, this.radius);
//     }
// }

// let myCircles = [];
// myCircles[0] = new Circle(100,50,30,[10, 82, 250])
// myCircles[1] = new Circle(300,50,30,[102, 148, 255])


// function setup() {
//     createCanvas(400,400);
// }

// function draw() {
//     background(0,0,0);

//     myCircles[0].update();
//     myCircles[1].update();
// }

// function setup() {
//     createCanvas(400,400);

// }

// radius = 50;

// function draw() {
//     background(0,0,0);

//     fill(255,255,255);
//     circle(mouseX,mouseY,radius);
// }

// class Note {
//     constructor(pitch, duration) {
//         this.pitch = pitch;
//         this.duration = duration;
//     }
// }

// class FullNote extends Note {
//     constructor(pitch) {
//         super(pitch, 1);
//     }
// }

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let velo = new Vector(10, 5);
let speed = velo.magnitude();

console.log(speed);


// class Engine {
//     constructor() {
//         this.oil = 10;
//     }
//     setOil(newOilAmount) {
//         if (newOilAmount >= 0) {
//             this.oil = newOilAmount
//         } else {
//             console.error("Cannot set negative oil");
//         }
//     }
//     getOil() {
//         return this.oil();
//     }
// }

class Dog {
    constructor(name) {
        this.name = name;
    }
    play(ball) {
        ball.catch(this);
    }
}

class Ball {
    catch(dog) {
        console.log(dog.name + ' caught a ball!');
    }
}

let dog1 = new Dog("Heide");
let ball1 = new Ball();
dog1.play(ball1);

class Flag {
    flutter() {
        let height = 0;

        if (this.pole != null) {
            height = this.pole.height;
        }

        console.log("Flag flutters " + height + " feet off the ground");
    }
}

class Pole {
    constructor(height) {
        this.height = height;
    }
}

var flag1 = new Flag();
var pole1 = new Pole(32);
flag1 = pole1;
flag1.flutter;

// //Composition
// class Line {
//     constructor(p1, p2) {
//         this.p1 = p1;
//         this.p2 = p2;
//     }
//     draw() {
//         // line(p1.x, p1.y, p2.x, p2.y);
//     }
// }

// class Point {
//     constructor(x,y) {
//         this.x = x;
//         this.y = y;
//     }
// }

// let pointA = new Point(10,50);
// let pointB = new Point(5,40);
// let myLine = new Line(pointA, pointB);
// myLine.draw();


// //INVOKING OTHER OBJECT'S METHOD
// class Water {
//     constructor() {
//         this.amount = 100;
//     }
//     drain() {
//         this.amount --;
//     }
// }

// class Cloud {
//     constructor(water) {
//         this.water = water;
//         this.size = 10;
//     }
//     grow() {
//         this.water.drain();
//         this.size ++;
//     }
// }

// let someWater = new Water();
// let someCloud = new Cloud(someWater);
// someCloud.grow();
// console.log(someCloud);

// //EXPOSING A CALLBACK METHOD
// class Firework {
//     constructor() {
//         this.fuse = 12;
//     }
//     burnFuse() {
//         this.fuse --;
//         if(this.fuse <= 0) {
//             this.activatedCallback();
//         }
//     }
// }

// class Crowd {
//     constructor(fireworkInstance) {
//         fireworkInstance.activatedCallback = this.marvel;
//     }
//     marvel() {
//         console.log("Ooh, and, ahhhh");
//     }
// }

// let f1 = new Firework;
// let c1 = new Crowd(Firework);
// c1.marvel();
// console.log(c1);


// //PASSING THROUGH A HIGHER OBJECT
// class Employee {
//     constructor(emManager) {
//         this.manager = emManager;

//     }
//     quit() {
//         this.manager.employeeQuit();
//     }
// }

// class Manager {
//     constructor(em1, em2) {
//         this.em1 = em1;
//         this.em2 = em2;
//     }

//     employeeQuit() {
//         this.em1.moveOut();
//         this.em2.hire();
//     }
// }

// let emp1 = new Employee(m1)
// let emp2 = new Employee(m1)

// let m1 = new Manager(emp1, emp2);



// function createNewPerson(name) {
//     const obj = {};
//     obj.name = name;
//     obj.greeting = function() {
//       alert('Hi! I\'m ' + obj.name + '.');
//     };
//     return obj;
//   }

// let p1 = new createNewPerson("Keegan");
// p1.name;
// p1.greeting();

// //ABSTRACTION
// class CoffeeMaker {
//     constructor(beans, water) {
//         this.beans = beans;
//         this.water = water;
//     }
//     brew() {
//         return console.log("you have made a cup of coffee");
//     }
// }

// let ingerdients = new CoffeeMaker("Robusta", "water");
// let cup1 = ingerdients.brew();


// //ENCAPSULATION
// class bankAccount {
//     constructor() {
//         this.amount = 0;
//     }
//     setDeposit(newDeposit) {
//         if (newDeposit >= 0 && newDeposit >= this.amount) {
//             this.amount = newDeposit;
//         }
//         else {
//             console.log("you cannot deposit negative money");
//         }
//     }
//     getAmount() {
//         console.log("your balance is " + this.amount);
//         return this.amount;
//     }
// }

// let b1 = new bankAccount();
// b1.setDeposit(100);
// console.log(b1.getAmount());


class Game {
    constructor(game) {
        this.game = game;
    }
    test() {
        console.log("the " + this.platform + " game has started up properly");
    }
}

class playstationGame extends Game {
    constructor(platform) {
        super(100);
        this.platform = "playstation";
    }
}

class pcGame extends Game{
    constructor(platform) {
        super(110);
        this.platform = "pc";
    }
}

let games = [];
games[0] = new playstationGame();
games[1] = new pcGame();

games.forEach((game) => {
    game.test();
})