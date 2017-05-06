var Font;
var rectX;
var rectY;
var rectL;
var rectH;
var makeProfile;
var profilePic;
var picX;
var picY;
var picL;
var picH;

function preload() {
    //font
    Font = loadFont('assets/coders_crux.ttf');
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
    picX = 10;
    picY = 10;
    picL = 350;
    picH = 400;
    //counter that changes to profile page
    makeProfile = 0;
}

function draw() {
    welcomePage();
    if (makeProfile == 1) {
        wahoo();
    }
}

function welcomePage() {
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

function wahoo() {
    text('WAHOO!', 300, 300);
}
