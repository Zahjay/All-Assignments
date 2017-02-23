//Drawing basics redo by Zahra Abd'Allh.
function setup() {
  createCanvas(440, 680);
}

function draw() {
  //Attempting to make a rectangle but came out with a line instead.
  rect(-10, 400, 672, 400);
  //Tried to do the same format with the second line and came out with a street.
  rect(-20, 300, 600, 200);
  //I tried to make an arc,but it came out as an ellipse like shape. We'll call it the sun.
  arc(-115, -35, 400, 560, 0, HALF_PI);
  //Fire chamber for the cannon.
  rect(70, 215, 105, 55, 20);
  //The ellipse attached to the chanber is the wheel.
  ellipse(80, 265, 95, 85);
  // Cannon ball one.
  ellipse(220, 246, 65, 55);
  //Cannon two.
  ellipse(320, 246, 65, 55);
  //Cannon three.
  ellipse(425, 246, 65, 55);
  
}