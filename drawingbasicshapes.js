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
}