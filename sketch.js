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
//images for corgi
var corgi1, corgi2, corgi3, corgi4;
//images for ibizan
//brown
var iEar1B, iEar2B, iEar3B, iEar4B;
//grey
var iEar1G, iEar2G, iEar3G, iEar4G;
//musstard
var iEar1M, iEar2M, iEar3M, iEar4M;
//white
var iEar1W, iEar2W, iEar3W, iEar4W;
//status input
var input, button;
/////////preload/////////
function preload() {
    //font
    Font = loadFont('assets/coders_crux.ttf');
    //welcome page
    startPage = loadAnimation('assets/textures/webPage/startPage.png');
    //profile page
    profilePage = loadAnimation('assets/textures/webPage/profilePage.png');
    //dog avatar sprites
    //corgi
    corgi1 = loadAnimation('assets/textures/dogSprites/corgi_1.gif');
    corgi2 = loadAnimation('assets/textures/dogSprites/corgi_2.gif');
    corgi3 = loadAnimation('assets/textures/dogSprites/corgi_3.gif');
    corgi4 = loadAnimation('assets/textures/dogSprites/corgi_4.gif');
    //ibizan
    //brown
    iEar1B = loadAnimation('assets/textures/dogSprites/ibizan_ear1_brown.gif');
    iEar2B = loadAnimation('assets/textures/dogSprites/ibizan_ear2_brown.gif');
    iEar3B = loadAnimation('assets/textures/dogSprites/ibizan_ear3_brown.gif');
    iEar4B = loadAnimation('assets/textures/dogSprites/ibizan_ear4_brown.gif');
    //grey
    iEar1G = loadAnimation('assets/textures/dogSprites/ibizan_ear1_grey.gif');
    iEar2G = loadAnimation('assets/textures/dogSprites/ibizan_ear2_grey.gif');
    iEar3G = loadAnimation('assets/textures/dogSprites/ibizan_ear3_grey.gif');
    iEar4G = loadAnimation('assets/textures/dogSprites/ibizan_ear4_grey.gif');
    //mustard
    iEar1M = loadAnimation('assets/textures/dogSprites/ibizan_ear1_mustard.gif');
    iEar2M = loadAnimation('assets/textures/dogSprites/ibizan_ear2_mustard.gif');
    iEar3M = loadAnimation('assets/textures/dogSprites/ibizan_ear3_mustard.gif');
    iEar4M = loadAnimation('assets/textures/dogSprites/ibizan_ear4_mustard.gif');
    //white
    iEar1W = loadAnimation('assets/textures/dogSprites/ibizan_ear1_white.gif');
    iEar2W = loadAnimation('assets/textures/dogSprites/ibizan_ear2_white.gif');
    iEar3W = loadAnimation('assets/textures/dogSprites/ibizan_ear3_white.gif');
    iEar4W = loadAnimation('assets/textures/dogSprites/ibizan_ear4_white.gif');
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
    //status input
    //input = createInput();
    //input.position(414, 83);
    //input.size(396, 256);
    //counter that changes to profile page
    makeProfile = 0;
    //counter thata changes profile picture
    makePic = 0;
}

function draw() {
    welcomePage();
    if (makeProfile >= 1 && makePic == 0) {
        editProfile();
    }
    if (makePic >= 1) {
    choosePic();
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
}

function choosePic() {
    //background
    animation(startPage, 400, 400);
    //corgi
    animation(corgi1, 250, 100);
    if (mouseIsPressed && mouseX >= 250 && mouseX <= 345 && mouseY >= 100 && mouseY <= 200){
        createProfile -= 1;
    }
    animation(corgi2, 350, 100);
    animation(corgi3, 450, 100);
    animation(corgi4, 400+150, 100);
    //ibizan
    //brown
    animation(iEar1B, 100+150, 200);
    animation(iEar2B, 200+150, 200);
    animation(iEar3B, 300+150, 200);
    animation(iEar4B, 400+150, 200);
    //grey
    animation(iEar1G, 100+150, 325);
    animation(iEar2G, 200+150, 325);
    animation(iEar3G, 300+150, 325);
    animation(iEar4G, 400+150, 325);
    //mustard
    animation(iEar1M, 100+150, 450);
    animation(iEar2M, 200+150, 450);
    animation(iEar3M, 300+150, 450);
    animation(iEar4M, 400+150, 450);
    //white
    animation(iEar1W, 100+150, 575);
    animation(iEar2W, 200+150, 575);
    animation(iEar3W, 300+150, 575);
    animation(iEar4W, 400+150, 575);
}
