let counter = 0;

//CLASS FOR DROPLET
class Droplet {
    constructor(dx, dy, radius, color) {
        this.x = dx;
        this.y = dy;
        this.radius = radius;
        this.color = color;
        this.speed = 1 + Math.random() * 2.4;
    }
    update() { //UPDATE FUNCTION
        this.y += this.speed;
        this.speed = this.speed + .1;
        fill(this.color);
        circle(this.x,this.y, this.radius);
        // console.log(this.speed);
    }

    reset() { //RESET FUNCTION
        if(this.y >= 400) {
            this.y = 0;
            console.log(counter+=1);
        }
        fill(0,0,50);
        rect(0,370,800,30);
        //OBVIOUS OBVIOUS OBVIOUS LOOK AT ME IM WHAT NEEDS ATTENTION
    }
    slowdown() { //SLOWDOWN FUNCTION
        if(this.speed >= 30) {
            this.speed = this.speed * 0.25;
            this.y = this.y * Math.random();
        }
    }
}

// class Ground {
//     constructor(rx,ry,rw,rh,color) {
//         this.x = rx;
//         this.y = ry;
//         this.w = rw;
//         this.h = rh;
//         this.color = color;
//     }
//     update() {
//         fill(this.color);
//         rect(this.x,this.y, this.w, this.h);
//     }
// }


let droplets = [];
droplets[0] = new Droplet(100,40,30,[10, 82, 250]);
droplets[1] = new Droplet(300,0,30,[102, 148, 255]);
droplets[2] = new Droplet(124,100,20,[10, 82, 250]);
droplets[3] = new Droplet(219,60,20,[102, 148, 255]);
droplets[4] = new Droplet(340,0,20,[10, 82, 250]);
droplets[5] = new Droplet(139,90,30,[102, 148, 255]);
droplets[6] = new Droplet(24,0,20,[10, 82, 250]);
droplets[7] = new Droplet(390,10,20,[10, 82, 250]);
droplets[7] = new Droplet(530,0,30,[102, 148, 255]);
droplets[8] = new Droplet(724,30,20,[10, 82, 250]);
droplets[9] = new Droplet(619,0,20,[102, 148, 255]);
droplets[10] = new Droplet(740,0,30,[10, 82, 250]);
droplets[11] = new Droplet(519,0,20,[102, 148, 255]);
droplets[12] = new Droplet(408,0,30,[10, 82, 250]);

// for(i=0; i < droplets.length; i++) {
//     console.log(i);
// }

// console.log("length of array: " + droplets.length);

// let baseGround = new Ground(0,370,800,30,[98, 116, 166])

function setup() {
    createCanvas(800,400);
}

function draw() {
    noStroke();
    background(50, 54, 71);

    //INVOKE UPDATE
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

    //INVOKE RESET
    droplets[0].reset();
    droplets[1].reset();
    droplets[2].reset();
    droplets[3].reset();
    droplets[4].reset();
    droplets[5].reset();
    droplets[6].reset();
    droplets[7].reset();
    droplets[8].reset();
    droplets[9].reset();
    droplets[10].reset();
    droplets[11].reset();
    droplets[12].reset();

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

    //INVOKE UPDATE FOR RECT
    // baseGround.update();
    
}
