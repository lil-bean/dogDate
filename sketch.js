var Font;
//make profile rect
var rectX;
var rectY;
var rectL;
var rectH;
//make profile counter
var makeProfile;
//make profile picture
var makePic;
//choose profile picture
var picX;
var picY;
var picL;
var picH;
//background for start page
var startPage;
//background for profile page
var profilePage;
//*images for corgi*\\
var corgi1, corgi2, corgi3, corgi4;
//*images for ibizan*\\
//brown
var iEar1B, iEar2B, iEar3B, iEar4B;
//grey
var iEar1G, iEar2G, iEar3G, iEar4G;
//musstard
var iEar1M, iEar2M, iEar3M, iEar4M;
//white
var iEar1W, iEar2W, iEar3W, iEar4W;
//*images for shepherd*\\
//brown
var sEye1B, sEye2B, sEye3B, sEye4B;
//black
var sEye1BL, sEye2BL, sEye3BL, sEye4BL;
//gray
var sEye1G, sEye2G, sEye3G, sEye4G;
//white
var sEye1W, sEye2W, sEye3W, sEye4W;
//*pug*\\
var pug1, pug2, pug3, pug4, pug5, pug6, pug7, pug8;
//likes
var rain, sleep, milk, squir, steak, tulip
//dislikes
var bath, choc, pepper, yell, spider, thunder
//status input
var input, button;
//dog position
var dogx, dogy;
//initializes the image change
var imageChange;
//sets profile image
var imageSet;
//sets likes
var likeSet1, likeSet2, likeSet3;
//sets dislikes
var disSet1, disSet2, disSet3;
/////////preload/////////
function preload() {
    //font
    Font = loadFont('assets/coders_crux.ttf');
    //welcome page
    startPage = loadAnimation('assets/textures/webPage/startPage.png');
    //profile page
    profilePage = loadAnimation('assets/textures/webPage/profilePage.png');
    //dog avatar sprites
    //*corgi*\\
    corgi1 = loadAnimation('assets/textures/dogSprites/corgi_1.gif');
    corgi2 = loadAnimation('assets/textures/dogSprites/corgi_2.gif');
    corgi3 = loadAnimation('assets/textures/dogSprites/corgi_3.gif');
    corgi4 = loadAnimation('assets/textures/dogSprites/corgi_4.gif');
    //*ibizan*\\
    //brown
    iEar2B = loadAnimation('assets/textures/dogSprites/ibizan_ear2_brown.gif');
    //grey
    iEar3G = loadAnimation('assets/textures/dogSprites/ibizan_ear3_grey.gif');
    //mustard
    iEar4M = loadAnimation('assets/textures/dogSprites/ibizan_ear4_mustard.gif');
    //white
    iEar1W = loadAnimation('assets/textures/dogSprites/ibizan_ear1_white.gif');
    //*shepherd*\\
    //brown
    sEye1B = loadAnimation('assets/textures/dogSprites/shep_eye1B.png');
    //black
    sEye1BL = loadAnimation('assets/textures/dogSprites/shep_eye1BL.png');
    //gray
    sEye3G = loadAnimation('assets/textures/dogSprites/shep_eye3G.png');
    //white
    sEye2W = loadAnimation('assets/textures/dogSprites/shep_eye2W.png');
    //*pug*\\
    pug1 = loadImage('assets/textures/dogSprites/pug1.png');
    pug2 = loadImage('assets/textures/dogSprites/pug2.png');
    pug6 = loadImage('assets/textures/dogSprites/pug6.png');
    pug7 = loadImage('assets/textures/dogSprites/pug7.png');
    //likes
    rain = loadAnimation('assets/textures/likes/likes_rain.png');
    sleep = loadAnimation('assets/textures/likes/likes_sleeping.png');
    milk = loadAnimation('assets/textures/likes/milk.png');
    squir = loadAnimation('assets/textures/likes/squirrel.gif');
    steak = loadAnimation('assets/textures/likes/steak.gif');
    tulip = loadAnimation('assets/textures/likes/tulips.png');
    //dislikes
    bath = loadAnimation('assets/textures/dislikes/bath.gif');
    choc = loadAnimation('assets/textures/dislikes/chocolate.png');
    pepper = loadAnimation('assets/textures/dislikes/dislike_peppers.png');
    yell = loadAnimation('assets/textures/dislikes/dislike_yelling.png');
    spider = loadAnimation('assets/textures/dislikes/spider.png');
    thunder = loadAnimation('assets/textures/dislikes/thunder_icon.gif');
}

function setup() {
    createCanvas(800, 800);
    background(180);
    //makeprofile box
    rectX = 325;
    rectY = 430;
    rectL = 150;
    rectH = 50;
    //profile picture box
    picX = 40;
    picY = 40;
    picL = 270;
    picH = 295;
    //dog position
    dogx = 100;
    dogy = 100;
    //status input
    //input = createInput();
    //input.position(414, 83);
    //input.size(396, 256);
    //counter that changes to profile page
    makeProfile = 0;
    //counter thata changes profile picture
    makePic = 0;
    //initializes the image change
    imageChange = 0;
    //sets profile image
    imageSet = null;
    //sets likes??
    likeSet1 = null;
    likeSet2 = null;
    likeSet3 = null;
    //sets dislikes ??
    disSet1 = null;
    disSet2 = null;
    disSet3 = null;
}

function draw() {
    //welcomePage();
  //  if (makeProfile >= 1) {
//        editProfile();
  //  }
    //if (makePic >= 1) {
        choosePic();
    //}
    //if (imageChange >= 1) {
      //  editProfile();
//    }
}

function welcomePage() {
    animation(startPage, 400, 400);
    fill(100);
    rect(rectX, rectY, rectL, rectH);
    fill(255, 0, 220);
    textFont(Font, 60);
    textAlign(CENTER);
    text('WELCOME TO eBARK!', 400, 400);
    textFont(Font, 30);
    text('MAKE PROFILE', 400, 460);
    if (mouseIsPressed && mouseX >= rectX && mouseX <= rectX + rectL && mouseY >= rectY && mouseY <= rectY + rectH) {
        makeProfile += 1;
    }
}
function editProfile() {
    //background
    animation(profilePage, 400, 400);
    //clickable rectangle for profile picture
    fill(170);
    noStroke();
    rect(picX, picY, picL, picH);
    //spawn boxes for likes 
    fill(200);
    rect(120, 465, 80, 80);
        if(mouseIsPressed && mouseX > 120 && mouseX < 200 && mouseY > 465 && mouseY < 545){ 
            //fill later
        }
    rect(360, 465, 80, 80);
        if(mouseIsPressed && mouseX > 440 && mouseX < 545 && mouseY > 465 && mouseY < 545){
            //fill later
        }
    rect(600, 465, 80, 80);
        if(mouseIsPressed && mouseX > 600 && mouseX < 680 && mouseY > 465 && mouseY < 545){
            //fill later
        }
    //spawn boxes for dislikes
    rect(120, 665, 80, 80);
        if(mouseIsPressed && mouseX > 120 && mouseX < 200 && mouseY > 665 && mouseY < 745){
            //fill later
        }
    rect(360, 665, 80, 80);
        if(mouseIsPressed && mouseX > 360 && mouseX < 440 && mouseY > 665 && mouseY < 745){
            //fill later
        }
    rect(600, 665, 80, 80);
        if(mouseIsPressed && mouseX > 600 && mouseX < 680 && mouseY > 665 && mouseY < 745){
            //fill later
        }
    //stage change for profile picture
    if (mouseIsPressed && mouseX >= picX && mouseX <= picX + picL && mouseY >= picY && mouseY <= mouseY + picH) {
        makePic += 1;
    }
    //status input
    //input = createInput();
    //input.position(414, 83);
    //input.size(396, 256);
    //text
    fill(255, 0, 220);
    textFont(Font, 24);
    textAlign(CENTER);
    text('choose image', 100, 325);
    text('write about yourself', 550, 55);
    text('likes', 65, 430);
    text('dislikes', 75, 630);
    imageSet;
}
function choosePic() {
    //background
    animation(startPage, 400, 400);
    //corgi\\
    animation(corgi1, dogx, dogy);
    if (mouseIsPressed && mouseX >= dogx-20 && mouseX <= dogx + 100 && mouseY >= dogy && mouseY <= dogy + 100) {
        imageSet = animation(corgi1, dogx + 100, dogy + 100);
    }
    animation(corgi2, dogx + 100, dogy);
    if (mouseIsPressed && mouseX >= dogx + 100 && mouseX <= dogx + 200 && mouseY >= dogy && mouseY <= dogy + 100) {
        imageSet = animation(corgi2, dogx + 100, dogy + 100);
    }
    animation(corgi3, dogx + 200, dogy);
    if (mouseIsPressed && mouseX >= dogx + 200 && mouseX <= dogx + 300 && mouseY >= dogy && mouseY <= dogy + 100) {
        imageSet = animation(corgi3, dogx + 100, dogy + 100);
    }
    animation(corgi4, dogx + 300, dogy);
    if (mouseIsPressed && mouseX >= dogx + 300 && mouseX <= dogx + 400 && mouseY >= dogy && mouseY <= dogy + 100) {
        imageSet = animation(corgi4, dogx + 100, dogy + 100);
    }
    //ibizan\\
    animation(iEar2B, dogx, dogy + 100);
    if (mouseIsPressed && mouseX >= dogx && mouseX <= dogx + 100 && mouseY >= dogy + 100 && mouseY <= dogy + 200) {
        imageSet = animation(iEar2B, dogx + 100, dogy + 100);
    }
    animation(iEar3G, dogx + 100, dogy + 100);
    if (mouseIsPressed && mouseX >= dogx + 100 && mouseX <= dogx + 200 && mouseY >= dogy + 100 && mouseY <= dogy + 200) {
        imageSet = animation(iEar3G, dogx + 100, dogy + 100);
    }
    animation(iEar4M, dogx + 200, dogy + 100);
    if (mouseIsPressed && mouseX >= dogx + 200 && mouseX <= dogx + 300 && mouseY >= dogy + 100 && mouseY <= dogy + 200) {
        imageSet = animation(iEar4M, dogx + 100, dogy + 100);
        imageChange += 1;
    }
    animation(iEar1W, dogx + 300, dogy + 100);
    if (mouseIsPressed && mouseX >= dogx + 300 && mouseX <= dogx + 300 && mouseY >= dogy + 100 && mouseY <= dogy + 200) {
        imageSet = animation(iEar1W, dogx + 100, dogy + 100);
    }
    //shepherd\\
    animation(sEye1B, dogx, dogy + 225);
    if (mouseIsPressed && mouseX >= dogx && mouseX <= dogx + 100 && mouseY >= dogy + 200 && MouseY <= dogy + 300) {
        imageSet = animation(sEye1B, dogx + 100, dogy + 100);
    }
    animation(sEye1BL, dogx + 100, dogy + 225);
    if (mouseIsPressed && mouseX >= dogx + 100 && mouseX <= dogx + 200 && mouseY >= dogy + 200 && mouseY <= dogy + 300) {
        imageSet = animation(sEye1BL, dogx + 100, dogy + 100);
    }
    animation(sEye3G, dogx + 200, dogy + 225);
    if (mouseIsPressed && mouseX >= dogx + 200 && mouseX <= dogx + 300 && mouseY >= dogy + 200 && mouseY <= dogy + 300) {
        imageSet = animation(sEye3G, dogx + 100, dogy + 100);
    }
    animation(sEye2W, dogx + 300, dogy + 225);
    if (mouseIsPressed && mouseX >= dogx + 300 && mouseX <= dogx + 400 && mouseY >= dogy + 200 && mouseY <= dogy + 300) {
        imageSet = animation(sEye2W, dogx + 100, dogy + 100);
    }
    //pug\\
    image(pug1, dogx - 60, dogy + 225, 200, 200);
    if (mouseIsPressed && mouseX >= dogx && mouseX <= dogx + 100 && mouseY >= dogy + 300 && mouseY <= dogy + 400) {
        imageSet = image(pug1, dogx + 100, dogy + 100);
    }
    image(pug2, dogx + 60, dogy + 225, 200, 200);
    if (mouseIsPressed && mouseX >= dogx + 100 && mouseX <= dogx + 200 && mouseY >= dogy + 300 && mouseY <= dogy + 400) {
        imageSet = image(pug2, dogx + 100, dogy + 100);
    }
    image(pug6, dogx + 180, dogy + 225, 200, 200);
    if (mouseIsPressed && mouseX >= dogx + 200 && mouseX <= dogx + 300 && mouseY >= dogy + 300 && mouseY <= dogy + 400) {
        imageSet = image(pug6, dogx + 100, dogy + 100);
    }
    image(pug7, dogx + 300, dogy + 225, 200, 200);
    if (mouseIsPressed && mouseX >= dogx + 300 && mouseX <= dogx + 400 && mouseY >= dogy + 300 && mouseY <= dogy + 400) {
        imageSet = image(pug7, dogx + 100, dogy + 100);
    }
}
//choose like functions
function chooseLike1() {
	//background
	animation(startPage, 400, 400);
	//likes
	animation(rain, 100, 100);
	if (mouseIsPressed && mouseX >= 100 && mouseX <= 200 && mouseY >=100 && mouseY <= 200) {
        likeSet1 = animation(rain, 120, 465);
    }
	animation(sleep, 200, 100);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 300 && mouseY >= 100 && mouseY <= 200) {
        likeSet1 = animation(sleep, 120, 465);
    }
	animation(milk, 300, 100);
    if (mouseIsPressed && mouseX >= 300 && mouseX <= 400 && mouseY >= 100 && mouseY <= 200) {
        likeSet1 = animation(milk, 120, 465);
    }
	animation(squir, 100, 200);
    if (mouseIsPressed && mouseX >= 100 && mouseX <= 200 && mouseY >= 200 && mouseY <= 300) {
        likeSet1 = animation(squir, 120, 465);
    }
	animation(steak, 200, 200);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 300 && mouseY >= 200 && mouseY <= 300) {
        likeSet1 = animation(steak, 120, 465);
    }
	animation(tulip, 300, 200);
    if (mouseIsPressed && mouseX >= 300 && mouseX <= 400 && mouseY >= 200 && mouseY <= 300) {
        likeSet1 = animation(tulip, 120, 465);
    }
}
function chooseLike2() {
	//background
	animation(startPage, 400, 400);
	//likes
	animation(rain, 100, 100);
    if (mouseIsPressed && mouseX >= 100 && mouseX <= 200 && mouseY >= 100 && mouseY <= 200) {
        likeSet2 = animation(rain, 360, 465);
    }
	animation(sleep, 200, 100);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 300 && mouseY >= 100 && mouseY <= 200) {
        likeSet2 = animation(sleep, 360, 465);
    }
	animation(milk, 300, 100);
    if (mouseIsPressed && mouseX >= 300 && mouseX <= 400 && mouseY >= 100 && mouseY <= 200) {
        likeSet2 = animation(milk, 360, 465);
    }
	animation(squir, 100, 200);
    if (mouseIsPressed && mouseX >= 100 && mouseX <= 200 && mouseY >= 200 && mouseY <= 300) {
        likeSet2 = animation(squir, 360, 465);
    }
	animation(steak, 200, 200);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 300 && mouseY >= 200 && mouseY <= 300) {
        likeSet2 = animation(steak, 360, 465);
    }
	animation(tulip, 300, 200); 
    if (mouseIsPressed && mouseX >= 300 && mouseX <= 400 && mouseY >= 200 && mouseY <= 300) {
        likeSet2 = animation(tulip, 360, 465);
    }
}

function chooseLike3(){
	//background
	animation(startPage, 400, 400);
	//likes
	animation(rain, 100, 100);
    if (mouseIsPressed && mouseX >= 100 && mouseX <= 200 && mouseY >= 100 && mouseY <= 200) {
        likeSet3 = animation(rain, 600, 465);
    }
	animation(sleep, 200, 100);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 300 && mouseY >= 100 && mouseY <= 200) {
        likeSet3 = animation(sleep, 600, 465);
    }
	animation(milk, 300, 100);
    if (mouseIsPressed && mouseX >= 300 && mouseX <= 400 && mouseY >= 100 && mouseY <= 200) {
        likeSet3 = animation(milk, 600, 465);
    }
	animation(squir, 100, 200);
    if (mouseIsPressed && mouseX >= 100 && mouseX <= 200 && mouseY >= 200 && mouseY <= 300) {
        likeSet3 = animation(squir, 600, 465);
    }
	animation(steak, 200, 200);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 300 && mouseY >= 200 && mouseY <= 300) {
        likeSet3 = animation(steak, 600, 465);
    }
	animation(tulip, 300, 200);
    if (mouseIsPressed && mouseX >= 300 && mouseX <= 400 && mouseY >= 200 && mouseY <= 300) {
        likeSet3 = animation(tulip, 600, 465);
    }
}

//choose dislike functions
function chooseDislike1(){
    //background
    animation(startPage, 400,400);
    //dislikes
    animation(bath, 100, 100);
    if (mouseIsPressed && mouseX >= 100 && mouseX <= 200 && mouseY >= 100 && mouseY <= 200){
        disSet1 = animation (bath, 120, 665);
    }
    animation(choc, 200, 100);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 300 && mouseY >= 100 && mouseY <= 200){
        disSet1 = animation (choc, 120, 665);
    }
    animation(pepper, 300, 100);
     if (mouseIsPressed && mouseX >= 300 && mouseX <= 400 && mouseY >= 100 && mouseY <= 200){
         disSet1 = animation (pepper, 120, 665);
     }
    animation(yell, 100, 200);
    if (mouseIsPressed && mouseX >= 100 && mouseX <= 200 && mouseY >= 200 && mouseY <= 300){
        disSet1 = animation (yell, 120, 665);
    }
    animation(spider, 200, 200);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 300 && mouseY >= 200 && mouseY <= 300){
        disSet1 = animation (spider, 120, 665); 
    }
    animation(thunder, 300, 200);
    if(mouseIsPressed && mouseX >= 300 && mouseX <= 400 && mouseY >= 200 && mouseY <= 300){
        disSet1 = animation (thunder, 120, 665);  
    }
}

function chooseDislike2(){
    //background
    animation(startPage, 400,400);
   
    animation(bath, 100, 100);
    if (mouseIsPressed && mouseX >= 100 && mouseX <= 200 && mouseY >= 100 && mouseY <= 200){
        disSet2 = animation (bath, 360, 665);
    }
    animation(choc, 200, 100);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 300 && mouseY >= 100 && mouseY <= 200){
        disSet2 = animation (choc, 360, 665);
    }
    animation(pepper, 300, 100);
     if (mouseIsPressed && mouseX >= 300 && mouseX <= 400 && mouseY >= 100 && mouseY <= 200){
         disSet2 = animation (pepper, 360, 665);
     }
    animation(yell, 100, 200);
    if (mouseIsPressed && mouseX >= 100 && mouseX <= 200 && mouseY >= 200 && mouseY <= 300){
        disSet2 = animation (yell, 360, 665);
    }
    animation(spider, 200, 200);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 300 && mouseY >= 200 && mouseY <= 300){
        disSet2 = animation (spider, 360, 665);  
    }
    animation(thunder, 300, 200);
     if(mouseIsPressed && mouseX >= 300 && mouseX <= 400 && mouseY >= 200 && mouseY <= 300){
        disSet2 = animation (thunder, 360, 665);
    }
}
function chooseDislike3(){
    //background
    animation(startPage, 400, 400);
   
    animation(bath, 100, 100);
    if (mouseIsPressed && mouseX >= 100 && mouseX <= 200 && mouseY >= 100 && mouseY <= 200){
        disSet3 = animation (bath, 600, 665);
    }
    animation(choc, 200, 100);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 300 && mouseY >= 100 && mouseY <= 200){
        disSet3 = animation (choc, 600, 665);
    }
    animation(pepper, 300, 100);
    if (mouseIsPressed && mouseX >= 300 && mouseX <= 400 && mouseY >= 100 && mouseY <= 200){
         disSet3 = animation (pepper, 600, 665);
     }
    animation(yell, 100, 200);
    if (mouseIsPressed && mouseX >= 100 && mouseX <= 200 && mouseY >= 200 && mouseY <= 300){
        disSet3 = animation (yell, 600, 665);
    }
    animation(spider, 200, 200);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 300 && mouseY >= 200 && mouseY <= 300){
        disSet3 = animation (spider, 600, 665);
    }
    animation(thunder, 300, 200);
    if(mouseIsPressed && mouseX >= 300 && mouseX <= 400 && mouseY >= 200 && mouseY <= 300){
        disSet3 = animation (thunder, 600, 665);  
    }
}
