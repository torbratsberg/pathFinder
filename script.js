// Define background canvas
var canvas = document.getElementById('mainCanvas');
var ctx = canvas.getContext('2d');
ctx.canvas.width  = 1000;
ctx.canvas.height = 1000;

// Define character canvas
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

// Fills canvas with 100 random colored tiles
function makeTiles() {
    ctx.clearRect(0, 0, 1000, 1000);
    var tilesY = 0;
    var tilesX = 0;
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

// Code to make tracks
var newTrack = [];

// Define start positions for makeMe()
var meY = 25;
var meX = 25;

// Draw the character the player controls
function makeMe() {
    ctx1.clearRect(0, 0, 1000, 1000);
    ctx1.strokeStyle = "rgb(0, 0, 0)";
    ctx1.lineWidth = 5;
    ctx1.fillStyle = "rgb(0, 0, 0)";
    ctx1.fillRect(meY, meX, 50, 50);

    // Code to make tracks
    var xxx = [meY, meX];
    newTrack.push(xxx);
}

// Listen to if arrowkeys is pressed
addEventListener("keydown", function (e) {
    if (e.keyCode === 37) {
        meY -= 100;
        makeMe();
        onTrack();   
    } else if (e.keyCode === 38) {
        meX -= 100;
        makeMe();
        onTrack(); 
    } else if (e.keyCode === 39) {
        meY += 100;
        makeMe();
        onTrack();
    } else if (e.keyCode === 40) {
        meX += 100;
        makeMe();
        onTrack();
    }
}
);

var a = 0;

function onTrack() {
    var track = track3;

    // Check to see if User is on track
    if (meY == track[a][0] && meX == track[a][1]) {
        console.log("--- Detected on track");
        a++;
    }else {
        alert("You went off the track, try again!");
        reset();
        makeMe();
    }

    // Notify when track is completed
    if(meY == 925 && meX == 925){
        alert("Track completed! Try another!");
        reset();
        makeMe();
        MakeTiles();
    }
}

function reset() {
    a = 0;
    meY = 25;
    meX = 25;
}

// Tracks
var track1 = [
    [
      125,
      25
    ],
    [
      225,
      25
    ],
    [
      325,
      25
    ],
    [
      425,
      25
    ],
    [
      525,
      25
    ],
    [
      625,
      25
    ],
    [
      725,
      25
    ],
    [
      825,
      25
    ],
    [
      925,
      25
    ],
    [
      925,
      125
    ],
    [
      925,
      225
    ],
    [
      925,
      325
    ],
    [
      925,
      425
    ],
    [
      925,
      525
    ],
    [
      925,
      625
    ],
    [
      925,
      725
    ],
    [
      925,
      825
    ],
    [
      925,
      925
    ],
    [
      1025,
      1025
    ]
]

var track2 = [
    [
      25,
      125
    ],
    [
      25,
      225
    ],
    [
      25,
      325
    ],
    [
      25,
      425
    ],
    [
      25,
      525
    ],
    [
      25,
      625
    ],
    [
      25,
      725
    ],
    [
      25,
      825
    ],
    [
      25,
      925
    ],
    [
      125,
      925
    ],
    [
      225,
      925
    ],
    [
      225,
      825
    ],
    [
      225,
      725
    ],
    [
      225,
      625
    ],
    [
      225,
      525
    ],
    [
      225,
      425
    ],
    [
      225,
      325
    ],
    [
      225,
      225
    ],
    [
      225,
      125
    ],
    [
      225,
      25
    ],
    [
      325,
      25
    ],
    [
      425,
      25
    ],
    [
      425,
      125
    ],
    [
      425,
      225
    ],
    [
      425,
      325
    ],
    [
      425,
      425
    ],
    [
      425,
      525
    ],
    [
      425,
      625
    ],
    [
      425,
      725
    ],
    [
      425,
      825
    ],
    [
      425,
      925
    ],
    [
      525,
      925
    ],
    [
      625,
      925
    ],
    [
      625,
      825
    ],
    [
      625,
      725
    ],
    [
      625,
      625
    ],
    [
      625,
      525
    ],
    [
      625,
      425
    ],
    [
      625,
      325
    ],
    [
      625,
      225
    ],
    [
      625,
      125
    ],
    [
      625,
      25
    ],
    [
      725,
      25
    ],
    [
      825,
      25
    ],
    [
      825,
      125
    ],
    [
      825,
      225
    ],
    [
      825,
      325
    ],
    [
      825,
      425
    ],
    [
      825,
      525
    ],
    [
      825,
      625
    ],
    [
      825,
      725
    ],
    [
      825,
      825
    ],
    [
      825,
      925
    ],
    [
      925,
      925
    ],
    [
      925,
      925
    ]
]

var track3 = [
    [
      25,
      125
    ],
    [
      25,
      225
    ],
    [
      125,
      225
    ],
    [
      225,
      225
    ],
    [
      225,
      125
    ],
    [
      325,
      125
    ],
    [
      425,
      125
    ],
    [
      425,
      225
    ],
    [
      425,
      325
    ],
    [
      425,
      425
    ],
    [
      325,
      425
    ],
    [
      225,
      425
    ],
    [
      125,
      425
    ],
    [
      125,
      525
    ],
    [
      125,
      625
    ],
    [
      225,
      625
    ],
    [
      225,
      725
    ],
    [
      225,
      825
    ],
    [
      325,
      825
    ],
    [
      425,
      825
    ],
    [
      425,
      725
    ],
    [
      525,
      725
    ],
    [
      625,
      725
    ],
    [
      625,
      825
    ],
    [
      625,
      925
    ],
    [
      725,
      925
    ],
    [
      825,
      925
    ],
    [
      925,
      925
    ],
    [
      925,
      925
    ]
]

// Execute functions
makeTiles();
makeMe();