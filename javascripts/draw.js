function setup() {
  createCanvas(1000, 1000);
  background(21, 24, 29);

}

function draw() {
  stroke(255, 229, 125);
  let count = 0;
  $('.mel').click(function () {
    count += 1;
    if (count == 1) {
      stroke(255, 119, 172);
    }
  });
  $('.mel').click(function () {
    count += 1;
    if (count == 2) {
      stroke(159, 175, 255);
    }
  });
  $('.mel').click(function () {
    count += 1;
    if (count == 3) {
      stroke(255, 229, 125);
    }
  });
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
