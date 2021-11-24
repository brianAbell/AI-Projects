let img;

function preload() {
    img = loadImage('finn.jpg');
    detector = ml5.objectDetector('cocossd');
};

function setup() {
    createCanvas(640, 480);
    //log - double check everything is working
    console.log(detector);
    Image(img, 0, 0);

}

function draw() {
    background(220);
};