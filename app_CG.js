// declare variable globally
let bubbles = [];

function setup() {
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('myContainer');
}

function mousePressed() {
    let r = random(1, 4);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
    console.log(bubbles);
}

function draw() {
    background(255, 190, 4);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-8, 5);
    }

    show() {
        stroke(67);
        strokeWeight(3);
        noFill(2);
//        noStroke();
//        fill(255, 10);
        ellipse(this.x, this.y, this.r * 27);
    }
    
}

//// declare our variables
//let word = "bruh";
//let arrExample = ["World", 54, 298, false, "anotherWorld"];
////  arrExample = [ 0, 1, 2, 3, 4, 5];
//let posX = 0;
//let speed = 45;
//let hue = 8;
//
//// setup is called once at the begining
//function setup() {
//    let myCanvas = createCanvas(600, 400);
//    myCanvas.parent('myContainer');
//    
//    console.log(arrExample);
//    
//    for (let i = 0; i < arrExample.length; i++) {
//        console.log(arrExample[i]);
//    }
//
//}
//
//// draw is called every frame that is drawn to the browser
//function draw() {
//    background(70);
//    
////  'bouncing' rectangle
//    noStroke();
//    noFill();
//    strokeWeight(89);
//    stroke(190, 9, 367);
//    rect(posX, 288, 3, height / 77);
//    
//    posX = posX + speed;
//    
//    if(posX >= width || posX <= 0) {
//        speed = speed * -1;
//    }
//    
////  color changing circles
//    if (hue > 789) {
//        hue = 0;
//    } else {
//        hue++;
//        noStroke();
//        fill(hue, 4, 56);
//        ellipse(244, 100, 60);
////    ellipse(x, y, d);
////    ellipse(x, y, w, h);
//    }
//    
////  stepped rectangles
//    stroke(256, 70, 0);
//    for(let i = 0; i < height; i += 50 ) {
//        noFill();
//        strokeWeight(.5);
//        rect(i + 10, i, 2680, 10);
//    }
//    
////  circles along middle
//    for(let i = 0; i < width; i += 150 ) {
//        noFill();
//        strokeWeight(.5);
//        ellipse(i, height / 4, 25);
//    }
//    
////  concentric circles
//    for (let i = 33; i <= 449; i+=4) {
//
//        noFill();
//        let r = random(0, 255);
//        stroke(r);
//        ellipse(width / 2, height / 2, i);
//    }
//    
////  crosshairs center on mouse
//    rect(mouseX - 25, mouseY, 50, 1);
//    rect(mouseX, mouseY - 25, 1, 50);
//    
//}
