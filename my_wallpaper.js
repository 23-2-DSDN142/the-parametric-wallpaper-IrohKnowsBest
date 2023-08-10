//parameter variables
let headX = 150;
let headY = 140;
let eyeOutline = 30;
let eyeSize = eyeOutline-0;
let pupilSize = 20;
let isInvertedBamboo = true; // changes bamboo color
let isInvertedBambooLine = true; //true, false changes bamboo line color
let isInvertedBackground = true; //true, false changes the background color
let numBamboo = 3; //0, 1, 2, 3 changes the background bamboo
let isInvertedPandaHead = false; //true, false changes the color of the panda face
let drawMultiplePandaHeads = false; //false, 1, 2 changes the placement and amount of panda heads
 
//parameter variables to stay the same
let eyeY = headY-40;
let earY = headY-100;
let noseY = headY-40;
let noseX = headX-40;
let earX = headX-120;
let eyeX = headX-80;
let mouthY = noseY+10;
let mouthX = noseX-10;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false);

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 60;
}

function wallpaper_background() {
  if (isInvertedBackground == true){
   background(102,0,51); 
   } else {
   background(153, 255,204);
   }
}

function my_symbol() {
  if (numBamboo == 1){
    DrawBamboo(20);
    DrawBamboo(60, true);
    DrawBamboo(100);
    DrawBamboo(140, true);
    DrawBamboo(180);
   }else if (numBamboo == 2){
    DrawBamboo(0, true);
    DrawBamboo(35);
    DrawBamboo(70, true);
    DrawBamboo(100);
    DrawBamboo(130, true);
    DrawBamboo(165);
    DrawBamboo(200, true);
   }else if (numBamboo == 3){
    DrawBamboo(10);
    DrawBamboo(40, true);
    DrawBamboo(60);
    DrawBamboo(90, true);
    DrawBamboo(110);
    DrawBamboo(140, true);
    DrawBamboo(160);
    DrawBamboo(190, true);
   }else{
    DrawBamboo(20, true);
    DrawBamboo(70);
    DrawBamboo(120, true);
    DrawBamboo(170);
   }
   
   if (drawMultiplePandaHeads == 1){
  scale(.5);
  DrawPandaHead(0,0);
  DrawPandaHead(100,100);
  DrawPandaHead(200,200);
  DrawPandaHead(300,300);
   } else if (drawMultiplePandaHeads == 2){
  scale(.5);
  DrawPandaHead(0,100);
  DrawPandaHead(200,100);
  DrawPandaHead(100,300);
  DrawPandaHead(300,300);
   } else if (drawMultiplePandaHeads == false){
  DrawPandaHead(headX,headY);

   }
}
function DrawBamboo(bambooX, isBambooYMoved){
  let bambooCurve = bambooX+10;
   noStroke(0);

  if (isInvertedBamboo == true){
      fill(104,47,171);
  } else {
      fill(151, 208, 84);
  }
//Bamboo
   beginShape();
   vertex(bambooX-10,0);
   vertex(bambooX+10,0);
   vertex(bambooX+10,200);
   vertex(bambooX-10,200);
   endShape();

  if (isInvertedBambooLine == true){
   stroke(57,12,111);
   noFill()
  }else {
   stroke(198, 243, 144);
   noFill()
   strokeWeight(1)
  }
  if (isBambooYMoved == true){
   bezier(bambooX-10,20,bambooX-10,20,bambooCurve-10,22,bambooX+10,20);
   bezier(bambooX-10,60,bambooX-10,60,bambooCurve-10,62,bambooX+10,60);
   bezier(bambooX-10,100,bambooX-10,100,bambooCurve-10,102,bambooX+10,100);
   bezier(bambooX-10,140,bambooX-10,140,bambooCurve-10,142,bambooX+10,140);
   bezier(bambooX-10,180,bambooX-10,180,bambooCurve-10,182,bambooX+10,180);   
  } else {
      bezier(bambooX-10,0,bambooX-10,0,bambooCurve-10,2,bambooX+10,0);
      bezier(bambooX-10,40,bambooX-10,40,bambooCurve-10,42,bambooX+10,40);
      bezier(bambooX-10,80,bambooX-10,80,bambooCurve-10,82,bambooX+10,80);
      bezier(bambooX-10,120,bambooX-10,120,bambooCurve-10,122,bambooX+10,120);
      bezier(bambooX-10,160,bambooX-10,160,bambooCurve-10,162,bambooX+10,160);
      bezier(bambooX-10,200,bambooX-10,200,bambooCurve-10,202,bambooX+10,200)   
  }
}

function DrawPandaHead(headX,headY){
  if (drawMultiplePandaHeads == 1, 2){
  noseY = headY-30
  eyeY = headY-40
  earY = headY-100
  noseX = headX-40;
  earX = headX-120;
  eyeX = headX-80;;
  mouthY = headY-20;
  mouthX = headX-50;
  }
//Head Shape
if (isInvertedPandaHead == true){
  fill(0, 0, 0);
  noStroke();
} else{
  fill(255, 255, 255);
  noStroke();
}
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
//Left and Right Ear
if (isInvertedPandaHead == true){
  fill(255, 255, 255);
  noStroke();
} else{
  fill(0, 0, 0);
  noStroke();
}
  beginShape();
  vertex(earX+30,earY);
  vertex(earX,earY);
  vertex(earX-10,earY+20);
  vertex(earX,earY+40);
  vertex(earX+30,earY+40);
  vertex(earX+40,earY+20);
  endShape();

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
//nose
  beginShape();
  vertex(noseX-20,noseY);
  vertex(noseX,noseY);
  vertex(noseX+10,noseY+5);
  vertex(noseX,noseY+20);
  vertex(noseX-20,noseY+20);
  vertex(noseX-30,noseY+5);
  endShape();
//mouth
if (isInvertedPandaHead == true){
  noFill();
  stroke(255,255,255);
  strokeWeight(2);
} else{
  noFill();
  stroke(0,0,0);
  strokeWeight(2);
}
  bezier(mouthX+10,mouthY,mouthX,mouthY-10,mouthX,mouthY+30,mouthX-10,mouthY+20);
  bezier(mouthX-10,mouthY,mouthX,mouthY-10,mouthX,mouthY+30,mouthX+10,mouthY+20);
//Right and Left Eye
if (isInvertedPandaHead == true){
  noStroke()
  fill(255,255,255);
} else{
  noStroke()
  fill(0,0,0);
}
  ellipse(eyeX-4,eyeY,eyeOutline,eyeOutline);
if (isInvertedPandaHead == true){
  fill(0,0,0);
} else{
  fill(255,255,255);
}
  ellipse(eyeX,eyeY,eyeSize,eyeSize-5);
if (isInvertedPandaHead == true){
  fill(255,255,255);
} else{
  fill(0,0,0);
}
  ellipse(eyeX,eyeY,pupilSize,pupilSize);

if (isInvertedPandaHead == true){
  noStroke()
  fill(255,255,255);
} else{
  noStroke()
  fill(0,0,0);
}
  ellipse(eyeX+64,eyeY,eyeOutline,eyeOutline);
if (isInvertedPandaHead == true){
  noStroke()
  fill(0,0,0);
} else{
  noStroke()
  fill(255,255,255);
}
  ellipse(eyeX+60,eyeY,eyeSize,eyeSize-5);
if (isInvertedPandaHead == true){
  noStroke()
  fill(255,255,255);
} else{
  noStroke()
  fill(0,0,0);
}
  ellipse(eyeX+60,eyeY,pupilSize,pupilSize);
}

