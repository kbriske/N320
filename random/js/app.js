let oos = [ 15, 22, 10, 5 ]; //starting positions
let ahs = [ "#ed1a80", "#fcba03", "#ed1a80", "#fcba03" ] //colors for circles... notice anything odd about this?

function setup() {
  createCanvas(400, 400);
  
  translate(200,200);
  background(50);
  
  for( let i = 0; i < oos.length; i++) {
    fill(ahs[i]); 
    circle(sin(i) * 40, cos(i)* 40, oos[i]); //make circles with the fill above (which is pulled from the array)
  }
}

function draw() {

    background(50);
    translate(200,200);
    
    if (mouseIsPressed) {
      oos.push(Math.random() * 40); //push new circles to the screen with a random radius
      
      if(Math.random() < .5 ) {
        ahs.push("#fcba03"); //if the number generated is below .5 make the circle orange
      } else {
        ahs.push("#ed1a80"); // if the number is not below .5 make it this color
      }
    }
    
    for( let i = 0; i < oos.length; i++) {
      fill(ahs[i]);
      circle(sin(i) * 40, cos(i)* 40, oos[i]);
    }
    
  }