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
//start page
var startPage;
//pretty self explanatory...
var profilePage;
//status input
var input, button;
/////////preload/////////
function preload() {
    //font
    Font = loadFont('assets/coders_crux.ttf');
    //welcome page
    startPage = loadAnimation('assets/textures/startPage.png');
    //profile page
    profilePage = loadAnimation('assets/textures/profilePage.png');
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
    if (makeProfile >= 1) {
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
    animation(startPage, 400, 400);
}
