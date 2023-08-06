//your parameter variables go here!
let headX = 150;
let headY = 140;
let noseY = headY-20;
let eyeOutline = 30;
let eyeSize = eyeOutline-5;
let pupilSize = 10;
let eyeY = headY-30;
let earY = headY-100;
let bambooX = 20;

//parameters to stay the same
let noseX = headX-40;
let earX = headX-120;
let eyeX = headX-80;
let mouthY = noseY+10;
let mouthX = noseX-10;
let bambooLineX = bambooX;
let bambooCurve = bambooX+10;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(153, 255, 204); //light honeydew green colour
}



function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
noStroke(0)
  fill(151, 208, 84); //Bamboo
  beginShape();
  vertex(bambooX,0);
  vertex(bambooX+20,0);
  vertex(bambooX+20,200);
  vertex(bambooX,200);
  endShape();
 
  stroke(198, 243, 144);
  noFill()
 bezier(bambooLineX,0,bambooLineX,0,bambooCurve,2,bambooLineX+20,0);
 bezier(bambooLineX,40,bambooLineX,40,bambooCurve,42,bambooLineX+20,40);
 bezier(bambooLineX,80,bambooLineX,80,bambooCurve,82,bambooLineX+20,80);
 bezier(bambooLineX,120,bambooLineX,120,bambooCurve,122,bambooLineX+20,120);
 bezier(bambooLineX,160,bambooLineX,160,bambooCurve,162,bambooLineX+20,160);
 bezier(bambooLineX,200,bambooLineX,200,bambooCurve,202,bambooLineX+20,200);

//scale(1,translate(0,0))
  fill(255, 255, 255); //head
  noStroke();
  beginShape();
  vertex(headX-80, headY-90);
  vertex(headX-20, headY-90);
  vertex(headX+25, headY-50);
  vertex(headX+20, headY);
  vertex(headX-20,headY+30);
  vertex(headX-80,headY+30);
  vertex(headX-120,headY);
  vertex(headX-125,headY-50);
  endShape();

  fill(0,0,0); //left ear
  noStroke();
 beginShape();
  vertex(earX+30,earY);
  vertex(earX,earY);
  vertex(earX-10,earY+20);
  vertex(earX,earY+40);
  vertex(earX+30,earY+40);
  vertex(earX+40,earY+20);
  endShape();

  fill(0,0,0); //Right ear
  noStroke();
  beginShape();
  vertex(earX+110,earY+30);
  vertex(earX+140,earY);
  vertex(earX+150,earY+20);
  vertex(earX+140,earY+40);
  vertex(earX+110,earY+40);
  vertex(earX+100,earY+20);
  vertex(earX+110,earY);
  vertex(earX+140,earY);
  endShape();

beginShape(); //nose
vertex(noseX-20,noseY);
 vertex(noseX,noseY);
 vertex(noseX+10,noseY+5);
 vertex(noseX,noseY+20);
 vertex(noseX-20,noseY+20);
 vertex(noseX-30,noseY+5);
  endShape();

noFill(); //mouth
stroke(0);
stroke(0,0,0);
strokeWeight(2);
bezier(mouthX+10,mouthY,mouthX,mouthY-10,mouthX,mouthY+30,mouthX-10,mouthY+20);
bezier(mouthX-10,mouthY,mouthX,mouthY-10,mouthX,mouthY+30,mouthX+10,mouthY+20);


noStroke()
 fill(0,0,0);
 ellipse(eyeX-4,eyeY,eyeOutline,eyeOutline); //Left eye
 fill(255,255,255);
 ellipse(eyeX,eyeY,eyeSize,eyeSize-5);
 fill(0,0,0);
 ellipse(eyeX,eyeY,pupilSize,pupilSize);

 fill(0,0,0); //Right eye
 ellipse(eyeX+64,eyeY,eyeOutline,eyeOutline);
 fill(255,255,255);
 ellipse(eyeX+60,eyeY,eyeSize,eyeSize-5);
 fill(0,0,0);
 ellipse(eyeX+60,eyeY,pupilSize,pupilSize);

}

