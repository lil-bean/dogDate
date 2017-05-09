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
//status input
var input, button;
//dog position
var dogx, dogy;
//initializes the image change
var imageChange;
//sets profile image
var imageSet;
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
}

function draw() {
    welcomePage();
    if (makeProfile >= 1) {
        editProfile();
    }
    if (makePic >= 1) {
        choosePic();
    }
    if (imageChange >= 1) {
        editProfile();
    }
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
    text('dislkes', 75, 630);
    imageSet;
}

function choosePic() {
    //background
    animation(startPage, 400, 400);
    //corgi\\
    animation(corgi1, dogx, dogy);
    if (mouseIsPressed && mouseX >= dogx && mouseX <= dogx + 100 && mouseY >= dogy && mouseY <= dogy + 100) {
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
