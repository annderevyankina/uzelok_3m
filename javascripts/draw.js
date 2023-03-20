function setup() {
  createCanvas(1000, 1000);
  background(21, 24, 29);

}

function draw() {
  stroke(255, 229, 125);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
