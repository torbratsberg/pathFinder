// Define background canvas
let canvas = document.getElementById('mainCanvas');
let ctx = canvas.getContext('2d');
ctx.canvas.width  = 1000;
ctx.canvas.height = 1000;

// Define character canvas
let canvas1 = document.getElementById('characterCanvas');
let ctx1 = canvas1.getContext('2d');
ctx1.canvas.width  = 1000;
ctx1.canvas.height = 1000;

// Shows which level you are on and tells you you're finished
let level = 0;
function whichLevel() {
	document.getElementById("level").innerHTML = "Level: " + (level + 1) + "/" + tracks.length;
	if (level >= tracks.length) {
		alert("Nice! You have completed all the levels.")
		completeReset();
	}
}

  // Generates random colors for makeTiles()
function randomColor() {
    const r = Math.floor(Math.random() * 200 + 55);
    const g = Math.floor(Math.random() * 200 + 55);
    const b = Math.floor(Math.random() * 200 + 55);
    const color = "rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
    return color;
}

// Fills canvas with 100 random colored tiles
function makeTiles() {
    ctx.clearRect(0, 0, 1000, 1000);
    let tilesY = 0;
    let tilesX = 0;
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
let newTrack = [];

// Define start positions for makeMe()
let meY = 25;
let meX = 25;

// Draw the character the player controls
function makeMe() {
    ctx1.clearRect(0, 0, 1000, 1000);
    ctx1.strokeStyle = "rgb(0, 0, 0)";
    ctx1.lineWidth = 5;
    ctx1.fillStyle = "rgb(0, 0, 0)";
    ctx1.fillRect(meY, meX, 50, 50);

    // Code to make tracks
    let xxx = [meY, meX];
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

let a = 0;
function onTrack() {
    let track = tracks[level];

    // See if User is on track
    if (meY == track[a][0] && meX == track[a][1]) {
        console.log("--- Detected on track");
        a++;
    }else {
        alert("You went off the path, try again!");
        reset();
    }

    // Notify when track is completed
    if(meY == 925 && meX == 925){
		if(level == tracks.length) {
			whichLevel();
			makeMe();
			
		} else if (level != tracks.length) {
			level++;
        	alert("Track completed! Try another one!");
        	reset();
			makeTiles();
		}
    }
}

// Reset player position
function reset() {
    a = 0;
    meY = 25;
	meX = 25;
	whichLevel();
	makeMe();
}

function completeReset() {
	a = 0;
	meY = 25;
	meX = 25;
	level = 0;
	makeMe();
	makeTiles();
	whichLevel();
}

// Tracks
const tracks = [
[
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
],
[
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
	  325,
	  225
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
	  525,
	  525
	],
	[
	  625,
	  525
	],
	[
	  725,
	  525
	],
	[
	  725,
	  625
	],
	[
	  725,
	  725
	],
	[
	  725,
	  825
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
],
[
    [
      125,
      25
    ],
    [
      125,
      125
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
      325,
      225
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
      525,
      125
    ],
    [
      525,
      225
    ],
    [
      525,
      325
    ],
    [
      525,
      425
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
      325,
      525
    ],
    [
      325,
      625
    ],
    [
      325,
      725
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
      725,
      725
    ],
    [
      725,
      625
    ],
    [
      725,
      525
    ],
    [
      825,
      525
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
      925,
      925
    ]
],
[
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
],
[
  [
    125,
    25
  ],
  [
    125,
    125
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
    325,
    225
  ],
  [
    325,
    325
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
    325,
    625
  ],
  [
    425,
    625
  ],
  [
    525,
    625
  ],
  [
    525,
    525
  ],
  [
    525,
    425
  ],
  [
    525,
    325
  ],
  [
    525,
    225
  ],
  [
    525,
    125
  ],
  [
    625,
    125
  ],
  [
    725,
    125
  ],
  [
    825,
    125
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
    825,
    325
  ],
  [
    725,
    325
  ],
  [
    725,
    425
  ],
  [
    725,
    525
  ],
  [
    825,
    525
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
    825,
    725
  ],
  [
    725,
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
]

// Execute functions
makeTiles();
makeMe();
whichLevel();