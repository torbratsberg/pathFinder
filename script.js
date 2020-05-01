// Defines canvas
var canvas = document.getElementById('mainCanvas');
var ctx = canvas.getContext('2d');
ctx.canvas.width  = 1000;
ctx.canvas.height = 1000;

// Generates random colors for makeTiles()
function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var color = "rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
    return color;
}

// Defines start position for makeTiles()
var positionY = 0;
var positionX = 0;

// Fills canvas with 100 random colored tiles
function makeTiles() {
    for(let l = 0; l < 10; l++) {    
        for(let i = 0; i < 10; i++) {
            ctx.fillStyle = randomColor();
            ctx.fillRect(positionY, positionX, 100, 100);
            positionY += 100;
        }
        positionX += 100;
        positionY = 0;
    }
}
makeTiles();

// Listen to if arrowkeys is pressed
addEventListener("keydown", function (e) {
    if (e.keyCode === 37) {
        console.log("Left");
    }
    if (e.keyCode === 38) {
        console.log("Up");
    }
    if (e.keyCode === 39) {
        console.log("Right");
    }
    if (e.keyCode === 40) {
        console.log("Down");
    }
});