var canvas = document.getElementById('mainCanvas');
var ctx = canvas.getContext('2d');
ctx.canvas.width  = 1000;
ctx.canvas.height = 1000;

function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var color = "rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
    return color;
}

var positionY = 0;
var positionX = 0;

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