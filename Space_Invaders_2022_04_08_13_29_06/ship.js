
//funksjonen ship som jeg bruker i andre filer 
//det er også posisjonen til spilleren 

function Ship() {
  this.x = width/2;
  this.xdir = 0;

//denne funskjonen gjør sånn at den spilleren viser. fargen og hvor spilleren er
  
  this.show = function() {
    fill('#00ff00');
    rectMode(CENTER);
    rect(this.x, height-20, 20, 60);
  }

  

//istedenfor to variabler så har jeg en dir funksjon 
  
  this.setDir = function(dir) {
    this.xdir = dir;
  }

//som gjør sånn at da man trykker på høyre pil da går den pluss og da du trykker venstre pil går den minus
  
  this.move = function(dir) {
    this.x += this.xdir*5;
  }

}
