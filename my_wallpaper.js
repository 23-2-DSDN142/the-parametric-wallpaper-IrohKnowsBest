//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


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
let headX = 150;
let headY = 140;
let noseX = 110;
let noseY = headY-20;
let eyeOutline = 30
let eyeSize = eyeOutline-10
let pupilSize = 10
let eyeY = headY-30
let mouthY = noseY+10
let earY = headY-100

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
  vertex(60,earY);
  vertex(30,earY);
  vertex(20,earY+20);
  vertex(30,earY+40);
  vertex(60,earY+40);
  vertex(70,earY+20);
  endShape();

  fill(0,0,0); //Right ear
  noStroke();
  beginShape();
  vertex(140,earY+30);
  vertex(170,earY);
  vertex(180,earY+20);
  vertex(170,earY+40);
  vertex(140,earY+40);
  vertex(130,earY+20);
  vertex(140,earY);
  vertex(170,earY);
  endShape();

  beginShape(); //nose
  vertex(noseX - 20,noseY);
  vertex(noseX,noseY);
  vertex(noseX + 10,noseY + 5);
  vertex(noseX,noseY + 20);
  vertex(noseX - 20,noseY + 20);
  vertex(noseX - 30,noseY +5);
  endShape();

noFill(); //mouth
strokeWeight(3)
stroke(0)
line(100,mouthY,90,mouthY+20);
line(100,mouthY,110,mouthY+20);
line(110,mouthY+20,90,mouthY+20);

noStroke()
 fill(0,0,0);
 ellipse(66,eyeY,eyeOutline,eyeOutline); //Left eye
 fill(255,255,255);
 ellipse(70,eyeY,eyeSize,eyeSize-5);
 fill(0,0,0);
 ellipse(70,eyeY,pupilSize,pupilSize);

 fill(0,0,0); //Right eye
 ellipse(134,eyeY,eyeOutline,eyeOutline);
 fill(255,255,255);
 ellipse(130,eyeY,eyeSize,eyeSize-5);
 fill(0,0,0);
 ellipse(130,eyeY,pupilSize,pupilSize);

}

