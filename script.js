// Defines canvas
var canvas = document.getElementById('mainCanvas');
var ctx = canvas.getContext('2d');
ctx.canvas.width  = 1000;
ctx.canvas.height = 1000;

var canvas1 = document.getElementById('characterCanvas');
var ctx1 = canvas1.getContext('2d');
ctx1.canvas.width  = 1000;
ctx1.canvas.height = 1000;

// Generates random colors for makeTiles()
function randomColor() {
    var r = Math.floor(Math.random() * 200 + 55);
    var g = Math.floor(Math.random() * 200 + 55);
    var b = Math.floor(Math.random() * 200 + 55);
    var color = "rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
    return color;
}


// Defines start position for makeTiles()
var tilesY = 0;
var tilesX = 0;

// Fills canvas with 100 random colored tiles
function makeTiles() {
    for(let l = 0; l < 10; l++) {    
        for(let i = 0; i < 10; i++) {
            ctx.fillStyle = randomColor();
            ctx.fillRect(tilesY, tilesX, 100, 100);
            tilesY += 100;
        }
        tilesX += 100;
        tilesY = 0;
    }
}
makeTiles();

// Define start positions for makeMe()
var meY = 25;
var meX = 25;

// Draw the character the player controls
function makeMe() {
    ctx1.clearRect(0, 0, 1000, 1000);
    ctx1.strokeStyle = "rgb(0, 0, 0)";
    ctx1.fillStyle = "rgb(0, 0, 0)";
    ctx1.strokeRect(meY, meX, 50, 50);
}
makeMe();

// Listen to if arrowkeys is pressed
addEventListener("keydown", function (e) {
    if (e.keyCode === 37) {
        if(meY < 25 || meY > 925 || meX < 25 || meX > 925){
            alert("You can't go outside of the map.");
        } else {
            meY -= 100;
            makeMe();
        }
        console.log("Left");
    } else if (e.keyCode === 38) {
        if(meY < 25 || meY > 925 || meX < 25 || meX > 925){
            alert("You can't go outside of the map.");
        } else {
            meX -= 100;
            makeMe();
        }
        console.log("Up");
    } else if (e.keyCode === 39) {
        if(meY < 25 || meY > 925 || meX < 25 || meX > 925){
            alert("You can't go outside of the map.");
        } else {
            meY += 100;
            makeMe();
        }
        console.log("Right");
    } else if (e.keyCode === 40) {
        if(meY < 25 || meY > 925 || meX < 25 || meX > 925){
            alert("You can't go outside of the map.");
        } else {
            meX += 100;
            makeMe();
        }
        console.log("Down");
    }
});