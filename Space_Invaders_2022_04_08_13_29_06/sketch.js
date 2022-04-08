//lager variabler for spilleren, sirkler, skuddene og bakgrunnen 

var ship;
var sirkels = [];
var drops = [];
let bg;
let gunsound;
let diesound;


//bruker bg for å sette inn bakgrunn,
//også legger til spiller
//legge til sirkler basert på hvor mange (spesifikt)

function setup() {
  bg = loadImage('space.jpg');
  gunsound = loadSound('gunsound.wav')
  diesound = loadSound('diesound.wav')
  createCanvas(600, 400);
  ship = new Ship();
  for (var i = 0; i < 6; i++) {
    sirkels[i] = new Sirkels(i*80+80, 60);
  }
}



//vise spilleren på området og spilleren kan bevege seg 
//vise skuddene som går oppover når spilleren skyter 

function draw() {
  background(bg);
  ship.show();
  ship.move();

  
//viser drop som er skuddene som kommer fra spilleren
  
  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    
    
    for (var j = 0; j < sirkels.length; j++) {
      if (drops[i].hits(sirkels[j])) {
        sirkels[j].grow();
        drops[i].evaporate();
      }
    }
  }
  

//edge gjør sånn at det ikke går ut 
  
  var edge = false;


//hviser og beveger flere sirklene
  
  for (var i = 0; i < sirkels.length; i++) {
    sirkels[i].show();
    sirkels[i].move();
    if (sirkels[i].x > width || sirkels[i].x < 0) {
      edge = true;
    }
  }

  
//gjør sånn at da den går i siden skal den en ned også til siden 
  
  if (edge) {
    for (var i = 0; i < sirkels.length; i++) {
      sirkels[i].shiftDown();
    }
  } 
  


//vis skuddene treffer sirklene så skal sirklene bli borte 
  
  for (var i = drops.length-1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }
 
  if(this.x === 600) {
    this.x = 400
  }

}


function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


//da man trykker på space så kommer skuddene ut fra ship 
//da skuddene kommer ut fra spilleren så kommer det pistol lyd

function keyPressed() {
  if (key === ' ') {
    var drop = new Drop(ship.x, height);
    drops.push(drop);
    gunsound.play()
  }


//da man trykker på høyre og venstre knapp så skal ship til de sidene 
//setDir er hastigheten på hvor fort den skal gå til sidene 
  
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
