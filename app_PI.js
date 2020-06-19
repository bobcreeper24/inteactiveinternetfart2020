let drawImage, imgWidth, imgHeight, imgProfilePic;
let imgArray = [];

function preload() {
    for (let i = 0; i < 3; i++) {
    imgArray[i] = loadImage('img'+i +".png");
    }
    imgProfilePic = loadImage ('scp.png')
}



function setup() {
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('myContainer');
    background(50);
    drawImage = imgArray [0];
    imgWidth = 50;
    imgHeight = 50;
    image(imgProfilePic, 0, 0, width, height)
}
function changeImage (value){
    drawImage = imgArray[value];
}
function draw() {

//image(imgArray[0],43, 89, 50, 50);
//image(imgArray[1],78, 89, 50, 50);
}
function mouseDragged() {
    image(drawImage, mouseX - (imgWidth / 2), mouseY - (imgHeight / 2), imgWidth, imgHeight);
}