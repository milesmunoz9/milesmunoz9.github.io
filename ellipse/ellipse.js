function setup() {
  createCanvas(600, 600);

  background(138, 189, 104);
  
  // hair back
  let c15 = color(0, 0, 0);

  // Draw the hair circle
  fill(c15);
  circle(360, 390, 260);
  
  
   // neck rectangle
  let c13 = color(242, 183, 160);

  // Draw the right circle.
  fill(c13);
  noStroke();
  rect(210, 400, 170, 150);
  
  // face circle1
  let c0 = color(0, 0, 0);

  // Draw the right circle.
  fill(c0);
  circle(340, 305, 310);
  

  // face circle2
  let c1 = color(209, 173, 166);

  // Draw the left circle.
  fill(c1);
  noStroke();
  circle(283, 317, 325);

  // shading circle
  let c2 = color(242, 183, 160);

  // Draw the right circle.
  fill(c2);
  circle(293, 300, 285);
  
  // chin circle
  let c3 = color(242, 183, 160);

  // Draw the chin circle
  fill(c3);
  circle(231, 415, 150);
  
  // chin circle2
  let c5 = color(242, 183, 160);

  // Draw the chin circle
  fill(c5);
  circle(250, 415, 155);
  
  
  // cheek circle
  let c4 = color(242, 183, 160);
  
  // Draw the left ellipse
  fill(c4);
  ellipse(175, 348, 65, 190);
  
 // hair bg
  let c6 = color(0, 0, 0);

  // Draw the hair circle
  fill(c6);
  circle(420, 315, 110);
  
  // hair1
  let c7 = color(0, 0, 0);

  // Draw the hair circle
  fill(c7);
  circle(420, 365, 100);
  
  // hair2
  let c8 = color(0, 0, 0);

  // Draw the hair circle
  fill(c8);
  circle(420, 225, 80);
  
  // hair3
  let c9 = color(0, 0, 0);

  // Draw the hair circle
  fill(c9);
  circle(320, 185, 70);
  
  // hair4
  let c10 = color(0, 0, 0);

  // Draw the hair circle
  fill(c10);
  circle(360, 195, 70);
  
  // hair5
  let c11 = color(0, 0, 0);

  // Draw the hair circle
  fill(c11);
  circle(280, 185, 70);
  
  // hair6
  let c12 = color(0, 0, 0);

  // Draw the hair circle
  fill(c12);
  circle(240, 185, 70);
  
 // Draw a black bezier curve.
  noFill();
  stroke(0);
  strokeWeight(50);
  bezier(250, 200, 10, 170, 250, 400, 70, 410);
  
  // Draw a black bezier curve.
  noFill();
  stroke(0);
  strokeWeight(50);
  bezier(400, 450, 340, 350, 470, 190, 300, 205);
  
  // Style the line.
  stroke('black');
  strokeWeight(17);

  line(210, 290, 150, 283);
  
  // Style the line.
  stroke('black');
  strokeWeight(17);

  line(410, 283, 290, 293);
  
  // Style the line.
  stroke('black');
  strokeWeight(13);

  line(210, 430, 270, 430);
  
  // lefteye
  let c16 = color(0, 0, 0);

  // Draw the eye circle
  fill(c16);
  circle(180, 330, 35);

// righteye
  let c17 = color(0, 0, 0);

  // Draw the eye circle
  fill(c17);
  circle(312, 330, 35);
  
  // Style the line.
  stroke('black');
  strokeWeight(8);

  line(245, 320, 220, 380);
  
  // Give all corners a radius of 20.
  rect(105, 530, 390, 330, 80);
  
}
