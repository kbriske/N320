class Boid {
    x = 350;
    y = 200;
    radius = 30;
    detectRadius = 70;
    velX = 2 + Math.random(1);
    velY = 2 - Math.random(1);

    //detection
    detect() {
        if(this.y >= 460) {
            this.velY *= -1;
        }
        else if(this.y <= 40) {
            this.velY *= -1;
        }
        else if(this.x >= 960) {
            this.velX *= -1;
        }
        else if(this.x <= 40) {
            this.velX *= -1;
        }
    }
    update() {
        // for(let i = 0; i < 2; i++) {
        //     //Boid detection radius (hitbox)
        //     fill("#bababa")
        //     circle(this.x+(i*2),this.y+(90*i),this.detectRadius);
            
        //     //Boid
        //     fill("#edebeb")
        //     circle(this.x+i,this.y+(90*i),30);

        fill("#d387ff")
        circle(this.x+=this.velX,this.y+=this.velY,this.detectRadius);

        fill("#87b9ff")
        circle(this.x,this.y+=this.velY,30);

    }
}


function setup() {
    createCanvas(1000,500);
    background(0);

}

function draw() {
    background(0);

    boid1.update();
    boid1.detect();

    boid2.update();
    boid2.detect();

    boid3.update();
    boid3.detect();

    boid4.update();
    boid4.detect();

    boid5.update();
    boid5.detect();

    boid6.update();
    boid6.detect();
}

let boid1 = new Boid;
let boid2 = new Boid;
let boid3 = new Boid;
let boid4 = new Boid;
let boid5 = new Boid;
let boid6 = new Boid;

