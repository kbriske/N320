//global variables
let count = 0;
let r = 10;
let g = 10;
let b = 70;

class Ground {
    constructor(gx, gy, width, height) {
        this.x = gx;
        this.y = gy;
        this.w = width;
        this.h = height;
    }
    update() {
        fill(r, g, b);
        rect(0, 370, 800, 30);
    }
}

//class for droplet
class Droplet {
    constructor(dx, dy, radius, color) {
        this.x = dx;
        this.y = dy;
        this.radius = radius;
        this.color = color;
        this.speed = 1 + Math.random() * 2.4;
    }
    update() {
        this.y += this.speed;
        this.speed = this.speed + .1;
        fill(this.color);
        circle(circle(this.x, this.y, this.radius));

        if (this.y >= 370) {
            count = count += 1;
            // console.log(count);
            this.y = 0;

            if (count % 10 == 0) {
                // console.log("its working");
                b += 7;
                if (b >= 200) {
                    r += 10;
                    g += 10;
                }
            }
        }
    }
    slowdown() { //SLOWDOWN FUNCTION
        if (this.speed >= 30) {
            this.speed = this.speed * 0.25;
            this.y = this.y * Math.random();
        }
    }
    resetColor() { //RESET COLOR FUNCTION
        if (r == 180 && g == 180) {
            r = 10;
            g = 10;
            b = 70;
        }
    }
}

//ARRAY FOR DROPLETS
let droplets = [];
droplets[0] = new Droplet(100, 40, 30, [10, 82, 250]);
droplets[1] = new Droplet(300, 0, 30, [102, 148, 255]);
droplets[2] = new Droplet(124, 100, 20, [10, 82, 250]);
droplets[3] = new Droplet(219, 60, 20, [102, 148, 255]);
droplets[4] = new Droplet(340, 0, 20, [10, 82, 250]);
droplets[5] = new Droplet(139, 90, 30, [102, 148, 255]);
droplets[6] = new Droplet(24, 0, 20, [10, 82, 250]);
droplets[7] = new Droplet(390, 10, 20, [10, 82, 250]);
droplets[7] = new Droplet(530, 0, 30, [102, 148, 255]);
droplets[8] = new Droplet(724, 30, 20, [10, 82, 250]);
droplets[9] = new Droplet(619, 0, 20, [102, 148, 255]);
droplets[10] = new Droplet(740, 0, 30, [10, 82, 250]);
droplets[11] = new Droplet(519, 0, 20, [102, 148, 255]);
droplets[12] = new Droplet(408, 0, 30, [10, 82, 250]);

let ground = [];
ground[0] = new Ground(0,370,800,30);

function setup() {
    createCanvas(800, 400);
}

function draw() {
    noStroke();
    background(50, 54, 71);

//INVOKE UPDATE FOR DROPLETS
    droplets.forEach((Droplet) => {
        Droplet.update();
   })

//INVOKE SLOWDOWN
   droplets.forEach((Droplet) => {
       Droplet.slowdown();
   })

//INVOKE RESET COLOR   
   droplets.forEach((Droplet) => {
       Droplet.resetColor();
   })

//INVOKE GROUND UPDATE
   ground.forEach((Ground) => {
       Ground.update();
   })
}

// myArray.forEach(obj) => {
//     object.newThing (method)
// })