//your parameter variables go here!
let pandaHeadScale = 0.25

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 0;
}

function wallpaper_background() {
  background(153, 255, 204); //light honeydew green colour
}

function DrawBamboo(offset) {
  let bambooX = 20;
  let bambooLineY = 20

  //parameters to stay the same
  let bambooLineX = bambooX;
  let bambooCurve = bambooX + 10;

  noStroke(0)
  fill(151, 208, 84); //Bamboo
  beginShape();
  vertex(bambooX - 10, 0);
  vertex(bambooX + 10, 0);
  vertex(bambooX + 10, 200);
  vertex(bambooX - 10, 200);
  endShape();

  stroke(198, 243, 144);
  noFill()
  bezier(bambooLineX - 10, 0, bambooLineX - 10, 0, bambooCurve - 10, 2, bambooLineX + 10, 0);
  bezier(bambooLineX - 10, 40, bambooLineX - 10, 40, bambooCurve - 10, 42, bambooLineX + 10, 40);
  bezier(bambooLineX - 10, 80, bambooLineX - 10, 80, bambooCurve - 10, 82, bambooLineX + 10, 80);
  bezier(bambooLineX - 10, 120, bambooLineX - 10, 120, bambooCurve - 10, 122, bambooLineX + 10, 120);
  bezier(bambooLineX - 10, 160, bambooLineX - 10, 160, bambooCurve - 10, 162, bambooLineX + 10, 160);
  bezier(bambooLineX - 10, 200, bambooLineX - 10, 200, bambooCurve - 10, 202, bambooLineX + 10, 200);

  noStroke(0)
  fill(151, 208, 84); //Bamboo
  beginShape();
  vertex(bambooX + 30, 0);
  vertex(bambooX + 50, 0);
  vertex(bambooX + 50, 200);
  vertex(bambooX + 30, 200);
  endShape();
  stroke(198, 243, 144);

  noFill()
  bezier(bambooLineX + 30, bambooLineY, bambooLineX + 30, bambooLineY, bambooCurve + 30, bambooLineY + 2, bambooLineX + 50, bambooLineY);
  bezier(bambooLineX + 30, bambooLineY + 40, bambooLineX + 30, bambooLineY + 40, bambooCurve + 30, bambooLineY + 42, bambooLineX + 50, bambooLineY + 40);
  bezier(bambooLineX + 30, bambooLineY + 80, bambooLineX + 30, bambooLineY + 80, bambooCurve + 30, bambooLineY + 82, bambooLineX + 50, bambooLineY + 80);
  bezier(bambooLineX + 30, bambooLineY + 120, bambooLineX + 30, bambooLineY + 120, bambooCurve + 30, bambooLineY + 122, bambooLineX + 50, bambooLineY + 120);
  bezier(bambooLineX + 30, bambooLineY + 160, bambooLineX + 30, bambooLineY + 160, bambooCurve + 30, bambooLineY + 162, bambooLineX + 50, bambooLineY + 160);
  bezier(bambooLineX + 30, bambooLineY + 200, bambooLineX + 30, bambooLineY + 200, bambooCurve + 30, bambooLineY + 202, bambooLineX + 50, bambooLineY + 200);

  noStroke(0)
  fill(151, 208, 84); //Bamboo
  beginShape();
  vertex(bambooX + 70, 0);
  vertex(bambooX + 90, 0);
  vertex(bambooX + 90, 200);
  vertex(bambooX + 70, 200);
  endShape();
  stroke(198, 243, 144);

  noFill()
  bezier(bambooLineX + 70, 0, bambooLineX + 70, 0, bambooCurve + 70, 2, bambooLineX + 90, 0);
  bezier(bambooLineX + 70, 40, bambooLineX + 70, 40, bambooCurve + 70, 42, bambooLineX + 90, 40);
  bezier(bambooLineX + 70, 80, bambooLineX + 70, 80, bambooCurve + 70, 82, bambooLineX + 90, 80);
  bezier(bambooLineX + 70, 120, bambooLineX + 70, 120, bambooCurve + 70, 122, bambooLineX + 90, 120);
  bezier(bambooLineX + 70, 160, bambooLineX + 70, 160, bambooCurve + 70, 162, bambooLineX + 90, 160);
  bezier(bambooLineX + 70, 200, bambooLineX + 70, 200, bambooCurve + 70, 202, bambooLineX + 90, 200);

  noStroke(0)
  fill(151, 208, 84); //Bamboo
  beginShape();
  vertex(bambooX + 110, 0);
  vertex(bambooX + 130, 0);
  vertex(bambooX + 130, 200);
  vertex(bambooX + 110, 200);
  endShape();
  stroke(198, 243, 144);

  noFill()
  bezier(bambooLineX + 110, bambooLineY, bambooLineX + 110, bambooLineY, bambooCurve + 110, bambooLineY + 2, bambooLineX + 130, bambooLineY);
  bezier(bambooLineX + 110, bambooLineY + 40, bambooLineX + 110, bambooLineY + 40, bambooCurve + 110, bambooLineY + 42, bambooLineX + 130, bambooLineY + 40);
  bezier(bambooLineX + 110, bambooLineY + 80, bambooLineX + 110, bambooLineY + 80, bambooCurve + 110, bambooLineY + 82, bambooLineX + 130, bambooLineY + 80);
  bezier(bambooLineX + 110, bambooLineY + 120, bambooLineX + 110, bambooLineY + 120, bambooCurve + 110, bambooLineY + 122, bambooLineX + 130, bambooLineY + 120);
  bezier(bambooLineX + 110, bambooLineY + 160, bambooLineX + 110, bambooLineY + 160, bambooCurve + 110, bambooLineY + 162, bambooLineX + 130, bambooLineY + 160);
  bezier(bambooLineX + 110, bambooLineY + 200, bambooLineX + 110, bambooLineY + 200, bambooCurve + 110, bambooLineY + 202, bambooLineX + 130, bambooLineY + 200);

  noStroke(0)
  fill(151, 208, 84); //Bamboo
  beginShape();
  vertex(bambooX + 150, 0);
  vertex(bambooX + 170, 0);
  vertex(bambooX + 170, 200);
  vertex(bambooX + 150, 200);
  endShape();
  stroke(198, 243, 144);

  noFill()
  bezier(bambooLineX + 150, 0, bambooLineX + 150, 0, bambooCurve + 150, 2, bambooLineX + 170, 0);
  bezier(bambooLineX + 150, 40, bambooLineX + 150, 40, bambooCurve + 150, 42, bambooLineX + 170, 40);
  bezier(bambooLineX + 150, 80, bambooLineX + 150, 80, bambooCurve + 150, 82, bambooLineX + 170, 80);
  bezier(bambooLineX + 150, 120, bambooLineX + 150, 120, bambooCurve + 150, 122, bambooLineX + 170, 120);
  bezier(bambooLineX + 150, 160, bambooLineX + 150, 160, bambooCurve + 150, 162, bambooLineX + 170, 160);
  bezier(bambooLineX + 150, 200, bambooLineX + 150, 200, bambooCurve + 150, 202, bambooLineX + 170, 200);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  DrawBamboo()
  DrawBamboo(10)
  DrawBamboo(20)
  let hX = 150;
  let hY = 140;
  scale(pandaHeadScale);

  DrawPandaHead(210, 100);
  DrawPandaHead(210, 300);
  DrawPandaHead(210, 500);
  DrawPandaHead(210, 700);
  DrawPandaHead(210, 900);

  DrawPandaHead(370, 0);
  DrawPandaHead(370, 200);
  DrawPandaHead(370, 400);
  DrawPandaHead(370, 600);
  DrawPandaHead(370, 800);

  DrawPandaHead(530, 100);
  DrawPandaHead(530, 300);
  DrawPandaHead(530, 500);
  DrawPandaHead(530, 700);
  DrawPandaHead(530, 900);

  DrawPandaHead(690, 0);
  DrawPandaHead(690, 200);
  DrawPandaHead(690, 400);
  DrawPandaHead(690, 600);
  DrawPandaHead(690, 800);

}

function DrawPandaHead(headX, headY) {

  let noseY = headY - 20;
  let eyeOutline = 30;
  let eyeSize = eyeOutline - 5;
  let pupilSize = 10;
  let eyeY = headY - 30;
  let earY = headY - 100;

  //Variables to stay the same
  let noseX = headX - 40;
  let earX = headX - 120;
  let eyeX = headX - 80;
  let mouthY = noseY + 10;
  let mouthX = noseX - 10;


  fill(255, 255, 255); //head
  noStroke();
  beginShape();
  vertex(headX - 80, headY - 90);
  vertex(headX - 20, headY - 90);
  vertex(headX + 25, headY - 50);
  vertex(headX + 20, headY);
  vertex(headX - 20, headY + 30);
  vertex(headX - 80, headY + 30);
  vertex(headX - 120, headY);
  vertex(headX - 125, headY - 50);
  endShape();

  fill(0, 0, 0); //left ear
  noStroke();
  beginShape();
  vertex(earX + 30, earY);
  vertex(earX, earY);
  vertex(earX - 10, earY + 20);
  vertex(earX, earY + 40);
  vertex(earX + 30, earY + 40);
  vertex(earX + 40, earY + 20);
  endShape();

  fill(0, 0, 0); //Right ear
  noStroke();
  beginShape();
  vertex(earX + 110, earY + 30);
  vertex(earX + 140, earY);
  vertex(earX + 150, earY + 20);
  vertex(earX + 140, earY + 40);
  vertex(earX + 110, earY + 40);
  vertex(earX + 100, earY + 20);
  vertex(earX + 110, earY);
  vertex(earX + 140, earY);
  endShape();

  beginShape(); //nose
  vertex(noseX - 20, noseY);
  vertex(noseX, noseY);
  vertex(noseX + 10, noseY + 5);
  vertex(noseX, noseY + 20);
  vertex(noseX - 20, noseY + 20);
  vertex(noseX - 30, noseY + 5);
  endShape();

  noFill(); //mouth
  stroke(0);
  stroke(0, 0, 0);
  strokeWeight(2);
  bezier(mouthX + 10, mouthY, mouthX, mouthY - 10, mouthX, mouthY + 30, mouthX - 10, mouthY + 20);
  bezier(mouthX - 10, mouthY, mouthX, mouthY - 10, mouthX, mouthY + 30, mouthX + 10, mouthY + 20);


  noStroke()
  fill(0, 0, 0);
  ellipse(eyeX - 4, eyeY, eyeOutline, eyeOutline); //Left eye
  fill(255, 255, 255);
  ellipse(eyeX, eyeY, eyeSize, eyeSize - 5);
  fill(0, 0, 0);
  ellipse(eyeX, eyeY, pupilSize, pupilSize);

  fill(0, 0, 0); //Right eye
  ellipse(eyeX + 64, eyeY, eyeOutline, eyeOutline);
  fill(255, 255, 255);
  ellipse(eyeX + 60, eyeY, eyeSize, eyeSize - 5);
  fill(0, 0, 0);
  ellipse(eyeX + 60, eyeY, pupilSize, pupilSize);

}