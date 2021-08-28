//global variables
let count = 0;
let r = 10;
let g = 10;
let b = 70;

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

        fill(r, g, b);
        rect(0, 370, 800, 30);

        if (this.y >= 400) {
            count = count += 1;
            console.log(count);
            this.y = 0;

            if (count % 5 == 0) {
                console.log("its working");
                b += 2.5;
                if (b >= 200) {
                    r += 5;
                    g += 5;
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

function setup() {
    createCanvas(800, 400);
}

function draw() {
    noStroke();
    background(50, 54, 71);

    //INVOKE UPDATE FOR DROPLETS
    droplets[0].update();
    droplets[1].update();
    droplets[2].update();
    droplets[3].update();
    droplets[4].update();
    droplets[5].update();
    droplets[6].update();
    droplets[7].update();
    droplets[8].update();
    droplets[9].update();
    droplets[10].update();
    droplets[11].update();
    droplets[12].update();

    //INVOKE SLOWDOWN
    droplets[0].slowdown();
    droplets[1].slowdown();
    droplets[2].slowdown();
    droplets[3].slowdown();
    droplets[4].slowdown();
    droplets[5].slowdown();
    droplets[6].slowdown();
    droplets[7].slowdown();
    droplets[8].slowdown();
    droplets[9].slowdown();
    droplets[10].slowdown();
    droplets[11].slowdown();
    droplets[12].slowdown();

    //INVOKE RESETCOLOR
    droplets[0].resetColor();
    droplets[1].resetColor();
    droplets[2].resetColor();
    droplets[3].resetColor();
    droplets[4].resetColor();
    droplets[5].resetColor();
    droplets[6].resetColor();
    droplets[7].resetColor();
    droplets[8].resetColor();
    droplets[9].resetColor();
    droplets[10].resetColor();
    droplets[11].resetColor();
    droplets[12].resetColor();
}